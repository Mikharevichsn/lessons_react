/* eslint-disable react/jsx-props-no-spreading */
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ children, redirectUrl = '/login', ...rest }) => {
  const user = useSelector((state) => state.user);
  return (
    <Route {...rest}>
      {user ? children : <Redirect to={redirectUrl} />}
    </Route>
  );
};
