import "./Home.css"
import Featured from "../../components/Featured/Featured"
import Chart from "../../components/Chart/Chart"
import { chartData } from "../../data/ChartData"
import { featuredData } from "../../data/FeaturedData"
import WidgetLg from "../../components/Widget/Large/WidgetLg"
import WidgetSm from "../../components/Widget/Small/WidgetSm"


export default function Home() {
    return (
        <div className="Home">
            <Featured data={featuredData}/>
            <Chart data={chartData}/>
            <div className="Widget">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
