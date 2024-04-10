import { RouterProvider } from "react-router-dom";
import { routes } from "./router/app.routing";
import Configuration from "./components/configuration/configuration/Configuration";

function App() {

  return (
    <div
      className={`dark:bg-main_dark`}
    >
      <Configuration />
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
