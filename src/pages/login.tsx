import FtLogo from "../assets/images/svg/ftgo_logo.svg";
import BgLogin from "../assets/images/png/background-home.png";

const LoginPage = () => {
  return (
    <div className="p-5">
      <img src={FtLogo} alt="Fit Jaguar Logo" width={100} />
      <div className="relative">
        <img
          src={BgLogin}
          alt={"background"}
          className="w-full object-cover"
          style={{ height: "auto" }}
        />
        <div>asd</div>
      </div>
    </div>
  );
};

export default LoginPage;
