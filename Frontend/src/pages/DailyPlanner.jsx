import { useState } from "react";
import {
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiPlus,
  FiCheck,
  FiZap,
  FiCoffee,
  FiBriefcase,
  FiEdit2,
  FiTrash2,
  FiMoreHorizontal,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function DailyPlanner() {
    const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(7);
  

  const weekDays = [
    { day: "Mon", date: 7 },
    { day: "Tue", date: 8 },
    { day: "Wed", date: 9 },
    { day: "Thu", date: 10 },
    { day: "Fri", date: 11 },
    { day: "Sat", date: 12 },
    { day: "Sun", date: 13 },
  ];

  const tasks = [
    {
      id: 1,
      start: "09:00",
      end: "10:30",
      title: "Complete booking page testing",
      category: "Development",
      duration: "1h 30m",
      priority: "High",
      type: "focus",
    },
    {
      id: 2,
      start: "10:30",
      end: "10:45",
      title: "Coffee Break",
      category: "Break",
      duration: "15 min",
      priority: "Low",
      type: "break",
    },
    {
      id: 3,
      start: "10:45",
      end: "12:00",
      title: "Prepare project documentation",
      category: "Documentation",
      duration: "1h 15m",
      priority: "Medium",
      type: "work",
    },
    {
      id: 4,
      start: "12:00",
      end: "01:00",
      title: "Lunch Break",
      category: "Break",
      duration: "1h",
      priority: "Low",
      type: "break",
    },
    {
      id: 5,
      start: "02:00",
      end: "03:00",
      title: "Review database test cases",
      category: "Testing",
      duration: "1h",
      priority: "Medium",
      type: "work",
    },
    {
      id: 6,
      start: "04:00",
      end: "04:30",
      title: "Client discussion",
      category: "Meeting",
      duration: "30 min",
      priority: "High",
      type: "meeting",
    },
  ];

  const getTaskStyle = (type) => {
    switch (type) {
      case "focus":
        return {
          card: "bg-[#DCE9F3] border-[#C7DCEB]",
          icon: "bg-[#C8DDEA] text-[#47677B]",
        };

      case "break":
        return {
          card: "bg-[#F8EBD8] border-[#EDD9BB]",
          icon: "bg-[#EFDEC3] text-[#806849]",
        };

      case "meeting":
        return {
          card: "bg-[#E8E0F1] border-[#D9CBE8]",
          icon: "bg-[#DCCEE9] text-[#69577B]",
        };

      default:
        return {
          card: "bg-[#E3EDDF] border-[#CFDFCA]",
          icon: "bg-[#D2E2CD] text-[#587052]",
        };
    }
  };

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "High":
        return "bg-[#F4DDDA] text-[#9A5550] border-[#EAC9C5]";

      case "Medium":
        return "bg-[#F7EACB] text-[#8B6A32] border-[#EBD9AA]";

      default:
        return "bg-white/60 text-[#667085] border-white/80";
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <main className="mx-auto w-full max-w-[1500px] px-5 py-6 md:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-1 text-sm font-medium text-[#8B8E94]">
              Monday, 7 September
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-[#292D32] md:text-[34px]">
              Daily Planner
            </h1>

            <p className="mt-2 text-sm text-[#8B8E94]">
              Organize your time and stay focused throughout the day.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
           <button
            type="button"
            onClick={() => navigate("/today")}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#E4E2DC] bg-[#FFFDF8] px-4 text-sm font-semibold text-[#55585E] transition hover:bg-[#F5F1E8]"
            >
            <FiCalendar />
            Today
            </button>

            <button
                type="button"
                onClick={() => navigate("/add-task")}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#292D32] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3B3F45]"
                >
                <FiPlus />
                Add Task
                </button>
          </div>
        </div>

        {/* Week Selector */}
        <section className="rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E7E4DD] bg-white text-[#777A80] transition hover:bg-[#F4F1EA]"
            >
              <FiChevronLeft />
            </button>

            <div className="grid flex-1 grid-cols-7 gap-2">
              {weekDays.map((item) => {
                const active = selectedDate === item.date;

                return (
                  <button
                    key={item.date}
                    type="button"
                    onClick={() => setSelectedDate(item.date)}
                    className={`rounded-xl px-2 py-3 text-center transition ${
                      active
                        ? "bg-[#292D32] text-white shadow-sm"
                        : "text-[#777A80] hover:bg-[#F4F1EA]"
                    }`}
                  >
                    <p
                      className={`text-[10px] font-semibold uppercase tracking-wider ${
                        active ? "text-white/60" : "text-[#AAA7A0]"
                      }`}
                    >
                      {item.day}
                    </p>

                    <p className="mt-1 text-lg font-semibold">{item.date}</p>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E7E4DD] bg-white text-[#777A80] transition hover:bg-[#F4F1EA]"
            >
              <FiChevronRight />
            </button>
          </div>
        </section>

        {/* Summary */}
        <section className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="rounded-2xl border border-[#C7DCEB] bg-[#DCE9F3] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-[#708795]">
                  Planned Tasks
                </p>

                <p className="mt-2 text-2xl font-semibold text-[#354D5B]">
                  06
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/50 text-[#47677B]">
                <FiCalendar />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#CFDFCA] bg-[#E3EDDF] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-[#71806C]">
                  Focus Time
                </p>

                <p className="mt-2 text-2xl font-semibold text-[#4D6249]">
                  4h 15m
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/50 text-[#587052]">
                <FiClock />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#EDD9BB] bg-[#F8EBD8] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-[#927C5E]">
                  Break Time
                </p>

                <p className="mt-2 text-2xl font-semibold text-[#725E43]">
                  1h 15m
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/50 text-[#806849]">
                <FiCoffee />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#D9CBE8] bg-[#E8E0F1] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-[#837391]">
                  Meetings
                </p>

                <p className="mt-2 text-2xl font-semibold text-[#62536F]">
                  01
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/50 text-[#69577B]">
                <FiBriefcase />
              </div>
            </div>
          </div>
        </section>

        {/* Main Grid */}
        <section className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[1.55fr_0.65fr]">
          {/* Schedule */}
          <div className="overflow-hidden rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8]">
            <div className="flex items-center justify-between border-b border-[#EEEAE2] px-6 py-5">
              <div>
                <h2 className="text-base font-semibold text-[#292D32]">
                  Monday&apos;s Schedule
                </h2>

                <p className="mt-1 text-xs text-[#9B9B98]">
                  September 7 · 6 planned activities
                </p>
              </div>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[#8E8E8A] transition hover:bg-[#F2EFE8]"
              >
                <FiMoreHorizontal />
              </button>
            </div>

            <div className="space-y-3 p-5">
              {tasks.map((task) => {
                const style = getTaskStyle(task.type);

                return (
                  <div
                    key={task.id}
                    className={`group flex flex-col gap-4 rounded-2xl border p-4 transition hover:shadow-sm md:flex-row md:items-center ${style.card}`}
                  >
                    {/* Time */}
                    <div className="w-[90px] shrink-0">
                      <p className="text-sm font-semibold text-[#41454A]">
                        {task.start}
                      </p>

                      <p className="mt-1 text-xs text-[#85888C]">
                        {task.end}
                      </p>
                    </div>

                    {/* Icon */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${style.icon}`}
                    >
                      {task.type === "break" ? (
                        <FiCoffee />
                      ) : task.type === "meeting" ? (
                        <FiBriefcase />
                      ) : task.type === "focus" ? (
                        <FiZap />
                      ) : (
                        <FiClock />
                      )}
                    </div>

                    {/* Task */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-semibold text-[#34383D]">
                          {task.title}
                        </h3>

                        <span
                          className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold ${getPriorityStyle(
                            task.priority
                          )}`}
                        >
                          {task.priority}
                        </span>
                      </div>

                      <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-[#7F8387]">
                        <span>{task.category}</span>

                        <span className="flex items-center gap-1.5">
                          <FiClock />
                          {task.duration}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1 opacity-100 transition md:opacity-0 md:group-hover:opacity-100">
                      <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-[#74787C] transition hover:bg-white/60"
                      >
                        <FiEdit2 />
                      </button>

                      <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-[#9A6661] transition hover:bg-white/60"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {/* AI Planner */}
            <div className="rounded-2xl bg-[#292D32] p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <FiZap />
                </div>

                <div>
                  <h2 className="text-sm font-semibold">AI Planner</h2>

                  <p className="mt-0.5 text-xs text-white/45">
                    Your schedule looks balanced
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-white/70">
                Your most demanding development task is scheduled early,
                followed by a short recovery break before documentation.
              </p>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.05] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                  Next Focus
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  Booking Page Testing
                </p>

                <div className="mt-2 flex items-center gap-2 text-xs text-white/45">
                  <FiClock />
                  09:00 AM · 90 minutes
                </div>
              </div>

              <button
                type="button"
                className="mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-white text-xs font-semibold text-[#292D32] transition hover:bg-[#F5F5F3]"
              >
                <FiZap />
                Optimize My Schedule
              </button>
            </div>

            {/* Day Progress */}
            <div className="rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-[#292D32]">
                    Day Progress
                  </h2>

                  <p className="mt-1 text-xs text-[#9A9B98]">
                    2 of 6 activities completed
                  </p>
                </div>

                <span className="text-sm font-semibold text-[#55595E]">
                  33%
                </span>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#ECE9E1]">
                <div className="h-full w-1/3 rounded-full bg-[#657A68]" />
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-[#E3EDDF] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-[#587052]" />

                    <span className="text-xs font-medium text-[#53654E]">
                      Completed
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-[#53654E]">
                    2
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-[#F8EBD8] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <FiClock className="text-[#806849]" />

                    <span className="text-xs font-medium text-[#725E43]">
                      Remaining
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-[#725E43]">
                    4
                  </span>
                </div>
              </div>
            </div>

            {/* Time Overview */}
            <div className="rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8] p-6">
              <h2 className="text-sm font-semibold text-[#292D32]">
                Time Overview
              </h2>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#92938F]">Day starts</span>

                  <span className="text-xs font-semibold text-[#4D5055]">
                    09:00 AM
                  </span>
                </div>

                <div className="border-t border-[#EEEAE2]" />

                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#92938F]">Last activity</span>

                  <span className="text-xs font-semibold text-[#4D5055]">
                    04:30 PM
                  </span>
                </div>

                <div className="border-t border-[#EEEAE2]" />

                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#92938F]">
                    Productive time
                  </span>

                  <span className="text-xs font-semibold text-[#4D5055]">
                    4h 15m
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}