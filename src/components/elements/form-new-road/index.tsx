import React, { useState } from "react";
import Input from "../../ui/input";
import Button from "../../ui/button";
import { useCreateNewRoad } from "../../../domain/hooks/use-create-new-road";
import { useNavigate } from "react-router-dom";

const FormNewRoad = () => {
  const navigate = useNavigate();

  const [formRoad, setFormRoad] = useState({
    name: "",
  });

  const handleChangeFormRoad = (e: any) => {
    setFormRoad({
      ...formRoad,
      [e.target.name]: e.target.value,
    });
  };

  const mutation = useCreateNewRoad();

  const createNewRoad = async () => {
    try {
      await mutation.mutateAsync(formRoad);
      navigate("/rutas");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-10 items-center p-4">
      <Input
        label="Nombre de la ruta"
        name="name"
        value={formRoad.name}
        onChange={handleChangeFormRoad}
      />
      <Button className="w-[80%] mt-6" onClick={createNewRoad}>
        Crear ruta
      </Button>
    </div>
  );
};

export default FormNewRoad;
