import useRepos from '../features/repos/hooks/useRepos';
import RepoList from '../features/repos/components/RepoList';
import ErrorMessage from '../shared/components/ErrorMessage';
import LoadingSpinner from '../shared/components/LoadingSpinner';

export default function App() {
  const { repos, loading, error, hasMore, setPage } = useRepos();

  const loadMore = () => setPage((p) => p + 1);

  return (
    <div>
      <h1>Trending Repos</h1>
      {error && <ErrorMessage message={error} />}
      <RepoList repos={repos} hasMore={hasMore} loadMore={loadMore} />
      {loading && repos.length === 0 && <LoadingSpinner />}
    </div>
  );
}
