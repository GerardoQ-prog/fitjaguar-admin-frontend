import ArrowRigthIcon from "../icons/arrow-rigth";
import { Link } from "react-router-dom";

interface IBackButtonProps {
  to: string;
}

const BackButton: React.FC<IBackButtonProps> = ({ to }) => {
  return (
    <div className="flex gap-1 items-center">
      <Link to={to}>
        <div className="rounded bg-black-300 w-[30px] h-[30px] flex justify-center items-center">
          <ArrowRigthIcon />
        </div>
      </Link>
      <p className="text-white font-semibold text-sm">Atras</p>
    </div>
  );
};

export default BackButton;
