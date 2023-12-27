import { useState } from "react";
import Input from "../../ui/input";
import Button from "../../ui/button";
import { useNavigate } from "react-router-dom";
import MoreIcon from "../../ui/icons/more";
import { useCreateNewCoach } from "../../../domain/hooks/use-create-new-coach";
import { convertFileToImageBase64 } from "../../../utils";
import { useGetUserByEmail } from "../../../domain/hooks/use-get-user-by-email";
import { useForm } from "react-hook-form";
import { validationFormNewCoach } from "../../../utils/validations/coach";

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
  } = useForm<FormNewCoachValues>({
    mode: "onChange",
  });

  const [searchUser, setSearchUser] = useState<boolean>(false);
  const [userExist, setUserExist] = useState<boolean>(false);

  const [formCoach, setFormCoach] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    photo: "",
    typePhoto: "png",
  });

  const { data, refetch } = useGetUserByEmail({ email: formCoach.email });

  const handleChangePhoto = (base64: string) => {
    setFormCoach({
      ...formCoach,
      photo: base64,
    });
  };

  const handleChangeInputFile = (e: any) => {
    const file = e.target.files[0];
    convertFileToImageBase64(file, handleChangePhoto);
  };

  const mutation = useCreateNewCoach();

  const createNewCoach = async () => {
    try {
      await mutation.mutateAsync(formCoach);
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
          name="email"
          register={register}
          error={errors.email}
          id="name"
          rules={validationFormNewCoach.rulesEmail}
        />
        <Button className="w-[40%] mt-7" onClick={() => refetch()}>
          Buscar usuario
        </Button>
      </form>
      {!searchUser && (
        <div className="w-full flex gap-10">
          <div className="w-full">
            <label className="font-bold">Ingresar foto</label>
            {formCoach.photo === "" ? (
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border border-white rounded-lg cursor-pointer bg-black-300"
                >
                  <div className="flex items-center justify-center gap-2">
                    <MoreIcon />
                    <p className=" text-white font-bold">Agregar foto</p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleChangeInputFile}
                  />
                </label>
              </div>
            ) : (
              <div className="w-full">
                <img
                  src={formCoach.photo}
                  alt="Archivo seleccionado"
                  className="w-[300px] object-contain"
                />
                <div className="flex items-center justify-center w-full mt-5">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-20 border border-white rounded-lg cursor-pointer bg-black-300"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <MoreIcon />
                      <p className=" text-white font-bold">Agregar foto</p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={handleChangeInputFile}
                    />
                  </label>
                </div>
              </div>
            )}
          </div>
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
