import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import Woman2Icon from '@mui/icons-material/Woman2';
import SchoolIcon from '@mui/icons-material/School';
import LineAxisIcon from '@mui/icons-material/LineAxis';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ComputerIcon from '@mui/icons-material/Computer';
import PersonIcon from '@mui/icons-material/Person';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "TotalEmp":
      data = {
        title: "TOTAL EMPLOYEES",
        isMoney: false,
        link: "See all users",
        icon: (
          <Woman2Icon
            className="icon"
            style={{
              color: "crimson",
            }}
          />
        ),
      };
      break;
    case "Totolwom":
      data = {
        title: "TOTAL WOMEN",
        isMoney: false,
        link: "View all orders",
        icon: (
          <LineAxisIcon
            className="icon"
            style={{
              
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "NewHire":
      data = {
        title: "TOTAL HIRED",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <Woman2Icon
            className="icon"
            style={{color: "crimson" }}
          />
        ),
      };
      break;
    case "TotalCampuses":
      data = {
        title: "TOTAL CAMPUSES",
        isMoney: true,
        link: "See details",
        icon: (
          <SchoolIcon
            className="icon"
            style={{
              color: "purple",
            }}
          />
        ),
      };
      break;

    case "noofempFromReferrals":
      data = {
        title: "FROM REFERRALS",
        isMoney: false,
        link: "See all users",
        icon: (
          <Woman2Icon
            className="icon"
            style={{
              color: "crimson",
            }}
          />
        ),
      };
      break;

    case "noemployeesfromcampuses":
      data = {
        title: "FROM CAMPUSES",
        isMoney: false,
        link: "View all orders",
        icon: (
          <SchoolIcon
            className="icon"
            style={{
              
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "empfromvendors":
      data = {
        title: "FROM VENDORS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <Woman2Icon
            className="icon"
            style={{color: "crimson" }}
          />
        ),
      };
      break;
    case "TotalCampuses":
      data = {
        title: "TOTAL CAMPUSES",
        isMoney: true,
        link: "See details",
        icon: (
          <SchoolIcon
            className="icon"
            style={{
              color: "purple",
            }}
          />
        ),
      };
      break;
    case "aptiround":
      data = {
        title: "APTITUDE ROUND",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <PsychologyIcon
            className="icon"
            style={{color: "crimson" }}
          />
        ),
      };
      break;
    case "techround":
      data = {
        title: "TECHNICAL ROUND",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <ComputerIcon
            className="icon"
            style={{color: "goldenrod" }}
          />
        ),
      };
      break;
    case "hrround":
      data = {
        title: "HR ROUND",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <PersonIcon
            className="icon"
            style={{color: "crimson" }}
          />
        ),
      };
      break;
    case "hiringpaneldiversity":
      data = {
        title: "HIRING PANEL DIVERSITY",
        isMoney: true,
        link: "See details",
        icon: (
          <PersonIcon
            className="icon"
            style={{
              color: "purple",
            }}
          />
        ),
      };
      break;
    case "womanparrise":
      data = {
        title: "FEMALE RISE IN SALARY",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <Woman2Icon
            className="icon"
            style={{color: "crimson" }}
          />
        ),
      };
      break;
    case "femalesatisfaction":
      data = {
        title: "FEMALE SATISFACTION",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <EmojiEmotionsIcon
            className="icon"
            style={{color: "goldenrod" }}
          />
        ),
      };
      break;
    case "femaleparticipation":
      data = {
        title: "FEMALE TRAINING PARTICIPATION",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <LocalLibraryIcon
            className="icon"
            style={{color: "crimson" }}
          />
        ),
      };
      break;
    case "femalesinexecroles":
      data = {
        title: "FEMALES IN EXECUTIVE ROLES",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <SchoolIcon
            className="icon"
            style={{color: "purple" }}
          />
        ),
      };
      break;
    case "expectedtotalemployees":
      data = {
        title: "EXPECTED TOTAL EMPLOYEES",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <PersonIcon
            className="icon"
            style={{color: "crimson" }}
          />
        ),
      };
      break;
    case "expectedriseinfemaleemployees":
      data = {
        title: "EXPECTED RISE IN FEMALE EMPLOYEES",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <Woman2Icon
            className="icon"
            style={{color: "goldenrod" }}
          />
        ),
      };
      break;
    case "totalresignations":
      data = {
        title: "TOTAL RESIGNATIONS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <DoNotDisturbIcon
            className="icon"
            style={{color: "crimson" }}
          />
        ),
      };
      break;
            

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {amount}
        </span>
        <span className="link"></span>
      </div>
      <div className="right">
        {/* <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div> */}
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={9} />
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
