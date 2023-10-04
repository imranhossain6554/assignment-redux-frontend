// import { ReactNode } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { useAppSelector } from "../redux/hooks";

// interface IProps {
//   children: ReactNode;
// }

// export default function PrivateRoute({ children }: IProps) {
//   const { user, isLoading } = useAppSelector((state) => state.user);

//   const location = useLocation();

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (!user?.email && !isLoading) {
//     return <Navigate to="/login" state={{ from: location }} />;
//   }

//   return children;
// }

import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const PrivateRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const { user } = useAppSelector((state) => state.user);
  console.log(user.email);
  return user.email ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: pathname }} replace />
  );
};

export default PrivateRoute;
