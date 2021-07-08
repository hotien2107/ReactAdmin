import "./Products.css"
import { DataGrid } from '@material-ui/data-grid';
import { Search, DeleteForever } from "@material-ui/icons"
import { RacketList } from "../../data/RacketList";
import { Link } from "react-router-dom";

export default function Rackets() {
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'racket',
            headerName: 'Racket name',
            width: 250
        },
        {
            field: 'amount',
            headerName: 'Amount',
            width: 130
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 120
        },
        {
            field: 'brand',
            headerName: 'Brand',
            width: 150,
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
                <div className="RacketIcon">
                    <Link to={"/Racket/" + params.row.id} className="Link">
                        <Search className="RacketIconEdit" />
                    </Link>
                    <DeleteForever className="RacketIconDelete" />
                </div>
            )
        },
    ];


    return (
        <div className="Rackets">
            <div className="RacketsContainer">

                <div className="RacketsTitle">
                Rackets List
                </div>
                <DataGrid
                    rows={ RacketList }
                    disableSelectionOnClick columns={columns}
                    pageSize={7}
                    checkboxSelection
                    className="RacketsTable"
                />
            </div>
        </div>
    )
}
