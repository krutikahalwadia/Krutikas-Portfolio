import React, { useContext,useEffect, useRef } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import girl from "../../img/girl.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Resume from './resume.pdf';
import Typed from "typed.js"; 
import Experience from "../Experience/Experience";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
      
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Krutika Halwadia</span>

          <span style={{ color: darkMode ? "white" : "" }}>
          Frontend Developer with extensive experience in web design and development, specializing in creating responsive, user-friendly interfaces.<br/>
          Proven track record of delivering high-quality, efficient code and ensuring optimal performance across multiple platforms and devices.<br/>
          Adept at translating design concepts into seamless, interactive web experiences while maintaining a focus on accessibility, user experience (UX).<br/>
          Strong proficiency in modern frontend technologies including HTML5, CSS3, JavaScript, and popular frameworks like React. <br/>
          Dedicated to producing top-notch work, ensuring pixel-perfect designs, fast loading times, and seamless integration with backend systems.<br/>
          </span>
        </div>
  
        <a href={Resume} download className="button1 ">
                  <button className="button s-button">Download CV</button>
        </a>
      <Experience/>
        {/* social icons */}
       
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={girl} alt="" style={{ width: '214px' }} />
        
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          // src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "53%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          {/* <FloatinDiv img={thumbup} text1="Best Design" text2="Award" /> */}
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>

      </div>

    </div>
  );
};

export default Intro;
