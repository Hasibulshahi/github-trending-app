export default function RepoCard({ repo }) {
  return (
    <div className="repo-card">
      <h2 className="repo-title">
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          {repo.name}
        </a>
      </h2>

      {repo.description && (
        <p className="repo-description">{repo.description}</p>
      )}

      <div className="repo-footer">
        <div className="repo-owner">
          <img
            src={repo.owner.avatar_url}
            alt={repo.owner.login}
            className="owner-avatar"
          />
          <span>{repo.owner.login}</span>
        </div>
        <div className="repo-stars">
          <span className="star-icon">★</span>
          <span>{(repo.stargazers_count / 1000).toFixed(1)}k</span>
        </div>
      </div>
    </div>
  );
}
