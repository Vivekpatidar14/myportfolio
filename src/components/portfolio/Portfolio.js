import React from "react";
import IMG1 from "../../assets/img1.jpg";
import IMG2 from "../../assets/img2.png";
import IMG4 from "../../assets/img3.png";
import "./Portfolio.css";
import LoremIpsum from 'react-lorem-ipsum';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "To Do List ",
      img: IMG1,
      description:
        "Full-stack project: CRUD for tasks & subtasks, user auth, task assignment, filtering, and prioritization with due dates.",
      technologies: "Html | CSS | Javascript | React Js | ",
      link: "",
      github: "https://github.com/Vivekpatidar14/Todolist",
    },
    {
      id: 2,
      title: "Project Title ",
      img: IMG2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: "Technology used",
      link: "",
      github: "https://github.com/Vivekpatidar14",
    },
    {
      id: 3,
      title: "Project Title",
      img: IMG4,
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: "Technology used ",
      link: "",
      github: "https://github.com",
    },
  ];
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {soloProjects.map((pro) => (
            <article className="portfolio__item" key={pro.id}>
              <div className="portfolio__item-image">
                <img src={pro.img} alt={pro.title} />
              </div>
              <div className="portfolio__item-content">
                <h3>{pro.title}</h3>
                <p>{pro.description}</p>
                <p>{pro.technologies}</p>
              </div>
              <div className="portfolio__item-cta">
                <a
                  href={pro.github}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                {/* <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Live Demo
                </a> */}
              </div>
            </article>
          ))}
        </div>
        
      </section>
    </>
  );
};

export default Portfolio;
