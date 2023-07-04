import "./doubleBarGraph.scss";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Chart = ({ aspect, title, data,datakey }) => {
  return (
    <div className="line">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
      <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={datakey }/>
          <YAxis />
          <Tooltip />
          <Legend />
           <Bar dataKey="female" fill="#8884d8" />     
          <Bar dataKey="male" fill="#82ca9d" />       
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
