import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogSection = styled.section`
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

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const BlogCard = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const BlogImage = styled.div`
  height: 200px;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${BlogCard}:hover & img {
    transform: scale(1.05);
  }
`;

const BlogDate = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #222;
`;

const BlogExcerpt = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
`;

const ReadMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #007cf0;
  font-weight: 500;
  transition: color 0.3s ease;
  gap: 0.5rem;
  
  &:hover {
    color: #0056b3;
  }
`;

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Lessons from Claude's System Prompt",
      date: "May 13, 2025",
      excerpt: "Fun observations from the purported leak of Claude's system prompt.",
      image: "images/TwoFace.webp",
      slug: "Claude-System-Prompt"
    },
    {
      id: 2,
      title: "On Technical Leadership",
      date: "April 3, 2025",
      excerpt: "Following the graduation of my team of AI apprentices, I reflect on some principles of technical leadership.",
      image: "images/Lighthouse.webp",
      slug: "On-Technical-Leadership"
    },
    {
      id: 3,
      title: "Model Context Protocol",
      date: "April 1, 2025",
      excerpt: "An introduction to the Model Context Protocol (MCP), a link between LLM applications and external data sources.",
      image: "images/MCP.webp",
      slug: "Intro-to-MCP"
    },
  ];
  
  return (
    <BlogSection id="blog">
      <SectionTitle>Latest Blog Posts</SectionTitle>
      <BlogGrid>
        {blogPosts.map((post, index) => (
          <BlogCard
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <BlogImage>
              <img src={post.image} alt={post.title} />
              <BlogDate>{post.date}</BlogDate>
            </BlogImage>
            
            <BlogContent>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              <ReadMoreLink to={`/blog/${post.slug}`}>
                Read More <i className="fas fa-arrow-right"></i>
              </ReadMoreLink>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogSection>
  );
};

export default Blog; 