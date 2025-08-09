import InfiniteScroll from 'react-infinite-scroll-component';
import RepoCard from './RepoCard';

export default function RepoList({ repos, hasMore, loadMore }) {
  return (
    <InfiniteScroll
      dataLength={repos.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p style={{ textAlign: 'center' }}>No more repos</p>}
    >
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </InfiniteScroll>
  );
}
