// API Configuration based on environment
const isDevelopment = process.env.NODE_ENV === 'development';

export const API_CONFIG = {
  baseUrl: isDevelopment
    ? 'http://localhost:8080'
    : 'https://varavu-selavu-backend-952416556244.us-central1.run.app',
};

export const getApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.baseUrl}${endpoint}`;
};
