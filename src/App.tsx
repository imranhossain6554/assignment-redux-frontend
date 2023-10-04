import { onAuthStateChanged } from "firebase/auth";
import MainLayout from "./layouts/MainLayout";
import { auth } from "./lib/firebase"; 
import { useAppDispatch } from "./redux/hooks";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(true));
      }
    });
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <MainLayout />
    </>
  );
}

export default App;
