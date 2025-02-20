// import classes from "./Services.module.css";

// function ServicesPage() {
//   return (

//     <div className={classes.servicesBody}>
//       <section>
//         <h1 className={classes.servicesHeader}>The OV Way</h1>
//         <ul className={classes.servicesUL}>
//           <div className={classes.servicesULHeader}>
//             Daily recommendations and monitoring so you can stay on track!
//           </div>
//           <li>
//             <span>In-depth, daily meal plan recommendations and feedback</span>
//           </li>
//           <li>
//             <span>Daily habit and goal recommendations and feedback</span>
//           </li>
//           <li>
//             <span>Sleep optimization suggestions and monitoring</span>
//           </li>
//           <li>
//             <span>Stress reduction strategies</span>
//           </li>
//           <li>
//             <span>Daily exercise and resistance training programs</span>
//           </li>
//         </ul>
//         <ul className={classes.servicesUL}>
//           <div className={classes.servicesULHeader}>Free consultation</div>
//           <li>
//             <span>
//               Learn about client needs and discuss possible strategies
//             </span>
//           </li>
//         </ul>
//         <ul className={classes.servicesUL}>
//           <div className={classes.servicesULHeader}>
//             4, 6, and 12 months options
//           </div>
//           <li>
//             <span>Flexible to meet client goals</span>
//           </li>
//         </ul>
//         <ul className={classes.servicesUL}>
//           <div className={classes.servicesULHeader}>
//             Weekly check-in meetings to collaborate, improve, and optimize
//           </div>
//           <li>
//             <span>
//               Supportive strategy to find what works best for each individual
//             </span>
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// }

// export default ServicesPage;

import { useState, useEffect, useRef } from "react";
import classes from "./Services.module.css";
import { PopupButton } from "react-calendly";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import CalendarIcon from "../pages/assets/subscriptions/icons/subscription_calendar_icon.svg";
import PolicyIcon from "../pages/assets/subscriptions/icons/subscription_policy_icon.svg";
import ScheduleIcon from "../pages/assets/subscriptions/icons/subscription_schedule_icon.svg";
import TimeIcon from "../pages/assets/subscriptions/icons/subscription_time_icon.svg";
import TimelineIcon from "../pages/assets/subscriptions/icons/subscription_timeline_icon.svg";
import GroupIcon from "../pages/assets/subscriptions/icons/subscription_group_icon.svg";
import AgeGroupIcon from "../pages/assets/subscriptions/icons/subscription_age_group_icon.svg";
import DownloadPDF from "../pages/assets/subscriptions/icons/download_pdf.svg";
import PopupIcon from "../pages/assets/subscriptions/icons/popup_icon.svg";
// import ServicesStore from "../components/services/ServicesStore";
import Sections from "../components/services/Sections";
// import Calendar from "../calendar/Calendar";

//JSON
import ServicesJSON from "./data/servicesJSON.json";

function Services(props) {
  return <Sections />;
}

export default Services;
