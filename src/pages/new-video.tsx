import BackButton from "../components/ui/back-button";
import FormNewVideo from "../components/elements/form-new-video";

const NewVideoPage = () => {
  return (
    <main>
      <BackButton to="/recursos" />
      <h1 className="text-white font-bold text-[40px] my-2">Nuevo Video</h1>
      <FormNewVideo />
    </main>
  );
};

export default NewVideoPage;
