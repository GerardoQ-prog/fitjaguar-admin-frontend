import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import env from "../../../utils/env";
import InputFile from "../../ui/input-file";
import Input from "../../ui/input";
import Button from "../../ui/button";
import { capitalizeFullName } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { validationFormNewUser } from "../../../utils/validations/user";
import { useCreateNewUser } from "../../../domain/hooks/use-create-new-user";

interface IFormNewUserProps {
  data?: any;
}

type FormNewUserValues = {
  name: string;
  lastname: string;
  email: string;
  password: string;
  photo: string;
  typeUser: string;
  typePhoto: string;
};

const FormNewUser: React.FC<IFormNewUserProps> = ({ data }) => {
  const navigate = useNavigate();
  const mutation = useCreateNewUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm<FormNewUserValues>({
    mode: "onChange",
    defaultValues: {
      typeUser: env.STUDENT_ID,
      typePhoto: "asd",
    },
  });

  const handleChangePhoto = (base64: string) => {
    setValue("photo", base64);
  };

  const createNewUser: SubmitHandler<FormNewUserValues> = async (dataForm) => {
    try {
      await mutation.mutateAsync({
        ...dataForm,
        name: capitalizeFullName(dataForm.name),
        lastname: capitalizeFullName(dataForm.lastname),
      });
      navigate("/estudiantes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(createNewUser)}>
        <div className="w-full flex gap-10">
          <InputFile
            image={watch("photo")}
            handleChangeImage={handleChangePhoto}
          />
          <div className="w-full flex flex-col gap-2">
            <Input
              label="Email"
              register={register}
              error={errors.email}
              id="email"
              rules={validationFormNewUser.rulesEmail}
            />
            <Input
              label="Contraseña"
              register={register}
              error={errors.password}
              id="password"
              rules={validationFormNewUser.rulesPassword}
            />
            <Input
              label="Nombres"
              register={register}
              error={errors.name}
              id="name"
              rules={validationFormNewUser.rulesName}
              disabled={data && data.length ? true : false}
            />
            <Input
              label="Apellidos"
              register={register}
              error={errors.lastname}
              id="lastname"
              rules={validationFormNewUser.rulesLastname}
              disabled={data && data.length ? true : false}
            />
            <Button
              type="submit"
              className="mt-5"
              disabled={mutation.isPending}
            >
              Crear estudiante
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormNewUser;
