import "./Products.css"
import { DataGrid } from '@material-ui/data-grid';
import { Search, DeleteForever } from "@material-ui/icons"
import { RacketList } from "../../data/RacketList";
import { Link } from "react-router-dom";

export default function Products() {
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            resizable: true,
            width: 90
        },
        {
            field: 'racket',
            headerName: 'Racket name',
            resizable: true,
            width: 300
        },
        {
            field: 'amount',
            headerName: 'Amount',
            resizable: true,
            width: 130
        },
        {
            field: 'price',
            headerName: 'Price',
            resizable: true,
            width: 120
        },
        {
            field: 'brand',
            headerName: 'Brand',
            resizable: true,
            width: 150,
        },
        {
            field: 'transactions',
            headerName: 'Transactions',
            resizable: true,
            width: 160
        },
        {
            field: 'action',
            headerName: 'Action',
            resizable: true,
            width: 160,
            renderCell: (params) => (
                <div className="ProductsIcon">
                    <Link to={"/Product/" + params.row.id} className="Link">
                        <Search className="ProductsIconEdit" />
                    </Link>
                    <DeleteForever className="ProductsIconDelete" />
                </div>
            )
        },
    ];


    return (
        <div className="Products">
            <div className="ProductsContainer">

                <div className="ProductsTitle">
                Products List
                </div>
                <DataGrid
                    rows={ RacketList }
                    disableSelectionOnClick columns={columns}
                    pageSize={7}
                    checkboxSelection
                    className="ProductsTable"
                />
            </div>
        </div>
    )
}
