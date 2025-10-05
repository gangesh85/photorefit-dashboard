import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Login() {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async () => {
    setStatus("Authenticating...");

    try {
      let response = await fetch("http://localhost:3001/login", {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: { "content-type": "application/json" },
      });

      let userData = await response.json();
      let user = JSON.stringify(userData.user);

      if (userData.auth) {
        localStorage.setItem("user", user);
        localStorage.setItem("token", userData.auth);
        setStatus("Login success ✅ Redirecting...");
        setTimeout(() => navigate("/"), 800); // short delay so user sees success
      } else {
        setStatus("Invalid credentials ❌");
      }
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    }
  };

  return (
    <div className="register">
      <h2>Login Page</h2>

      {/* Status message */}
      {status && <p>{status}</p>}

      <input
        type="text"
        id="email"
        name="email"
        placeholder="Enter Email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter Password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p className="tagLine">
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}
