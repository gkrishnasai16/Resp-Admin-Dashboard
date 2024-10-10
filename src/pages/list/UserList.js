import { Outlet } from "react-router-dom";
import Datatable from "../../components/datatable/Datatable";
import "./list.scss";

const UserList = () => {
  return (
    <>
      <Datatable title="Ajouter un User" />
      <Outlet />
    </>
  );
};
export default UserList;
