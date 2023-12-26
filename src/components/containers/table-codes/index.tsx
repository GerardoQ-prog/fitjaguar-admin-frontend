import React from "react";
import CardCode from "../../elements/card-code";

const TableCodes = () => {
  return (
    <>
      <div className="grid grid-cols-6">
        <p className="text-primary font-bold text-center">Creador</p>
        <p className="text-primary font-bold text-center">Correo usuario</p>
        <p className="text-primary font-bold text-center">Tipo de cobro</p>
        <p className="text-primary font-bold text-center">Fecha</p>
        <p className="text-primary font-bold text-center">Hora</p>
        <p className="text-primary font-bold text-center">Acciones</p>
      </div>
      <div className="w-full bg-gray h-[1px] my-5" />
      <CardCode />
    </>
  );
};

export default TableCodes;
