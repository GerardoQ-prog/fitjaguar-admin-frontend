import { Link } from "react-router-dom";
import Button from "../components/ui/button";
import CardsUsers from "../components/containers/cards-users";

const UsersPage = () => {
  return (
    <main>
      <div className="flex justify-between w-full items-center">
        <h1 className="text-white font-bold text-[40px] my-2">Usuarios</h1>
        <Link to="/nuevo-usuario">
          <Button>Nuevo usuario</Button>
        </Link>
      </div>
      <CardsUsers />
    </main>
  );
};

export default UsersPage;
