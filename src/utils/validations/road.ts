import { RegisterOptions } from "react-hook-form";

const rulesName: RegisterOptions = {
  required: "El nombre de la ruta es requerido",
  pattern: {
    value: /^[a-zA-Z0-9\s]+$/,
    message: "El nombre solo debe contener letras y/o números",
  },
  minLength: {
    value: 3,
    message: "El nombre de la ruta debe tener al menos 3 caracteres",
  },
  maxLength: {
    value: 100,
    message: "El nombre de la ruta debe tener menos de 100 caracteres",
  },
};

export const validationFormNewRoad = {
  rulesName,
};
