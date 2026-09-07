import { useMemo, useState } from "react";
import {
  FiPlus,
  FiSearch,
  FiFilter,
  FiClock,
  FiCalendar,
  FiCheckCircle,
  FiCircle,
  FiEdit2,
  FiTrash2,
  FiMoreHorizontal,
  FiZap,
  FiX,
} from "react-icons/fi";

export default function Tasks() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete booking page testing",
      description: "Test all booking fields and database insertion flow.",
      category: "Development",
      dueDate: "07 Sep 2026",
      time: "10:30 AM",
      priority: "High",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Prepare project documentation",
      description: "Document authentication and testing workflow.",
      category: "Documentation",
      dueDate: "07 Sep 2026",
      time: "12:00 PM",
      priority: "Medium",
      status: "Pending",
    },
    {
      id: 3,
      title: "Review database test cases",
      description: "Review test database scenarios before automation.",
      category: "Testing",
      dueDate: "07 Sep 2026",
      time: "02:30 PM",
      priority: "Medium",
      status: "Pending",
    },
    {
      id: 4,
      title: "Client discussion",
      description: "Discuss current development progress and next steps.",
      category: "Meeting",
      dueDate: "07 Sep 2026",
      time: "04:00 PM",
      priority: "High",
      status: "Pending",
    },
    {
      id: 5,
      title: "Update API documentation",
      description: "Add recently created routes and request examples.",
      category: "Documentation",
      dueDate: "06 Sep 2026",
      time: "05:00 PM",
      priority: "Low",
      status: "Overdue",
    },
    {
      id: 6,
      title: "Verify login session flow",
      description: "Check session validation across protected pages.",
      category: "Testing",
      dueDate: "07 Sep 2026",
      time: "09:30 AM",
      priority: "High",
      status: "Completed",
    },
  ]);

  const tabs = ["All", "Pending", "In Progress", "Overdue", "Completed"];

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesTab =
        activeTab === "All" ? true : task.status === activeTab;

      const matchesSearch =
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.category.toLowerCase().includes(search.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [tasks, activeTab, search]);

  const stats = useMemo(() => {
    return {
      total: tasks.length,
      pending: tasks.filter((task) => task.status === "Pending").length,
      overdue: tasks.filter((task) => task.status === "Overdue").length,
      completed: tasks.filter((task) => task.status === "Completed").length,
    };
  }, [tasks]);

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "High":
        return "bg-[#F4DDDA] text-[#9A5550] border-[#EAC9C5]";
      case "Medium":
        return "bg-[#F7EACB] text-[#8B6A32] border-[#EBD9AA]";
      default:
        return "bg-[#E3EDDF] text-[#587052] border-[#CFDFCA]";
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-[#E3EDDF] text-[#587052]";
      case "Overdue":
        return "bg-[#F4DDDA] text-[#9A5550]";
      case "In Progress":
        return "bg-[#DCE9F3] text-[#47677B]";
      default:
        return "bg-[#F8EBD8] text-[#806849]";
    }
  };

  const toggleComplete = (id) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "Completed" ? "Pending" : "Completed",
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((current) => current.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <main className="mx-auto w-full max-w-[1500px] px-5 py-6 md:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-1 text-sm font-medium text-[#8B8E94]">
              Task Management
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-[#292D32] md:text-[34px]">
              Tasks
            </h1>

            <p className="mt-2 text-sm text-[#8B8E94]">
              Manage, prioritize and complete your work from one place.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowAddTask(true)}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#292D32] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3A3E43]"
          >
            <FiPlus />
            Add Task
          </button>
        </div>

        {/* Stats */}
        <section className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <StatCard
            title="Total Tasks"
            value={stats.total}
            subtitle="All tasks"
            bg="bg-[#DCE9F3]"
            border="border-[#C7DCEB]"
            text="text-[#47677B]"
          />

          <StatCard
            title="Pending"
            value={stats.pending}
            subtitle="Awaiting completion"
            bg="bg-[#F8EBD8]"
            border="border-[#EDD9BB]"
            text="text-[#806849]"
          />

          <StatCard
            title="Overdue"
            value={stats.overdue}
            subtitle="Needs attention"
            bg="bg-[#F4DDDA]"
            border="border-[#EAC9C5]"
            text="text-[#9A5550]"
          />

          <StatCard
            title="Completed"
            value={stats.completed}
            subtitle="Finished tasks"
            bg="bg-[#E3EDDF]"
            border="border-[#CFDFCA]"
            text="text-[#587052]"
          />
        </section>

        {/* Toolbar */}
        <section className="mt-5 rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8] p-4">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const active = activeTab === tab;

                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
                      active
                        ? "bg-[#292D32] text-white"
                        : "bg-[#F3F0E9] text-[#74787C] hover:bg-[#EDE9E0]"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div className="flex items-center gap-2">
              <div className="flex h-10 min-w-[260px] items-center gap-2 rounded-xl border border-[#DDDAD2] bg-white px-3">
                <FiSearch className="text-[#999A96]" />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search tasks..."
                  className="w-full bg-transparent text-sm text-[#292D32] outline-none placeholder:text-[#A0A19D]"
                />
              </div>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DDDAD2] bg-white text-[#777B7F] transition hover:bg-[#F4F1EA]"
              >
                <FiFilter />
              </button>
            </div>
          </div>
        </section>

        {/* Task List */}
        <section className="mt-5 overflow-hidden rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8]">
          <div className="flex items-center justify-between border-b border-[#EEEAE2] px-6 py-5">
            <div>
              <h2 className="text-base font-semibold text-[#292D32]">
                {activeTab} Tasks
              </h2>

              <p className="mt-1 text-xs text-[#9A9B98]">
                {filteredTasks.length} task
                {filteredTasks.length !== 1 ? "s" : ""} found
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E8E0F1] text-[#69577B]">
              <FiZap />
            </div>
          </div>

          {filteredTasks.length === 0 ? (
            <div className="flex min-h-[300px] flex-col items-center justify-center px-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F1EFE8] text-[#777A80]">
                <FiCheckCircle className="text-xl" />
              </div>

              <h3 className="mt-4 text-sm font-semibold text-[#3C4045]">
                No tasks found
              </h3>

              <p className="mt-2 text-xs text-[#999A96]">
                Try changing the selected tab or search text.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-[#EEEAE2]">
              {filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className="group flex flex-col gap-4 px-6 py-5 transition hover:bg-[#FAF8F3] lg:flex-row lg:items-center"
                >
                  {/* Complete */}
                  <button
                    type="button"
                    onClick={() => toggleComplete(task.id)}
                    className="shrink-0"
                  >
                    {task.status === "Completed" ? (
                      <FiCheckCircle className="text-xl text-[#6E8A68]" />
                    ) : (
                      <FiCircle className="text-xl text-[#B0B1AD]" />
                    )}
                  </button>

                  {/* Main Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3
                        className={`text-sm font-semibold ${
                          task.status === "Completed"
                            ? "text-[#9A9B98] line-through"
                            : "text-[#34383D]"
                        }`}
                      >
                        {task.title}
                      </h3>

                      <span
                        className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold ${getPriorityStyle(
                          task.priority
                        )}`}
                      >
                        {task.priority}
                      </span>

                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${getStatusStyle(
                          task.status
                        )}`}
                      >
                        {task.status}
                      </span>
                    </div>

                    <p className="mt-2 max-w-3xl text-xs leading-5 text-[#8A8C89]">
                      {task.description}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#85888C]">
                      <span>{task.category}</span>

                      <span className="flex items-center gap-1.5">
                        <FiCalendar />
                        {task.dueDate}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <FiClock />
                        {task.time}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 items-center gap-1">
                    <button
                      type="button"
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-[#74787C] transition hover:bg-[#F0EDE6]"
                    >
                      <FiEdit2 />
                    </button>

                    <button
                      type="button"
                      onClick={() => deleteTask(task.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-[#9A6661] transition hover:bg-[#F4E5E2]"
                    >
                      <FiTrash2 />
                    </button>

                    <button
                      type="button"
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-[#74787C] transition hover:bg-[#F0EDE6]"
                    >
                      <FiMoreHorizontal />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Add Task Modal */}
      {showAddTask && (
        <AddTaskModal
          onClose={() => setShowAddTask(false)}
          onAdd={(newTask) => {
            setTasks((current) => [
              ...current,
              {
                ...newTask,
                id: Date.now(),
              },
            ]);

            setShowAddTask(false);
          }}
        />
      )}
    </div>
  );
}

function StatCard({ title, value, subtitle, bg, border, text }) {
  return (
    <div className={`rounded-2xl border p-5 ${bg} ${border}`}>
      <p className={`text-xs font-medium ${text}`}>{title}</p>

      <p className={`mt-2 text-2xl font-semibold ${text}`}>
        {String(value).padStart(2, "0")}
      </p>

      <p className={`mt-1 text-xs opacity-75 ${text}`}>
        {subtitle}
      </p>
    </div>
  );
}

function AddTaskModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Development",
    dueDate: "07 Sep 2026",
    time: "09:00 AM",
    priority: "Medium",
    status: "Pending",
  });

  const update = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) return;

    onAdd(form);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 px-4 backdrop-blur-[2px]">
      <div className="w-full max-w-[620px] overflow-hidden rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8] shadow-xl">
        <div className="flex items-center justify-between border-b border-[#EEEAE2] px-6 py-5">
          <div>
            <h2 className="text-base font-semibold text-[#292D32]">
              Add New Task
            </h2>

            <p className="mt-1 text-xs text-[#9A9B98]">
              Create a new task for your workspace.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#777A80] transition hover:bg-[#F0EDE6]"
          >
            <FiX />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div>
            <label className="mb-2 block text-xs font-semibold text-[#65696E]">
              Task Title
            </label>

            <input
              type="text"
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              placeholder="Enter task title"
              className="h-11 w-full rounded-xl border border-[#DDDAD2] bg-white px-4 text-sm text-[#292D32] outline-none"
            />
          </div>

          <div className="mt-4">
            <label className="mb-2 block text-xs font-semibold text-[#65696E]">
              Description
            </label>

            <textarea
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              placeholder="Add task details..."
              rows={3}
              className="w-full resize-none rounded-xl border border-[#DDDAD2] bg-white px-4 py-3 text-sm text-[#292D32] outline-none"
            />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-semibold text-[#65696E]">
                Category
              </label>

              <select
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
                className="h-11 w-full rounded-xl border border-[#DDDAD2] bg-white px-4 text-sm text-[#292D32] outline-none"
              >
                <option>Development</option>
                <option>Testing</option>
                <option>Documentation</option>
                <option>Meeting</option>
                <option>Personal</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-[#65696E]">
                Priority
              </label>

              <select
                value={form.priority}
                onChange={(e) => update("priority", e.target.value)}
                className="h-11 w-full rounded-xl border border-[#DDDAD2] bg-white px-4 text-sm text-[#292D32] outline-none"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-[#65696E]">
                Due Date
              </label>

              <input
                type="text"
                value={form.dueDate}
                onChange={(e) => update("dueDate", e.target.value)}
                className="h-11 w-full rounded-xl border border-[#DDDAD2] bg-white px-4 text-sm text-[#292D32] outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-[#65696E]">
                Time
              </label>

              <input
                type="text"
                value={form.time}
                onChange={(e) => update("time", e.target.value)}
                className="h-11 w-full rounded-xl border border-[#DDDAD2] bg-white px-4 text-sm text-[#292D32] outline-none"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="h-10 rounded-xl border border-[#DDDAD2] bg-white px-4 text-xs font-semibold text-[#666A6F] transition hover:bg-[#F4F1EA]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#292D32] px-5 text-xs font-semibold text-white transition hover:bg-[#3A3E43]"
            >
              <FiPlus />
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}