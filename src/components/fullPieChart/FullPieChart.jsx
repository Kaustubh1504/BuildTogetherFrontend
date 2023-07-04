import "./fullPieChart.scss";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#1298c7', '#e64676', '#E0E0E0'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
const x = cx + radius * Math.cos(-midAngle * RADIAN);
const y = cy + radius * Math.sin(-midAngle * RADIAN);

return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    {`${(percent * 100).toFixed(0)}%`}
    </text>
);
};


const Full_Pie_Chart = ({ aspect, title,data }) => {
return (
    <div className="fullPieChart">
    <div className="title">{title}</div>
    <ResponsiveContainer width="100%" aspect={aspect}>
        <PieChart width={400} height={400}>
                <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={125}
                innerRadius={0}
                fill="#8884d8"
                dataKey="value"
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
                <Legend/>
            </PieChart>
    </ResponsiveContainer>
    </div>
);
};

export default Full_Pie_Chart;