import { Link } from "react-router-dom";
import Button from "../../ui/button";
import DownloadIcon from "../../ui/icons/download";
import LikeIcon from "../../ui/icons/like";

const CardDocument = ({ ...item }: any) => {
  return (
    <div className="bg-black-300 max-w-[300px] w-full p-4 rounded-lg">
      <img src={item.image} className="rounded-xl" />
      <p className="text-white font-bold leading-[20px] my-3 text-sm">
        {item.title}
      </p>
      <p className="text-xs">
        {item.coach.name} {item.coach.lastname}
      </p>
      <div className="flex gap-3 mt-2">
        <div className="flex items-center gap-1 text-white text-sm font-bold">
          <DownloadIcon /> {item.downloads}
        </div>
        <div className="flex items-center gap-1 text-white text-sm font-bold">
          <LikeIcon /> {item.likes}
        </div>
      </div>
      <Link to={`/recursos/documento/${item._id}`}>
        <Button className="w-full mt-4">Ver detalles</Button>
      </Link>
    </div>
  );
};

export default CardDocument;
