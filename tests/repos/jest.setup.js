import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

Object.defineProperty(import.meta, 'env', {
  value: {
    VITE_GITHUB_TOKEN: import.meta.env.VITE_GITHUB_TOKEN 
  }
});