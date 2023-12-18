import { useState } from "react";
import Input from "../../ui/input";
import Button from "../../ui/button";
import { useNavigate } from "react-router-dom";
import MoreIcon from "../../ui/icons/more";
import { useCreateNewCoach } from "../../../domain/hooks/use-create-new-coach";
import { convertFileToImageBase64 } from "../../../utils";
import { useGetUserByEmail } from "../../../domain/hooks/use-get-user-by-email";

const FormNewCoach = () => {
  const navigate = useNavigate();

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

  console.log(data);

  const handleChangeFormCoach = (e: any) => {
    setFormCoach({
      ...formCoach,
      [e.target.name]: e.target.value,
    });
  };

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

  console.log("formCoach", formCoach);

  return (
    <div className="flex gap-4 items-center m-auto flex-col p-4">
      <div className="flex items-center w-full gap-2">
        <Input
          label="Email"
          name="email"
          value={formCoach.email}
          onChange={handleChangeFormCoach}
        />
        <Button className="w-[40%] mt-7" onClick={() => refetch()}>
          Buscar usuario
        </Button>
      </div>
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
              name="password"
              value={formCoach.password}
              onChange={handleChangeFormCoach}
            />
            <Input
              label="Nombres"
              name="name"
              value={formCoach.name}
              onChange={handleChangeFormCoach}
            />
            <Input
              label="Apellidos"
              name="lastname"
              value={formCoach.lastname}
              onChange={handleChangeFormCoach}
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
