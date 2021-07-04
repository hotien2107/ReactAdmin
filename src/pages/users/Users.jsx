import "./Users.css"
import { DataGrid } from '@material-ui/data-grid';
import {Edit, DeleteForever} from "@material-ui/icons"

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
            width: 300, 
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
                if(params.row.status === 'Active'){
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
            renderCell: () => (
                <div className="UserIcon">
                    <Edit className="UserIconEdit"/>
                    <DeleteForever className="UserIconDelete"/>
                </div>
            )
        },
    ];

    const rows = [
        { id: 1, user: 'Snow', avt: 'https://i.imgur.com/e121Kzu.jpg', mail: 'Jon@gmail.com', status: 'Active', transactions: 121.00 },
        { id: 2, user: 'Lannister', avt: 'https://i.imgur.com/e121Kzu.jpg', mail: 'Cersei@gmail.com', status: 'Active', transactions: 120.00 },
        { id: 3, user: 'Lannister', avt: 'https://i.imgur.com/e121Kzu.jpg', mail: 'Jaime@gmail.com', status: 'Inactive', transactions: 120.00 },
        { id: 4, user: 'Stark', avt: 'https://i.imgur.com/e121Kzu.jpg', mail: 'Arya@gmail.com', status: 'Active', transactions: 120.00 },
        { id: 5, user: 'Targaryen', avt: 'https://i.imgur.com/e121Kzu.jpg', mail: 'Daenerys@gmail.com', status: 'Active', transactions: 120.00 },
        { id: 6, user: 'Melisandre', avt: 'https://i.imgur.com/e121Kzu.jpg', mail: null, status: 'Active', transactions: 120.00 },
        { id: 7, user: 'Clifford', avt: 'https://i.imgur.com/e121Kzu.jpg', mail: 'Ferrara@gmail.com', status: 'Inactive', transactions: 120.00 },
        { id: 8, user: 'Frances', avt: 'https://i.imgur.com/e121Kzu.jpg', mail: 'Rossini@gmail.com', status: 'Active', transactions: 120.00 },
        { id: 9, user: 'Roxie', avt: 'https://i.imgur.com/e121Kzu.jpg', mail: 'Harvey@gmail.com', status: 'Inactive', transactions: 120.00 },
        { id: 10, user: 'Roxie', avt: 'https://i.imgur.com/e121Kzu.jpg', mail: 'Harvey@gmail.com', status: 'Inactive', transactions: 120.00 },
        { id: 11, user: 'Snow', avt: 'https://i.imgur.com/e121Kzu.jpg', mail: 'Jon@gmail.com', status: 'Active', transactions: 121.00 },
        { id: 12, user: 'Lannister', avt: 'https://i.imgur.com/e121Kzu.jpg', mail: 'Cersei@gmail.com', status: 'Active', transactions: 120.00 },
        { id: 13, user: 'Lannister', avt: 'https://i.imgur.com/e121Kzu.jpg', mail: 'Jaime@gmail.com', status: 'Inactive', transactions: 120.00 },
        { id: 14, user: 'Stark', avt: 'https://i.imgur.com/e121Kzu.jpg', mail: 'Arya@gmail.com', status: 'Active', transactions: 120.00 },
        { id: 15, user: 'Targaryen', avt: 'https://i.imgur.com/e121Kzu.jpg', mail: 'Daenerys@gmail.com', status: 'Active', transactions: 120.00 },
        { id: 16, user: 'Melisandre', avt: 'https://i.imgur.com/e121Kzu.jpg', mail: null, status: 'Active', transactions: 120.00 },
        { id: 17, user: 'Clifford', avt: 'https://i.imgur.com/e121Kzu.jpg', mail: 'Ferrara@gmail.com', status: 'Inactive', transactions: 120.00 },
        { id: 18, user: 'Frances', avt: 'https://i.imgur.com/e121Kzu.jpg', mail: 'Rossini@gmail.com', status: 'Active', transactions: 120.00 },
        { id: 19, user: 'Roxie', avt: 'https://i.imgur.com/e121Kzu.jpg', mail: 'Harvey@gmail.com', status: 'Inactive', transactions: 120.00 },
    ];
    return (
        <div className="Users">
            <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
        </div>
    )
}
