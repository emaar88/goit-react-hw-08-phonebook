import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Домашняя",
    exact: true,
    component: lazy(() => import("./views/HomeView")),
    private: false,
    restricted: false,
  },
  {
    path: "/register",
    label: "Регистрация",
    exact: true,
    component: lazy(() => import("./views/RegisterView")),
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "Логинизация",
    exact: true,
    component: lazy(() => import("./views/LoginView")),
    private: false,
    restricted: true,
  },
  {
    path: "/contacts",
    label: "Домашка",
    exact: true,
    component: lazy(() => import("./views/ContacterView")),
    private: true,
    restricted: false,
  },
];
