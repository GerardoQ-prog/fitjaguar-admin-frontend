import React from "react";
import CardCode from "../../elements/card-code";
import { useGetCodes } from "../../../domain/hooks/use-get-code";

const TableCodes = () => {
  const { data } = useGetCodes();

  return (
    <>
      <div className="grid grid-cols-7">
        <p className="text-primary font-bold text-center">Creador</p>
        <p className="text-primary font-bold text-center">Correo usuario</p>
        <p className="text-primary font-bold text-center">Tipo de pago</p>
        <p className="text-primary font-bold text-center">Estado de pago</p>
        <p className="text-primary font-bold text-center">Código</p>
        <p className="text-primary font-bold text-center">Fecha y hora</p>
        <p className="text-primary font-bold text-center">Acciones</p>
      </div>
      <div className="w-full bg-gray h-[1px] my-5" />
      <div className="grid gap-5">
        {data && data.map((item) => <CardCode key={item._id} {...item} />)}
      </div>
    </>
  );
};

export default TableCodes;
