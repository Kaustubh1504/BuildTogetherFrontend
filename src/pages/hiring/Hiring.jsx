import "./hiring.scss"
import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import SmallStackedBarGraph from "../../components/smallstackedBar/SmallStackedBar";
import Pie_Chart from "../../components/PieChart/PieChart";
import SimpleBarGraph from "../../components/simpleBarGraph/SimpleBarGraph";
import SmallStackedBar from "../../components/smallstackedBar/SmallStackedBar"
import Full_Pie_Chart from "../../components/fullPieChart/FullPieChart";



const clearedAptitudeRound = [
  { name: 'Male', value: 600 },
  { name: 'Female', value: 400 },
  { name: 'Total', value: 1000 },
];

const clearedTechnicalRound = [
  { name: 'Male', value: 700 },
  { name: 'Female', value: 300 },
  { name: 'Total', value: 1000 },
];

const clearedHRRound = [
  { name: 'Male', value: 400 },
  { name: 'Female', value: 600 },
  { name: 'Total', value: 1000 },
];

const diversityAcrossHiringPanel = [
  {
    name: 'Male',
    uv: 4000,
    amt: 2400,
  },
  {
    name: 'Female',
    uv: 3000,
    amt: 2210,
  }
];



function Hiring() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="aptiround" />
          <Widget type="techround" />
          <Widget type="hrround" />
          <Widget type="hiringpaneldiversity" />
        </div>

        <div className="charts">
          <Full_Pie_Chart title="Cleared Aptitude Round" data={clearedAptitudeRound} aspect={2 /1  } />
          <Pie_Chart title="Cleared Technical Round" data={clearedTechnicalRound} aspect={2 /1  } />
          </div>
          <div className="charts">
          <Full_Pie_Chart title="Cleared HR Round" data={clearedHRRound} aspect={2 /1  } />
          <SimpleBarGraph title="Diversity Across Hiring Panel" data={diversityAcrossHiringPanel} aspect={2 /1} />

          </div>
          {/* <div className="listContainer">
              <div className="listTitle">Suggested Campuses</div>
              <Table/>
          </div> */}
       
      </div>
    </div>
  )
}

export default Hiring