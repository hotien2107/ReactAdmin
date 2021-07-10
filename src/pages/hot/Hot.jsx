import "./Hot.css"
import HotTable from "./HotTable"


export default function Hot() {
    return (
        <div className="Hot">
            <div className="HotTitle">Top category</div>
            <div className="HotContainer">
                <div className="HotItem">
                    <div className="HotItemTitle">Top Racket</div>
                    <HotTable />
                </div>
                <div className="HotItem mr20 ml20">
                    <div className="HotItemTitle">Top Staff</div>
                    <HotTable />
                </div>
                <div className="HotItem">
                    <div className="HotItemTitle">Top Customer</div>
                    <HotTable />
                </div>
            </div>
        </div>
    )
}
