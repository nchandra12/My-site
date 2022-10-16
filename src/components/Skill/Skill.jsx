// import React, { useEffect } from "react";
import "./Skill.css";
import ihtml from "../../img/i-html.png";
import icss from "../../img/i-css.png";
import iscss from "../../img/i-scss.png";
import ijs from "../../img/i-js.png";
import its from "../../img/i-ts.png";
import icpp from "../../img/i-c++.png";
import ipy from "../../img/i-python.png";
import inet from "../../img/i-netlify.png";
import ireact from "../../img/i-react.png";
import iboot from "../../img/i-boot.png";
import itail from "../../img/i-tailwind.png";
import imysql from "../../img/i-mysql.png";
import imongo from "../../img/i-mongo.png";
import inode from "../../img/i-node.png";
import igit from "../../img/i-git.png";
import next from "../../img/next.png";


const Skill = () => {
  
  return (
    <div className="skill container section" id="skil" >
      <div className="skills">
          <div className="s-head ">My Skills</div>


          <div className="s-lang ">

            <p>Languages and Tools</p>
            <div className="s-img">
              <img src={ihtml} alt="" />
              <img src={icss} alt="" />
              <img src={ijs} alt="" />
              <img src={its} alt="" />
              <img src={iscss} alt="" />
              <img src={icpp} alt="" />
              <img src={ipy} alt="" />
              <img src={inet} alt="" />
            </div>

            <div className="s-lang">
              <p>Frameworks</p>
              <div className="s-img ">
                <img src={ireact} alt="" />
                <img src={iboot} alt="" />
                <img src={itail} alt="" />
                <img src={next} alt="" className="next"/>
              </div>
            </div>


            <div className="s-row">
              <div className="s-lang">
                <p>Databases</p>
                <div className="s-img">
                  <img src={imysql} alt="" />
                  <img src={imongo} alt="" />
                </div>
              </div>

              <div className="s-lang">
                <p>Others</p>
                <div className="s-img">
                  <img src={inode} alt="" />
                  <img src={igit} alt="" />
                </div>
              </div>
            </div>

            

            




          </div>

       </div>

    </div>
  );
};

export default Skill;