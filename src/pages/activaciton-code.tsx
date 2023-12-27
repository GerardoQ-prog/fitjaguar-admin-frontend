import { Link } from "react-router-dom";
import Button from "../components/ui/button";
import TableCodes from "../components/containers/table-codes";

const ActivationCodePage = () => {
  return (
    <main>
      <div className="flex justify-between w-full items-center">
        <h1 className="text-white font-bold text-[40px] my-2">
          Códigos de activación
        </h1>
        <Link to="/nuevo-codigo">
          <Button>Nuevo código</Button>
        </Link>
      </div>
      <br />
      <TableCodes />
    </main>
  );
};

export default ActivationCodePage;
