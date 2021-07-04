import "./Chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart(props) {
    return (
        <div className="Chart">
            <div className="ChartTitle">Revenue</div>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
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
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Mouse" stroke="#3C5186" />
                    <Line type="monotone" dataKey="Keypad" stroke="#D62AD0" />
          
                </LineChart>
            </ResponsiveContainer>
        </div>

    )
}
