import { useState } from "react";
import Input from "../../ui/input";
import Button from "../../ui/button";
import { useNavigate } from "react-router-dom";
import MoreIcon from "../../ui/icons/more";
import { useCreateNewCoach } from "../../../domain/hooks/use-create-new-coach";
import { convertFileToImageBase64 } from "../../../utils";
import { useGetUserByEmail } from "../../../domain/hooks/use-get-user-by-email";
import { SubmitHandler, useForm } from "react-hook-form";
import { validationFormNewCoach } from "../../../utils/validations/coach";
import InputFile from "../../ui/input-file";

type FormNewCoachValues = {
  name: string;
  lastname: string;
  email: string;
  password: string;
  photo: string;
};

const FormNewCoach = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    setValue,
    control,
    clearErrors,
    watch,
  } = useForm<FormNewCoachValues>({
    mode: "onChange",
  });

  const [searchUser, setSearchUser] = useState<boolean>(false);
  const [userExist, setUserExist] = useState<boolean>(false);

  const { data, refetch } = useGetUserByEmail({ email: watch("email") });

  const handleChangePhoto = (base64: string) => {
    setValue("photo", base64);
  };

  const mutation = useCreateNewCoach();

  console.log('watch("email")', watch("email"));

  const createNewCoach: SubmitHandler<FormNewCoachValues> = async (data) => {
    try {
      await mutation.mutateAsync(data);
      navigate("/entrenadores");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-4 items-center m-auto flex-col p-4">
      <form className="flex items-center w-full gap-2">
        <Input
          label="Email"
          register={register}
          error={errors.email}
          id="email"
          rules={validationFormNewCoach.rulesEmail}
        />
        <Button className="w-[40%] mt-7" onClick={() => refetch()}>
          Buscar usuario
        </Button>
      </form>
      {!searchUser && (
        <div className="w-full flex gap-10">
          <InputFile
            image={watch("photo")}
            handleChangeImage={handleChangePhoto}
          />
          <div className="w-full">
            <Input
              label="Contraseña"
              register={register}
              error={errors.password}
              id="password"
              rules={validationFormNewCoach.rulesName}
            />
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
            <Button onClick={createNewCoach} className="mt-5">
              Crear entrenador
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormNewCoach;
