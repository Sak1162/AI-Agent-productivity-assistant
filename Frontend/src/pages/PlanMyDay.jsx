import { useState } from "react";
import {
  FiArrowLeft,
  FiClock,
  FiCalendar,
  FiZap,
  FiCheckCircle,
  FiAlertCircle,
  FiRefreshCw,
  FiPlay,
  FiCoffee,
  FiBriefcase,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function PlanMyDay() {
  const navigate = useNavigate();

  const [plan, setPlan] = useState([
    {
      id: 1,
      time: "09:00 AM",
      endTime: "10:30 AM",
      title: "Complete booking page testing",
      category: "Development",
      priority: "High",
      duration: "90 min",
      reason: "Highest priority and nearest deadline",
      type: "focus",
    },
    {
      id: 2,
      time: "10:30 AM",
      endTime: "10:45 AM",
      title: "Short break",
      category: "Break",
      priority: "Low",
      duration: "15 min",
      reason: "Recommended recovery time",
      type: "break",
    },
    {
      id: 3,
      time: "10:45 AM",
      endTime: "12:00 PM",
      title: "Prepare project documentation",
      category: "Documentation",
      priority: "Medium",
      duration: "75 min",
      reason: "Best next task after focused development work",
      type: "work",
    },
    {
      id: 4,
      time: "02:00 PM",
      endTime: "03:00 PM",
      title: "Review database test cases",
      category: "Testing",
      priority: "Medium",
      duration: "60 min",
      reason: "Fits your available afternoon focus slot",
      type: "work",
    },
    {
      id: 5,
      time: "04:00 PM",
      endTime: "04:30 PM",
      title: "Client discussion",
      category: "Meeting",
      priority: "High",
      duration: "30 min",
      reason: "Scheduled before the end-of-day deadline",
      type: "meeting",
    },
  ]);

  const [started, setStarted] = useState(false);

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

  const handleRegenerate = () => {
    setPlan((currentPlan) => [...currentPlan]);
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <main className="mx-auto w-full max-w-[1500px] px-5 py-6 md:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7D8085] transition hover:text-[#292D32]"
            >
              <FiArrowLeft />
              Back to Dashboard
            </button>

            <p className="mb-1 text-sm font-medium text-[#8B8E94]">
              Monday, 7 September
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-[#292D32] md:text-[34px]">
              Plan My Day
            </h1>

            <p className="mt-2 text-sm text-[#8B8E94]">
              AI-generated schedule based on your priorities, deadlines and
              available time.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleRegenerate}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#E4E2DC] bg-[#FFFDF8] px-4 text-sm font-semibold text-[#55585E] transition hover:bg-[#F5F1E8]"
            >
              <FiRefreshCw />
              Regenerate Plan
            </button>

            <button
              type="button"
              onClick={() => setStarted(true)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#292D32] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3B3F45]"
            >
              {started ? <FiCheckCircle /> : <FiPlay />}
              {started ? "Day Started" : "Start My Day"}
            </button>
          </div>
        </div>

        {/* Summary */}
        <section className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <div className="rounded-2xl border border-[#C7DCEB] bg-[#DCE9F3] p-5">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/50 text-[#47677B]">
              <FiCalendar />
            </div>

            <p className="text-2xl font-semibold text-[#354D5B]">05</p>

            <p className="mt-1 text-sm font-semibold text-[#566D7B]">
              Planned Items
            </p>

            <p className="mt-1 text-xs text-[#748894]">
              Tasks and scheduled breaks
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

            <p className="mt-1 text-xs text-[#788674]">
              Total productive work time
            </p>
          </div>

          <div className="rounded-2xl border border-[#EDD9BB] bg-[#F8EBD8] p-5">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/50 text-[#806849]">
              <FiAlertCircle />
            </div>

            <p className="text-2xl font-semibold text-[#725E43]">02</p>

            <p className="mt-1 text-sm font-semibold text-[#826D4F]">
              High Priority
            </p>

            <p className="mt-1 text-xs text-[#988364]">
              Important tasks to complete
            </p>
          </div>

          <div className="rounded-2xl border border-[#D9CBE8] bg-[#E8E0F1] p-5">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/50 text-[#69577B]">
              <FiCheckCircle />
            </div>

            <p className="text-2xl font-semibold text-[#62536F]">6:30 PM</p>

            <p className="mt-1 text-sm font-semibold text-[#746481]">
              Planned Finish
            </p>

            <p className="mt-1 text-xs text-[#8B7B96]">
              Estimated end of workday
            </p>
          </div>
        </section>

        {/* Main Grid */}
        <section className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[1.5fr_0.7fr]">
          {/* Schedule */}
          <div className="overflow-hidden rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8]">
            <div className="border-b border-[#EEEAE2] px-6 py-5">
              <h2 className="text-base font-semibold text-[#292D32]">
                Today&apos;s Schedule
              </h2>

              <p className="mt-1 text-xs text-[#9B9B98]">
                Your AI-optimized work plan
              </p>
            </div>

            <div className="space-y-3 p-5">
              {plan.map((item) => {
                const style = getTaskStyle(item.type);

                return (
                  <div
                    key={item.id}
                    className={`flex flex-col gap-4 rounded-2xl border p-4 transition hover:shadow-sm md:flex-row md:items-center ${style.card}`}
                  >
                    {/* Time */}
                    <div className="w-[96px] shrink-0">
                      <p className="text-sm font-semibold text-[#41454A]">
                        {item.time}
                      </p>

                      <p className="mt-1 text-xs text-[#85888C]">
                        {item.endTime}
                      </p>
                    </div>

                    {/* Icon */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${style.icon}`}
                    >
                      {item.type === "break" ? (
                        <FiCoffee />
                      ) : item.type === "meeting" ? (
                        <FiBriefcase />
                      ) : (
                        <FiZap />
                      )}
                    </div>

                    {/* Task */}
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

                      <p className="mt-3 text-xs leading-5 text-[#707479]">
                        {item.reason}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {/* AI Insight */}
            <div className="rounded-2xl bg-[#292D32] p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <FiZap />
                </div>

                <div>
                  <h2 className="text-sm font-semibold">
                    AI Planning Insight
                  </h2>

                  <p className="mt-0.5 text-xs text-white/45">
                    Why this schedule works
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-white/70">
                Your most demanding task is scheduled first while your focus
                level is expected to be highest.
              </p>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
                  <p className="text-xs font-semibold text-white">
                    Priority first
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/45">
                    High-priority testing is scheduled before documentation.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
                  <p className="text-xs font-semibold text-white">
                    Balanced workload
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/45">
                    Short breaks are included between focused work blocks.
                  </p>
                </div>
              </div>
            </div>

            {/* Planning Preferences */}
            <div className="rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8] p-6">
              <h2 className="text-sm font-semibold text-[#292D32]">
                Planning Preferences
              </h2>

              <p className="mt-1 text-xs text-[#9A9B98]">
                Settings used by FocusAgent
              </p>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between border-b border-[#EEEAE2] pb-4">
                  <span className="text-xs text-[#92938F]">Work starts</span>

                  <span className="text-xs font-semibold text-[#4D5055]">
                    9:00 AM
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#EEEAE2] pb-4">
                  <span className="text-xs text-[#92938F]">Work ends</span>

                  <span className="text-xs font-semibold text-[#4D5055]">
                    6:30 PM
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#EEEAE2] pb-4">
                  <span className="text-xs text-[#92938F]">
                    Focus block
                  </span>

                  <span className="text-xs font-semibold text-[#4D5055]">
                    90 min
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#92938F]">
                    Auto-prioritization
                  </span>

                  <span className="rounded-full bg-[#E3EDDF] px-2.5 py-1 text-[10px] font-semibold text-[#587052]">
                    Enabled
                  </span>
                </div>
              </div>
            </div>

            {/* Current Focus */}
            <div className="rounded-2xl border border-[#C7DCEB] bg-[#DCE9F3] p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#78909E]">
                Recommended First Task
              </p>

              <p className="mt-2 text-sm font-semibold text-[#405C6C]">
                Booking Page Testing
              </p>

              <div className="mt-3 flex items-center gap-2 text-xs text-[#6B818D]">
                <FiClock />
                09:00 AM · 90 minutes
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}