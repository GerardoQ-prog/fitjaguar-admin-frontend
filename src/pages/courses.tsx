import Button from "../components/ui/button";
import { Link } from "react-router-dom";

const CoursesPage = () => {
  return (
    <main>
      <div className="flex justify-between w-full items-center">
        <h1 className="text-white font-bold text-[40px] my-2">Cursos</h1>
        <Link to="/nuevo-curso">
          <Button>Nuevo curso</Button>
        </Link>
      </div>
    </main>
  );
};

export default CoursesPage;
