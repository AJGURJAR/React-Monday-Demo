import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  AiOutlineFileText,
  AiOutlineArrowRight,
} from "react-icons/ai";
import {
  HiOutlineChartSquareBar
} from "react-icons/hi";
import{
  CiViewColumn,
  CiPlug1
} from "react-icons/ci";
import{
  RiLayoutLeftLine
} from "react-icons/ri";
import {
  FaRobot
} from "react-icons/fa";
import {
  TiPuzzleOutline
} from "react-icons/ti";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ReactTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    {
      label: "Boards",
      icon: <RiLayoutLeftLine className="icons my-2"/>,
      text: "Everything starts with a visual board — the core of monday.com Work OS. Tailor it your way and manage anything from projects to departments.",
      videourl: "http://techslides.com/demos/sample-videos/small.webm",
    },
    {
      label: "Views",
      icon: <CiViewColumn className="icons my-2"/>,
      text: "Visualize and plan your work more efficiently with multiple views: Kanban board, calendar, timeline, Gantt chart, and more.",
      videourl: "http://techslides.com/demos/sample-videos/small.webm",
    },
    {
      label: "Dashboards",
      icon: <HiOutlineChartSquareBar className="icons my-2"/>,
      text: "Get the insights you need to make decisions with confidence. Keep track of progress, timelines, and budgets with custom dashboards.",
      videourl: "http://techslides.com/demos/sample-videos/small.webm",
      refr: "/",
    },
    {
      label: "Integrations",
      icon: <CiPlug1 className="icons my-2"/>,
      text: "Connect monday.com with all your favorite tools and get more work done. Integrate Slack, Dropbox, Adobe Creative Cloud, and more.",
      videourl: "http://techslides.com/demos/sample-videos/small.webm",
      refr: "/",
    },
    {
      label: "Automations",
      icon: <FaRobot className="icons my-2"/>,
      text: "Streamline processes to focus on the work that matters. Choose from a variety of automation recipes or create your own in minutes.",
      videourl: "http://techslides.com/demos/sample-videos/small.webm",
      refr: "/",
    },
    {
      label: "Apps",
      icon: <TiPuzzleOutline className="icons my-2"/>,
      text: "Expand the capabilities of your Work OS with monday apps. Enhance your workflows with custom views, widgets, integrations, and more.",
      videourl: "http://techslides.com/demos/sample-videos/small.webm",
      refr: "/",
    },
    {
      label: "Docs",
      icon: <AiOutlineFileText className="icons my-2"/>,
      text: "Transform text into action items, in just a few clicks. Connect, collaborate, and execute ideas and workflows in real-time from any doc.",
      videourl: "http://techslides.com/demos/sample-videos/small.webm",
      refr: "/",
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          border: 1,
          borderColor: "divider",
          display: "flex",
          flexDirection: "row",
          width: "fit-content",
          borderRadius: "10px",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className="shadow my-4"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textTransform: "none",
                    margin: "5px"
                  }}
                >
                  {tab.icon}
                  {tab.label}
                </div>
              }
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={value} index={index} className="py-5">
          <div className="row">
            <div className="col-md-7 col-lg-6 offset-1 col-10 my-5">
              <div className="video-div">
                <video
                  src={tab.videourl}
                  autoPlay
                  muted
                  controls={false}
                  loop={true}
                  className="shadow rounded border"
                />
              </div>
            </div>
            <div className="col-md-3 col-10">
              <div
                className="info-div"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "left",
                  padding: "30px",
                  height: "100%",
                }}
              >
                <div>
                  <h3 className="py-3" style={{ color: "#1976d2"}}>
                    <span className="mx-2">{tab.icon}</span>
                    {tab.label}
                  </h3>
                  <p>{tab.text}</p>
                  {tab.refr != null ? (
                    <a href={tab.refr} className="py-4">
                      Learn more <AiOutlineArrowRight />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      ))}
    </Box>
  );
}
