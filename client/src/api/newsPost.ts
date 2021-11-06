import { http } from './setup';
import { createNewsPostParams } from '../model/api';

export const createNewsPost = async (params: createNewsPostParams) => {
  return http.post('/post/create', params);
};

export const getNewsPostById = async (id: string) => {
  return http.get<NewsPost>(`/post/getbyid/${id}`);
};

//пора делать бэк
