import axios from 'axios';
import { GITHUB_BASE_URL, REPOS_PER_PAGE } from '../../../constants/api';
import { tenDaysAgoDate } from '../utils/date';

export async function fetchRepos(page = 1) {
  const date = tenDaysAgoDate();
  const url = `${GITHUB_BASE_URL}/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}&per_page=${REPOS_PER_PAGE}`;

  const headers = {};
  if (import.meta.env.VITE_GITHUB_TOKEN) {
    headers['Authorization'] = `token ${import.meta.env.VITE_GITHUB_TOKEN}`;
  }

  try {
    const { data } = await axios.get(url, { headers });
    return data.items || [];
  } catch (err) {
    throw err.response?.data?.message || err.message;
  }
}
