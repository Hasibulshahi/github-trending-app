/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RepoList from '../../src/features/repos/components/RepoList';

const mockRepos = [
  {
    id: 1,
    name: 'Repo1',
    html_url: '#',
    description: 'First repo',
    stargazers_count: 1000,
    owner: { login: 'user1', avatar_url: '#' },
  },
  {
    id: 2,
    name: 'Repo2',
    html_url: '#',
    description: 'Second repo',
    stargazers_count: 2000,
    owner: { login: 'user2', avatar_url: '#' },
  },
];

test('renders multiple repos', () => {
  render(<RepoList repos={mockRepos} hasMore={false} loadMore={() => {}} />);
  expect(screen.getByText(/Repo1/i)).toBeInTheDocument();
  expect(screen.getByText(/Repo2/i)).toBeInTheDocument();
});
