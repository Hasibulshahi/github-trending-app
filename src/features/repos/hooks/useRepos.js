import { useState, useEffect } from 'react';
import { fetchRepos } from '../api/github';

export default function useRepos() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    let cancel = false;
    setLoading(true);
    setError(null);

    fetchRepos(page)
      .then((items) => {
        if (!cancel) {
          setRepos((prev) => [...prev, ...items]);
          setHasMore(items.length > 0);
        }
      })
      .catch((err) => !cancel && setError(err))
      .finally(() => !cancel && setLoading(false));

    return () => {
      cancel = true;
    };
  }, [page]);

  return { repos, loading, error, hasMore, setPage };
}
