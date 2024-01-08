import { Link } from "react-router-dom";
import Button from "../../ui/button";

const CardUser = ({ ...item }: any) => {
  return (
    <div className="bg-black-300 max-w-[200px] w-full p-4 rounded-lg flex justify-center flex-col items-center gap-3">
      <img
        src={item.photo}
        alt={`${item.name} ${item.lastname}`}
        className="rounded-[100px] w-[120px] h-[120px] object-cover"
      />
      <div>
        <p className="text-primary font-bold text-center">
          {item.name} {item.lastname}
        </p>
        <p className="text-center text-white text-xs font-bold">Alumno</p>
        <Link to={`/estudiantes/${item._id}`}>
          <Button className="my-3">Ver información</Button>
        </Link>
      </div>
    </div>
  );
};

export default CardUser;
