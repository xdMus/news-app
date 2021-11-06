import React, { useEffect, useState } from 'react';
import { getNewsPostById } from '../../api/newsPost';
import { useParams, useRouteMatch } from 'react-router-dom';

const PostPage = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const fetchData = async () => {
    const { id } = useParams<{ id: string }>();
    const response = await getNewsPostById(id);
    // потом стейты привязать
  };

  useEffect(() => {}, []);

  return <div></div>;
};

export default PostPage;
