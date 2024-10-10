import { useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../data/datatablesource";
import { Link } from "react-router-dom";

const Datatable = ({ title }) => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (data) => {
        return (
          <div className="cellAction">
            <Link
              to={`/users/${data.row.username}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(data.row.id)}
            >
              Delete
            </div>
          </div>
        );
      }
    }
  ];
  /*  */ console.log(data);
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {title}
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};
export default Datatable;
