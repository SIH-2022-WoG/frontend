import { Navigate, Outlet } from "react-router-dom";
import { DetermineGroup, isAutheticated } from ".";

export const StudentRoutes = () => {
  let auth = isAutheticated() !== "";
  let isStudent = DetermineGroup() === "student";
  return auth && isStudent ? <Outlet /> : <Navigate to="/login" />;
};

export const ModRoutes = () => {
  let modAuth = isAutheticated() !== "";
  let isMod = DetermineGroup() === "moderator";
  return modAuth && isMod ? <Outlet /> : <Navigate to="/login" />;
};

export const ProfRoutes = () => {
  let profAuth = isAutheticated() !== "";
  let isProf = DetermineGroup() === "professor";
  return profAuth && isProf ? <Outlet /> : <Navigate to="/login" />;
};
