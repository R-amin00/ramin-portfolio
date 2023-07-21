import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router/Routes/Routes";

function App() {
  return (
    <div className="bg-home-pattern min-h-screen">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
