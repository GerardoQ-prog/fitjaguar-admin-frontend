import FormLanding from "../components/elements/form-landing";

const LandingPage = () => {
  return (
    <main>
      <div className="flex justify-between w-full items-center">
        <h1 className="text-white font-bold text-[40px] my-2">Landing</h1>
      </div>
      <FormLanding />
    </main>
  );
};

export default LandingPage;
