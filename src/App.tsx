import "./App.css";
import useRouteElement from "./hooks/useRouteElements";

function App() {
  const routeElements = useRouteElement();

  return <div>{routeElements}</div>;
}

export default App;
