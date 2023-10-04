import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import AllBooks from "../pages/AllBooks";
import PrivateRoute from "./PrivateRoute";
import AddNewBook from "../pages/AddNewBook";
import EditBook from "../pages/EditBook";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/book-details/:id",
        element: (
          <PrivateRoute>
            {" "}
            <BookDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/all-books",
    element: <AllBooks />,
  },
  {
    path: "/add-new-book",
    element: (
      <PrivateRoute>
        <AddNewBook />
      </PrivateRoute>
    ),
  },
  {
    path: "/edit-book/:id",
    element: (
      <PrivateRoute>
        <EditBook />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
