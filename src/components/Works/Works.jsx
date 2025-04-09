import React, { useContext } from "react";
import "./Works.css";
import html from "../../img/html.png";
import css from "../../img/css.png";
import JavaScript from "../../img/javascript.png";
import react from "../../img/react.png";
import photoshop from "../../img/photoshop.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 360 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={html} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={css} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={JavaScript} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={react} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={photoshop} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
