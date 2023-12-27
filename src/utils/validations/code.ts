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

const rulesEmail: RegisterOptions = {
  required: "El nombre de la ruta es requerido",
  pattern: {
    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
    message: "El teléfono solo debe contener números",
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

const rulesCode: RegisterOptions = {
  required: "El código es requerido",
};

const rulesDischarge: RegisterOptions = {
  required: "El descargo es requerido",
};

const rulesAmount: RegisterOptions = {
  required: "El monto es requerido",
  pattern: {
    value: /^[0-9]+$/,
    message: "El monto solo debe contener números",
  },
};

const rulesCountry: RegisterOptions = {
  required: "El país es requerido",
};

const rulesTypePayment: RegisterOptions = {
  required: "El tipo de pago es requerido",
};

const rulesStatusPayment: RegisterOptions = {
  required: "El estado de pago es requerido",
};

export const validationFormNewCode = {
  rulesName,
  rulesEmail,
  rulesCode,
  rulesDischarge,
  rulesAmount,
  rulesCountry,
  rulesTypePayment,
  rulesStatusPayment,
};
