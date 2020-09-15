import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Домашняя",
    exact: true,
    component: lazy(() =>
      import("./views/HomeView" /* webpackChunkName: "homeview" */)
    ),
    private: false,
    restricted: false,
  },
  {
    path: "/register",
    label: "Регистрация",
    exact: true,
    component: lazy(() =>
      import("./views/RegisterView" /* webpackChunkName: "registerview" */)
    ),
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "Логинизация",
    exact: true,
    component: lazy(() =>
      import("./views/LoginView" /* webpackChunkName: "loginview" */)
    ),
    private: false,
    restricted: true,
  },
  {
    path: "/contacts",
    label: "Домашка",
    exact: true,
    component: lazy(() =>
      import("./views/ContacterView" /* webpackChunkName: "contacterview" */)
    ),
    private: true,
    restricted: false,
  },
];
