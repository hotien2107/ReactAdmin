import "./Analytics.css"
import PieCharts from "../../components/Chart/PieCharts"
import CustomShapeBarChart from "../../components/Chart/CustomShapeBarChart"
import { RacketAnalytics } from "../../data/RacketAnalytics"
import BarCharts from "../../components/Chart/BarCharts";
import WidgetLg from "../../components/Widget/Large/WidgetLg";
import { staffData } from "../../data/ChartData";


export default function Analytics() {
    return (
        <div className="Analytics">
            <div className="AnalyticsBrandsAndRacket">
                <div className="AnalyticsTitle">Brands and Racket</div>
                <PieCharts title="Brands Chart" dataKey="value" />
                <br />
                <BarCharts data={RacketAnalytics} dataKey={"month"} title="Racket sales in recent months" />

            </div>
            <div className="AnalyticsUsers ml20">
                <div className="AnalyticsTitle">Staff and Users</div>

                <CustomShapeBarChart data={staffData} title="Staff Chart" dataKeyXAxis="name" dataKeyBar="sales" />
                <br />
                <WidgetLg />
            </div>
        </div>
    )
}
