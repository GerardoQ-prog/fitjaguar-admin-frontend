export const env: ImportMetaEnv = {
  COACH: String(import.meta.env.VITE_APP_COACH),
  COACH_ID: String(import.meta.env.VITE_APP_COACH_ID),
  STUDENT: String(import.meta.env.VITE_APP_STUDENT),
  STUDENT_ID: String(import.meta.env.VITE_APP_STUDENT_ID),
  MODE: import.meta.env.MODE,
  DEV: import.meta.env.DEV,
  SSR: import.meta.env.SSR,
  BASE_URL: import.meta.env.VITE_APP_BASE_URL,
  PROD: import.meta.env.PROD,
};

export default env;
