import React, { useState } from 'react';
import './style/Project.css'; // Style file (below given)

const allProjects = [
  {
    title: 'E-Commerce App',
    desc: 'A fully functional online store built with React.',
    image: '/images/ecommerce.png',
    tech: 'React',
    link: '#',
  },
  {
    title: 'Notes App',
    desc: 'Sticky notes-style app with features like search, edit, tags, pin, and color support.',
    image: '/images/notes.png',
    tech: 'React',
    link: '#',
  },
  {
    title: 'Todo App',
    desc: 'Daily task manager with add, edit, delete, and filters using localStorage.',
    image: '/images/todo.png',
    tech: 'React',
    link: '#',
  },
  {
    title: 'Blog App (Full Stack)',
    desc: 'A full-stack blog platform using React, Node.js, Express, MongoDB with full CRUD and auth.',
    image: '/images/blog.png',
    tech: 'Full Stack',
    link: '#',
  },
];

function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All' ? allProjects : allProjects.filter(p => p.tech === filter);

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {['All', 'React', 'Full Stack'].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={filter === type ? 'active' : ''}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="project-grid">
        {filteredProjects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <img src={proj.image} alt={proj.title} />
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
