import { useGetRoads } from "../../../domain/hooks/use-get-roads";
import Input from "../../ui/input";
import Select from "../../ui/select";
import { convertTextToSlug } from "../../../utils";
import { useGetCoaches } from "../../../domain/hooks/use-get-coaches";
import Button from "../../ui/button";
import { useCreateNewDocument } from "../../../domain/hooks/use-create-new-document";
import { useNavigate, useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { validationFormNewDocument } from "../../../utils/validations/document";
import InputFile from "../../ui/input-file";
import { useUpdateDocument } from "../../../domain/hooks/use-update-document";
import { useQueryClient } from "@tanstack/react-query";

interface IFormNewDocumentProps {
  data?: any;
}

type FormNewDocumentValues = {
  title: string;
  road: string;
  description: string;
  image: string;
  coach: string;
  pdf: string;
  likes: string;
  downloads: string;
};

const FormNewDocument: React.FC<IFormNewDocumentProps> = ({ data }) => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { data: dataRoads } = useGetRoads();
  const { data: dataCoaches } = useGetCoaches();
  const mutation = useCreateNewDocument();
  const mutationUpdate = useUpdateDocument();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm<FormNewDocumentValues>({
    mode: "onChange",
    defaultValues: data && {
      title: data.title,
      description: data.description,
      image: data.image,
      road: data.road?._id || "",
      coach: data.coach?._id || "",
      pdf: data.pdf,
      likes: data.likes,
      downloads: data.downloads,
    },
  });

  const handleChangePhoto = (base64: string) => {
    setValue("image", base64);
  };

  const createNewDocument: SubmitHandler<FormNewDocumentValues> = async (
    dataForm
  ) => {
    if (!id) {
      await mutation.mutateAsync({
        ...dataForm,
        slug: convertTextToSlug(dataForm.title),
        pdf: dataForm.pdf.trim(),
        likes: Number(dataForm.likes),
        downloads: Number(dataForm.downloads),
      });
    } else {
      await mutationUpdate.mutateAsync(
        {
          ...dataForm,
          slug: convertTextToSlug(dataForm.title),
          pdf: dataForm.pdf.trim(),
          likes: Number(dataForm.likes),
          downloads: Number(dataForm.downloads),
          _id: data._id,
        },
        {
          onSuccess: (dataResponse: any) => {
            if (!dataResponse?.error) {
              queryClient.setQueryData(["document-id", id], {
                ...dataResponse,
                road: {
                  _id: dataResponse.road,
                },
                coach: {
                  _id: dataResponse.coach,
                },
              });
            }
          },
        }
      );
    }

    navigate("/recursos");
  };

  const handleChangeDescription = (value: any) => {
    setValue("description", value);
  };

  return (
    <>
      <form onSubmit={handleSubmit(createNewDocument)}>
        <div className="w-full flex gap-10">
          <InputFile
            image={watch("image")}
            handleChangeImage={handleChangePhoto}
          />
          <div className="w-full flex flex-col gap-2">
            <Input
              label="Titulo"
              register={register}
              error={errors.title}
              id="title"
              rules={validationFormNewDocument.rulesTitle}
            />
            <Input
              label="Ingrese link del PDF"
              register={register}
              error={errors.pdf}
              id="pdf"
              rules={validationFormNewDocument.rulesPdf}
            />
            <Controller
              control={control}
              name="road"
              rules={validationFormNewDocument.rulesRoad}
              render={({ field }) => (
                <Select
                  label="Ingrese ruta"
                  options={dataRoads ? dataRoads : []}
                  error={errors.road}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="coach"
              rules={validationFormNewDocument.rulesCoach}
              render={({ field }) => (
                <Select
                  label="Ingrese entrenador"
                  options={dataCoaches ? dataCoaches : []}
                  error={errors.coach}
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <div className="mt-5">
          <label className="font-bold">Descripción</label>
          <MDEditor
            value={watch("description")}
            onChange={handleChangeDescription}
            className="min-h-[300px]"
          />
          <div className="flex gap-4">
            <Input
              label="Número de descargas"
              register={register}
              error={errors.downloads}
              id="downloads"
              rules={validationFormNewDocument.rulesDownloads}
            />
            <Input
              label="Número de likes"
              register={register}
              error={errors.likes}
              id="likes"
              rules={validationFormNewDocument.rulesLikes}
            />
          </div>
          <div className="flex gap-4">
            <Button className="mt-5 w-full" type="submit">
              {id ? "Actualizar documento" : "Crear documento"}
            </Button>
            {id && (
              <Button className="mt-5 w-full" colors="bg-red-600 text-white">
                Eliminar documento
              </Button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default FormNewDocument;
