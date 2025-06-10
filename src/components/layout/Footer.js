import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: #f8f8f8;
  text-align: center;
  margin-top: 4rem;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: #333;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #000;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="[Your GitHub URL]" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </SocialLink>
        <SocialLink href="[Your LinkedIn URL]" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </SocialLink>
        <SocialLink href="[Your Social Media URL]" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-square-bluesky"></i>
        </SocialLink>
      </SocialLinks>
      <Copyright>© {currentYear} [Your Name]. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer; 