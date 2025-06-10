import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// const HeroSection = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   min-height: 80vh;
//   text-align: center;
//   padding: 2rem;
// `;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  padding: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #007cf0, #00dfd8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #666 // #666; 
  max-width: 600px;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Button = styled(motion.a)`
  padding: 0.8rem 2rem;
  background-color: #007cf0;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background-color: #0070e0;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hello, I'm [Your Name].
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        [Your professional tagline or description goes here].
      </Subtitle>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button
          href="#blog"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Posts
        </Button>
      </motion.div>
    </HeroSection>
  );
};

export default Hero; 