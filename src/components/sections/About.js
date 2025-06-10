import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 5rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(to right, #007cf0, #00dfd8);
  }
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Container for image effects - fixed vertical alignment
const AboutImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  position: relative;
  height: 100%;
  width: 100%;
`;


// Card that will flip
const FlipCard = styled(motion.div)`
  width: 300px;
  height: 300px;
  cursor: pointer;
  position: relative;
  transform-style: preserve-3d;
  z-index: 1;
`;

// Shared styles for both sides of the card
const CardFace = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 50%;
  border: 5px solid #f0f0f0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CardFront = styled(CardFace)`
  transform: rotateY(0deg);
`;

const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 1.5rem;
`;

const SkillsContainer = styled(motion.div)`
  margin-top: 2rem;
`;

const SkillsTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const Skill = styled(motion.span)`
  background-color: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const skills = [
    'Reinforcement Learning', 'Generative AI', 'Large Language Models', 
    'Computer Vision', 'Data Analytics', 'Data Visualisation', 'Signal Processing', 
    'Python', 'React', 'PyTorch', 'SQL', 'Docker', 'Kubernetes', 'Amazon Web Services', 
    'Microsoft Azure', 'Google Cloud Platform', 'Git', 'CI/CD', 'RESTful APIs'
  ];
  
  // Animation for flip effect
  const flipAnimation = {
    rotateY: isFlipped ? 180 : 0,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  };
  
  // Hover bounce animation
  const bounceTransition = {
    y: {
      duration: 0.4, // 0.4
      type: "spring",
      stiffness: 300, // 300
      damping: 15 // 10
    }
  };

  return (
    <AboutSection id="about">
      <SectionTitle>About Me</SectionTitle>
      <AboutContainer>
        <AboutImageContainer
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >         
          <FlipCard
            onClick={() => setIsFlipped(!isFlipped)}
            animate={flipAnimation}
            whileHover={{ y: -40 }}
            transition={bounceTransition}
          >
            <CardFront>
              <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: '#999'
              }}>
                Photo
              </div>
            </CardFront>
            <CardBack>
              <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#e0e0e0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: '#999'
              }}>
                Alt Photo
              </div>
            </CardBack>
          </FlipCard>
        </AboutImageContainer>
        
        <AboutContent>
          <AboutText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            [Your professional background and interests go here].
          </AboutText>
          
          <AboutText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            [Describe your career transition and current focus areas]. 
          </AboutText>

          <AboutText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Currently based at [Your Location/Company], work-related information can be viewed on
            my <a href="[Your LinkedIn URL]" target="_blank" rel="noopener noreferrer">LinkedIn</a> profile.
          </AboutText>
          
          <SkillsContainer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <SkillsTitle>Skills & Technologies</SkillsTitle>
            <SkillsList>
              {skills.map((skill, index) => (
                <Skill
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </Skill>
              ))}
            </SkillsList>
          </SkillsContainer>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;