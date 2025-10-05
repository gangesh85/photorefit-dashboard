import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

export default function PrivateRoute() {
  const [user, setUser] = useState(false);
  const [token, setToken] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      setToken(true);
      setUser(true);
    }
  }, []);

  return user && token ? <Outlet /> : <Navigate to="/login" />;
}
