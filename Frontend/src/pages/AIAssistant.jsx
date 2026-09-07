import { useState } from "react";
import {
  FiSend,
  FiZap,
  FiClock,
  FiCheckSquare,
  FiCalendar,
  FiMessageSquare,
  FiPlus,
} from "react-icons/fi";

export default function AIAssistant() {
  const [message, setMessage] = useState("");

  const quickActions = [
    {
      id: 1,
      title: "Plan my day",
      description: "Create an optimized schedule for today",
      icon: FiCalendar,
      color: "bg-[#DCE9F3] text-[#47677B]",
    },
    {
      id: 2,
      title: "Prioritize tasks",
      description: "Sort tasks by urgency and importance",
      icon: FiCheckSquare,
      color: "bg-[#E3EDDF] text-[#587052]",
    },
    {
      id: 3,
      title: "Review overdue work",
      description: "Show what needs immediate attention",
      icon: FiClock,
      color: "bg-[#F8EBD8] text-[#806849]",
    },
  ];

  const suggestions = [
    "What should I work on first today?",
    "Plan my remaining tasks for the day",
    "Which tasks are overdue?",
    "Help me prioritize my workload",
  ];

  const handleSend = () => {
    if (!message.trim()) return;

    console.log("Message:", message);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <main className="mx-auto w-full max-w-[1500px] px-5 py-6 md:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-7">
          <p className="mb-1 text-sm font-medium text-[#8B8E94]">
            Personal Productivity Assistant
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-[#292D32] md:text-[34px]">
            AI Assistant
          </h1>

          <p className="mt-2 text-sm text-[#8B8E94]">
            Ask your assistant to plan, prioritize and organize your work.
          </p>
        </div>

        {/* Main Grid */}
        <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.45fr_0.65fr]">
          {/* Chat */}
          <div className="flex min-h-[680px] flex-col overflow-hidden rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8]">
            {/* Chat Header */}
            <div className="flex items-center justify-between border-b border-[#EEEAE2] px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8E0F1] text-[#69577B]">
                  <FiZap />
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-[#292D32]">
                    FocusAgent
                  </h2>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#7A9A74]" />

                    <span className="text-[11px] text-[#939590]">
                      Ready to help
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="flex h-9 items-center gap-2 rounded-lg border border-[#E7E4DD] bg-white px-3 text-xs font-semibold text-[#666A6F] transition hover:bg-[#F4F1EA]"
              >
                <FiPlus />
                New Chat
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="mx-auto max-w-[850px]">
                {/* AI Welcome */}
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8E0F1] text-[#69577B]">
                    <FiZap className="text-sm" />
                  </div>

                  <div className="max-w-[680px]">
                    <div className="rounded-2xl rounded-tl-md bg-[#F1EFE8] px-5 py-4">
                      <p className="text-sm leading-6 text-[#50545A]">
                        Good afternoon. I can help you plan your day, prioritize
                        tasks, review overdue work, or reorganize your schedule.
                      </p>
                    </div>

                    <p className="mt-2 text-[10px] text-[#A1A29E]">Now</p>
                  </div>
                </div>

                {/* Example User Message */}
                <div className="mt-6 flex justify-end">
                  <div className="max-w-[620px]">
                    <div className="rounded-2xl rounded-tr-md border border-[#C8DCE8] bg-[#DCE9F3] px-5 py-4">
                      <p className="text-sm font-medium leading-6 text-[#47677B]">
                        What should I focus on first today?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Example AI Response */}
                <div className="mt-6 flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8E0F1] text-[#69577B]">
                    <FiZap className="text-sm" />
                  </div>

                  <div className="max-w-[680px]">
                    <div className="rounded-2xl rounded-tl-md bg-[#F1EFE8] px-5 py-4">
                      <p className="text-sm leading-6 text-[#50545A]">
                        Start with{" "}
                        <span className="font-semibold text-[#292D32]">
                          Complete booking page testing
                        </span>
                        . It has the highest priority and the nearest deadline.
                      </p>

                      <div className="mt-4 rounded-xl border border-[#D7E4D2] bg-[#E3EDDF] p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-[#788A72]">
                          Recommended Focus
                        </p>

                        <p className="mt-2 text-sm font-semibold text-[#50634C]">
                          90 minutes
                        </p>

                        <p className="mt-1 text-xs text-[#74816F]">
                          Finish testing before starting documentation.
                        </p>
                      </div>
                    </div>

                    <p className="mt-2 text-[10px] text-[#A1A29E]">Now</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Suggestions */}
            <div className="border-t border-[#EEEAE2] px-6 pt-4">
              <div className="flex flex-wrap gap-2">
                {suggestions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setMessage(item)}
                    className="rounded-full border border-[#E2DFD7] bg-white px-3 py-2 text-[11px] font-medium text-[#686C70] transition hover:bg-[#F3F0E9]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-6">
              <div className="flex items-end gap-3 rounded-2xl border border-[#DDDAD2] bg-white p-3 shadow-sm">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask FocusAgent anything..."
                  rows={1}
                  className="max-h-32 min-h-[42px] flex-1 resize-none bg-transparent px-2 py-2 text-sm text-[#292D32] outline-none placeholder:text-[#A1A29E]"
                />

                <button
                  type="button"
                  onClick={handleSend}
                  disabled={!message.trim()}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#C8DCE8] bg-[#DCE9F3] text-[#47677B] transition hover:bg-[#CEDFEA] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <FiSend />
                </button>
              </div>

              <p className="mt-2 text-center text-[10px] text-[#A4A5A1]">
                AI responses will later use your real tasks and schedule.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {/* Quick Actions */}
            <div className="rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8] p-5">
              <h2 className="text-sm font-semibold text-[#292D32]">
                Quick Actions
              </h2>

              <p className="mt-1 text-xs text-[#999A96]">
                Common actions for your assistant
              </p>

              <div className="mt-5 space-y-3">
                {quickActions.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      className="flex w-full items-center gap-3 rounded-xl border border-[#ECE8E0] bg-white p-3 text-left transition hover:bg-[#F8F5EF]"
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                      >
                        <Icon />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-[#404449]">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[10px] leading-4 text-[#959692]">
                          {item.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Today's Context */}
            <div className="rounded-2xl border border-[#D9CEE5] bg-[#E8E0F1] p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4EEF8] text-[#69577B]">
                  <FiMessageSquare />
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-[#69577B]">
                    Today&apos;s Context
                  </h2>

                  <p className="mt-0.5 text-[10px] text-[#8A7A96]">
                    Information available to AI
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-[#DDD3E6] bg-[#F4EEF8] px-4 py-3">
                  <span className="text-xs text-[#7B6A88]">
                    Total tasks
                  </span>

                  <span className="text-xs font-semibold text-[#69577B]">
                    8
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-[#DDD3E6] bg-[#F4EEF8] px-4 py-3">
                  <span className="text-xs text-[#7B6A88]">
                    High priority
                  </span>

                  <span className="text-xs font-semibold text-[#69577B]">
                    2
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-[#DDD3E6] bg-[#F4EEF8] px-4 py-3">
                  <span className="text-xs text-[#7B6A88]">
                    Overdue
                  </span>

                  <span className="text-xs font-semibold text-[#69577B]">
                    2
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-[#DDD3E6] bg-[#F4EEF8] px-4 py-3">
                  <span className="text-xs text-[#7B6A88]">
                    Available time
                  </span>

                  <span className="text-xs font-semibold text-[#69577B]">
                    4h 30m
                  </span>
                </div>
              </div>
            </div>

            {/* Agent Capabilities */}
            <div className="rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8] p-5">
              <h2 className="text-sm font-semibold text-[#292D32]">
                Agent Capabilities
              </h2>

              <div className="mt-4 space-y-3">
                {[
                  "Create and update tasks",
                  "Prioritize your workload",
                  "Build your daily schedule",
                  "Identify overdue tasks",
                  "Recommend rescheduling",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#789171]" />

                    <span className="text-xs text-[#696D71]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}