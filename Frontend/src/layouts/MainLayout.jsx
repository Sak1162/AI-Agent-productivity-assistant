import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <main
        className={`min-h-screen transition-all duration-300 ${
          collapsed ? "ml-[82px]" : "ml-[250px]"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}