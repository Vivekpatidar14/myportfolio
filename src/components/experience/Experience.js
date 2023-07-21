import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap ,FaDatabase } from 'react-icons/fa';
import "./Experience.css";

const Experience = () => {
  return (
    <>
      <section id="experience">
        <h5>The Skills I Have</h5>
        <h2>Skills</h2>
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Front-end Development</h3>
            <div className="experience__content">
              <article className="experience__details">
              <FaHtml5  className="experience__details-icon" />
                <h4>HTML</h4>
              </article>
              <article className="experience__details">
              <FaCss3Alt className="experience__details-icon" />
                <h4>CSS</h4>
              </article>
              <article className="experience__details">
              <FaJs  className="experience__details-icon" />
                <h4>JavaScript</h4>
              </article>
              <article className="experience__details">
              <FaReact className="experience__details-icon" />
                <h4>React</h4>
              </article>
              <article className="experience__details">
              <FaBootstrap className="experience__details-icon" />
                <h4>Bootstrap</h4>
              </article>
              <article className="experience__details">
              <FaDatabase className="experience__details-icon" />
                <h4>MySql</h4>
              </article>
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
};

export default Experience;
