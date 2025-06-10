import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import bibtexParse from 'bibtex-parse-js';

// Styling components
const PublicationsSection = styled.section`
  padding: 5rem 0;
  background-color: #f9f9f9;
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

const PublicationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
`;

const PublicationItem = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    background-color: #f8f8f8;
  }
`;

const PublicationTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #222;
`;

const PublicationAuthors = styled.p`
  font-size: 1rem;
  font-style: italic;
  margin-bottom: 0.5rem;
  color: #555;
`;

const PublicationYear = styled.span`
  font-weight: 600;
  color: #007cf0;
  display: inline-block;
  margin-left: 0.5rem;
`;

const PublicationVenue = styled.p`
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #444;
`;

const PublicationLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const PublicationLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #007cf0;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.div`
  color: #d32f2f;
  text-align: center;
  padding: 2rem;
  background-color: #ffebee;
  border-radius: 8px;
  margin: 2rem auto;
  max-width: 800px;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`;

// Modal overlay and content styling
const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
  display: grid;
  place-items: center;
  overflow-y: auto;
  padding: 2rem 1rem;
`;

const ModalContainer = styled(motion.div)`
  background-color: white;
  border-radius: 12px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const ModalHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
`;

const ModalBody = styled.div`
  padding: 1.5rem;
  overflow-y: auto;
`;

const ModalFooter = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: white;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

const AbstractText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 1.5rem;
`;

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activePublication, setActivePublication] = useState(null);
  const modalRef = useRef(null);
  
  // Helper function to get field value regardless of case
  const getField = (entryTags, fieldName) => {
    // Try uppercase first
    if (entryTags[fieldName.toUpperCase()]) {
      return entryTags[fieldName.toUpperCase()];
    }
    // Then try lowercase
    if (entryTags[fieldName.toLowerCase()]) {
      return entryTags[fieldName.toLowerCase()];
    }
    // Then try capitalized (first letter uppercase)
    const capitalizedField = fieldName.charAt(0).toUpperCase() + fieldName.slice(1).toLowerCase();
    if (entryTags[capitalizedField]) {
      return entryTags[capitalizedField];
    }
    // Field not found
    return null;
  };
  
  // Close modal when clicking outside
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setActivePublication(null);
    }
  };
  
  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActivePublication(null);
      }
    };
    
    if (activePublication) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activePublication]);
  
  useEffect(() => {
    setLoading(true);
    // Fetch the BibTeX file
    fetch('/publications.bib')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch publications: ${response.status} ${response.statusText}`);
        }
        return response.text();
      })
      .then(bibtex => {
        try {
          console.log('BibTeX data received:', bibtex.substring(0, 100) + '...');
          
          // Parse the BibTeX data
          const bibData = bibtexParse.toJSON(bibtex);
          console.log('Parsed BibTeX data:', bibData);
          
          if (!bibData || bibData.length === 0) {
            throw new Error('No publications found in BibTeX file');
          }
          
          // Transform the data to match your component's format
          const formattedPubs = bibData.map((pub, index) => {
            const title = getField(pub.entryTags, 'TITLE');
            const authors = getField(pub.entryTags, 'AUTHOR');
            const journal = getField(pub.entryTags, 'JOURNAL');
            const booktitle = getField(pub.entryTags, 'BOOKTITLE');
            const year = getField(pub.entryTags, 'YEAR');
            const doi = getField(pub.entryTags, 'DOI');
            const url = getField(pub.entryTags, 'URL');
            const abstract = getField(pub.entryTags, 'ABSTRACT');
            
            return {
              id: `pub-${index}`,
              title: title?.replace(/{|}/g, '') || 'Untitled',
              authors: authors?.replace(/{|}/g, '') || 'Unknown',
              venue: journal || booktitle || 'N/A',
              year: year || 'N/A',
              doi: doi || null,
              url: url || null,
              abstract: abstract || 'No abstract available'
            };
          });
          
          // Sort by year, newest first
          formattedPubs.sort((a, b) => {
            if (a.year === 'N/A') return 1;
            if (b.year === 'N/A') return -1;
            return b.year - a.year;
          });
          
          setPublications(formattedPubs);
          setError(null);
        } catch (err) {
          console.error('Error parsing BibTeX:', err);
          setError(`Error parsing publications: ${err.message}`);
        }
      })
      .catch(error => {
        console.error('Error loading publications:', error);
        setError(`Error loading publications: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  
  return (
    <PublicationsSection id="publications">
      <SectionTitle>Publications</SectionTitle>
      
      {loading && <LoadingMessage>Loading publications...</LoadingMessage>}
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      {!loading && !error && publications.length === 0 && (
        <ErrorMessage>No publications found</ErrorMessage>
      )}
      
      {publications.length > 0 && (
        <PublicationsList>
          {publications.map((pub, index) => (
            <PublicationItem
              key={pub.id}
              onClick={() => setActivePublication(pub)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              layoutId={`publication-card-${pub.id}`}
            >
              <PublicationTitle>
                {pub.title}
                {/* <PublicationYear>{pub.year}</PublicationYear> */}
              </PublicationTitle>
              <PublicationAuthors>{pub.authors}</PublicationAuthors>
              <PublicationVenue>{pub.venue},<PublicationYear>{pub.year}</PublicationYear></PublicationVenue>
              <PublicationLinks>
                {pub.doi && (
                  <PublicationLink href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-link"></i> DOI
                  </PublicationLink>
                )}
                
                {pub.url && (
                  <PublicationLink href={pub.url} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-file-pdf" style={{color: "#ff0000",}}></i> PDF
                  </PublicationLink>
                )}
              </PublicationLinks>
            </PublicationItem>
          ))}
        </PublicationsList>
      )}
      
      {/* Modal for showing publication details */}
      <AnimatePresence>
        {activePublication && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOutsideClick}
          >
            <ModalContainer
              ref={modalRef}
              layoutId={`publication-card-${activePublication.id}`}
            >
              <CloseButton onClick={() => setActivePublication(null)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18"></path>
                  <path d="M6 6L18 18"></path>
                </svg>
              </CloseButton>
              
              <ModalHeader>
                <PublicationTitle>
                  {activePublication.title}
                  {/* <PublicationYear>{activePublication.year}</PublicationYear> */}
                </PublicationTitle>
                <PublicationAuthors>{activePublication.authors}</PublicationAuthors>
                <PublicationVenue>{activePublication.venue},<PublicationYear>{activePublication.year}</PublicationYear></PublicationVenue>
              </ModalHeader>
              
              <ModalBody>
                <h4 style={{ marginBottom: '10px', fontSize: '1.1rem', fontWeight: '600' }}>Abstract</h4>
                <AbstractText>{activePublication.abstract}</AbstractText>
              </ModalBody>
              
              <ModalFooter>
                <PublicationLinks>
                  {activePublication.doi && (
                    <PublicationLink href={`https://doi.org/${activePublication.doi}`} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-link"></i> DOI
                    </PublicationLink>
                  )}
                  
                  {activePublication.url && (
                    <PublicationLink href={activePublication.url} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-file-pdf" style={{color: "#ff0000",}}></i> PDF
                    </PublicationLink>
                  )}
                </PublicationLinks>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    backgroundColor: '#007cf0',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}
                  onClick={() => setActivePublication(null)}
                >
                  Close
                </motion.button>
              </ModalFooter>
            </ModalContainer>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </PublicationsSection>
  );
};

export default Publications;

