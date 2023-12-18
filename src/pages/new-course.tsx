import FormNewCourse from "../components/elements/form-new-course";
import BackButton from "../components/ui/back-button";

const NewCoursePage = () => {
  return (
    <main>
      <BackButton to="/cursos" />
      <h1 className="text-white font-bold text-[40px] my-2">Nuevo Curso</h1>
      <FormNewCourse />
    </main>
  );
};

export default NewCoursePage;
