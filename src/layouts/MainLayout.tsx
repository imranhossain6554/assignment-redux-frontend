
import Navbar from "../components/ui/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="py-2">
        <Outlet />
      </div>
    </div>
  );
}
