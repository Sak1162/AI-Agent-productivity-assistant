import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiCheck,
  FiClock,
  FiCalendar,
  FiFlag,
  FiTag,
  FiFileText,
  FiZap,
} from "react-icons/fi";

export default function AddTask() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Development",
    priority: "Medium",
    dueDate: "",
    startTime: "",
    endTime: "",
    status: "Pending",
    estimatedDuration: "60",
    aiPrioritize: true,
  });

  const [saved, setSaved] = useState(false);

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      return;
    }

    console.log("New Task:", form);

    setSaved(true);

    setTimeout(() => {
      navigate("/planner");
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <main className="mx-auto w-full max-w-[1200px] px-5 py-6 md:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-7">
          <button
            type="button"
            onClick={() => navigate("/planner")}
            className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7D8085] transition hover:text-[#292D32]"
          >
            <FiArrowLeft />
            Back to Daily Planner
          </button>

          <p className="mb-1 text-sm font-medium text-[#8B8E94]">
            Task Management
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-[#292D32] md:text-[34px]">
            Add Task
          </h1>

          <p className="mt-2 text-sm text-[#8B8E94]">
            Add a task to your planner and let FocusAgent use it while planning
            your day.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_0.42fr]"
        >
          {/* Main Form */}
          <div className="space-y-5">
            {/* Basic Details */}
            <section className="rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8] p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DCE9F3] text-[#47677B]">
                  <FiFileText />
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-[#292D32]">
                    Task Details
                  </h2>

                  <p className="mt-1 text-xs text-[#9A9B98]">
                    Basic information about your task
                  </p>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-[#65696E]">
                  Task Title <span className="text-[#A45D58]">*</span>
                </label>

                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => updateField("title", e.target.value)}
                  placeholder="Example: Complete booking page testing"
                  className="h-11 w-full rounded-xl border border-[#DDDAD2] bg-white px-4 text-sm text-[#292D32] outline-none transition focus:border-[#90959A]"
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-xs font-semibold text-[#65696E]">
                  Description
                </label>

                <textarea
                  value={form.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  placeholder="Add details, notes or expected outcome..."
                  rows={4}
                  className="w-full resize-none rounded-xl border border-[#DDDAD2] bg-white px-4 py-3 text-sm leading-6 text-[#292D32] outline-none transition focus:border-[#90959A]"
                />
              </div>
            </section>

            {/* Classification */}
            <section className="rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8] p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8EBD8] text-[#806849]">
                  <FiTag />
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-[#292D32]">
                    Classification
                  </h2>

                  <p className="mt-1 text-xs text-[#9A9B98]">
                    Used for sorting and AI prioritization
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#65696E]">
                    Category
                  </label>

                  <select
                    value={form.category}
                    onChange={(e) => updateField("category", e.target.value)}
                    className="h-11 w-full rounded-xl border border-[#DDDAD2] bg-white px-4 text-sm text-[#292D32] outline-none"
                  >
                    <option value="Development">Development</option>
                    <option value="Testing">Testing</option>
                    <option value="Documentation">Documentation</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Research">Research</option>
                    <option value="Personal">Personal</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#65696E]">
                    Priority
                  </label>

                  <select
                    value={form.priority}
                    onChange={(e) => updateField("priority", e.target.value)}
                    className="h-11 w-full rounded-xl border border-[#DDDAD2] bg-white px-4 text-sm text-[#292D32] outline-none"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#65696E]">
                    Status
                  </label>

                  <select
                    value={form.status}
                    onChange={(e) => updateField("status", e.target.value)}
                    className="h-11 w-full rounded-xl border border-[#DDDAD2] bg-white px-4 text-sm text-[#292D32] outline-none"
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Schedule */}
            <section className="rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8] p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E3EDDF] text-[#587052]">
                  <FiCalendar />
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-[#292D32]">
                    Schedule
                  </h2>

                  <p className="mt-1 text-xs text-[#9A9B98]">
                    Decide when this task should be completed
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#65696E]">
                    Due Date
                  </label>

                  <input
                    type="date"
                    value={form.dueDate}
                    onChange={(e) => updateField("dueDate", e.target.value)}
                    className="h-11 w-full rounded-xl border border-[#DDDAD2] bg-white px-4 text-sm text-[#292D32] outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#65696E]">
                    Estimated Duration
                  </label>

                  <select
                    value={form.estimatedDuration}
                    onChange={(e) =>
                      updateField("estimatedDuration", e.target.value)
                    }
                    className="h-11 w-full rounded-xl border border-[#DDDAD2] bg-white px-4 text-sm text-[#292D32] outline-none"
                  >
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">1 hour</option>
                    <option value="90">1 hour 30 minutes</option>
                    <option value="120">2 hours</option>
                    <option value="180">3 hours</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#65696E]">
                    Start Time
                  </label>

                  <input
                    type="time"
                    value={form.startTime}
                    onChange={(e) => updateField("startTime", e.target.value)}
                    className="h-11 w-full rounded-xl border border-[#DDDAD2] bg-white px-4 text-sm text-[#292D32] outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#65696E]">
                    End Time
                  </label>

                  <input
                    type="time"
                    value={form.endTime}
                    onChange={(e) => updateField("endTime", e.target.value)}
                    className="h-11 w-full rounded-xl border border-[#DDDAD2] bg-white px-4 text-sm text-[#292D32] outline-none"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {/* AI Settings */}
            <section className="rounded-2xl bg-[#292D32] p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <FiZap />
                </div>

                <div>
                  <h2 className="text-sm font-semibold">FocusAgent</h2>

                  <p className="mt-0.5 text-xs text-white/45">
                    AI task intelligence
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-white/70">
                FocusAgent can use the task&apos;s deadline, priority and
                estimated duration when planning your schedule.
              </p>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.05] p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold text-white">
                      AI Prioritization
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-white/45">
                      Allow AI to adjust the task&apos;s recommended position.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      updateField("aiPrioritize", !form.aiPrioritize)
                    }
                    className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                      form.aiPrioritize ? "bg-[#849C7E]" : "bg-white/20"
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
                        form.aiPrioritize ? "left-6" : "left-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </section>

            {/* Task Preview */}
            <section className="rounded-2xl border border-[#C7DCEB] bg-[#DCE9F3] p-5">
              <div className="flex items-center gap-2 text-[#47677B]">
                <FiFlag />

                <p className="text-xs font-semibold uppercase tracking-wider">
                  Task Preview
                </p>
              </div>

              <h3 className="mt-4 text-sm font-semibold text-[#405C6C]">
                {form.title || "Your new task"}
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#718692]">
                {form.description ||
                  "Task description will appear here as you type."}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/50 px-2.5 py-1 text-[10px] font-semibold text-[#526E7D]">
                  {form.category}
                </span>

                <span className="rounded-full bg-white/50 px-2.5 py-1 text-[10px] font-semibold text-[#526E7D]">
                  {form.priority}
                </span>

                <span className="rounded-full bg-white/50 px-2.5 py-1 text-[10px] font-semibold text-[#526E7D]">
                  {form.estimatedDuration} min
                </span>
              </div>
            </section>

            {/* Summary */}
            <section className="rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8] p-5">
              <h2 className="text-sm font-semibold text-[#292D32]">
                Scheduling Summary
              </h2>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between border-b border-[#EEEAE2] pb-4">
                  <span className="text-xs text-[#92938F]">Priority</span>

                  <span className="text-xs font-semibold text-[#4D5055]">
                    {form.priority}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#EEEAE2] pb-4">
                  <span className="text-xs text-[#92938F]">Duration</span>

                  <span className="text-xs font-semibold text-[#4D5055]">
                    {form.estimatedDuration} min
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#92938F]">AI Planning</span>

                  <span className="rounded-full bg-[#E3EDDF] px-2.5 py-1 text-[10px] font-semibold text-[#587052]">
                    {form.aiPrioritize ? "Enabled" : "Disabled"}
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="xl:col-span-2">
            <div className="flex justify-end gap-3 border-t border-[#E7E4DD] pt-5">
              <button
                type="button"
                onClick={() => navigate("/planner")}
                className="h-11 rounded-xl border border-[#DDDAD2] bg-white px-5 text-sm font-semibold text-[#666A6F] transition hover:bg-[#F4F1EA]"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#292D32] px-6 text-sm font-semibold text-white transition hover:bg-[#3A3E43]"
              >
                <FiCheck />

                {saved ? "Task Added" : "Add Task"}
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}