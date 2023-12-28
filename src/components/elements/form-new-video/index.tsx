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
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import InputFile from "../../ui/input-file";
import { validationFormNewVideo } from "../../../utils/validations/video";

interface IFormNewVideoProps {
  data?: any;
}

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
  comments: any[];
};

const FormNewVideo: React.FC<IFormNewVideoProps> = ({ data }) => {
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
  } = useForm<FormNewVideoValues>({
    defaultValues: data
      ? {
          title: data.title,
          slug: data.slug,
          road: data.road?._id || "",
          description: data.description,
          miniature: data.miniature,
          coach: data.coach?._id || "",
          video: data.video,
          duration: data.duration,
          likes: data.like,
          visualizations: data.visualizations,
          comments: [],
        }
      : {
          comments: [],
        },
  });

  const handleChangePhoto = (base64: string) => {
    setValue("miniature", base64);
  };

  const createNewDocument: SubmitHandler<FormNewVideoValues> = async (
    dataForm
  ) => {
    const response = await mutation.mutateAsync({
      ...dataForm,
      slug: convertTextToSlug(dataForm.title),
      likes: Number(dataForm.likes),
    });
    navigate("/recursos");
  };

  const handleChangeDescription = (value: any) => {
    setValue("description", value);
  };

  const handleChangeDuration = (duration: number) => {
    setValue("duration", convertSecondstoMinutesAndSeconds(duration));
  };

  return (
    <>
      <form onSubmit={handleSubmit(createNewDocument)}>
        <div className="w-full flex gap-10">
          <InputFile
            image={watch("miniature")}
            handleChangeImage={handleChangePhoto}
          />
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
              url={watch("video")}
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
          <Button className="mt-5 w-full" type="submit">
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
