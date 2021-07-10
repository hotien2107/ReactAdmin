import "./Chart.css"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function BarCharts(props) {
    return (
        <div className="Chart">
            <div className="ChartTitle">{props.title}</div>
            <ResponsiveContainer width="99%" aspect={4 / 2}>
                <BarChart
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
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={props.dataKey} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Transactions" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
