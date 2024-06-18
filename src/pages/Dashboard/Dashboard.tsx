import { useContext } from "react";
import { AppContext } from "../../contexts/app.context";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { setIsAuthenticated } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div>
      Dashboard
      <button
        onClick={() => {
          setIsAuthenticated(false);
          localStorage.removeItem("isAuthenticated");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}
