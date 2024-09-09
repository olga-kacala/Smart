import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer with correct elements', () => {
  render(<Footer />);

  const githubLink = screen.getByTitle('My GH');
  expect(githubLink).toBeInTheDocument();

  const linkedinLink = screen.getByTitle('My LinkedIn');
  expect(linkedinLink).toBeInTheDocument();
  
  expect(githubLink.parentElement).toHaveAttribute('href', 'https://github.com/olga-kacala');

  expect(linkedinLink.parentElement).toHaveAttribute('href', 'https://www.linkedin.com/in/olga-kacala/');
});
