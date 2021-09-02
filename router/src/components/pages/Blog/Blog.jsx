import { Link, withRouter } from 'react-router-dom';
import { blogData } from './blogData';

const BlogView = ({ location }) => {
console.log('🚀 ~ file: Blog.jsx ~ line 5 ~ BlogView ~ location', location)

  return (
    <div>
      <h3>Свежие посты:</h3>
      <ul>
        {blogData?.map(({ title, description, author, alias }) => (
          <li key={alias}>
            <div>
              <h4>{title}</h4>
              <p>{description}</p>
              <Link to={`/blog/${alias}`}>Подробнее</Link>
              <p>{author}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Blog = withRouter(BlogView);