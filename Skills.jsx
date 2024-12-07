import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      className="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="skills-section">
        <h1>Skills</h1>

        <h2>Technical Skills</h2>
        <p>
          <strong>Programming Languages:</strong> Python, Java, C++, JavaScript (React, Node.js), HTML, CSS
        </p>
        <p>
          <strong>Database Management:</strong> SQL, NoSQL (MySQL, MongoDB)
        </p>
        <p>
          <strong>Cloud Technologies:</strong> AWS, Azure
        </p>
        <p>
          <strong>Frameworks & Tools:</strong> Git, Bootstrap, TensorFlow
        </p>
        <p>
          <strong>Version Control:</strong> Git, GitHub, GitLab
        </p>
        <p>
          <strong>Data Structures & Algorithms</strong>
        </p>

        <h2>Non-Technical Skills</h2>
        <p>Leadership & Team Collaboration</p>
        <p>Critical Thinking & Problem-Solving</p>
        <p>Effective Communication (Written & Verbal)</p>
        <p>Mentoring & Coaching</p>
        <p>Project Management & Time Management</p>

        <h2>Degrees</h2>
        <p>Bachelor of Science in Computer Science</p>
        <p>Associate of Science in Computer Science</p>
        <p>Associate of Science in Mathematics</p>
        <p>Associate of Science for Transfer in Physics</p>
        <p>Associate of Arts in Interdisciplinary Studies: Mathematics and Science</p>
        <p>Associate of Arts in Interdisciplinary Studies: Human Expression</p>
        <p>Associate of Arts in Interdisciplinary Studies: Social Sciences</p>
      </section>
    </motion.div>
  );
};

export default Skills;
