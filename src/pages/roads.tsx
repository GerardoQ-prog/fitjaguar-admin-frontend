import React from "react";
import Button from "../components/ui/button";
import { Link } from "react-router-dom";
import CardsRoads from "../components/containers/cards-roads";

const RoadsPage = () => {
  return (
    <main>
      <div className="flex justify-between w-full items-center">
        <h1 className="text-white font-bold text-[40px] my-2">Rutas</h1>
        <Link to="/nueva-ruta">
          <Button>Nueva ruta</Button>
        </Link>
      </div>
      <CardsRoads />
    </main>
  );
};

export default RoadsPage;
