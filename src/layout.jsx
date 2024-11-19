import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

import CategoryFilters from "./components/CategoryFilters";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className="relative">
      <div className="flex flex-col max-h-[100dvh] overflow-auto">
        <Header />
        <CategoryFilters toggleSidebar={toggleSidebar} />
        {children}
      </div>
      <Sidebar open={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
}
export default Layout;