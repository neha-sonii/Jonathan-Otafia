import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";

const LOGO_SRC = "/Logo2.png";
const BRAND = "#7C009E";
const BRAND_LIGHT = "#A100CF";
const EMAIL_TO = "nehasony0511@gmail.com";

const SELAR_LINKS = {
  "done-with-you": "https://selar.com/2223779e73",
  "done-for-you": "https://selar.com/5ks5j26b12",
} as const;

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
  // {
  //   questionIndex: 0,
  //   options: ["I'm still shaping my offer and audience"],
  //   kicker: "Offer clarity first",
  //   title: "You may be a little early for this system.",
  //   body:
  //     "The 8-week build works best once the offer and audience are already clear. Tighten that first, then come back when LinkedIn is ready to become a sales channel.",
  // },
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [notice, setNotice] = useState<Disqualifier | null>(null);

  const planLabel = useMemo(
    () => (selectedPlan === "done-for-you" ? "Done for you" : "Done with you"),
    [selectedPlan]
  );
  const progress = step < 0 ? 0 : Math.min(((step + 1) / questions.length) * 100, 100);

  const chooseAnswer = (option: string) => {
    const nextAnswers = [...answers];
    nextAnswers[step] = option;
    setAnswers(nextAnswers);

    const blocked = disqualifiers.find(
      (item) => item.questionIndex === step && (item.options as readonly string[]).includes(option)
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
      access_key: "af3a97c6-633d-42d9-93ad-169b25ccee9d",
      name: formData.name,
      email: formData.email,
      subject: `New ${planLabel} lead from website`,
      message: `Plan: ${planLabel}\nLinkedIn: ${formData.linkedinUrl || "Not provided"}\n\nAnswers:\n${questions
        .map((question, index) => `${index + 1}. ${question.title}: ${answers[index] || "Not answered"}`)
        .join("\n")}`,
      from_name: formData.name || "Website lead",
      replyto: formData.email,
      "custom variables": JSON.stringify({
        plan: selectedPlan,
        planLabel,
        linkedinUrl: formData.linkedinUrl,
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
        console.warn("Web3Forms submit failed, continuing to checkout", result);
      }
    } catch (error) {
      console.error("Web3Forms submit failed", error);
    } finally {
      setIsSubmitting(false);
      window.location.href = SELAR_LINKS[selectedPlan];
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

      <section className="mx-auto w-full max-w-3xl px-5 pb-16 pt-4">
        <div className="mb-6 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <h1 className="mt-2 text-3xl font-bold leading-tight tracking-normal text-white sm:text-4xl">
              Quick fit check
            </h1>
          </div>
          <p className="text-sm text-[#8b9aac]">
            {step < 0 ? "Start" : step >= questions.length ? "Details" : `${step + 1} / ${questions.length}`}
          </p>
        </div>

        <div className="mb-5 h-1 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-[#cc66ff] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {step === -1 && (
          <Card keyName="intro">
            <div className="">
              <div>
                <p className="mb-3 text-sm font-semibold text-[#cc66ff]">{planLabel}</p>
                <h2 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-5xl">
                  Let's see if we are a fit.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[#8b9aac]">
                  Five minutes, few questions. If we're a fit, you'll book a 30-minute call with Jonathan. If we're not, I'll point you in the right direction. Either way, no spam.
                </p>
              </div>
              {/* <InfoBox title="What happens next">
                <p>1. Complete the fit check</p>
                <p>2. Add your details</p>
                <p>3. Continue to Selar</p>
              </InfoBox> */}
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
        )}

        {step >= 0 && step < questions.length && (
          <>
            <Card keyName={`question-${step}`}>
              <p className="mb-3 text-sm font-semibold text-[#cc66ff]">{questions[step].eyebrow}</p>
              <h2 className="max-w-3xl text-2xl font-bold leading-tight text-white sm:text-4xl">
                {questions[step].title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#8b9aac]">
                {questions[step].help}
              </p>

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
                    <span className="text-sm font-semibold leading-6 text-[#dbe4f0] sm:text-base">
                      {option}
                    </span>
                    <ArrowRight
                      size={17}
                      className="text-[#677083] transition group-hover:translate-x-1 group-hover:text-[#cc66ff]"
                    />
                  </button>
                ))}
              </div>
            </Card>
            <BackButton onClick={() => setStep((current) => current - 1)} />
          </>
        )}

        {step >= questions.length && (
          <>
            <Card keyName="contact">
              <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
                <div>
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      background: `${BRAND_LIGHT}12`,
                      border: `1px solid ${BRAND_LIGHT}25`,
                      color: "#cc66ff",
                    }}
                  >
                    <CheckCircle2 size={24} />
                  </div>
                  <h2 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                    Add your details.
                  </h2>
                  {/* <p className="mt-4 max-w-2xl text-base leading-7 text-[#8b9aac]">
                    Your answers go to Jonathan first. After that, you will be sent to the
                    {` ${planLabel} `}Selar page.
                  </p> */}
                </div>
                <InfoBox title="Sent to">
                  <p className="break-all">{EMAIL_TO}</p>
                </InfoBox>
              </div>

              <form className="mt-8 grid gap-5" onSubmit={submitContact}>
                <div className="grid gap-4 md:grid-cols-2">
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
                </div>
                <TextField
                  label="LinkedIn profile"
                  type="url"
                  value={formData.linkedinUrl}
                  onChange={(value) =>
                    setFormData((current) => ({ ...current, linkedinUrl: value }))
                  }
                  placeholder="https://linkedin.com/in/yourname"
                  autoComplete="url"
                />
                <div className="mt-2 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  {/* <span className="inline-flex items-center gap-2 text-sm text-[#8b9aac]">
                    <Mail size={16} /> Answers are emailed before redirect.
                  </span> */}
                  <button
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold text-white transition hover:opacity-90 disabled:cursor-wait disabled:opacity-70"
                    style={{ background: `linear-gradient(135deg, ${BRAND}, ${BRAND_LIGHT})` }}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <Loader2 size={17} className="animate-spin" /> : null}
                    Book a call
                  </button>
                </div>
                {submitError ? (
                  <p className="text-sm text-red-400">{submitError}</p>
                ) : null}
              </form>
            </Card>
            <BackButton onClick={() => setStep(questions.length - 1)} />
          </>
        )}
      </section>
    </main>
  );
}

function Card({ children, keyName }: { children: React.ReactNode; keyName: string }) {
  return (
    <motion.div
      key={keyName}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:p-9"
      style={{
        backdropFilter: "blur(9px)",
        WebkitBackdropFilter: "blur(9px)",
      }}
    >
      {children}
    </motion.div>
  );
}

function InfoBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl p-5" style={{ background: `${BRAND_LIGHT}08`, border: `1px solid ${BRAND_LIGHT}18` }}>
      <p className="mb-3 text-xs uppercase tracking-wider text-[#94a3b8]">{title}</p>
      <div className="grid gap-2 text-sm leading-6 text-[#dbe4f0]">{children}</div>
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#8b9aac] underline underline-offset-4 hover:text-white"
      onClick={onClick}
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
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#cc66ff]">
          {notice.kicker}
        </p>
        <h1 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-5xl">
          {notice.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#8b9aac]">{notice.body}</p>
        <div className="mt-8 border-t border-white/10 pt-6">
          <button
            onClick={onDone}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold text-white transition hover:opacity-90"
            style={{ background: `linear-gradient(135deg, ${BRAND}, ${BRAND_LIGHT})` }}
          >
            Got it, take me home
            <ArrowRight size={17} />
          </button>
        </div>
      </section>
    </main>
  );
}
