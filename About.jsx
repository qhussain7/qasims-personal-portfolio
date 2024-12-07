import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="about-section">
        <h1>About Me</h1>
        <p>
          I am Qasim Hussain, a passionate software engineer with a strong foundation in web development, 
          app development, and various technologies. I am currently pursuing a Bachelor of Science in 
          Computer Science from California State University, Fullerton, where I have consistently been on 
          the Dean's List with a GPA of 3.8.
        </p>
        <p>
          I have experience working as a Software Engineer Intern at Palo Alto Networks, where I contributed 
          to cloud security services and system scalability projects. I also led a team in developing the 
          VitaMatch app, which offers personalized vitamin recommendations.
        </p>
        <p>
          I have six associate degrees, including Computer Science, Mathematics, and Physics, from Fullerton 
          College, where I also served as the President of the MSA and a tutor in Physics and Data Structures.
        </p>
        <h2>Education</h2>
        <p>Bachelor of Science in Computer Science, California State University, Fullerton</p>
        <p>Six Associate Degrees, Fullerton College (Computer Science, Mathematics, Physics, and more)</p>
        
        <h2>Skills</h2>
        <p>Programming Languages: Python, Java, C, C++, HTML/CSS, JavaScript, React, SQL</p>
        <p>Tools: Git, Jira, AWS Lambda, MongoDB, TensorFlow</p>
        <p>Interests: Cloud Computing, AI, Blockchain, Software Ethics</p>

        <a href="/QasimHussain-Resume2025.pdf" download className="resume-btn">Download My Resume</a>
      </section>
    </motion.div>
  );
};

export default About;
