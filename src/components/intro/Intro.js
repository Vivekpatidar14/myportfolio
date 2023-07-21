import React from "react";
import "./Intro.css";

import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/vivek.jpg";
const Intro = () => {
  return (
    <>
      <section id="about">
        <h5>Get to know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={img} alt="Vivek Patidar" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Fresher</h5>
                <small>Eager, Adaptable, and Enthusiastic.</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>3+ Completed Projects</small>
              </article>
            </div>
            <p>
              Passionate and dedicated fresher in Front End Development, skilled
              in JavaScript, React, and Node.js, with hands-on experience
              collaborating with professionals. Enthusiastic about creating
              responsive user interfaces and translating designs into
              high-quality code. Eager to learn, troubleshoot, and improve
              frontend performance to deliver seamless user experiences.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
