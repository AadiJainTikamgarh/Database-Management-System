import React from "react";
import DataTable from "./Components/DataTable";
import { RouterProvider } from "react-router-dom";
import {router} from "./Router/Route.jsx";

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
