import "./reports.scss"
import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import SmallStackedBar from "../../components/smallstackedBar/SmallStackedBar"
import DoubleBarGraph from "../../components/doubleBarGraph/DoubleBarGraph";
import PositiveAndNegativeBarChart from "../../components/positiveAndNegativeBarChart/PositiveAndNegativeBarChart";
import { Link } from "react-router-dom";
import Line from "../../components/line/Line";
import Pie_Chart from "../../components/PieChart/PieChart";
import AreaChart from "../../components/chart/Chart";




const PayEquityofFemales = [
  {
    name: '2017',
    female: 1398,
    male: 4000,
    amt: 2400,
  },
  {
    name: '2018',
    female: 1398,
    male: 3000,
    amt: 2210,
  },
  {
    name: '2019',
    female: 2000,
    male: 9800,
    amt: 2290,
  },
  {
    name: '2020',
    female: 2780,
    male: 3908,
    amt: 2000,
  },
  {
    name: '2021',
    female: 1890,
    male: 4800,
    amt: 2181,
  },
  {
    name: '2022',
    female: 2390,
    male: 3800,
    amt: 2500,
  },
  {
    name: '2023',
    female: 3490,
    male: 4300,
    amt: 2100,
  },
];

const femaleEmployeeSaticfaction = [
  { name: 'Male', value: 50 },
  { name: 'Female', value: 20 },
  { name: 'Neutral', value: 30 },
];

const femalepromotion = [
  { name: "2017", Total: 1200 },
  { name: "2018", Total: 2100 },
  { name: "2019", Total: 800 },
  { name: "2020", Total: 1600 },
  { name: "2021", Total: 900 },
  { name: "2022", Total: 1700 },
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



function Reports() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="womanparrise" />
          <Widget type="femalesatisfaction" />
          <Widget type="femaleparticipation" />
          <Widget type="femalesinexecroles" />
        </div>
        
        
        <div className="charts">
          <Line title="Pay Equity of Females" data={PayEquityofFemales} aspect={2 /1  } />
          <Pie_Chart title="Female Employee Satisfaction" data={femaleEmployeeSaticfaction} aspect={2 /1  } />
        </div>
       
        <div className="charts">
        <DoubleBarGraph title="Female Participation in Developement and Taining Programs" data={femaleparticipationintraining} aspect={2 /1  } />
        <AreaChart title="Female Promotion by Year" data={femalepromotion} aspect={2 /1  } />
        </div>


      </div>
    </div>
  )
}

export default Reports