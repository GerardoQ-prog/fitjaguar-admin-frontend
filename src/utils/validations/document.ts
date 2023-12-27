import { RegisterOptions } from "react-hook-form";

const rulesTitle: RegisterOptions = {
  required: "El título es requerido",
};

const rulesPdf: RegisterOptions = {
  required: "El link del pdf es requerido",
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

const rulesDownloads: RegisterOptions = {
  required: "El número de descargas es requerida",
  pattern: {
    value: /^[0-9]+$/,
    message: "El número de descargas solo debe contener números",
  },
};

const rulesLikes: RegisterOptions = {
  required: "El número de likes es requerida",
  pattern: {
    value: /^[0-9]+$/,
    message: "El número de likes solo debe contener números",
  },
};

export const validationFormNewDocument = {
  rulesTitle,
  rulesPdf,
  rulesRoad,
  rulesCoach,
  rulesDownloads,
  rulesLikes,
};
