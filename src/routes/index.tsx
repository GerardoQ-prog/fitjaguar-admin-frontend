import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login";
import DashboardPage from "../pages/dashboard";
import CoachesPage from "../pages/coaches";
import ResourcesPage from "../pages/resources";
import Layout from "../components/ui/layout";
import RoadsPage from "../pages/roads";
import CoursesPage from "../pages/courses";
import NewCoachPage from "../pages/new-coach";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NewRoadPage from "../pages/new-road";
import NewDocumentPage from "../pages/new-document";
import UsersPage from "../pages/users";
import NewVideoPage from "../pages/new-video";
import NewCoursePage from "../pages/new-course";
import ActivationCodePage from "../pages/activaciton-code";
import NewActivationCodePage from "../pages/new-code";
import LandingPage from "../pages/landing";
import RoadSlugPage from "../pages/road-slug";
import DocumentIdPage from "../pages/document-id";
import ActivationCodeIdPage from "../pages/activation-code-id";

const AppRoutes = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LoginPage />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/entrenadores" element={<CoachesPage />} />
            <Route path="/nuevo-entrenador" element={<NewCoachPage />} />
            <Route path="/recursos" element={<ResourcesPage />} />
            <Route
              path="/recursos/documento/:id"
              element={<DocumentIdPage />}
            />
            <Route path="/nuevo-documento" element={<NewDocumentPage />} />
            <Route path="/nuevo-video" element={<NewVideoPage />} />
            <Route path="/rutas" element={<RoadsPage />} />
            <Route path="/rutas/:slug" element={<RoadSlugPage />} />
            <Route path="/nueva-ruta" element={<NewRoadPage />} />
            <Route path="/cursos" element={<CoursesPage />} />
            <Route path="/nuevo-curso" element={<NewCoursePage />} />
            <Route path="/usuarios" element={<UsersPage />} />
            <Route path="/nuevo-usuario" element={<UsersPage />} />
            <Route path="/codigo-activacion" element={<ActivationCodePage />} />
            <Route
              path="/codigo-activacion/:id"
              element={<ActivationCodeIdPage />}
            />
            <Route path="/nuevo-codigo" element={<NewActivationCodePage />} />
            <Route path="/landing" element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default AppRoutes;
