import "./Chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function BasicCharts(props) {
    const DataKey = props.dataKey;
 
    return (
        <div className="Chart">
            <div className="ChartTitle">{props.title}</div>
            <ResponsiveContainer width="99%" aspect={4 / 1}>
                <LineChart
                    width={500}
                    height={300}
                    data={props.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="5 5" stroke="#333333fa"/>
                    <XAxis dataKey="month" stroke="#333"/>
                    <YAxis stroke="#333"/>
                    <Tooltip />
                    <Legend />
                    {
                        DataKey.map((value, key) => (
                            <Line key={key} type="monotone" dataKey={value} stroke={'#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')} />
                        ))
                    }

                </LineChart>
            </ResponsiveContainer>
        </div>

    )
}
