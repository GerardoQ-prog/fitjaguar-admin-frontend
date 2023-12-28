import FtLogo from "../assets/images/svg/ftgo_logo.svg";
import BgLogin from "../assets/images/png/background-home.png";
import FormLogin from "../components/elements/form-login";

const LoginPage = () => {
  return (
    <div>
      <div className="p-5 h-[100px] flex items-center">
        <img src={FtLogo} alt="Fit Jaguar Logo" width={150} />
      </div>
      <div className="relative">
        <img
          src={BgLogin}
          alt={"background"}
          className="w-full object-cover"
          style={{ height: "auto" }}
        />
        <FormLogin />
      </div>
    </div>
  );
};

export default LoginPage;
