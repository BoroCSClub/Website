import React from 'react';
import type { MDXComponents } from 'mdx/types';

// Fall-themed styles
const fallStyles: React.CSSProperties = {
  color: '#D2691E',
  backgroundColor: '#FFFAF0',
  border: '2px solid #8B4513',
  padding: '10px',
  borderRadius: '5px',
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  fontSize: '1.1em',
  margin: '20px',
};

const fallHeadingStyles: React.CSSProperties = {
  color: '#8B4513',
  fontSize: '2em',
  marginTop: '20px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  letterSpacing: '1px',
  textAlign: 'center',
};

const ThemedParagraph: React.FC<React.HTMLProps<HTMLParagraphElement>> = (props) => {
  return <p style={fallStyles} {...props} />;
};

const ThemedHeading1: React.FC<React.HTMLProps<HTMLHeadingElement>> = (props) => {
  return <h1 style={fallHeadingStyles} {...props} />;
};

const ThemedHeading2: React.FC<React.HTMLProps<HTMLHeadingElement>> = (props) => {
  return <h2 style={fallHeadingStyles} {...props} />;
};

const ThemedLi: React.FC<React.HTMLProps<HTMLLIElement>> = (props) => {
  return <li style={fallStyles} {...props} />;
};

// Function to customize all markdown files with fall theme
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: ThemedParagraph,
    h1: ThemedHeading1,
    h2: ThemedHeading2,
    li: ThemedLi,
    ...components,
  };
}