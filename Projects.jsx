import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A sleek and responsive personal portfolio website built with React and Framer Motion.',
      link: '/' 
    },
    {
      title: 'AI Pacman',
      description: 'An AI-powered Pacman game that uses pathfinding algorithms to navigate a maze.',
      link: '/projects/pacman-ai' 
    },
    {
      title: 'VitaMatch',
      description: 'A web application connecting individuals to health solutions.',
      link: 'https://vitamatch.netlify.app'
    },
    {
      title: 'Build Your Own World',
      description: 'A 2D world generator created in Java, allowing dynamic environment creation.',
      link: '/projects/build-world'
    }
  ];

  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="projects-section">
        <h1>Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target={project.link.startsWith('http') ? '_blank' : '_self'}
                rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="project-link"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
