import "./Users.css"
import { DataGrid } from '@material-ui/data-grid';
import { Edit, DeleteForever } from "@material-ui/icons"
import { UserList } from "../../data/UserList";
import { Link } from "react-router-dom";

export default function Users() {
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'user',
            headerName: 'User',
            width: 250,
            renderCell: (params) => {
                return (
                    <div className="UserInfo">
                        <img src={params.row.avt} alt="" className="UserAvt" />
                        {params.row.user}
                    </div>
                )
            }
        },
        {
            field: 'mail',
            headerName: 'Mail',
            width: 300
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
            renderCell: (params) => {
                if (params.row.status === 'Active') {
                    return (
                        <div className={"UserStatus " + params.row.status}>
                            {params.row.status}
                        </div>
                    )
                }
                return (
                    <div className={"UserStatus " + params.row.status}>
                        {params.row.status}
                    </div>
                )
            }

        },
        {
            field: 'transactions',
            headerName: 'Transactions',
            width: 160
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => (
                <div className="UserIcon">
                    <Link to={"/User/" + params.row.id} className="Link">
                        <Edit className="UserIconEdit" />
                    </Link>
                    <DeleteForever className="UserIconDelete" />
                </div>
            )
        },
    ];


    return (
        <div className="Users">
            <div className="UsersContainer">

                <div className="UsersTitle">
                    User List
                </div>
                <DataGrid
                    rows={UserList}
                    disableSelectionOnClick columns={columns}
                    pageSize={7}
                    checkboxSelection
                    className="UsersTable"
                />
            </div>
        </div>
    )
}
