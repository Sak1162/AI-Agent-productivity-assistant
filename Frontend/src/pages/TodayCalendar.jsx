import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiChevronLeft,
  FiChevronRight,
  FiCalendar,
  FiClock,
  FiPlus,
  FiZap,
  FiCoffee,
  FiBriefcase,
  FiCheckCircle,
} from "react-icons/fi";

export default function TodayCalendar() {
  const navigate = useNavigate();

  const [selectedDate] = useState({
    day: "Monday",
    date: "7 September 2026",
  });

  const schedule = [
    {
      id: 1,
      time: "09:00 AM",
      endTime: "10:30 AM",
      title: "Complete booking page testing",
      category: "Development",
      duration: "90 min",
      priority: "High",
      type: "focus",
    },
    {
      id: 2,
      time: "10:30 AM",
      endTime: "10:45 AM",
      title: "Coffee Break",
      category: "Break",
      duration: "15 min",
      priority: "Low",
      type: "break",
    },
    {
      id: 3,
      time: "10:45 AM",
      endTime: "12:00 PM",
      title: "Prepare project documentation",
      category: "Documentation",
      duration: "75 min",
      priority: "Medium",
      type: "work",
    },
    {
      id: 4,
      time: "02:00 PM",
      endTime: "03:00 PM",
      title: "Review database test cases",
      category: "Testing",
      duration: "60 min",
      priority: "Medium",
      type: "work",
    },
    {
      id: 5,
      time: "04:00 PM",
      endTime: "04:30 PM",
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
            <button
              type="button"
              onClick={() => navigate("/planner")}
              className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7D8085] transition hover:text-[#292D32]"
            >
              <FiArrowLeft />
              Back to Daily Planner
            </button>

            <p className="mb-1 text-sm font-medium text-[#8B8E94]">
              Today&apos;s Calendar
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-[#292D32] md:text-[34px]">
              {selectedDate.day}
            </h1>

            <p className="mt-2 text-sm text-[#8B8E94]">
              {selectedDate.date}
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/add-task")}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#292D32] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3B3F45]"
          >
            <FiPlus />
            Add Task
          </button>
        </div>

        {/* Date Navigation */}
        <section className="rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8] p-4">
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7E4DD] bg-white text-[#777A80] transition hover:bg-[#F4F1EA]"
            >
              <FiChevronLeft />
            </button>

            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#A09E98]">
                Today
              </p>

              <p className="mt-1 text-lg font-semibold text-[#292D32]">
                Monday, 7 September
              </p>
            </div>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7E4DD] bg-white text-[#777A80] transition hover:bg-[#F4F1EA]"
            >
              <FiChevronRight />
            </button>
          </div>
        </section>

        {/* Summary */}
        <section className="mt-5 grid grid-cols-2 gap-4 xl:grid-cols-4">
          <div className="rounded-2xl border border-[#C7DCEB] bg-[#DCE9F3] p-5">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/50 text-[#47677B]">
              <FiCalendar />
            </div>

            <p className="text-2xl font-semibold text-[#354D5B]">05</p>

            <p className="mt-1 text-sm font-semibold text-[#566D7B]">
              Activities
            </p>
          </div>

          <div className="rounded-2xl border border-[#CFDFCA] bg-[#E3EDDF] p-5">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/50 text-[#587052]">
              <FiClock />
            </div>

            <p className="text-2xl font-semibold text-[#4D6249]">4h 15m</p>

            <p className="mt-1 text-sm font-semibold text-[#61725D]">
              Focus Time
            </p>
          </div>

          <div className="rounded-2xl border border-[#EDD9BB] bg-[#F8EBD8] p-5">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/50 text-[#806849]">
              <FiCoffee />
            </div>

            <p className="text-2xl font-semibold text-[#725E43]">15 min</p>

            <p className="mt-1 text-sm font-semibold text-[#826D4F]">
              Break Time
            </p>
          </div>

          <div className="rounded-2xl border border-[#D9CBE8] bg-[#E8E0F1] p-5">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/50 text-[#69577B]">
              <FiBriefcase />
            </div>

            <p className="text-2xl font-semibold text-[#62536F]">01</p>

            <p className="mt-1 text-sm font-semibold text-[#746481]">
              Meeting
            </p>
          </div>
        </section>

        {/* Main */}
        <section className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[1.55fr_0.65fr]">
          {/* Timeline */}
          <div className="overflow-hidden rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8]">
            <div className="border-b border-[#EEEAE2] px-6 py-5">
              <h2 className="text-base font-semibold text-[#292D32]">
                Today&apos;s Timeline
              </h2>

              <p className="mt-1 text-xs text-[#9B9B98]">
                Scheduled work and activities
              </p>
            </div>

            <div className="space-y-3 p-5">
              {schedule.map((item) => {
                const style = getTaskStyle(item.type);

                return (
                  <div
                    key={item.id}
                    className={`flex flex-col gap-4 rounded-2xl border p-4 transition hover:shadow-sm md:flex-row md:items-center ${style.card}`}
                  >
                    <div className="w-[96px] shrink-0">
                      <p className="text-sm font-semibold text-[#41454A]">
                        {item.time}
                      </p>

                      <p className="mt-1 text-xs text-[#85888C]">
                        {item.endTime}
                      </p>
                    </div>

                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${style.icon}`}
                    >
                      {item.type === "break" ? (
                        <FiCoffee />
                      ) : item.type === "meeting" ? (
                        <FiBriefcase />
                      ) : item.type === "focus" ? (
                        <FiZap />
                      ) : (
                        <FiClock />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-semibold text-[#34383D]">
                          {item.title}
                        </h3>

                        <span
                          className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold ${getPriorityStyle(
                            item.priority
                          )}`}
                        >
                          {item.priority}
                        </span>
                      </div>

                      <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-[#7F8387]">
                        <span>{item.category}</span>

                        <span className="flex items-center gap-1.5">
                          <FiClock />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {/* AI Focus */}
            <div className="rounded-2xl bg-[#292D32] p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <FiZap />
                </div>

                <div>
                  <h2 className="text-sm font-semibold">Today&apos;s Focus</h2>
                  <p className="mt-0.5 text-xs text-white/45">
                    Recommended by FocusAgent
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-white/70">
                Complete your booking page testing first while your morning
                focus is strongest.
              </p>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.05] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                  First Priority
                </p>

                <p className="mt-2 text-sm font-semibold">
                  Booking Page Testing
                </p>

                <div className="mt-2 flex items-center gap-2 text-xs text-white/45">
                  <FiClock />
                  09:00 AM · 90 minutes
                </div>
              </div>
            </div>

            {/* Completion */}
            <div className="rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-[#292D32]">
                    Today&apos;s Progress
                  </h2>

                  <p className="mt-1 text-xs text-[#9A9B98]">
                    2 of 5 activities completed
                  </p>
                </div>

                <span className="text-sm font-semibold text-[#55595E]">
                  40%
                </span>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#ECE9E1]">
                <div className="h-full w-[40%] rounded-full bg-[#657A68]" />
              </div>

              <div className="mt-5 rounded-xl bg-[#E3EDDF] p-4">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#587052]" />

                  <span className="text-xs font-semibold text-[#53654E]">
                    2 activities completed
                  </span>
                </div>
              </div>
            </div>

            {/* Day Info */}
            <div className="rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8] p-6">
              <h2 className="text-sm font-semibold text-[#292D32]">
                Day Overview
              </h2>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between border-b border-[#EEEAE2] pb-4">
                  <span className="text-xs text-[#92938F]">First task</span>

                  <span className="text-xs font-semibold text-[#4D5055]">
                    09:00 AM
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#EEEAE2] pb-4">
                  <span className="text-xs text-[#92938F]">Last activity</span>

                  <span className="text-xs font-semibold text-[#4D5055]">
                    04:30 PM
                  </span>
                </div>

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