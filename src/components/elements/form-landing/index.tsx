import React, { useState } from "react";
import Input from "../../ui/input";
import InputFile from "../../ui/input-file";
import { convertFileToImageBase64 } from "../../../utils";
import Button from "../../ui/button";
import ReactPlayer from "react-player";

const FormLanding = () => {
  const [principalLanding, setPrincipalLanding] = useState({
    title: "",
    subtitle: "",
    image: "",
  });

  const handleChangePrincipal = (e: any) => {
    setPrincipalLanding({
      ...principalLanding,
      [e.target.name]: e.target.value,
    });
  };

  const [companiesLanding, setCompaniesLanding] = useState([]);

  const handleChangeCompany = (e: any) => {
    setPrincipalLanding({
      ...principalLanding,
      [e.target.name]: e.target.value,
    });
  };

  const [informationLanding, setInformationLanding] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChangeInformation = (e: any) => {
    setInformationLanding({
      ...informationLanding,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeImagenInformation = (base64: string) => {
    setInformationLanding({
      ...informationLanding,
      image: base64,
    });
  };

  const [benefitsLanding, setBenefitsLanding] = useState({
    title: "",
    subtitle: "",
    items: [],
  });

  const handleChangeBenefits = (e: any) => {
    setBenefitsLanding({
      ...benefitsLanding,
      [e.target.name]: e.target.value,
    });
  };

  const [experienceLanding, setExperienceLanding] = useState({
    title: "",
    subtitle: "",
    video: "",
  });

  const handleChangeExperience = (e: any) => {
    setExperienceLanding({
      ...experienceLanding,
      [e.target.name]: e.target.value,
    });
  };

  //   const [informationLanding, setinformationLanding] = useState({
  //     companies: [],
  //     information: {
  //       title: "",
  //       description: "",
  //       image: "",
  //     },
  //     suscription: {
  //       title: "",
  //       subtitle: "",
  //       items: [],
  //     },
  //     stadistics: {
  //       title: "",
  //       subtitle: "",
  //       items: [],
  //     },
  //     benefits: {
  //       title: "",
  //       subtitle: "",
  //       items: [],
  //     },
  //     experience: {
  //       title: "",
  //       subtitle: "",
  //       video: "",
  //     },
  //     testimonials: {
  //       title: "",
  //       subtitle: "",
  //       items: [],
  //     },
  //   });

  return (
    <div>
      <Input
        label="Titulo principal"
        name="title"
        value={principalLanding.title}
        onChange={handleChangePrincipal}
      />
      <Input
        label="Subtitulo principal"
        name="subtitle"
        value={principalLanding.subtitle}
        onChange={handleChangePrincipal}
      />
      <h2 className="text-white font-bold text-[30px] my-2">Información</h2>
      <Input
        label="Titulo"
        name="title"
        value={informationLanding.title}
        onChange={handleChangeInformation}
      />
      <Input
        label="Subtitulo"
        name="description"
        value={informationLanding.description}
        onChange={handleChangeInformation}
      />
      <InputFile
        image={informationLanding.image}
        handleChangeImage={handleChangeImagenInformation}
      />
      <h2 className="text-white font-bold text-[30px] my-2">Estadisticas</h2>
      <Button>Agregar estadistica</Button>
      <h2 className="text-white font-bold text-[30px] my-2">Beneficios</h2>
      <Input
        label="Titulo"
        name="title"
        value={benefitsLanding.title}
        onChange={handleChangeExperience}
      />
      <Input
        label="Subtitulo"
        name="subtitle"
        value={benefitsLanding.subtitle}
        onChange={handleChangeExperience}
      />
      <Button>Agregar beneficio</Button>
      <h2 className="text-white font-bold text-[30px] my-2">Experiencia</h2>
      <Input
        label="Titulo"
        name="title"
        value={experienceLanding.title}
        onChange={handleChangeExperience}
      />
      <Input
        label="Subtitulo"
        name="subtitle"
        value={experienceLanding.subtitle}
        onChange={handleChangeExperience}
      />
      <Input
        label="Video"
        name="video"
        value={experienceLanding.video}
        onChange={handleChangeExperience}
      />
      <ReactPlayer url={experienceLanding.video} controls />
      <h2 className="text-white font-bold text-[30px] my-2">Testimonios</h2>
      <Input
        label="Titulo"
        name="title"
        value={benefitsLanding.title}
        onChange={handleChangeExperience}
      />
      <Input
        label="Subtitulo"
        name="subtitle"
        value={benefitsLanding.subtitle}
        onChange={handleChangeExperience}
      />
      <Button>Agregar testimonio</Button>
    </div>
  );
};

export default FormLanding;
