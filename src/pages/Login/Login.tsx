import { useContext } from "react";
import { AppContext } from "../../contexts/app.context";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setIsAuthenticated } = useContext(AppContext);

  const navigate = useNavigate();
  return (
    <div>
      Login
      <button
        onClick={() => {
          setIsAuthenticated(true);
          localStorage.setItem("isAuthenticated", "true");
          navigate("/");
        }}
      >
        Login
      </button>
    </div>
  );
}
