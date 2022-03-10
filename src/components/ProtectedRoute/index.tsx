import { Navigate, useLocation } from "react-router";
import React, { FunctionComponent } from "react";

interface Props {
  children: any;
  shouldRedirect?: boolean;
  redirectTo: string;
}

const ProtectedRoute: FunctionComponent<Props> = (props) => {
  const { children, shouldRedirect, redirectTo } = props;
  const location = useLocation();
  return shouldRedirect ? (
    <Navigate to={redirectTo} state={{ from: location }} replace />
  ) : (
    children
  );
};

export default ProtectedRoute;
