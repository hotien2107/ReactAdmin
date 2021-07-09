import "./Home.css"
import Featured from "../../components/Featured/Featured"
import BasicCharts from "../../components/Chart/BasicCharts"
import { chartData } from "../../data/ChartData"
import { featuredData } from "../../data/FeaturedData"
import WidgetLg from "../../components/Widget/Large/WidgetLg"
import WidgetSm from "../../components/Widget/Small/WidgetSm"


export default function Home() {
    const DataKey = ["Racket", "String"];
    return (
        <div className="Home">
            <Featured data={featuredData}/>
            <div className="p20">
                <BasicCharts data={chartData} dataKey={DataKey} title="Revenue"/>
            </div>
            <div className="Widget">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
