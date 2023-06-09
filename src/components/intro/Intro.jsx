import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me.jpg";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>7 months</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>6 Completed Projects</small>
            </article>
          </div>
          <p>
          Currently i am a  backend developer traniee at FunctionUp.
As a Backend Developer, I specialize in designing and implementing server-side applications that power web and mobile applications.  I'm passionate about creating reliable and scalable solutions that meet the needs of end-users.

My technical expertise includes proficiency in several programming languages such as [JS] and [JAVA],  as well as experience working with various databases such as [MONGODB] and [Database 2]. I also have experience with several web frameworks such as [Framework 1] and [Framework 2], and I'm constantly exploring new technologies to improve my skills and stay up-to-date with industry trends.

During my traning, I have worked on several projects, ranging from building RESTful APIs to developing large-scale data-driven applications.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
