import { useEffect, useState } from "react";
import Input from "../../ui/input";
import Button from "../../ui/button";
import { useNavigate, useParams } from "react-router-dom";
import MoreIcon from "../../ui/icons/more";
import { useCreateNewCoach } from "../../../domain/hooks/use-create-new-coach";
import { capitalizeFullName, convertFileToImageBase64 } from "../../../utils";
import { useGetUserByEmail } from "../../../domain/hooks/use-get-user-by-email";
import { SubmitHandler, useForm } from "react-hook-form";
import { validationFormNewCoach } from "../../../utils/validations/coach";
import InputFile from "../../ui/input-file";
import env from "../../../utils/env";
import { useChangeToCoach } from "../../../domain/hooks/use-change-to-coach";
import { useUpdateCoach } from "../../../domain/hooks/use-update-coach";
import { useQueryClient } from "@tanstack/react-query";

interface IFormNewCoachProps {
  data?: any;
}

type FormNewCoachValues = {
  name: string;
  lastname: string;
  email: string;
  password: string;
  photo: string;
  typeUser: string;
  typePhoto: string;
};

const FormNewCoach: React.FC<IFormNewCoachProps> = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const mutation = useCreateNewCoach();
  const mutationToCoach = useChangeToCoach();
  const mutationUpdate = useUpdateCoach();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    setValue,
    watch,
  } = useForm<FormNewCoachValues>({
    mode: "onChange",
    defaultValues:
      data && !data.error
        ? {
            email: data.email,
            lastname: data.lastname,
            name: data.name,
            password: data.password,
            photo: data.photo,
            typePhoto: data.typePhoto,
            typeUser: data.typeUser._id,
          }
        : {
            typeUser: env.COACH_ID,
            typePhoto: "abc",
          },
  });

  const {
    data: dataEmail,
    refetch,
    isFetching,
  } = useGetUserByEmail({
    email: watch("email"),
  });

  const [searchUser, setSearchUser] = useState<boolean>(false);

  const handleChangePhoto = (base64: string) => {
    setValue("photo", base64);
  };

  const handleSearchUser = () => {
    refetch();
    setSearchUser(true);
  };

  const createNewCoach: SubmitHandler<FormNewCoachValues> = async (
    dataForm
  ) => {
    try {
      if (id) {
        await mutationUpdate.mutateAsync(
          { ...dataForm, _id: data._id },
          {
            onSuccess: (dataResponse: any) => {
              console.log("dataResponse", dataResponse);
              if (!dataResponse?.error) {
                queryClient.setQueryData(["coach-id", id], {
                  ...dataResponse,
                  typeUser: {
                    _id: dataResponse.typeUser,
                  },
                });
              }
            },
          }
        );
      } else {
        if (dataEmail?.length) {
          await mutationToCoach.mutateAsync(dataEmail[0]._id);
        } else {
          await mutation.mutateAsync({
            ...dataForm,
            name: capitalizeFullName(dataForm.name),
            lastname: capitalizeFullName(dataForm.lastname),
          });
        }
      }
      navigate("/entrenadores");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!id) {
      if (dataEmail) {
        if (dataEmail?.length === 0) {
          setValue("name", "");
          setValue("lastname", "");
        } else {
          setValue("name", dataEmail && dataEmail[0]?.name);
          setValue("lastname", dataEmail && dataEmail[0]?.lastname);
          setValue("photo", dataEmail && dataEmail[0]?.photo);
        }
      }
    }
  }, [id, dataEmail]);

  return (
    <div className="flex gap-4 items-center m-auto flex-col p-4">
      <div className="flex items-center w-full gap-2">
        <Input
          label="Email"
          register={register}
          error={errors.email}
          id="email"
          rules={validationFormNewCoach.rulesEmail}
          disabled={data?.email}
        />
        {!id && (
          <Button className="w-[40%] mt-7" onClick={handleSearchUser}>
            Buscar usuario
          </Button>
        )}
      </div>
      {((!isFetching && searchUser) || id) && (
        <form
          className="w-full flex gap-10"
          onSubmit={handleSubmit(createNewCoach)}
        >
          <InputFile
            image={watch("photo")}
            handleChangeImage={handleChangePhoto}
          />
          <div className="w-full">
            {dataEmail && !dataEmail[0]?.password && !id && (
              <Input
                label="Contraseña"
                register={register}
                error={errors.password}
                id="password"
                rules={validationFormNewCoach.rulesPassword}
              />
            )}
            <Input
              label="Nombres"
              register={register}
              error={errors.name}
              id="name"
              rules={validationFormNewCoach.rulesName}
            />
            <Input
              label="Apellidos"
              register={register}
              error={errors.lastname}
              id="lastname"
              rules={validationFormNewCoach.rulesLastname}
            />
            <Button
              type="submit"
              className="mt-5"
              disabled={mutation.isPending || mutationUpdate.isPending}
            >
              {id ? "Actualizar entrenador" : "Crear entrenador"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormNewCoach;
