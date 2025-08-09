/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RepoCard from '../../src/features/repos/components/RepoCard';

const mockRepo = {
  name: 'test-repo',
  html_url: 'https://github.com/test/test-repo',
  description: 'A test repository',
  stargazers_count: 1500,
  owner: {
    login: 'testuser',
    avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
  },
};

test('renders repo title and link', () => {
  render(<RepoCard repo={mockRepo} />);
  const link = screen.getByRole('link', { name: /test-repo/i });
  expect(link).toHaveAttribute('href', mockRepo.html_url);
});

test('renders repo description', () => {
  render(<RepoCard repo={mockRepo} />);
  expect(screen.getByText(/a test repository/i)).toBeInTheDocument();
});

test('renders star count', () => {
  render(<RepoCard repo={mockRepo} />);
  expect(screen.getByText(/1.5k/i)).toBeInTheDocument();
});
