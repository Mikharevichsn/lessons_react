import { Link, useParams } from 'react-router-dom';
import { blogData } from './blogData';

export const BlogDetail = () => {
  const { slug } = useParams();
  console.log('🚀 ~ file: BlogDetail.jsx ~ line 5 ~ BlogDetail ~ slug', slug)

  const newsObj = blogData?.find((el) => el.alias === slug) || {};
  const { title, text } = newsObj;
  console.log('🚀 ~ file: BlogDetail.jsx ~ line 9 ~ BlogDetail ~ newsObj', newsObj)

  return (
    <div>
      <h3>{title || 'Новость не найдена'}</h3>
      <p>{text}</p>
      <Link to='/blog'>Назад</Link>
    </div>
  );
};
