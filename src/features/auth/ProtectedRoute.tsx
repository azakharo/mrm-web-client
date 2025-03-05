import {FC, PropsWithChildren} from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from '@features/auth';

import {ROUTE__LOGIN} from '@shared/constants';

// The idea was taken from here:
// https://www.robinwieruch.de/react-router-private-routes/
export const ProtectedRoute: FC<PropsWithChildren> = ({children}) => {
  const {isAuthenticated} = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={ROUTE__LOGIN} replace />;
  }

  // By using React Router's Outlet component instead of React's children prop,
  // you can use the ProtectedRoute component as Layout component.
  return children || <Outlet />;
};
