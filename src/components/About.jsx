import React from 'react';
import './style/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>

      <div className="about-content">
        {/* Professional Summary */}
        <div className="summary">
          <p>
            Hi, I'm <strong>Praful Tandekar</strong>, a passionate and self-driven frontend developer with a background in Mechanical Engineering.
            I transitioned into tech with hands-on experience building real-world projects like E-Commerce App, Notes App, Todo App, and a Full Stack Blog Platform.
            I specialize in React, JavaScript, and have backend experience with Node.js, Express, and MongoDB.
          </p>
          <p>
            My goal is to create impactful digital experiences and constantly grow as a developer. I love solving real-world problems through code and design.
          </p>
        </div>

        {/* Skills Section */}
        <div className="skills">
          <h3>Skills</h3>
          <div className="skills-list">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Redux</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Git</span>
            <span>REST APIs</span>
            <span>LocalStorage</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
