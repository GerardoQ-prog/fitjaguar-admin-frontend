import FitJaguarLogo from "../../../assets/images/svg/ftacademy_logo.svg";

const Header: React.FC = () => {
  return (
    <header className="p-4 border-b border-white">
      <img src={FitJaguarLogo} alt="fitjaguar logo" />
    </header>
  );
};

export default Header;
