import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import DataTable from "../Components/DataTable";
import OrgInfo from "../Pages/OrgInfo";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<DataTable />} />
      <Route path="orginfo" element={<OrgInfo />} />
    </Route>
  )
);

