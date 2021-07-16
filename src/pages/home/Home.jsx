import "./Home.css"
import Featured from "../../components/Featured/Featured"
import BasicCharts from "../../components/Chart/BasicCharts"
import { chartData } from "../../data/ChartData"
import { featuredData } from "../../data/FeaturedData"
import WidgetLg from "../../components/Widget/Large/WidgetLg"
import WidgetSm from "../../components/Widget/Small/WidgetSm"
import { useState } from "react"



export default function Home() {
    
    const [featured, setFeatured] = useState('Spending');

    function handleFeaturedChange(Featured) {
        setFeatured(Featured);
    }
    function getDataKey() {
        for (let x of featuredData) {
            if(x.title === featured) return x.dataKey;          
        }
    }

    return (
        <div className="Home">
            <div className="HomeTitle">Dashboard</div>
            <Featured featured={featuredData} onFeaturedClick={handleFeaturedChange}/>
            <br/>
            <BasicCharts data={chartData} dataKey={getDataKey()} title={featured} />
            <br/>
            <div className="Widget">

                <WidgetSm addClassName="mr20"/>
                
                <WidgetLg title="Latest transactions"/>

            </div>
        </div>
    )
}
