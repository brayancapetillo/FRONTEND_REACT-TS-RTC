import { Outlet } from "react-router-dom";
import Sideconfig from "../configuration/sideconfig/Sideconfig";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

function Dashboard() {
  return (
    <div className="relative flex">
      <Sidebar />
      <Sideconfig />
      <main className="w-full">
        <Navbar />
        <section className="relative flex h-[calc(100vh-65px)] overflow-y-auto pb-10 pl-12 pr-12 pt-10">
          <div className="container mx-auto">
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
