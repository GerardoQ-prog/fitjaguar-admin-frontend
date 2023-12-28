import React from "react";
import Input from "../../ui/input";
import { useForm } from "react-hook-form";
import { validationFormLogin } from "../../../utils/validations/login";
import Button from "../../ui/button";

type FormLoginValues = {
  email: string;
  password: string;
};

const FormLogin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormLoginValues>();

  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-around gap-10 h-full">
      <div>
        <h1 className="text-white font-bold text-4xl max-w-[550px]">
          Inicia tu nueva ruta de aprendizaje con nosotros
        </h1>
        <h2 className="mt-10 text-2xl">Inicia con FitJaguar Academy ahora</h2>
      </div>
      <form className="bg-black-100 px-10 py-6 max-w-[450px] w-full rounded-3xl">
        <Input
          register={register}
          error={errors.email}
          id="email"
          label="Email"
          rules={validationFormLogin.rulesEmail}
          className="bg-white text-black"
          autoComplete="off"
        />
        <Input
          register={register}
          error={errors.email}
          id="email"
          label="Contraseña"
          rules={validationFormLogin.rulesEmail}
          className="bg-white text-black"
          type="password"
          autoComplete="off"
        />
        <Button className="mt-5">Iniciar sesión</Button>
      </form>
    </div>
  );
};

export default FormLogin;
