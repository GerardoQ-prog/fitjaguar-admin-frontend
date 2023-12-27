import { Link } from "react-router-dom";
import FtLogo from "../../../assets/images/svg/ftgo_logo.svg";
import Button from "../../ui/button";

const CardRoad = ({ ...item }: any) => {
  return (
    <div className="bg-black-300 max-w-[300px] w-full p-4 rounded-lg">
      <div className="flex gap-5 items-center">
        <img src={FtLogo} />
        <p className="text-primary font-bold leading-[20px] my-3 text-lg">
          {item.name}
        </p>
      </div>
      <Link to={`/rutas/${item._id}`}>
        <Button>Ver detalle</Button>
      </Link>
    </div>
  );
};

export default CardRoad;
