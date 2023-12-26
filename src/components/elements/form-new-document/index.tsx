import { useState } from "react";
import { useGetRoads } from "../../../domain/hooks/use-get-roads";
import Input from "../../ui/input";
import Select from "../../ui/select";
import { convertFileToImageBase64, convertTextToSlug } from "../../../utils";
import MoreIcon from "../../ui/icons/more";
import { useGetCoaches } from "../../../domain/hooks/use-get-coaches";
import Button from "../../ui/button";
import { useCreateNewDocument } from "../../../domain/hooks/use-create-new-document";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";

const FormNewDocument = () => {
  const navigate = useNavigate();
  const { data } = useGetRoads();
  const { data: dataCoaches } = useGetCoaches();
  const mutation = useCreateNewDocument();

  const [formDocument, setFormDocument] = useState({
    title: "",
    slug: "",
    road: "",
    description: "",
    image: "",
    coach: "",
    pdf: "",
    likes: "",
    comments: [],
    typePhoto:
      "https://blog.fitjaguaracademygo.com/herramientasdelcoach/esencialesdelcrosstraining-0-0-0-0-0",
  });

  const handleChangeFormDocument = (e: any) => {
    setFormDocument({
      ...formDocument,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePhoto = (base64: string) => {
    setFormDocument({
      ...formDocument,
      image: base64,
    });
  };

  const handleChangeInputFile = (e: any) => {
    const file = e.target.files[0];
    convertFileToImageBase64(file, handleChangePhoto);
  };

  const createNewDocument = async () => {
    const response = await mutation.mutateAsync({
      ...formDocument,
      slug: convertTextToSlug(formDocument.title),
      pdf: formDocument.pdf.trim(),
      likes: Number(formDocument.likes),
    });
    console.log("response", response);
    navigate("/recursos");
  };

  const handleChangeDescription = (value: any) => {
    setFormDocument({
      ...formDocument,
      description: value,
    });
  };

  return (
    <div>
      <div className="w-full flex gap-10">
        <div className="w-full">
          <label className="font-bold">Ingresar foto</label>
          {formDocument.image === "" ? (
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border border-white rounded-lg cursor-pointer bg-black-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <MoreIcon />
                  <p className=" text-white font-bold">Agregar foto</p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleChangeInputFile}
                />
              </label>
            </div>
          ) : (
            <div>
              <img
                src={formDocument.image}
                alt="Archivo seleccionado"
                className="w-full object-contain"
              />
              <div className="flex items-center justify-center w-full mt-5">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-20 border border-white rounded-lg cursor-pointer bg-black-300"
                >
                  <div className="flex items-center justify-center gap-2">
                    <MoreIcon />
                    <p className=" text-white font-bold">Agregar foto</p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleChangeInputFile}
                  />
                </label>
              </div>
            </div>
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <Input
            label="Titulo"
            name="title"
            value={formDocument.title}
            onChange={handleChangeFormDocument}
          />

          <Input
            label="Ingrese link del PDF"
            name="pdf"
            value={formDocument.pdf}
            onChange={handleChangeFormDocument}
          />
          <Select
            label="Ingrese ruta"
            options={data ? data : []}
            value={formDocument.road}
            onChange={handleChangeFormDocument}
            name="road"
          />
          <Select
            label="Ingrese entrenador"
            options={dataCoaches ? dataCoaches : []}
            value={formDocument.coach}
            onChange={handleChangeFormDocument}
            name="coach"
          />
        </div>
      </div>
      <div className="mt-5">
        <label className="font-bold">Descripción</label>
        <MDEditor
          value={formDocument.description}
          onChange={handleChangeDescription}
          className="min-h-[300px]"
        />
        {/* <MDEditor.Markdown
          source={formDocument.description}
          style={{ whiteSpace: "pre-wrap" }}
        /> */}
        <div className="flex gap-4">
          <Input
            label="Número de descargas"
            name="visualizaciones"
            value={0}
            onChange={handleChangeFormDocument}
          />
          <Input
            label="Número de likes"
            name="likes"
            value={formDocument.likes}
            onChange={handleChangeFormDocument}
          />
        </div>
        <Button className="mt-5 w-full" onClick={createNewDocument}>
          Crear documento
        </Button>
      </div>
    </div>
  );
};

export default FormNewDocument;
