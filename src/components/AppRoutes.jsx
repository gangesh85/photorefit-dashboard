import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import PageNotFound from "./PageNotFound";
import Orders from "./Orders";
import Login from "./Login";
import Signup from "./Signup";
import PrivateRoute from "./PrivateRoute";

const Profile = lazy(() => import("./Profile"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
