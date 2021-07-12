import "./Staff.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteForever, Search } from "@material-ui/icons"
import { StaffList } from "../../data/StaffList";
import { Link } from "react-router-dom";

export default function Staff() {
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'user',
            headerName: 'Staff',
            width: 250,
            renderCell: (params) => {
                return (
                    <div className="StaffInfo">
                        <img src={params.row.avt} alt="" className="StaffAvt" />
                        {params.row.name}
                    </div>
                )
            }
        },
        {
            field: 'position',
            headerName: 'Position',
            width: 300
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
            renderCell: (params) => {
                if (params.row.status === 'Active') {
                    return (
                        <div className={"StaffStatus " + params.row.status}>
                            {params.row.status}
                        </div>
                    )
                }
                return (
                    <div className={"StaffStatus " + params.row.status}>
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
                <div className="StaffIcon">
                    <Link to={"/Staff/" + params.row.id} className="Link">
                        <Search className="StaffIconEdit" />
                    </Link>
                    <DeleteForever className="StaffIconDelete" />
                </div>
            )
        },
    ];


    return (
        <div className="Staff">
            <div className="StaffContainer">
                <div className="StaffTitle">
                    Staff List
                </div>
                <DataGrid
                    rows={StaffList}
                    disableSelectionOnClick columns={columns}
                    pageSize={7}
                    checkboxSelection
                    className="StaffTable"
                />
            </div>
        </div>
    )
}
