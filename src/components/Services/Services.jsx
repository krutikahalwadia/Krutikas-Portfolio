import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Works from "../Works/Works"; // Adjust the path based on your project structure
// import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My </span>
        <span>Experties</span>
        <span>
        <Works /> 
        </span>
        {/* <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a> */}
        {/* <Link to="contact" smooth={true} spy={true}>
                  <button className="button i-button">Hire me</button>
        </Link> */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          animate={{ left: "14rem" }} // Ensures it stays at the final position
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={["Image editing", "Video editing"]}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          animate={{ left: "14rem" }} // Ensures it stays at the final position
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Technical Skills"}
            detail={["Html", "Css", "JavaScript", "React", "Nodejs", "Express"]}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          animate={{ left: "14rem" }} // Ensures it stays at the final position
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Software"}
            detail={
              ["Dreamviewer", "Visual studio", "Adobe photoshop", "Adobe affter effect"]
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        {/* fourth card */}
        <motion.div
          initial={{ left: "10rem", top: "12rem" }}
          whileInView={{ left: "30rem" }}
          animate={{ left: "14rem" }} // Ensures it stays at the final position
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Tools"}
            detail={["MS-office", "Github", "Chat-GPT"]}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
