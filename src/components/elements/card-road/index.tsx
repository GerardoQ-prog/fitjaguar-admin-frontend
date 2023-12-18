import FtLogo from "../../../assets/images/svg/ftgo_logo.svg";

const CardRoad = ({ ...item }: any) => {
  return (
    <div className="bg-black-300 max-w-[300px] w-full p-4 rounded-lg flex gap-5 items-center">
      <img src={FtLogo} />
      <p className="text-primary font-bold leading-[20px] my-3 text-lg">
        {item.name}
      </p>
    </div>
  );
};

export default CardRoad;
