import "./Analytics.css"
import PieCharts from "../../components/Chart/PieCharts"
import CustomShapeBarChart from "../../components/Chart/CustomShapeBarChart"
import { RacketAnalytics } from "../../data/RacketAnalytics"
import BarCharts from "../../components/Chart/BarCharts";


export default function Analytics() {
    return (
        <div className="Analytics">
            <div className="AnalyticsBrandsAndRacket">
                <div className="AnalyticsTitle">Brands and Racket</div>
                <PieCharts title="Brands Chart" dataKey="value"/>
                <br/>
                <BarCharts data={RacketAnalytics} dataKey={"month"} title="Racket sales in recent months" />
                    
            </div>
            <div className="AnalyticsUsers">
            <div className="AnalyticsTitle">Staff and Users</div>
                <CustomShapeBarChart title="Staff Chart" dataKeyXAxis="name" dataKeyBar="sales"/>
            </div>
        </div>
    )
}
