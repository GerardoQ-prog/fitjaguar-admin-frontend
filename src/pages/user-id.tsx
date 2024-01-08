import { useParams } from "react-router-dom";
import BackButton from "../components/ui/back-button";
import FormNewUser from "../components/elements/form-new-user";
import { useGetUserById } from "../domain/hooks/use-get-user-by-id";

const UserIdPage = () => {
  const { id } = useParams();

  const { data } = useGetUserById(id as string);

  return (
    <main>
      <BackButton to="/estudiantes" />
      <h1 className="text-white font-bold text-[40px] my-2">
        Información de estudiante
      </h1>
      {data && <FormNewUser data={data} />}
    </main>
  );
};

export default UserIdPage;
