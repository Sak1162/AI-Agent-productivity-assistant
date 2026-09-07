import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiBriefcase,
  FiUser,
  FiMail,
  FiClock,
  FiCalendar,
  FiCheck,
  FiChevronRight,
  FiZap,
  FiSettings,
} from "react-icons/fi";

export default function Profile() {
  const navigate = useNavigate();

  const [activeSpace, setActiveSpace] = useState(
    localStorage.getItem("activeSpace") || "workspace"
  );

  const [profile, setProfile] = useState({
    name: "User",
    email: "user@example.com",
    role: "Personal Productivity User",
  });

  useEffect(() => {
    localStorage.setItem("activeSpace", activeSpace);

    window.dispatchEvent(
      new CustomEvent("workspaceChanged", {
        detail: activeSpace,
      })
    );
  }, [activeSpace]);

  const switchSpace = (space) => {
    setActiveSpace(space);

    if (space === "workspace") {
      navigate("/dashboard");
    } else {
      navigate("/personal");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <main className="mx-auto w-full max-w-[1250px] px-5 py-6 md:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-7">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#808388] transition hover:text-[#292D32]"
          >
            <FiArrowLeft />
            Back
          </button>

          <p className="mb-1 text-sm font-medium text-[#929590]">
            Account
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-[#292D32] md:text-[34px]">
            Profile
          </h1>

          <p className="mt-2 text-sm text-[#929590]">
            Manage your profile and choose how you want to use FocusAgent.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[0.72fr_1.28fr]">
          {/* LEFT */}
          <div className="space-y-5">
            {/* Profile Card */}
            <section className="rounded-2xl border border-[#E8E5DE] bg-white p-6">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#DCE9F3] text-2xl font-semibold text-[#47677B]">
                  {profile.name.charAt(0).toUpperCase()}
                </div>

                <h2 className="mt-4 text-lg font-semibold text-[#292D32]">
                  {profile.name}
                </h2>

                <p className="mt-1 text-xs text-[#999A96]">
                  {profile.role}
                </p>

                <div className="mt-5 flex items-center gap-2 rounded-xl bg-[#F7F5F0] px-4 py-2 text-xs text-[#777A7F]">
                  <FiMail />
                  {profile.email}
                </div>
              </div>
            </section>

            {/* Active Space */}
            <section className="rounded-2xl border border-[#E8E5DE] bg-white p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#AAA8A2]">
                Currently using
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    activeSpace === "workspace"
                      ? "bg-[#DCE9F3] text-[#47677B]"
                      : "bg-[#E8E0F1] text-[#69577B]"
                  }`}
                >
                  {activeSpace === "workspace" ? (
                    <FiBriefcase />
                  ) : (
                    <FiUser />
                  )}
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#35393E]">
                    {activeSpace === "workspace"
                      ? "Work Workspace"
                      : "Personal Space"}
                  </p>

                  <p className="mt-1 text-xs text-[#999A96]">
                    {activeSpace === "workspace"
                      ? "Projects, meetings and professional tasks"
                      : "Personal tasks, goals and routines"}
                  </p>
                </div>
              </div>
            </section>

            {/* Preferences */}
            <button
              type="button"
              onClick={() => navigate("/settings")}
              className="flex w-full items-center justify-between rounded-2xl border border-[#E8E5DE] bg-white p-5 text-left transition hover:bg-[#FCFBF8]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8EBD8] text-[#806849]">
                  <FiSettings />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#35393E]">
                    Preferences
                  </p>

                  <p className="mt-1 text-xs text-[#999A96]">
                    Working hours, notifications and AI behavior
                  </p>
                </div>
              </div>

              <FiChevronRight className="text-[#A5A49F]" />
            </button>
          </div>

          {/* RIGHT */}
          <div className="space-y-5">
            {/* Workspace Switcher */}
            <section className="rounded-2xl border border-[#E8E5DE] bg-white p-6">
              <div>
                <h2 className="text-base font-semibold text-[#292D32]">
                  Choose your space
                </h2>

                <p className="mt-1 text-xs leading-5 text-[#999A96]">
                  FocusAgent keeps your professional and personal productivity
                  organized separately.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Work Workspace */}
                <button
                  type="button"
                  onClick={() => switchSpace("workspace")}
                  className={`relative rounded-2xl border p-5 text-left transition ${
                    activeSpace === "workspace"
                      ? "border-[#BFD6E5] bg-[#F3F8FB]"
                      : "border-[#E8E5DE] bg-white hover:bg-[#FCFBF8]"
                  }`}
                >
                  {activeSpace === "workspace" && (
                    <div className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-[#DCE9F3] text-[#47677B]">
                      <FiCheck className="text-xs" />
                    </div>
                  )}

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#DCE9F3] text-lg text-[#47677B]">
                    <FiBriefcase />
                  </div>

                  <h3 className="mt-5 text-sm font-semibold text-[#35393E]">
                    Work Workspace
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#898C89]">
                    Manage development work, meetings, documentation, testing,
                    projects and professional deadlines.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <Tag>Work Tasks</Tag>
                    <Tag>Projects</Tag>
                    <Tag>Meetings</Tag>
                  </div>
                </button>

                {/* Personal Space */}
                <button
                  type="button"
                  onClick={() => switchSpace("personal")}
                  className={`relative rounded-2xl border p-5 text-left transition ${
                    activeSpace === "personal"
                      ? "border-[#D9CBE8] bg-[#F8F5FA]"
                      : "border-[#E8E5DE] bg-white hover:bg-[#FCFBF8]"
                  }`}
                >
                  {activeSpace === "personal" && (
                    <div className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-[#E8E0F1] text-[#69577B]">
                      <FiCheck className="text-xs" />
                    </div>
                  )}

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8E0F1] text-lg text-[#69577B]">
                    <FiUser />
                  </div>

                  <h3 className="mt-5 text-sm font-semibold text-[#35393E]">
                    Personal Space
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#898C89]">
                    Organize personal goals, routines, appointments, reminders
                    and everyday life tasks.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <Tag>Personal Tasks</Tag>
                    <Tag>Goals</Tag>
                    <Tag>Routines</Tag>
                  </div>
                </button>
              </div>
            </section>

            {/* Profile Details */}
            <section className="rounded-2xl border border-[#E8E5DE] bg-white p-6">
              <div className="mb-6">
                <h2 className="text-base font-semibold text-[#292D32]">
                  Profile Details
                </h2>

                <p className="mt-1 text-xs text-[#999A96]">
                  Basic information used by your assistant.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <ProfileField
                  icon={FiUser}
                  label="Name"
                  value={profile.name}
                />

                <ProfileField
                  icon={FiMail}
                  label="Email"
                  value={profile.email}
                />

                <ProfileField
                  icon={FiClock}
                  label="Working Hours"
                  value="09:00 AM – 06:30 PM"
                />

                <ProfileField
                  icon={FiCalendar}
                  label="Planning Preference"
                  value="Daily Planning"
                />
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-[#74777A] shadow-[inset_0_0_0_1px_#E8E5DE]">
      {children}
    </span>
  );
}

function ProfileField({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-[#EEEAE2] bg-[#FCFBF8] p-4">
      <div className="flex items-center gap-2 text-[#9A9B98]">
        <Icon className="text-sm" />

        <span className="text-[10px] font-semibold uppercase tracking-[0.1em]">
          {label}
        </span>
      </div>

      <p className="mt-2 text-sm font-semibold text-[#505459]">
        {value}
      </p>
    </div>
  );
}