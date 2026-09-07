import { useEffect, useState } from "react";
import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  FiGrid,
  FiCheckSquare,
  FiCalendar,
  FiMessageSquare,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
  FiZap,
} from "react-icons/fi";

export default function Sidebar({
  collapsed = false,
  setCollapsed = () => {},
}) {
  const navigate = useNavigate();

  const [activeSpace, setActiveSpace] = useState(
    localStorage.getItem("activeSpace") || "workspace"
  );

  useEffect(() => {
    const handleWorkspaceChange = (event) => {
      setActiveSpace(event.detail);
    };

    window.addEventListener(
      "workspaceChanged",
      handleWorkspaceChange
    );

    return () => {
      window.removeEventListener(
        "workspaceChanged",
        handleWorkspaceChange
      );
    };
  }, []);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: FiGrid,
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: FiCheckSquare,
    },
    {
      name: "Daily Planner",
      path: "/planner",
      icon: FiCalendar,
    },
    {
      name: "AI Assistant",
      path: "/assistant",
      icon: FiMessageSquare,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: FiSettings,
    },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-[#E8E5DE] bg-white transition-all duration-300 ${
        collapsed ? "w-[82px]" : "w-[250px]"
      }`}
    >
      {/* Logo */}
      <div
        className={`flex h-[74px] items-center border-b border-[#EEEAE2] ${
          collapsed
            ? "justify-center px-3"
            : "justify-between px-5"
        }`}
      >
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E3EDDF] text-[#587052]">
            <FiZap className="text-lg" />
          </div>

          {!collapsed && (
            <div className="min-w-0">
              <h1 className="truncate text-[16px] font-semibold tracking-tight text-[#292D32]">
                FocusAgent
              </h1>

              <p className="mt-0.5 truncate text-[10px] font-medium uppercase tracking-[0.14em] text-[#9A9B98]">
                Productivity AI
              </p>
            </div>
          )}
        </div>

        {!collapsed && (
          <button
            type="button"
            onClick={() => setCollapsed(true)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#9A9B98] transition hover:bg-[#F7F5F0] hover:text-[#55595E]"
            aria-label="Collapse sidebar"
          >
            <FiChevronLeft className="text-lg" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-5">
        {!collapsed && (
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A8A69F]">
            {activeSpace === "personal"
              ? "Personal Space"
              : "Workspace"}
          </p>
        )}

        <div className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                title={collapsed ? item.name : ""}
                className={({ isActive }) =>
                  `group relative flex h-11 items-center rounded-xl transition-all ${
                    collapsed
                      ? "justify-center px-0"
                      : "gap-3 px-3"
                  } ${
                    isActive
                      ? "bg-[#E3EDDF] text-[#50654B]"
                      : "text-[#777A7F] hover:bg-[#F7F5F0] hover:text-[#292D32]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      className={`shrink-0 text-[18px] ${
                        isActive
                          ? "text-[#587052]"
                          : "text-[#8D8F92] group-hover:text-[#55595E]"
                      }`}
                    />

                    {!collapsed && (
                      <span className="truncate text-[13px] font-semibold">
                        {item.name}
                      </span>
                    )}

                    {collapsed && (
                      <span className="pointer-events-none absolute left-[66px] z-50 whitespace-nowrap rounded-lg bg-[#292D32] px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                        {item.name}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Bottom */}
      <div className="border-t border-[#EEEAE2] p-3">
        {!collapsed ? (
          <>
            {/* AI Card */}
            <div className="mb-3 rounded-xl border border-[#D9CBE8] bg-[#FBF9FC] p-4">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E8E0F1] text-[#69577B]">
                  <FiZap className="text-sm" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#3C4045]">
                    AI Assistant
                  </p>

                  <p className="mt-0.5 text-[10px] text-[#9A9B98]">
                    Ready to help
                  </p>
                </div>
              </div>

              <p className="text-[11px] leading-5 text-[#777A7F]">
                Ask me to plan, prioritize or organize your work.
              </p>

              <NavLink
                to="/assistant"
                className="mt-3 flex h-8 items-center justify-center rounded-lg bg-[#E8E0F1] text-[11px] font-semibold text-[#69577B] transition hover:bg-[#DDD2E8]"
              >
                Ask AI
              </NavLink>
            </div>

            {/* User Profile */}
            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="group flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left transition hover:bg-[#F7F5F0]"
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                  activeSpace === "personal"
                    ? "bg-[#E8E0F1] text-[#69577B]"
                    : "bg-[#DCE9F3] text-[#47677B]"
                }`}
              >
                U
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-[#3B3F44]">
                  User
                </p>

                <p className="mt-0.5 truncate text-[10px] text-[#999A96]">
                  {activeSpace === "personal"
                    ? "Personal Space"
                    : "Work Workspace"}
                </p>
              </div>

              <FiChevronRight className="shrink-0 text-sm text-[#B0AEA8] opacity-0 transition group-hover:opacity-100" />
            </button>
          </>
        ) : (
          <>
            {/* Collapsed AI */}
            <NavLink
              to="/assistant"
              title="AI Assistant"
              className="group relative mb-2 flex h-11 items-center justify-center rounded-xl bg-[#E8E0F1] text-[#69577B]"
            >
              <FiZap className="text-lg" />

              <span className="pointer-events-none absolute left-[66px] z-50 whitespace-nowrap rounded-lg bg-[#292D32] px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                AI Assistant
              </span>
            </NavLink>

            {/* Collapsed Profile */}
            <button
              type="button"
              onClick={() => navigate("/profile")}
              title="Profile"
              className="group relative mb-2 flex h-11 w-full items-center justify-center rounded-xl transition hover:bg-[#F7F5F0]"
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold ${
                  activeSpace === "personal"
                    ? "bg-[#E8E0F1] text-[#69577B]"
                    : "bg-[#DCE9F3] text-[#47677B]"
                }`}
              >
                U
              </div>

              <span className="pointer-events-none absolute left-[66px] z-50 whitespace-nowrap rounded-lg bg-[#292D32] px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                User ·{" "}
                {activeSpace === "personal"
                  ? "Personal Space"
                  : "Work Workspace"}
              </span>
            </button>

            {/* Expand */}
            <button
              type="button"
              onClick={() => setCollapsed(false)}
              className="group relative flex h-11 w-full items-center justify-center rounded-xl text-[#8D8F92] transition hover:bg-[#F7F5F0] hover:text-[#55595E]"
              aria-label="Expand sidebar"
            >
              <FiChevronRight className="text-lg" />

              <span className="pointer-events-none absolute left-[66px] z-50 whitespace-nowrap rounded-lg bg-[#292D32] px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                Expand sidebar
              </span>
            </button>
          </>
        )}
      </div>
    </aside>
  );
}