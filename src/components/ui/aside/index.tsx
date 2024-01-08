import DashboardIcon from "../icons/dashboard";
import { useLocation } from "react-router-dom";
import FlashIcon from "../icons/flash";
import { NavLink } from "react-router-dom";

const Aside = () => {
  let location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      icon: (
        <DashboardIcon
          fill={
            location.pathname.includes("/dashboard") ? "#FEC600" : "#C6C6C6"
          }
        />
      ),
      active: location.pathname.includes("/dashboard"),
      path: "/dashboard",
    },
    {
      name: "Estudiantes",
      icon: (
        <FlashIcon
          fill={
            location.pathname.includes("/estudiantes") ||
            location.pathname.includes("/nuevo-usuario")
              ? "#FEC600"
              : "#C6C6C6"
          }
        />
      ),
      active:
        location.pathname.includes("/estudiantes") ||
        location.pathname.includes("/nuevo-usuario"),
      path: "/estudiantes",
    },
    {
      name: "Entrenadores",
      icon: (
        <FlashIcon
          fill={
            location.pathname.includes("/entrenadores") ||
            location.pathname.includes("/nuevo-entrenador")
              ? "#FEC600"
              : "#C6C6C6"
          }
        />
      ),
      active:
        location.pathname.includes("/entrenadores") ||
        location.pathname.includes("/nuevo-entrenador"),
      path: "/entrenadores",
    },
    {
      name: "Rutas",
      icon: (
        <FlashIcon
          fill={location.pathname.includes("/rutas") ? "#FEC600" : "#C6C6C6"}
        />
      ),
      active:
        location.pathname.includes("/rutas") ||
        location.pathname.includes("/nueva-ruta"),
      path: "/rutas",
    },
    {
      name: "Cursos",
      icon: (
        <FlashIcon
          fill={location.pathname.includes("/cursos") ? "#FEC600" : "#C6C6C6"}
        />
      ),
      active: location.pathname.includes("/cursos"),
      path: "/cursos",
    },
    {
      name: "Recursos Gratuitos",
      icon: (
        <FlashIcon
          fill={
            location.pathname.includes("/recursos") ||
            location.pathname.includes("/nuevo-documento") ||
            location.pathname.includes("/nuevo-video")
              ? "#FEC600"
              : "#C6C6C6"
          }
        />
      ),
      active:
        location.pathname.includes("/recursos") ||
        location.pathname.includes("/nuevo-documento") ||
        location.pathname.includes("/nuevo-video"),
      path: "/recursos",
    },
    {
      name: "Codigos de activación",
      icon: (
        <FlashIcon
          fill={
            location.pathname.includes("/codigo-activacion") ||
            location.pathname.includes("/nuevo-codigo")
              ? "#FEC600"
              : "#C6C6C6"
          }
        />
      ),
      active:
        location.pathname.includes("/codigo-activacion") ||
        location.pathname.includes("/nuevo-codigo"),
      path: "/codigo-activacion",
    },
    {
      name: "Landing",
      icon: (
        <FlashIcon
          fill={location.pathname.includes("landing") ? "#FEC600" : "#C6C6C6"}
        />
      ),
      active: location.pathname.includes("/landing"),
      path: "/landing",
    },
  ];

  return (
    <aside className="p-10 w-[400px] border-r border-white min-h-[calc(100vh-80px)]">
      <p className="text-[#767676] font-medium text-xs">Menu</p>
      <div>
        {menu.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => {
              return `my-5 flex gap-2 ${
                isActive || item.active
                  ? "text-primary font-semibold"
                  : "text-gray font-semibold"
              }`;
            }}
          >
            {item.icon}
            <p>{item.name}</p>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Aside;
