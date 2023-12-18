import { useEffect, useRef, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import ReactPlayer from "react-player";
import { useCreateNewVideo } from "../../../domain/hooks/use-create-new-video";

const FormNewVideo = () => {
  const navigate = useNavigate();
  const { data } = useGetRoads();
  const { data: dataCoaches } = useGetCoaches();
  const mutation = useCreateNewVideo();

  const videoRef = useRef();

  const [formVideo, setFormVideo] = useState({
    title: "",
    slug: "",
    road: "",
    description: "",
    miniature: "",
    coach: "",
    video: "",
    duration: "0",
    likes: 0,
    comments: [],
    typePhoto:
      "https://blog.fitjaguaracademygo.com/herramientasdelcoach/esencialesdelcrosstraining-0-0-0-0-0",
  });

  const handleChangeFormVideo = (e: any) => {
    setFormVideo({
      ...formVideo,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePhoto = (base64: string) => {
    setFormVideo({
      ...formVideo,
      miniature: base64,
    });
  };

  const handleChangeInputFile = (e: any) => {
    const file = e.target.files[0];
    convertFileToImageBase64(file, handleChangePhoto);
  };

  const createNewDocument = async () => {
    const response = await mutation.mutateAsync({
      ...formVideo,
      slug: convertTextToSlug(formVideo.title),
    });
    console.log("response", response);
    navigate("/recursos");
  };

  const handleChangeDescription = (value: any) => {
    setFormVideo({
      ...formVideo,
      description: value,
    });
  };

  const handleChangeDuration = (duration: number) => {
    console.log("duration", duration);
    setFormVideo({
      ...formVideo,
      duration: convertSecondstoMinutesAndSeconds(duration),
    });
  };

  return (
    <div>
      <div className="w-full flex gap-10">
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
            name="video"
            value={formVideo.video}
            onChange={handleChangeFormVideo}
          />
          <Input
            label="Duracion del video (min)"
            name="duration"
            value={formVideo.duration}
            onChange={handleChangeFormVideo}
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
          name="title"
          value={formVideo.title}
          onChange={handleChangeFormVideo}
        />
        <Select
          label="Ingrese ruta"
          options={data ? data : []}
          value={formVideo.road}
          onChange={handleChangeFormVideo}
          name="road"
        />
        <Select
          label="Ingrese entrenador"
          options={dataCoaches ? dataCoaches : []}
          value={formVideo.coach}
          onChange={handleChangeFormVideo}
          name="coach"
        />
        <label className="font-bold">Descripción</label>
        <MDEditor
          value={formVideo.description}
          onChange={handleChangeDescription}
          className="min-h-[300px]"
        />
        <MDEditor.Markdown
          source={formVideo.description}
          style={{ whiteSpace: "pre-wrap" }}
        />
        <Button className="mt-5 w-full" onClick={createNewDocument}>
          Crear video
        </Button>
      </div>
    </div>
  );
};

export default FormNewVideo;
