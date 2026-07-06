import * as React from "react";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Calendar as CalendarIcon, Loader2 } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";
import { Calendar } from "./ui/calendar";

const LOGO_SRC = "/Logo2.png";
const BRAND = "#7C009E";
const BRAND_LIGHT = "#A100CF";
const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/jonathan-otafia-871297359/";

const TIME_SLOTS = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
];

const TIMEZONE_OPTIONS = [
  { label: "GMT-08:00 Los Angeles (US)", value: "America/Los_Angeles" },
  { label: "GMT-05:00 New York (US)", value: "America/New_York" },
  { label: "GMT+00:00 London (UK)", value: "Europe/London" },
  { label: "GMT+01:00 Berlin (DE)", value: "Europe/Berlin" },
  { label: "GMT+03:00 Dubai (UAE)", value: "Asia/Dubai" },
  { label: "GMT+05:30 Mumbai (India)", value: "Asia/Kolkata" },
  { label: "GMT+08:00 Singapore", value: "Asia/Singapore" },
  { label: "GMT+09:00 Tokyo (JP)", value: "Asia/Tokyo" },
  { label: "GMT+10:00 Sydney (AU)", value: "Australia/Sydney" },
  { label: "GMT+12:00 Auckland (NZ)", value: "Pacific/Auckland" },
];

const DEFAULT_TIMEZONE = Intl.DateTimeFormat().resolvedOptions().timeZone;

const getNextWeekday = () => {
  const next = new Date();
  next.setHours(0, 0, 0, 0);

  while (next.getDay() === 0 || next.getDay() === 6) {
    next.setDate(next.getDate() + 1);
  }

  return next;
};

const formatNiceDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const formatShortDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const questions = [
  {
    eyebrow: "Positioning",
    title: "Which sounds the most like your business right now?",
    help: "Choose the closest answer. This helps us understand whether your offer is ready for LinkedIn growth.",
    options: [
      "I have a clear offer and steady client flow",
      "I have a working offer but uneven client flow",
      "I'm still shaping my offer and audience",
    ],
  },
  {
    eyebrow: "Access",
    title: "Are you comfortable with us logging into your LinkedIn daily?",
    help: "Daily access is part of how the work gets done.",
    options: [
      "Yes, that's fine with me",
      "I'd want to talk it through first",
      "No, that doesn't work for me",
    ],
  },
  {
    eyebrow: "Decision",
    title: "Is the investment decision yours to make?",
    help: "The call works best when the decision-maker is involved.",
    options: [
      "Yes, it's my call",
      "I decide with a partner or co-founder",
      "No, someone else signs off",
    ],
  },
  {
    eyebrow: "Timing",
    title: "When would you want to start, assuming we're a fit?",
    help: "We are looking for people who are ready to move soon.",
    options: ["Right away", "Within 30 days", "Within 90 days", "Just exploring for now"],
  },
  {
    eyebrow: "Investment",
    title: "Does a four-figure monthly investment work for you?",
    help: "This keeps the call honest and useful for both sides.",
    options: [
      "Yes, that works for where I am right now",
      "I'd want to talk it through on the call",
      "That's higher than I'm ready for right now",
    ],
  },
  {
    eyebrow: "Goal",
    title: "What do you want LinkedIn to do for your business?",
    help: "Pick the outcome that matters most right now.",
    options: [
      "Bring inbound calls from the right people",
      "Make me the obvious name in my space",
      "Start real conversations with the right people",
      "Take LinkedIn off my plate completely",
    ],
  },
  {
    eyebrow: "Starting point",
    title: "What's your current relationship with LinkedIn?",
    help: "This gives Jonathan context before reviewing your profile.",
    options: [
      "I've been posting and engaging myself",
      "I've hired someone or an agency before",
      "I've tried things on and off but nothing stuck",
      "I haven't done much with it yet",
    ],
  },
] as const;

const disqualifiers = [
  {
    questionIndex: 1,
    options: ["No, that doesn't work for me"],
    kicker: "Daily access matters",
    title: "This comes down to LinkedIn access.",
    body:
      "The work requires daily access to post, engage, track, and improve the system. Without that, we cannot deliver it properly.",
  },
  {
    questionIndex: 3,
    options: ["Within 90 days", "Just exploring for now"],
    kicker: "Timing check",
    title: "No rush. Come back when this is a now-priority.",
    body:
      "Jonathan only takes a few founders at a time. If you are still exploring, take your time and return when you are closer to starting.",
  },
  {
    questionIndex: 4,
    options: ["That's higher than I'm ready for right now"],
    kicker: "Investment fit",
    title: "Probably not the right time for us yet.",
    body:
      "A four-figure monthly investment should feel serious but workable. If it creates pressure right now, it is better to wait.",
  },
] as const;

type Disqualifier = (typeof disqualifiers)[number];

export function QuestionnairePage1() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedPlan = searchParams.get("plan") === "done-for-you" ? "done-for-you" : "done-with-you";
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<string[]>([]);
  const [formData, setFormData] = useState({ name: "", email: "", linkedinUrl: "" });
  const [selectedDate, setSelectedDate] = useState<Date>(getNextWeekday());
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0]);
  const [selectedTimezone, setSelectedTimezone] = useState(
    TIMEZONE_OPTIONS.find((zone) => zone.value === DEFAULT_TIMEZONE)?.value ?? TIMEZONE_OPTIONS[5].value,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [notice, setNotice] = useState<Disqualifier | null>(null);
  const isBookingStep = step >= questions.length;

  const planLabel = useMemo(
    () => (selectedPlan === "done-for-you" ? "Done for you" : "Done with you"),
    [selectedPlan],
  );
  const selectedDateLabel = useMemo(() => formatNiceDate(selectedDate), [selectedDate]);
  const selectedDateShort = useMemo(() => formatShortDate(selectedDate), [selectedDate]);
  const timeZoneLabel = useMemo(
    () => TIMEZONE_OPTIONS.find((item) => item.value === selectedTimezone)?.label ?? selectedTimezone,
    [selectedTimezone],
  );
  const progress = step < 0 ? 0 : Math.min(((step + 1) / questions.length) * 100, 100);

  const chooseAnswer = (option: string) => {
    const nextAnswers = [...answers];
    nextAnswers[step] = option;
    setAnswers(nextAnswers);

    const blocked = disqualifiers.find(
      (item) => item.questionIndex === step && (item.options as readonly string[]).includes(option),
    );

    if (blocked) {
      setNotice(blocked);
      return;
    }

    setStep((current) => current + 1);
  };

  const submitContact = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      access_key: "0b3dcbf6-862e-48cd-8859-f20809621ba7",
      name: formData.name || "Website booking lead",
      email: formData.email,
      subject: `New ${planLabel} booking request`,
      message: `Plan: ${planLabel}\nLinkedIn: ${formData.linkedinUrl || "Not provided"}\nDate: ${selectedDateLabel}\nTime: ${selectedTime}\nTimezone: ${timeZoneLabel}\n\nAnswers:\n${questions
        .map((question, index) => `${index + 1}. ${question.title}: ${answers[index] || "Not answered"}`)
        .join("\n")}`,
      from_name: formData.name || "Website booking lead",
      replyto: formData.email,
      "custom variables": JSON.stringify({
        plan: selectedPlan,
        planLabel,
        linkedinUrl: formData.linkedinUrl,
        date: selectedDateShort,
        time: selectedTime,
        timezone: selectedTimezone,
        submittedAt: new Date().toISOString(),
      }),
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || result?.success !== true) {
        console.warn("Web3Forms submit failed, continuing to redirect", result);
      }
    } catch (error) {
      console.error("Web3Forms submit failed", error);
      setSubmitError("We could not save your booking details, but you will still be redirected.");
    } finally {
      setIsSubmitting(false);
      window.location.href = LINKEDIN_PROFILE_URL;
    }
  };

  if (notice) {
    return <ExitNotice notice={notice} onDone={() => navigate("/")} />;
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-6">
        <a href="/" className="flex items-center gap-3">
          <img src={LOGO_SRC} alt="Jonathan Otafia logo" className="h-10 w-10 object-contain" />
          <span className="font-['Syne',sans-serif] text-lg font-bold">
            Jonathan <span className="text-[#cc66ff]">Otafia</span>
          </span>
        </a>
        <span className="hidden text-sm font-semibold text-[#8b9aac] sm:block">{planLabel}</span>
      </header>

      <section
        className={`mx-auto w-full px-4 pb-16 pt-4 sm:px-5 ${
          isBookingStep ? "max-w-[1420px]" : "max-w-2xl"
        }`}
      >
        {!isBookingStep && (
          <div className="mb-5">
            <div className="mb-6 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <h1 className="mt-2 text-3xl font-bold leading-tight tracking-normal text-white sm:text-4xl">
                  Quick fit check
                </h1>
              </div>
              <p className="text-sm text-[#8b9aac]">
                {step < 0 ? "Start" : `${step + 1} / ${questions.length}`}
              </p>
            </div>

            <div className="h-1 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[#cc66ff] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {step === -1 && (
          <div className="mx-auto w-full max-w-2xl">
            <Card keyName="intro">
              <div className="space-y-8">
                <div>
                  <p className="mb-3 text-sm font-semibold text-[#cc66ff]">{planLabel}</p>
                  <h2 className="text-3xl font-bold leading-tight text-white sm:text-5xl">
                    Let's see if we are a fit.
                  </h2>
                  <p className="mt-5 text-base leading-7 text-[#8b9aac]">
                    Five minutes, few questions. If we're a fit, you'll book a 30-minute call with Jonathan. If we're not,
                    I'll point you in the right direction. Either way, no spam.
                  </p>
                </div>
              </div>
              <div className="mt-8 border-t border-white/10 pt-6">
                <button
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold text-white transition hover:opacity-90"
                  style={{ background: `linear-gradient(135deg, ${BRAND}, ${BRAND_LIGHT})` }}
                  onClick={() => setStep(0)}
                >
                  Start
                  <ArrowRight size={17} />
                </button>
              </div>
            </Card>
          </div>
        )}

        {step >= 0 && step < questions.length && (
          <div className="mx-auto w-full max-w-2xl">
            <Card keyName={`question-${step}`}>
              <p className="mb-3 text-sm font-semibold text-[#cc66ff]">{questions[step].eyebrow}</p>
              <h2 className="text-2xl font-bold leading-tight text-white sm:text-4xl">
                {questions[step].title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#8b9aac]">{questions[step].help}</p>

              <div className="mt-8 grid gap-3">
                {questions[step].options.map((option, index) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => chooseAnswer(option)}
                    className="group grid min-h-[62px] grid-cols-[42px_1fr_auto] items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left transition hover:border-[#cc66ff]/35 hover:bg-[#7C009E]/[0.07]"
                  >
                    <span
                      className="grid h-10 w-10 place-items-center rounded-xl text-sm font-bold"
                      style={{
                        background: `${BRAND_LIGHT}12`,
                        border: `1px solid ${BRAND_LIGHT}25`,
                        color: "#cc66ff",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-[#dbe4f0] sm:text-base">{option}</span>
                    <ArrowRight
                      size={17}
                      className="text-[#677083] transition group-hover:translate-x-1 group-hover:text-[#cc66ff]"
                    />
                  </button>
                ))}
              </div>
            </Card>
            <div className="mt-6">
              <BackButton onClick={() => setStep((current) => current - 1)} />
            </div>
          </div>
        )}

        {step >= questions.length && (
          <>
            <div className="mx-auto w-full max-w-none">
              <Card keyName="booking-layout" className="p-0 sm:p-0 md:p-0">
                <div className="grid w-full items-stretch gap-0 overflow-hidden rounded-2xl border border-[#7C009E]/20 bg-[#08030c] lg:grid-cols-[minmax(300px,0.82fr)_minmax(420px,1.18fr)]">
                  <div className="grid gap-6">
                    <section className="min-w-0 border-b border-[#7C009E]/15 bg-[#120618] p-5 sm:p-7 lg:border-b-0 lg:border-r">
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#7C009E]/20 text-[#cc66ff] ring-1 ring-[#cc66ff]/25">
                          <img src={LOGO_SRC} alt="Jonathan Otafia logo" className="h-10 w-10 object-contain" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#cc66ff]">
                            LinkedIn Strategy Call
                          </p>
                          <h1 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
                            Book your 30-minute call
                          </h1>
                        </div>
                      </div>

                      <div className="mt-8 space-y-4 text-sm leading-7 text-[#dbe4f0]">
                        <p>We build and run your inbound LinkedIn system so you can focus on what you do best.</p>
                        <p>
                          If we are a fit, the team will explain what working together looks like and schedule the exact
                          call details.
                        </p>
                      </div>

                      <div className="mt-8 rounded-2xl border border-[#cc66ff]/15 bg-[#08020f] p-5 shadow-[0_0_32px_rgba(124,0,158,0.12)]">
                        <div className="flex items-center justify-between gap-4 text-sm text-[#94a3b8]">
                          <span>Duration</span>
                          <span>30 min</span>
                        </div>
                        <div className="mt-4 flex items-center justify-between gap-4 text-sm text-[#94a3b8]">
                          <span>Date</span>
                          <span className="text-right">{selectedDateLabel}</span>
                        </div>
                        <div className="mt-3 flex items-center justify-between gap-4 text-sm text-[#94a3b8]">
                          <span>Time</span>
                          <span>{selectedTime}</span>
                        </div>
                        <div className="mt-3 flex items-center justify-between gap-4 text-sm text-[#94a3b8]">
                          <span>Timezone</span>
                          <span className="text-right">{timeZoneLabel}</span>
                        </div>
                      </div>
                    </section>

                    <section className="min-w-0 bg-[#120618] p-5 pt-0 sm:p-7 sm:pt-0 lg:border-r lg:border-[#7C009E]/15">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#cc66ff]">Select date</p>
                          <h2 className="mt-2 text-xl font-semibold text-white">Choose a weekday</h2>
                        </div>
                        <span className="inline-flex w-fit items-center justify-center rounded-full border border-[#cc66ff]/15 bg-[#7C009E]/20 px-3 py-1 text-xs font-semibold text-[#e6b4ff]">
                          Weekdays only
                        </span>
                      </div>

                      <div className="mt-5 rounded-2xl border border-[#cc66ff]/15 bg-[#07010d] p-2 sm:p-4">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={(date) => date && setSelectedDate(date)}
                          disabled={[{ before: new Date() }]}
                          className="mx-auto w-full max-w-[360px] text-white"
                          classNames={{
                            months: "flex justify-center",
                            month: "w-full space-y-4",
                            caption: "relative flex items-center justify-center pt-1",
                            caption_label: "text-base font-bold text-white",
                            nav: "absolute inset-x-0 top-0 flex items-center justify-between px-1",
                            nav_button:
                              "grid h-9 w-9 place-items-center rounded-full border border-[#cc66ff]/15 bg-[#7C009E]/15 text-white transition hover:bg-[#7C009E]/35",
                            table: "w-full border-collapse",
                            head_row: "grid grid-cols-7",
                            head_cell: "py-2 text-center text-[0.7rem] font-bold uppercase text-[#c98cff]",
                            row: "grid grid-cols-7",
                            cell: "grid place-items-center p-1 text-center",
                            day:
                              "grid h-10 w-10 place-items-center rounded-full text-sm font-semibold text-[#eee6f6] transition hover:bg-[#7C009E]/25 hover:text-white",
                            day_selected: "bg-[#7C009E] text-white shadow-[0_0_18px_rgba(204,102,255,0.45)]",
                            day_today: "border border-[#cc66ff]/50",
                            day_outside: "text-white/25",
                            day_disabled: "cursor-not-allowed text-white/20 hover:bg-transparent",
                          }}
                        />
                      </div>
                    </section>
                  </div>

                  <section className="min-w-0 bg-[#101010] p-5 sm:p-7 lg:p-8">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#7C009E]/15 text-[#cc66ff] ring-1 ring-[#cc66ff]/15">
                        <CalendarIcon size={18} />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#cc66ff]">Pick time</p>
                        <p className="mt-1 text-lg font-semibold text-white">Available slots</p>
                      </div>
                    </div>

                    <div className="mt-6 grid max-h-[360px] gap-3 overflow-y-auto pr-1 sm:grid-cols-2 xl:grid-cols-3">
                      {TIME_SLOTS.map((time) => {
                        const active = time === selectedTime;
                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`w-full rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                              active
                                ? "border-[#cc66ff] bg-[#7C009E] text-white shadow-[0_0_18px_rgba(124,0,158,0.28)]"
                                : "border-[#7C009E]/20 bg-[#07010d] text-[#dbe4f0] hover:border-[#cc66ff]/60 hover:bg-[#7C009E]/15"
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-6 rounded-2xl border border-[#cc66ff]/15 bg-[#120618] p-4">
                      <label className="block text-sm font-semibold text-white">Timezone</label>
                      <select
                        className="mt-3 w-full rounded-xl border border-[#7C009E]/20 bg-[#07010d] px-4 py-3 text-sm text-white outline-none transition focus:border-[#cc66ff]"
                        value={selectedTimezone}
                        onChange={(event) => setSelectedTimezone(event.target.value)}
                      >
                        {TIMEZONE_OPTIONS.map((zone) => (
                          <option key={zone.value} value={zone.value} className="bg-slate-950 text-white">
                            {zone.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <form className="mt-6 grid gap-4" onSubmit={submitContact}>
                      <TextField
                        label="Name"
                        value={formData.name}
                        onChange={(value) => setFormData((current) => ({ ...current, name: value }))}
                        placeholder="Your name"
                        autoComplete="name"
                      />
                      <TextField
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={(value) => setFormData((current) => ({ ...current, email: value }))}
                        placeholder="you@company.com"
                        autoComplete="email"
                      />
                      <TextField
                        label="LinkedIn profile"
                        type="url"
                        value={formData.linkedinUrl}
                        onChange={(value) => setFormData((current) => ({ ...current, linkedinUrl: value }))}
                        placeholder="https://linkedin.com/in/yourname"
                        autoComplete="url"
                      />
                      <button
                        className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-2xl bg-[#7C009E] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#A100CF] disabled:cursor-wait disabled:opacity-70"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : null}
                        Book a call
                      </button>
                      {submitError ? <p className="text-sm text-red-400">{submitError}</p> : null}
                      <p className="text-sm text-[#94a3b8]">
                        After booking, you'll be redirected to Jonathan's LinkedIn profile to confirm the final call details.
                      </p>
                    </form>
                  </section>
                </div>
              </Card>
            </div>
            <div className="mx-auto mt-6 max-w-[1420px]">
              <BackButton onClick={() => setStep(questions.length - 1)} />
            </div>
          </>
        )}
      </section>
    </main>
  );
}

function Card({
  children,
  keyName,
  className = "",
}: {
  children: React.ReactNode;
  keyName: string;
  className?: string;
}) {
  return (
    <motion.div
      key={keyName}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:p-9 ${className}`}
      style={{
        backdropFilter: "blur(9px)",
        WebkitBackdropFilter: "blur(9px)",
      }}
    >
      {children}
    </motion.div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#8b9aac] underline underline-offset-4 hover:text-white"
      onClick={onClick}
      type="button"
    >
      <ArrowLeft size={15} /> Previous step
    </button>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[#dbe4f0]">
      {label}
      <input
        required
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className="h-13 rounded-xl border border-white/10 bg-black/30 px-4 text-base text-white outline-none transition placeholder:text-[#677083] focus:border-[#cc66ff]/60"
        placeholder={placeholder}
      />
    </label>
  );
}

function ExitNotice({ notice, onDone }: { notice: Disqualifier; onDone: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center bg-black px-5 py-10 text-white">
      <section className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:p-9">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#cc66ff]">{notice.kicker}</p>
        <h1 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-5xl">{notice.title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#8b9aac]">{notice.body}</p>
        <div className="mt-8 border-t border-white/10 pt-6">
          <button
            onClick={onDone}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold text-white transition hover:opacity-90"
            style={{ background: `linear-gradient(135deg, ${BRAND}, ${BRAND_LIGHT})` }}
            type="button"
          >
            Got it, take me home
            <ArrowRight size={17} />
          </button>
        </div>
      </section>
    </main>
  );
}
