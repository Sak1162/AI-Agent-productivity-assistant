import { useNavigate } from "react-router-dom";
import {
  FiArrowRight,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiPlus,
  FiUser,
  FiZap,
} from "react-icons/fi";

export default function PersonalSpace() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <main className="mx-auto w-full max-w-[1500px] px-5 py-6 md:px-8 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-1 text-sm font-medium text-[#929590]">
              Personal Space
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-[#292D32] md:text-[34px]">
              My Day
            </h1>

            <p className="mt-2 text-sm text-[#929590]">
              Personal tasks, goals, routines and reminders in one place.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/add-task")}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#D9CBE8] bg-[#E8E0F1] px-5 text-sm font-semibold text-[#69577B] transition hover:bg-[#DDD2E8]"
          >
            <FiPlus />
            Add Personal Task
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <Stat
            icon={FiCheckCircle}
            title="Tasks"
            value="06"
            bg="bg-[#E3EDDF]"
            text="text-[#587052]"
          />

          <Stat
            icon={FiCalendar}
            title="Appointments"
            value="02"
            bg="bg-[#DCE9F3]"
            text="text-[#47677B]"
          />

          <Stat
            icon={FiClock}
            title="Routines"
            value="04"
            bg="bg-[#F8EBD8]"
            text="text-[#806849]"
          />

          <Stat
            icon={FiUser}
            title="Goals"
            value="03"
            bg="bg-[#E8E0F1]"
            text="text-[#69577B]"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.5fr_0.7fr]">
          <section className="rounded-2xl border border-[#E8E5DE] bg-white p-6">
            <h2 className="text-base font-semibold text-[#292D32]">
              Personal Tasks
            </h2>

            <p className="mt-1 text-xs text-[#999A96]">
              Your personal schedule will appear here.
            </p>

            <div className="mt-8 flex min-h-[220px] flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8E0F1] text-[#69577B]">
                <FiUser className="text-xl" />
              </div>

              <p className="mt-4 text-sm font-semibold text-[#4B4F54]">
                Personal Space is ready
              </p>

              <p className="mt-2 max-w-sm text-xs leading-5 text-[#999A96]">
                Next we&apos;ll add personal tasks, habits, routines,
                appointments and goals here.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-[#D9CBE8] bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8E0F1] text-[#69577B]">
              <FiZap />
            </div>

            <h2 className="mt-4 text-sm font-semibold text-[#3E4247]">
              Personal AI
            </h2>

            <p className="mt-2 text-xs leading-6 text-[#868987]">
              FocusAgent can help plan errands, routines, appointments and
              personal goals without mixing them with your work tasks.
            </p>

            <button
              type="button"
              onClick={() => navigate("/assistant")}
              className="group mt-5 flex items-center gap-2 text-xs font-semibold text-[#69577B]"
            >
              Ask FocusAgent

              <FiArrowRight className="transition group-hover:translate-x-0.5" />
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

function Stat({ icon: Icon, title, value, bg, text }) {
  return (
    <div className="rounded-2xl border border-[#E8E5DE] bg-white p-5">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${bg} ${text}`}
      >
        <Icon />
      </div>

      <p className="mt-5 text-2xl font-semibold text-[#292D32]">
        {value}
      </p>

      <p className="mt-1 text-xs font-semibold text-[#777A7F]">
        {title}
      </p>
    </div>
  );
}