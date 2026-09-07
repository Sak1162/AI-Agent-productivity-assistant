import { useNavigate } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiCalendar,
  FiAlertCircle,
  FiZap,
  FiMoreHorizontal,
} from "react-icons/fi";

export default function Dashboard() {
  const navigate = useNavigate();

  const tasks = [
    {
      id: 1,
      title: "Complete booking page testing",
      category: "Development",
      time: "10:30 AM",
      priority: "High",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Prepare project documentation",
      category: "Documentation",
      time: "12:00 PM",
      priority: "Medium",
      status: "Pending",
    },
    {
      id: 3,
      title: "Review database test cases",
      category: "Testing",
      time: "2:30 PM",
      priority: "Medium",
      status: "Pending",
    },
    {
      id: 4,
      title: "Client discussion",
      category: "Meeting",
      time: "4:00 PM",
      priority: "High",
      status: "Pending",
    },
  ];

  const stats = [
    {
      label: "Today's Tasks",
      value: "08",
      description: "Scheduled for today",
      icon: FiCalendar,
      iconBg: "bg-[#DCE9F3]",
      iconText: "text-[#47677B]",
    },
    {
      label: "Pending",
      value: "05",
      description: "Awaiting completion",
      icon: FiClock,
      iconBg: "bg-[#F8EBD8]",
      iconText: "text-[#806849]",
    },
    {
      label: "Overdue",
      value: "02",
      description: "Needs attention",
      icon: FiAlertCircle,
      iconBg: "bg-[#F4DDDA]",
      iconText: "text-[#9A5550]",
    },
    {
      label: "Completed",
      value: "03",
      description: "Finished today",
      icon: FiCheckCircle,
      iconBg: "bg-[#E3EDDF]",
      iconText: "text-[#587052]",
    },
  ];

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "High":
        return "border-[#EAC9C5] bg-[#F4DDDA] text-[#9A5550]";

      case "Medium":
        return "border-[#EBD9AA] bg-[#F7EACB] text-[#8B6A32]";

      default:
        return "border-[#CFDFCA] bg-[#E3EDDF] text-[#587052]";
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-[#DCE9F3] text-[#47677B]";

      case "Completed":
        return "bg-[#E3EDDF] text-[#587052]";

      default:
        return "bg-[#F4F1EA] text-[#77736C]";
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <main className="mx-auto w-full max-w-[1500px] px-5 py-6 md:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-1 text-sm font-medium text-[#8B8E94]">
              Monday, 7 September
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-[#292D32] md:text-[34px]">
              Good afternoon
            </h1>

            <p className="mt-2 text-sm text-[#8B8E94]">
              Here&apos;s what needs your attention today.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/plan-my-day")}
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#D8E5D4] bg-[#E3EDDF] px-5 text-sm font-semibold text-[#50654B] transition hover:bg-[#D9E7D5]"
          >
            <FiZap className="text-base" />

            Plan My Day

            <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Stats */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-2xl border border-[#E8E5DE] bg-white p-5 transition hover:border-[#DDD9D0]"
              >
                <div className="mb-5 flex items-start justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.iconBg}`}
                  >
                    <Icon className={`text-lg ${item.iconText}`} />
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#B0AEA8]">
                    Today
                  </span>
                </div>

                <div className="text-3xl font-semibold tracking-tight text-[#292D32]">
                  {item.value}
                </div>

                <div className="mt-1 text-sm font-semibold text-[#55595E]">
                  {item.label}
                </div>

                <div className="mt-1 text-xs text-[#9A9B98]">
                  {item.description}
                </div>
              </div>
            );
          })}
        </section>

        {/* Main Grid */}
        <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.6fr_0.75fr]">
          {/* Today's Tasks */}
          <div className="overflow-hidden rounded-2xl border border-[#E8E5DE] bg-white">
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-[#EEEAE2] px-6 py-5">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#DCE9F3] text-[#47677B]">
                    <FiCheckCircle className="text-sm" />
                  </div>

                  <h2 className="text-base font-semibold text-[#292D32]">
                    Today&apos;s Tasks
                  </h2>
                </div>

                <p className="mt-2 text-xs text-[#9A9B98]">
                  Your highest priority work for today
                </p>
              </div>

              <button
                type="button"
                onClick={() => navigate("/tasks")}
                className="group flex items-center gap-1.5 text-xs font-semibold text-[#6F7377] transition hover:text-[#292D32]"
              >
                View all

                <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Tasks */}
            <div className="divide-y divide-[#EEEAE2]">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="group flex flex-col gap-4 px-6 py-5 transition hover:bg-[#FCFBF8] lg:flex-row lg:items-center"
                >
                  {/* Checkbox */}
                  <button
                    type="button"
                    aria-label={`Complete ${task.title}`}
                    className="h-5 w-5 shrink-0 rounded-full border-2 border-[#C9C7C1] bg-white transition hover:border-[#7F8D79]"
                  />

                  {/* Task Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="truncate text-sm font-semibold text-[#3A3E43]">
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

                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#8B8E91]">
                      <span>{task.category}</span>

                      <span className="flex items-center gap-1.5">
                        <FiClock className="text-[#A3A29D]" />
                        {task.time}
                      </span>

                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${getStatusStyle(
                          task.status
                        )}`}
                      >
                        {task.status}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="self-start rounded-lg p-2 text-[#A3A29D] transition hover:bg-[#F4F1EA] hover:text-[#55595E] lg:self-auto"
                  >
                    <FiMoreHorizontal className="text-lg" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* AI Suggestion */}
            <div className="rounded-2xl border border-[#D9CBE8] bg-white p-6">
              {/* Header */}
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8E0F1] text-[#69577B]">
                  <FiZap className="text-lg" />
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-[#292D32]">
                    AI Suggestion
                  </h2>

                  <p className="mt-0.5 text-xs text-[#9A9B98]">
                    Based on your workload
                  </p>
                </div>
              </div>

              <p className="text-sm leading-7 text-[#696C70]">
                Start with{" "}
                <span className="font-semibold text-[#3D4146]">
                  Booking Page Testing
                </span>
                . It has the highest priority and the nearest deadline.
              </p>

              {/* Recommendation */}
              <div className="mt-5 rounded-xl border border-[#E2D8EC] bg-[#F5F0F8] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8A7897]">
                  Recommended focus
                </p>

                <p className="mt-2 text-sm font-semibold text-[#5F506B]">
                  90 minutes of uninterrupted work
                </p>

                <p className="mt-1 text-xs leading-5 text-[#8A7D91]">
                  Finish testing before moving to documentation.
                </p>
              </div>

              <button
                type="button"
                onClick={() => navigate("/assistant")}
                className="group mt-5 inline-flex h-9 items-center gap-2 rounded-xl bg-[#E8E0F1] px-4 text-xs font-semibold text-[#69577B] transition hover:bg-[#DDD2E8]"
              >
                Ask AI

                <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Progress */}
            <div className="rounded-2xl border border-[#E8E5DE] bg-white p-6">
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E3EDDF] text-[#587052]">
                      <FiCheckCircle />
                    </div>

                    <h2 className="text-sm font-semibold text-[#292D32]">
                      Today&apos;s Progress
                    </h2>
                  </div>

                  <p className="mt-2 text-xs text-[#9A9B98]">
                    3 of 8 tasks completed
                  </p>
                </div>

                <span className="rounded-full bg-[#E3EDDF] px-3 py-1 text-xs font-semibold text-[#587052]">
                  38%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 overflow-hidden rounded-full bg-[#F0EEE8]">
                <div className="h-full w-[38%] rounded-full bg-[#9BB195]" />
              </div>

              {/* Progress Stats */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#D6E3D2] bg-[#F2F7F0] p-4">
                  <div className="flex items-center gap-2 text-[#72856D]">
                    <FiClock className="text-sm" />

                    <p className="text-xs font-medium">Focus time</p>
                  </div>

                  <p className="mt-2 text-lg font-semibold text-[#4F604B]">
                    2h 15m
                  </p>
                </div>

                <div className="rounded-xl border border-[#E6DDC8] bg-[#FBF6EB] p-4">
                  <div className="flex items-center gap-2 text-[#927B57]">
                    <FiClock className="text-sm" />

                    <p className="text-xs font-medium">Remaining</p>
                  </div>

                  <p className="mt-2 text-lg font-semibold text-[#725F44]">
                    4h 30m
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom AI Hint */}
        <section className="mt-6 flex flex-col gap-4 rounded-2xl border border-[#E8E5DE] bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F8EBD8] text-[#806849]">
              <FiZap />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#3A3E43]">
                Need help organizing your workload?
              </p>

              <p className="mt-1 text-xs text-[#9A9B98]">
                FocusAgent can automatically prioritize and arrange your tasks.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate("/plan-my-day")}
            className="group flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-[#DDDAD2] bg-[#FFFDF8] px-4 text-xs font-semibold text-[#62666A] transition hover:bg-[#F7F4ED]"
          >
            Plan My Day

            <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </section>
      </main>
    </div>
  );
}