import React from "react";
import Button from "../../ui/button";
import { getFormattedDate, getHoursAndMinutes } from "../../../utils";
import { Link } from "react-router-dom";

const CardCode = ({ ...item }) => {
  return (
    <div className="grid grid-cols-7 bg-black-300 py-4 rounded-md items-center gap-5">
      <p className="text-center text-sm">{item.adviser}</p>
      <p className="text-center text-sm">{item.email}</p>
      <p className="text-center text-sm">{item.typePayment.name}</p>
      <p className="text-center text-sm">{item.statusPayment.name}</p>
      <p className="text-center text-sm">{item.code}</p>
      <p className="text-center text-sm">
        {getFormattedDate(item.createdAt)} {getHoursAndMinutes(item.createdAt)}
      </p>
      <Link to={`/codigo-activacion/${item._id}`}>
        <Button>Ver detalle</Button>
      </Link>
    </div>
  );
};

export default CardCode;
