import React, { useState } from "react";
import Input from "../../ui/input";
import Select from "../../ui/select";
import Button from "../../ui/button";

const FormNewCode = () => {
  const [formCode, setFormCode] = useState({
    asesor: "",
    email: "",
    typePayment: "",
    country: "",
    amount: "",
    code: "",
    descargo: "",
  });

  const handleChangeFormCode = (e: any) => {
    setFormCode({
      ...formCode,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 items-center">
        <Input
          label="Nombre de asesor"
          name="asesor"
          value={formCode.asesor}
          onChange={handleChangeFormCode}
        />
        <Input
          label="Email de usuario"
          name="email"
          value={formCode.asesor}
          onChange={handleChangeFormCode}
        />
        <Select
          label="País"
          options={[]}
          value={formCode.typePayment}
          onChange={handleChangeFormCode}
          name="typePayment"
        />
        <Select
          label="Tipo de pago"
          options={[]}
          value={formCode.typePayment}
          onChange={handleChangeFormCode}
          name="typePayment"
        />
        <Select
          label="Estado de cobro"
          options={[]}
          value={formCode.typePayment}
          onChange={handleChangeFormCode}
          name="typePayment"
        />
        <Input
          label="Monto"
          name="amount"
          value={formCode.amount}
          onChange={handleChangeFormCode}
        />
        <Input
          label="Codigo"
          name="code"
          value={formCode.code}
          onChange={handleChangeFormCode}
        />
        <Button className="mt-7">Generar código</Button>
      </div>
      <Input
        label="Descargo"
        name="descargo"
        value={formCode.descargo}
        onChange={handleChangeFormCode}
      />
      <br />
      <Button>Crear código</Button>
    </div>
  );
};

export default FormNewCode;
