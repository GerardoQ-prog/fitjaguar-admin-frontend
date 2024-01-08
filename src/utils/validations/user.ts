import { RegisterOptions } from "react-hook-form";

const rulesName: RegisterOptions = {
  required: "El nombre de la ruta es requerido",
  pattern: {
    value: /^[A-Za-z\u00C0-\u017F\s]+$/,
    message: "El nombre solo debe contener letras",
  },
  minLength: {
    value: 3,
    message: "El nombre tener al menos 3 caracteres",
  },
  maxLength: {
    value: 100,
    message: "El nombre tener menos de 100 caracteres",
  },
};

const rulesLastname: RegisterOptions = {
  required: "El apellido de la ruta es requerido",
  pattern: {
    value: /^[A-Za-z\u00C0-\u017F\s]+$/,
    message: "El apellido solo debe contener letras",
  },
  minLength: {
    value: 3,
    message: "El apellido debe tener al menos 3 caracteres",
  },
  maxLength: {
    value: 100,
    message: "El apellido debe tener menos de 100 caracteres",
  },
};

const rulesEmail: RegisterOptions = {
  required: "El email es requerido",
  pattern: {
    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
    message: "El email debe ser uno valido",
  },
};

const rulesPassword: RegisterOptions = {
  required: "La contraseña es requerida",
  minLength: {
    value: 8,
    message: "La contraseña debe tener 8 dígitos como mínimo",
  },
};

export const validationFormNewUser = {
  rulesName,
  rulesEmail,
  rulesLastname,
  rulesPassword,
};
