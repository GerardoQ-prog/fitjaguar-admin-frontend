/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly COACH: string;
  readonly STUDENT: string;
  readonly STUDENT_ID: string;
  readonly COACH_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
