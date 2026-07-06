"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Calendar as CalendarIcon, Clock, Linkedin, Sparkles } from "lucide-react";
import { Calendar } from "./ui/calendar";

const BRAND = "#7C009E";
const BRAND_LIGHT = "#A100CF";
const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/jonathan-otafia-871297359/";
const ACCESS_KEY = "0b3dcbf6-862e-48cd-8859-f20809621ba7";
const TIME_SLOTS = [
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
];

function getNextAvailableDate(date = new Date()) {
    const next = new Date(date);
    next.setHours(0, 0, 0, 0);
    while (next.getDay() === 0 || next.getDay() === 6) {
        next.setDate(next.getDate() + 1);
    }
    return next;
}

function formatFullDate(date: Date) {
    return date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

function formatDateLabel(date: Date) {
    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

export function BookingPage() {
    const [selectedDate, setSelectedDate] = useState<Date>(getNextAvailableDate());
    const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const selectedDateLabel = useMemo(() => formatFullDate(selectedDate), [selectedDate]);
    const selectedDateShort = useMemo(() => formatDateLabel(selectedDate), [selectedDate]);

    const submitBooking = async () => {
        setIsSubmitting(true);
        setError(null);

        const payload = {
            access_key: ACCESS_KEY,
            name: "LinkedIn Strategy Call",
            email: "no-reply@booking.jonathanotafia.com",
            subject: "New LinkedIn Strategy Call booking",
            message: `Call date: ${selectedDateLabel}\nCall time: ${selectedTime}`,
            from_name: "Booking Page Visitor",
            replyto: "no-reply@booking.jonathanotafia.com",
            "custom variables": JSON.stringify({
                selectedDate: selectedDateShort,
                selectedTime,
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
                console.warn("Web3Forms submit did not return success", result);
            }
        } catch (error) {
            console.error("Booking submit failed", error);
            setError("There was a problem saving your booking, but you will still be redirected.");
        } finally {
            window.location.href = LINKEDIN_PROFILE_URL;
        }
    };

    return (
        <main className="min-h-screen bg-[#030105] text-slate-950">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-[2rem] border border-slate-200/20 bg-white/95 shadow-[0_45px_120px_rgba(0,0,0,0.18)]">
                    <div className="grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
                        <section className="rounded-[2rem] bg-[#faf6ff] p-8 sm:p-10">
                            <div className="flex items-center gap-4">
                                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#7C009E]/10 text-[#7C009E] shadow-sm ring-1 ring-[#7C009E]/10">
                                    <img src="/Logo2.png" alt="Jonathan Otafia logo" className="h-10 w-10 object-contain" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7C009E]">
                                        LinkedIn Strategy Call
                                    </p>
                                    <h1 className="mt-3 text-2xl font-semibold text-slate-950 sm:text-3xl">
                                        Book a 30-minute strategy session
                                    </h1>
                                </div>
                            </div>

                            <div className="mt-8 grid gap-4 rounded-[2rem] border border-[#e6d8ff] bg-white p-6 shadow-sm">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Duration</p>
                                    <p className="mt-2 text-lg font-semibold text-slate-950">30 min</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Selected date</p>
                                    <p className="mt-2 text-lg font-semibold text-slate-950">{selectedDateLabel}</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Selected time</p>
                                    <p className="mt-2 text-lg font-semibold text-slate-950">{selectedTime}</p>
                                </div>
                            </div>

                            <div className="mt-8 space-y-5 text-sm leading-7 text-slate-700">
                                <p>
                                    This page is built to book a real conversation with Jonathan. I only take a few calls every week, so book the next available weekday time and we will take your LinkedIn from invisible to inbound.
                                </p>
                                <p>
                                    You are not signing up for a generic demo. This is a strategy session that looks for the exact place your brand can win on LinkedIn.
                                </p>
                            </div>

                            <div className="mt-8 rounded-[1.75rem] border border-[#e6d8ff] bg-white p-5 shadow-sm">
                                <div className="flex items-center gap-3 text-slate-600">
                                    <Clock size={18} className="text-[#7C009E]" />
                                    <span className="font-semibold text-slate-900">Fast confirmation</span>
                                </div>
                                <p className="mt-3 text-sm text-slate-600">
                                    After you confirm, you will be redirected to Jonathan’s LinkedIn profile so he can connect and lock in the call details personally.
                                </p>
                            </div>
                        </section>

                        <section className="px-6 pb-8 pt-8 sm:px-10 sm:pb-10 sm:pt-10">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7C009E]">
                                        Select Date & Time
                                    </p>
                                    <h2 className="mt-2 text-2xl font-semibold text-slate-950">Choose your next weekday slot</h2>
                                </div>
                                <span className="rounded-full bg-[#eef3ff] px-4 py-2 text-sm font-medium text-slate-700">
                                    {selectedDateLabel}
                                </span>
                            </div>

                            <div className="mt-8 rounded-[2rem] border border-slate-200/80 bg-[#fbf7ff] p-4 shadow-sm sm:p-6">
                                <Calendar
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={(date) => date && setSelectedDate(date)}
                                    disabled={[{ before: new Date() }]}
                                />
                            </div>

                            <div className="mt-8 rounded-[2rem] bg-white p-4 shadow-sm sm:p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-950">Available times</p>
                                        <p className="text-xs text-slate-500">Select one slot</p>
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-[#f2e8ff] px-3 py-2 text-sm font-medium text-[#7C009E]">
                                        <Sparkles size={16} /> Weekdays only
                                    </div>
                                </div>

                                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                    {TIME_SLOTS.map((time) => {
                                        const isActive = time === selectedTime;
                                        return (
                                            <button
                                                key={time}
                                                type="button"
                                                onClick={() => setSelectedTime(time)}
                                                className={`rounded-3xl border px-4 py-4 text-left text-sm font-semibold transition ${isActive
                                                        ? "border-[#7C009E] bg-[#7C009E]/10 text-slate-950 shadow-sm"
                                                        : "border-slate-200 bg-white text-slate-700 hover:border-[#7C009E]/60"
                                                    }`}
                                            >
                                                {time}
                                            </button>
                                        );
                                    })}
                                </div>

                                <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-[#faf6ff] p-5">
                                    <div className="flex items-center gap-3 text-slate-700">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-3xl bg-[#7C009E]/10 text-[#7C009E]">
                                            <CalendarIcon size={18} />
                                        </span>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-950">Time zone</p>
                                            <p className="text-sm text-slate-600">GMT+05:30 Asia/Calcutta</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-7">
                                    <button
                                        type="button"
                                        onClick={submitBooking}
                                        disabled={isSubmitting}
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-[1.75rem] bg-[#7C009E] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#8c18ff] disabled:cursor-wait disabled:opacity-70"
                                    >
                                        {isSubmitting ? "Confirming..." : "Confirm booking"}
                                        <ArrowRight size={18} />
                                    </button>
                                </div>

                                {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}

                                <p className="mt-5 text-sm leading-6 text-slate-600">
                                    After confirming, you’ll be taken to Jonathan’s LinkedIn profile so the booking details can be finalised on his end.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
