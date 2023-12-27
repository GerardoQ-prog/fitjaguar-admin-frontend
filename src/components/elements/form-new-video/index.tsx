import { useState } from "react";
import { useGetRoads } from "../../../domain/hooks/use-get-roads";
import Input from "../../ui/input";
import Select from "../../ui/select";
import {
  convertFileToImageBase64,
  convertSecondstoMinutesAndSeconds,
  convertTextToSlug,
} from "../../../utils";
import MoreIcon from "../../ui/icons/more";
import { useGetCoaches } from "../../../domain/hooks/use-get-coaches";
import Button from "../../ui/button";
import { useNavigate, useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import ReactPlayer from "react-player";
import { useCreateNewVideo } from "../../../domain/hooks/use-create-new-video";
import { Controller, useForm } from "react-hook-form";
import InputFile from "../../ui/input-file";
import { validationFormNewVideo } from "../../../utils/validations/video";

type FormNewVideoValues = {
  title: string;
  slug: string;
  road: string;
  description: string;
  miniature: string;
  coach: string;
  video: string;
  duration: string;
  likes: string;
  visualizations: string;
};

const FormNewVideo = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { data: dataRoads } = useGetRoads();
  const { data: dataCoaches } = useGetCoaches();
  const mutation = useCreateNewVideo();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm<FormNewVideoValues>({});

  const [formVideo, setFormVideo] = useState({
    title: "",
    slug: "",
    road: "",
    description: "",
    miniature: "",
    coach: "",
    video: "",
    duration: "0",
    likes: "",
  });

  const handleChangeFormVideo = (e: any) => {
    setFormVideo({
      ...formVideo,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePhoto = (base64: string) => {
    setValue("miniature", base64);
  };

  const handleChangeInputFile = (e: any) => {
    const file = e.target.files[0];
    convertFileToImageBase64(file, handleChangePhoto);
  };

  const createNewDocument = async () => {
    const response = await mutation.mutateAsync({
      ...formVideo,
      slug: convertTextToSlug(formVideo.title),
      likes: Number(formVideo.likes),
    });
    navigate("/recursos");
  };

  const handleChangeDescription = (value: any) => {
    setValue("description", value);
  };

  const handleChangeDuration = (duration: number) => {
    setFormVideo({
      ...formVideo,
      duration: convertSecondstoMinutesAndSeconds(duration),
    });
  };

  return (
    <>
      <form>
        <div className="w-full flex gap-10">
          <InputFile
            image={watch("miniature")}
            handleChangeImage={handleChangePhoto}
          />
          <div className="w-full">
            <label className="font-bold">Ingresar foto</label>
            {formVideo.miniature === "" ? (
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
                  src={formVideo.miniature}
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
              label="Ingrese link del video"
              register={register}
              error={errors.video}
              id="video"
              rules={validationFormNewVideo.rulesVideo}
            />
            <Input
              label="Duracion del video (min)"
              register={register}
              error={errors.duration}
              id="duration"
              rules={validationFormNewVideo.rulesDuration}
              disabled
            />
            <br />
            <ReactPlayer
              url={formVideo.video}
              controls
              onDuration={handleChangeDuration}
            />
          </div>
        </div>
        <div className="mt-5">
          <Input
            label="Titulo"
            register={register}
            error={errors.title}
            id="title"
            rules={validationFormNewVideo.rulesVideo}
          />
          <Controller
            control={control}
            name="road"
            rules={validationFormNewVideo.rulesRoad}
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
            rules={validationFormNewVideo.rulesCoach}
            render={({ field }) => (
              <Select
                label="Ingrese entrenador"
                options={dataCoaches ? dataCoaches : []}
                error={errors.coach}
                {...field}
              />
            )}
          />
          <label className="font-bold">Descripción</label>
          <MDEditor
            value={watch("description")}
            onChange={handleChangeDescription}
            className="min-h-[300px]"
          />
          <div className="flex gap-4">
            <Input
              label="Número de visualizaciones"
              register={register}
              error={errors.visualizations}
              id="visualizations"
              rules={validationFormNewVideo.rulesVisualizations}
            />
            <Input
              label="Número de likes"
              register={register}
              error={errors.likes}
              id="likes"
              rules={validationFormNewVideo.rulesLikes}
            />
          </div>
          <Button className="mt-5 w-full" onClick={createNewDocument}>
            {id ? "Actualizar video" : "Crear video"}
          </Button>
          {id && (
            <Button className="mt-5 w-full" colors="bg-red-600 text-white">
              Eliminar documento
            </Button>
          )}
        </div>
      </form>
    </>
  );
};

export default FormNewVideo;
