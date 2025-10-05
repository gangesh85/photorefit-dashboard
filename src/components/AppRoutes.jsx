import { Navigate, Route, Routes } from "react-router";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute";
import Orders from "./Orders";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Navigate to="/orders" />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
