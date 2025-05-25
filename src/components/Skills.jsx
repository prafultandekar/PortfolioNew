import React from 'react';
import './style/Skill.css';

function Education() {
  return (
    <section id="education" className="education-section">
      <h2>Education & Experience</h2>

      <div className="edu-exp">
        <div className="edu">
          <h3>🎓 Education</h3>
          <p><strong>B.E. Mechanical Engineering</strong><br />Nagpur University</p>
        </div>

        <div className="exp">
          <h3>💼 Experience</h3>
          <p><strong>Sutradhar Consultancy Pvt Ltd (6 months)</strong><br />
          Worked on real-time projects & gained hands-on software development experience.</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
