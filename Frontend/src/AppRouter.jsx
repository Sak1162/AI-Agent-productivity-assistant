import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import DailyPlanner from "./pages/DailyPlanner";
import AIAssistant from "./pages/AIAssistant";
import Settings from "./pages/Settings";
import PlanMyDay from "./pages/PlanMyDay";
import AddTask from "./pages/AddTask";
import TodayCalendar from "./pages/TodayCalendar";
import Profile from "./pages/Profile";
import PersonalSpace from "./pages/PersonalSpace";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />

          {/* Daily Planner */}
          <Route path="/planner" element={<DailyPlanner />} />

          {/* Plan My Day */}
          <Route path="/plan-my-day" element={<PlanMyDay />} />

          <Route path="/assistant" element={<AIAssistant />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/plan-my-day" element={<PlanMyDay />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/today" element={<TodayCalendar />} />

          <Route path="/profile" element={<Profile />} />
        <Route path="/personal" element={<PersonalSpace />} />
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}