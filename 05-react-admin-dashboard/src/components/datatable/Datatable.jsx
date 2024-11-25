import "./Datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from "../../datatablesource"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


//const [data, setData] = useState(userRows);
//onClick={() => handleDelete(params.row.id)}
// const handleDelete = (id)=>{
//   setData(data.filter((item)=> item.id !== id));
// };


// const actionColumn = [
//   {
//     field: "action",
//     headerName: "Action",
//     width: 200,
//     renderCell: () => {
//       return(
//         <div className="cellAction">
//           <Link to="/users/test">
//           <div className="viewButton" >View</div>
//           </Link>
//           <div className="deleteButton" onClick={() => handleDelete(params.row.id)} >Delete</div>
//         </div>
//       )
//     }
//   }
// ]

function Datatable() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id)=>{    
       setData(data.filter((item)=> item.id !== id))
      
      };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return(
          <div className="cellAction" style={{ textDecoration: "none" }}>
            <Link to="/users/test">
            <div className="viewButton" >View</div>
            </Link>
            <div className="deleteButton" onClick={(e) => handleDelete(params.row.id)} >Delete</div>
          </div>
        )
      }
    }
  ]

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link className="link" to="/users/new" style={{ textDecoration: "none" }}>
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
         checkboxSelection
      />
    </div>
  )
}




export default Datatable