import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const BlogPostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #007cf0;
  font-weight: 500;
  margin-bottom: 2rem;
  gap: 0.5rem;
  
  &:hover {
    color: #0056b3;
  }
`;

const BlogHeader = styled.header`
  margin-bottom: 2.5rem;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  color: #666;
  font-size: 0.95rem;
`;

const BlogDate = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BlogAuthor = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FeaturedImage = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 2.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// BlogContent with markdown-specific styling
const BlogContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #333;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  h2 {
    font-size: 1.8rem;
    margin: 2.5rem 0 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    margin: 2rem 0 1rem;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.2rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
  
  code {
    background-color: #f5f5f5;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: monospace;
  }
  
  pre {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 5px;
    overflow-x: auto;
    margin-bottom: 1.5rem;
    
    code {
      background-color: transparent;
      padding: 0;
    }
  }
  
  blockquote {
    border-left: 4px solid #007cf0;
    padding-left: 1rem;
    margin-left: 0;
    margin-bottom: 1.5rem;
    font-style: italic;
    color: #555;
  }

  /* Markdown-specific styles */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.5rem;
    font-size: 0.9rem; /* Smaller font size */
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 0.5rem;
    text-align: left;
  }
  
  th {
    background-color: #f5f5f5;
  }
  
  /* Ensure multiple line breaks are handled */
  br + br {
    content: "";
    margin-top: 1rem;
  }
`;

const BlogPostPage = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState({
    title: '',
    date: '',
    author: '',
    image: '',
  });

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/posts/${slug}.md`)
      .then((res) => res.text())
      .then((text) => {
        // const metadataMatch = text.match(/---\n([\s\S]*?)\n---/);

        // Use \r?\n to match both Unix and Windows line endings
        const metadataMatch = text.match(/---\r?\n([\s\S]*?)\r?\n---/);

        let extractedMetadata = {};
        let markdownContent = text;

        if (metadataMatch) {
          // const metaString = metadataMatch[1];
          // markdownContent = text.replace(metadataMatch[0], '');

          const metaString = metadataMatch[1];
          markdownContent = text.replace(metadataMatch[0], '');
          
          metaString.split('\n').forEach((line) => {
            const [key, value] = line.split(': ');
            extractedMetadata[key.trim()] = value.trim();
          });

          setMetadata({
            title: extractedMetadata.title || 'Untitled Post',
            date: extractedMetadata.date || 'Unknown Date',
            author: extractedMetadata.author || 'Anonymous',
            image: extractedMetadata.image || 'https://via.placeholder.com/1200x600',
          });
        }
        
        setContent(markdownContent);
      })
      .catch((err) => console.error('Error loading markdown file:', err));
  }, [slug]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BlogPostContainer>
        <BackLink to="/blog">
          <i className="fas fa-arrow-left"></i> Back to Blog
        </BackLink>
        
        <BlogHeader>
          <BlogTitle>{metadata.title}</BlogTitle>
          <BlogMeta>
            <BlogDate>
              <i className="far fa-calendar"></i> {metadata.date}
            </BlogDate>
            <BlogAuthor>
              <i className="far fa-user"></i> {metadata.author}
            </BlogAuthor>
          </BlogMeta>
        </BlogHeader>
        
        <FeaturedImage>
          <img src={metadata.image} alt={metadata.title} />
        </FeaturedImage>
        
        <BlogContent>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {content}
          </ReactMarkdown>
        </BlogContent>
      </BlogPostContainer>
    </motion.div>
  );
};

export default BlogPostPage;