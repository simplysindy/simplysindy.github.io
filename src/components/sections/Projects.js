import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

const ProjectsSection = styled.section`
  padding: 5rem 0;
  // background-color: #f9f9f9;
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

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4rem; // 0 2rem;
`;

const ProjectDisplay = styled.div`
  position: relative;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem; 
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  height: 350px;
  width: 80%; // 350px
  perspective: 1000px;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ProjectDescription = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ProjectTag = styled.span`
  background-color: #f0f0f0;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid #007cf0;
  border-radius: 4px;
  text-decoration: none;
  color: #007cf0;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #007cf0;
    color: white;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'Sample Project 1',
      description: 'Description of your first project. Replace this with details about your own work.',
      image: 'images/placeholder1.jpg',
      tags: ['React', 'Node.js', 'MongoDB'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Sample Project 2',
      description: 'Description of your second project. Add your own project details here.',
      image: 'images/placeholder2.jpg',
      tags: ['Python', 'Machine Learning', 'Data Science'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Sample Project 3',
      description: 'Description of your third project. Customize with your own projects.',
      image: 'images/placeholder3.jpg',
      tags: ['JavaScript', 'API', 'Web Development'],
      liveLink: '#',
      githubLink: '#'
    },
  ];

  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };


  // Pre-calculate random rotations to avoid expensive calculations on every render
  const [randomRotations] = useState(() => 
    projects.map(() => Math.floor(Math.random() * 21) - 10)
  );

  const isActive = (index) => {
    return index === active;
  };

  return (
    <ProjectsSection id="projects">
      <SectionTitle>Hackathons and Projects</SectionTitle>
      <ProjectsContainer>
        <ProjectDisplay>
          <div>
            <ProjectImageContainer>
              <AnimatePresence>
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotations[index],
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotations[index],
                      zIndex: isActive(index)
                        ? 40
                        : projects.length + 2 - index,
                      // Simplified bounce effect
                      y: isActive(index) ? -20 : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotations[index],
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    style={{
                      position: 'absolute',
                      inset: 0, // This sets top, right, bottom, left all to 0
                      originY: 1, // Sets transform origin to bottom
                      borderRadius: '15px',
                      overflow: 'hidden',
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '15px',
                      }} 
                      draggable={false}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </ProjectImageContainer>
          </div>

          <ProjectContent>
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <ProjectTitle>{projects[active].title}</ProjectTitle>
              <ProjectDescription>
                {projects[active].description}
              </ProjectDescription>
              
              <ProjectTags>
                {projects[active].tags.map((tag, i) => (
                  <ProjectTag key={i}>{tag}</ProjectTag>
                ))}
              </ProjectTags>
              
              <ProjectLinks>
                <ProjectLink href={projects[active].liveLink} target="_blank" rel="noopener noreferrer">
                  News
                </ProjectLink>
                <ProjectLink href={projects[active].githubLink} target="_blank" rel="noopener noreferrer">
                  View Code
                </ProjectLink>
              </ProjectLinks>
            </motion.div>

            <NavigationButtons>
              <NavButton 
                onClick={handlePrev} 
                className="group/button"
              >
                <IconArrowLeft
                  className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12"
                />
              </NavButton>
              <NavButton 
                onClick={handleNext}
                className="group/button"
              >
                <IconArrowRight
                  className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12"
                />
              </NavButton>
            </NavigationButtons>
          </ProjectContent>
        </ProjectDisplay>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;