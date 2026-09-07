import { useState } from "react";
import {
  FiUser,
  FiClock,
  FiBell,
  FiZap,
  FiSave,
  FiCheck,
  FiCalendar,
  FiSliders,
  FiMoon,
  FiSun,
} from "react-icons/fi";

import { useTheme } from "../context/ThemeContext";

export default function Settings() {
  const { theme, setTheme } = useTheme();

  const [settings, setSettings] = useState({
    name: "User",
    email: "user@example.com",
    workStart: "09:00",
    workEnd: "18:30",
    focusBlock: "90",
    breakDuration: "15",
    autoPrioritize: true,
    autoReschedule: false,
    dailyPlanReminder: true,
    overdueReminder: true,
    taskReminder: true,
  });

  const [saved, setSaved] = useState(false);

  const updateSetting = (field, value) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));

    setSaved(false);
  };

  const handleSave = () => {
    console.log("Saved settings:", {
      ...settings,
      theme,
    });

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <main className="mx-auto w-full max-w-[1500px] px-5 py-6 md:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-1 text-sm font-medium text-[#8B8E94]">
              Personal Preferences
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-[#292D32] md:text-[34px]">
              Settings
            </h1>

            <p className="mt-2 text-sm text-[#8B8E94]">
              Configure how FocusAgent plans, prioritizes and reminds you.
            </p>
          </div>

          <button
            type="button"
            onClick={handleSave}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#292D32] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3A3E43]"
          >
            {saved ? <FiCheck /> : <FiSave />}

            {saved ? "Saved" : "Save Changes"}
          </button>
        </div>

        <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_1fr]">
          {/* Profile */}
          <div className="rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8] p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DCE9F3] text-[#47677B]">
                <FiUser />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-[#292D32]">
                  Profile
                </h2>

                <p className="mt-1 text-xs text-[#9A9B98]">
                  Basic personal information
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-xs font-semibold text-[#65696E]">
                  Name
                </label>

                <input
                  type="text"
                  value={settings.name}
                  onChange={(e) =>
                    updateSetting("name", e.target.value)
                  }
                  className="h-11 w-full rounded-xl border border-[#DDDAD2] bg-white px-4 text-sm text-[#292D32] outline-none transition focus:border-[#92979C]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-[#65696E]">
                  Email Address
                </label>

                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) =>
                    updateSetting("email", e.target.value)
                  }
                  className="h-11 w-full rounded-xl border border-[#DDDAD2] bg-white px-4 text-sm text-[#292D32] outline-none transition focus:border-[#92979C]"
                />
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8] p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E3EDDF] text-[#587052]">
                <FiClock />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-[#292D32]">
                  Working Hours
                </h2>

                <p className="mt-1 text-xs text-[#9A9B98]">
                  Used by the AI daily planner
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold text-[#65696E]">
                  Work Starts
                </label>

                <input
                  type="time"
                  value={settings.workStart}
                  onChange={(e) =>
                    updateSetting("workStart", e.target.value)
                  }
                  className="h-11 w-full rounded-xl border border-[#DDDAD2] bg-white px-4 text-sm text-[#292D32] outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-[#65696E]">
                  Work Ends
                </label>

                <input
                  type="time"
                  value={settings.workEnd}
                  onChange={(e) =>
                    updateSetting("workEnd", e.target.value)
                  }
                  className="h-11 w-full rounded-xl border border-[#DDDAD2] bg-white px-4 text-sm text-[#292D32] outline-none"
                />
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-[#E3EDDF] p-4">
              <div className="flex items-center gap-2 text-[#587052]">
                <FiCalendar />

                <p className="text-xs font-semibold">
                  Your current working window
                </p>
              </div>

              <p className="mt-2 text-sm font-semibold text-[#50634C]">
                9:00 AM – 6:30 PM
              </p>
            </div>
          </div>

          {/* Productivity Preferences */}
          <div className="rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8] p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8EBD8] text-[#806849]">
                <FiSliders />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-[#292D32]">
                  Productivity Preferences
                </h2>

                <p className="mt-1 text-xs text-[#9A9B98]">
                  Control focus and break durations
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold text-[#65696E]">
                  Default Focus Block
                </label>

                <select
                  value={settings.focusBlock}
                  onChange={(e) =>
                    updateSetting("focusBlock", e.target.value)
                  }
                  className="h-11 w-full rounded-xl border border-[#DDDAD2] bg-white px-4 text-sm text-[#292D32] outline-none"
                >
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">60 minutes</option>
                  <option value="90">90 minutes</option>
                  <option value="120">120 minutes</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-[#65696E]">
                  Default Break
                </label>

                <select
                  value={settings.breakDuration}
                  onChange={(e) =>
                    updateSetting(
                      "breakDuration",
                      e.target.value
                    )
                  }
                  className="h-11 w-full rounded-xl border border-[#DDDAD2] bg-white px-4 text-sm text-[#292D32] outline-none"
                >
                  <option value="5">5 minutes</option>
                  <option value="10">10 minutes</option>
                  <option value="15">15 minutes</option>
                  <option value="20">20 minutes</option>
                  <option value="30">30 minutes</option>
                </select>
              </div>
            </div>
          </div>

          {/* Agent Settings */}
          <div className="rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8] p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8E0F1] text-[#69577B]">
                <FiZap />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-[#292D32]">
                  Agent Behavior
                </h2>

                <p className="mt-1 text-xs text-[#9A9B98]">
                  Decide what FocusAgent can automate
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <SettingToggle
                title="Automatic Prioritization"
                description="Allow AI to rank tasks by urgency and importance."
                checked={settings.autoPrioritize}
                onChange={(value) =>
                  updateSetting(
                    "autoPrioritize",
                    value
                  )
                }
              />

              <SettingToggle
                title="Automatic Rescheduling"
                description="Allow AI to suggest moving unfinished tasks."
                checked={settings.autoReschedule}
                onChange={(value) =>
                  updateSetting(
                    "autoReschedule",
                    value
                  )
                }
              />
            </div>
          </div>

          {/* Notifications */}
          <div className="rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8] p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4DDDA] text-[#9A5550]">
                <FiBell />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-[#292D32]">
                  Notifications
                </h2>

                <p className="mt-1 text-xs text-[#9A9B98]">
                  Choose when FocusAgent should alert you
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <SettingToggle
                title="Daily Planning Reminder"
                description="Remind me to prepare my daily plan."
                checked={settings.dailyPlanReminder}
                onChange={(value) =>
                  updateSetting(
                    "dailyPlanReminder",
                    value
                  )
                }
              />

              <SettingToggle
                title="Overdue Task Alerts"
                description="Notify me when tasks become overdue."
                checked={settings.overdueReminder}
                onChange={(value) =>
                  updateSetting(
                    "overdueReminder",
                    value
                  )
                }
              />

              <SettingToggle
                title="Task Reminders"
                description="Send reminders before scheduled task times."
                checked={settings.taskReminder}
                onChange={(value) =>
                  updateSetting(
                    "taskReminder",
                    value
                  )
                }
              />
            </div>
          </div>

          {/* Appearance */}
          <div className="rounded-2xl border border-[#E8E5DE] bg-[#FFFDF8] p-6">
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-[#292D32]">
                Appearance
              </h2>

              <p className="mt-1 text-xs text-[#9A9B98]">
                Choose the preferred interface style
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Light */}
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={`rounded-xl border p-4 text-left transition ${
                  theme === "light"
                    ? "border-[#BEBBB2] bg-[#F7F4ED]"
                    : "border-[#E8E5DE] bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F8EBD8] text-[#806849]">
                    <FiSun />
                  </div>

                  <span className="text-xs font-semibold text-[#41454A]">
                    Light
                  </span>

                  {theme === "light" && (
                    <FiCheck className="ml-auto text-[#587052]" />
                  )}
                </div>

                <p className="mt-3 text-[10px] leading-4 text-[#999A96]">
                  Original chalk white workspace
                </p>
              </button>

              {/* Dark */}
              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={`rounded-xl border p-4 text-left transition ${
                  theme === "dark"
                    ? "border-[#555750] bg-[#292A27]"
                    : "border-[#E8E5DE] bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      theme === "dark"
                        ? "bg-[#3D3545] text-[#D0BEDC]"
                        : "bg-[#E8E0F1] text-[#69577B]"
                    }`}
                  >
                    <FiMoon />
                  </div>

                  <span
                    className={`text-xs font-semibold ${
                      theme === "dark"
                        ? "text-white"
                        : "text-[#41454A]"
                    }`}
                  >
                    Dark
                  </span>

                  {theme === "dark" && (
                    <FiCheck className="ml-auto text-[#B8CDB5]" />
                  )}
                </div>

                <p
                  className={`mt-3 text-[10px] leading-4 ${
                    theme === "dark"
                      ? "text-[#A7A9A2]"
                      : "text-[#999A96]"
                  }`}
                >
                  Reduced-light chalk workspace
                </p>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SettingToggle({
  title,
  description,
  checked,
  onChange,
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-[#ECE8E0] bg-white p-4">
      <div>
        <p className="text-xs font-semibold text-[#41454A]">
          {title}
        </p>

        <p className="mt-1 text-[10px] leading-4 text-[#999A96]">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          checked
            ? "bg-[#292D32]"
            : "bg-[#DDDAD2]"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${
            checked
              ? "left-6"
              : "left-1"
          }`}
        />
      </button>
    </div>
  );
}