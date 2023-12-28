import { useParams } from "react-router-dom";
import BackButton from "../components/ui/back-button";
import FormNewCode from "../components/elements/form-new-code";
import { useGetCodeById } from "../domain/hooks/use-get-code-by-id";

const ActivationCodeIdPage = () => {
  let { id } = useParams();

  const { data } = useGetCodeById(id as string);

  return (
    <main>
      <BackButton to="/codigo-activacion" />
      <h1 className="text-white font-bold text-[40px] my-2">
        Información de Código de activación
      </h1>
      {data && <FormNewCode data={data} />}
    </main>
  );
};

export default ActivationCodeIdPage;
