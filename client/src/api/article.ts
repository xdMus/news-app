import { http } from './setup';
import { createNewsPostParams } from '../model/api';

export const createNewsPost = async (params: createNewsPostParams) => {
  return http.post('/article/create', params);
};

export const getAllArticles = async () => {
  return http.get('/article/get');
};

export const getArticleById = async (id: string) => {
  return http.get(`/article/get/${id}`);
};

//пора делать бэк
