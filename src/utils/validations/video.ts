import { RegisterOptions } from "react-hook-form";

const rulesTitle: RegisterOptions = {
  required: "El título es requerido",
};

const rulesDuration: RegisterOptions = {
  required: "La duración es requerida",
};

const rulesVideo: RegisterOptions = {
  required: "El link del video es requerido",
  pattern: {
    value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
    message: "El link del pdf debe ser una url válida",
  },
};

const rulesRoad: RegisterOptions = {
  required: "La ruta es requerida",
};

const rulesCoach: RegisterOptions = {
  required: "El entrenador es requerida",
};

const rulesVisualizations: RegisterOptions = {
  required: "El número de visualizaciones es requerida",
  pattern: {
    value: /^[0-9]+$/,
    message: "El número de visualizaciones solo debe contener números",
  },
};

const rulesLikes: RegisterOptions = {
  required: "El número de likes es requerida",
  pattern: {
    value: /^[0-9]+$/,
    message: "El número de likes solo debe contener números",
  },
};

export const validationFormNewVideo = {
  rulesTitle,
  rulesVideo,
  rulesRoad,
  rulesCoach,
  rulesVisualizations,
  rulesLikes,
  rulesDuration,
};
