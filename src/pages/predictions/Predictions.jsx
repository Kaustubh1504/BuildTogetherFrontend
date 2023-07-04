import "./predictions.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React from 'react'
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Line from "../../components/line/Line";
import Pie_Chart from "../../components/PieChart/PieChart";
import AreaChart from "../../components/chart/Chart";
import DoubleBarGraph from "../../components/doubleBarGraph/DoubleBarGraph";
import SmallStackedBar from "../../components/smallstackedBar/SmallStackedBar"
import Table2 from "../../components/table2/Table2"
import DataTable from "../../components/datatable/Datatable"


const demandforecasting = [
  {
    name: '2023',
    female: 1398,
    male: 4000,
    amt: 2400,
  },
  {
    name: '2024',
    female: 1398,
    male: 3000,
    amt: 2210,
  },
  {
    name: '2025',
    female: 2000,
    male: 9800,
    amt: 2290,
  },
  {
    name: '2026',
    female: 2780,
    male: 3908,
    amt: 2000,
  },
];

const femaleEmployeeSaticfaction = [
  { name: 'Male', value: 50 },
  { name: 'Female', value: 20 },
  { name: 'Neutral', value: 30 },
];

const expectednewjoinersbyyear = [
  { name: "2023", Total: 1200 },
  { name: "2024", Total: 2100 },
  { name: "2025", Total: 800 },
  { name: "2026", Total: 1600 },
];

const femaleparticipationintraining = [
  {
    name: 'Manager Coaching',
    female: 1398,
    male: 4000,
    amt: 2400,
  },
  {
    name: 'Peer Coaching',
    female: 1398,
    male: 3000,
    amt: 2210,
  },
  {
    name: 'Cross Training',
    female: 2000,
    male: 9800,
    amt: 2290,
  },
  {
    name: 'MOOCS',
    female: 2780,
    male: 3908,
    amt: 2000,
  }
];

const demandacrossdepartment = [
  {
    name: 'Executives',
    female: 1398,
    male: 4000,
    amt: 2400,
  },
  {
    name: 'Manager',
    female: 1398,
    male: 3000,
    amt: 2210,
  },
  {
    name: 'Professions',
    female: 2000,
    male: 9800,
    amt: 2290,
  },
  {
    name: 'Support',
    female: 2780,
    male: 3908,
    amt: 2000,
  },
  {
    name: 'Interns',
    female: 2780,
    male: 3908,
    amt: 2000,
  },
];



function Predictions() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="expectedtotalemployees" />
          <Widget type="expectedriseinfemaleemployees" />
          <Widget type="totalresignations" />
          <Widget type="TotalCampuses" />
        </div>

        <div className="charts">
          <Line title="Demand Forecasting" data={demandforecasting} aspect={2 /1  } />
          <SmallStackedBar title="Demand Forecasting Across Departments" data={demandacrossdepartment} aspect={2 /1  } />
        </div>
       
        <div className="charts">
        <AreaChart title="Expected New Joiners by Year" data={expectednewjoinersbyyear} aspect={2 /1  } />
        {/* <DoubleBarGraph title="Female Participation in Developement and Taining Programs" data={femaleparticipationintraining} aspect={2 /1  } /> */}
        
        </div>

        <DataTable/>
         
      
      </div>
    </div>
  )
}

export default Predictions