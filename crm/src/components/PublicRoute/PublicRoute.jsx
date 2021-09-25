/* eslint-disable react/jsx-props-no-spreading */
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicRoute = ({
  children, needRedirect = false, redirectUrl = '/', ...rest
}) => {
  const user = useSelector((state) => state.user);
  return (
    <Route {...rest}>
      {user && needRedirect ? <Redirect to={redirectUrl} /> : children }
    </Route>
  );
};
