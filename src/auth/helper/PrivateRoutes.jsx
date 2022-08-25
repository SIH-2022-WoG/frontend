import { Navigate, Outlet } from "react-router-dom";

export const StudentRoutes = () => {
  let auth = { token: false };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export const ModRoutes = () => {
  let modAuth = { token: false };
  return modAuth.token ? <Outlet /> : <Navigate to="/login" />;
};

export const ProfRoutes = () => {
  let profAuth = { token: false };
  return profAuth.token ? <Outlet /> : <Navigate to="/login" />;
};
