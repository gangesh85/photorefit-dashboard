import { Link, useNavigate } from "react-router";

export default function NavBar() {
  const navigate = useNavigate();

  const auth = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    auth && (
      <nav>
        <Link className="linkStyle" to="/profile">
          Profile
        </Link>
        <Link className="linkStyle" to="/orders">
          Orders
        </Link>
        <Link className="linkStyle" onClick={logout} to="/login">
          Logout
        </Link>
      </nav>
    )
  );
}
