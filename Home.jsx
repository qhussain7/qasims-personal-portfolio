import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="intro">
        <div className="bio">
          <h1>Qasim Hussain</h1>
          <p>"No man ever steps in the same river twice, for it's not the same river and he's not the same man."</p>
          <p className="intro-text">
            I am a dedicated software engineer specializing in web and mobile app development. 
            With a passion for crafting innovative solutions, I turn ideas into reality through clean, efficient code. 
            Explore my portfolio to see how I combine creativity and technical expertise to bring impactful projects to life.
          </p>
        </div>
        <motion.div
          className="profile-pic"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/349ProfilePic.png" alt="Profile Picture" className="profile-img" />
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
