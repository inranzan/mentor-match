import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LandingPage = () => {
    return (
        <div className=" text-slate-900 font-display">
            <Navbar />

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-16 pb-24 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-8">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full w-fit">
                            <span className="material-symbols-outlined text-sm">
                                bolt
                            </span>
                            <span className="text-xs font-bold uppercase tracking-wider">
                                Available Now
                            </span>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
                            Instant access to senior engineering talent for{" "}
                            <span className="text-primary">15-minute</span>{" "}
                            sessions.
                        </h1>
                        <p className="text-lg text-slate-600 max-w-lg">
                            Get unstuck faster with on-demand technical
                            mentorship from world-class engineers at Google,
                            Meta, and Netflix.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/mentors"
                                className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all"
                            >
                                Find a Mentor
                                <span className="material-symbols-outlined">
                                    arrow_forward
                                </span>
                            </Link>
                            <Link
                                to="/console"
                                className="bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all"
                            >
                                Become a Mentor
                            </Link>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                            <div className="flex -space-x-2">
                                <div
                                    className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"
                                    title="Mentor avatar"
                                ></div>
                                <div
                                    className="w-8 h-8 rounded-full border-2 border-white bg-slate-400"
                                    title="Mentor avatar"
                                ></div>
                                <div
                                    className="w-8 h-8 rounded-full border-2 border-white bg-slate-500"
                                    title="Mentor avatar"
                                ></div>
                            </div>
                            <span>
                                Joined by 500+ senior engineers this week
                            </span>
                        </div>
                    </div>

                    {/* Pulse Dashboard / Mentor Card Visual */}
                    <div className="relative">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                        <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 lg:p-8 overflow-hidden">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <p className="text-xs font-bold text-primary uppercase tracking-widest">
                                        Active Mentors
                                    </p>
                                    <h3 className="text-xl font-bold">
                                        The Pulse Dashboard
                                    </h3>
                                </div>
                                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-xs font-bold">
                                        142 Online
                                    </span>
                                </div>
                            </div>

                            {/* Mentor Card */}
                            <div className="bg-background-light/50 p-5 rounded-2xl border border-primary/10 mb-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div
                                        className="w-14 h-14 rounded-xl bg-slate-200 overflow-hidden"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_9zeA-Jn2g8qWrIGi26TECiho9UC8bO4RCS-Eqh8QnKDibtNtU22cnwCHluLpyAZsO7ks_7c0wgsVCOQ5ITx8Sr6MZ6tyoNHe88-tsrldIvbf6jXw09V7eYi-3DeOfLJBHs42YCqyQE8kT4Zit41pyKyRZgot6Pg2ivZfdVihwSVdhZRd9rxSMoH9DDCtRfEaXkfqHudkgoq-Wc-N56gJddcrvVRc1MdOdgF7s_CTUkhFDG_MD54eh7xL-X79xx97pWzeD78e4tCd')",
                                            backgroundSize: "cover",
                                        }}
                                    ></div>
                                    <div>
                                        <h4 className="font-bold text-lg">
                                            Aditya Verma
                                        </h4>
                                        <p className="text-sm text-slate-500">
                                            Staff Engineer at Stripe
                                        </p>
                                    </div>
                                    <div className="ml-auto flex flex-col items-end">
                                        <div className="flex text-amber-400">
                                            <span className="material-symbols-outlined fill-1">
                                                star
                                            </span>
                                            <span className="text-slate-900 font-bold ml-1">
                                                4.9
                                            </span>
                                        </div>
                                        <p className="text-[10px] text-slate-400">
                                            1.2k Sessions
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-[10px] bg-white px-2 py-1 rounded-md border border-slate-100">
                                        Kubernetes
                                    </span>
                                    <span className="text-[10px] bg-white px-2 py-1 rounded-md border border-slate-100">
                                        Go
                                    </span>
                                    <span className="text-[10px] bg-white px-2 py-1 rounded-md border border-slate-100">
                                        System Design
                                    </span>
                                </div>
                                <button className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm">
                                    Join Call Now (15m)
                                </button>
                            </div>

                            {/* Small Session Stats UI */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">
                                        Avg Response
                                    </p>
                                    <p className="text-lg font-bold">2.4 min</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">
                                        Fixed Cost
                                    </p>
                                    <p className="text-lg font-bold">
                                        $25 / sess
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By */}
            <section className="py-12 px-6 border-y border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">
                        Trusted by experts from leading tech companies
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center gap-2 font-bold text-2xl">
                            Google
                        </div>
                        <div className="flex items-center gap-2 font-bold text-2xl">
                            Microsoft
                        </div>
                        <div className="flex items-center gap-2 font-bold text-2xl">
                            Airbnb
                        </div>
                        <div className="flex items-center gap-2 font-bold text-2xl">
                            Slack
                        </div>
                        <div className="flex items-center gap-2 font-bold text-2xl">
                            Discord
                        </div>
                        <div className="flex items-center gap-2 font-bold text-2xl">
                            Stripe
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Section: Why 15 Minutes? */}
            <section className="py-24 px-6 lg:px-20 bg-white/50" id="features">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
                        <h2 className="text-4xl font-extrabold tracking-tight">
                            Why 15 minutes?
                        </h2>
                        <p className="text-lg text-slate-600">
                            Micro-mentoring is the most efficient way to solve
                            specific technical hurdles without the overhead of
                            long-term commitments or scheduling nightmares.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-background-light border border-transparent hover:border-primary/20 transition-all group">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">
                                    timer
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                Extreme Focus
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Zero in on a single bug, PR review, or
                                architectural decision. No fluff, just technical
                                clarity.
                            </p>
                        </div>
                        <div className="p-8 rounded-3xl bg-background-light border border-transparent hover:border-primary/20 transition-all group">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">
                                    monetization_on
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                Cost Effective
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Pay only for the precise time you need.
                                High-level expertise without the executive
                                consulting price tag.
                            </p>
                        </div>
                        <div className="p-8 rounded-3xl bg-background-light border border-transparent hover:border-primary/20 transition-all group">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">
                                    bolt
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                Immediate Impact
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Get back to coding in minutes, not days. Unblock
                                your deployment cycle the moment you hit a wall.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className="py-24 px-6 lg:px-20" id="how-it-works">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="sticky top-24">
                                <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
                                    How it works
                                </h2>
                                <p className="text-lg text-slate-600 mb-8">
                                    Going from stuck to productive is a 3-step
                                    process. No scheduling required—mentors are
                                    standing by.
                                </p>
                                <div className="flex flex-col gap-8">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                            1
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-1">
                                                Pick your stack
                                            </h4>
                                            <p className="text-slate-500">
                                                Filter by language, framework,
                                                or specific tool like AWS or
                                                Docker.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                            2
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-1">
                                                Join the Pulse
                                            </h4>
                                            <p className="text-slate-500">
                                                See who's live and view their
                                                verified credentials and
                                                availability.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                            3
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-1">
                                                Start the timer
                                            </h4>
                                            <p className="text-slate-500">
                                                Jump into a 15-minute video &
                                                screen-share session instantly.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="rounded-3xl overflow-hidden bg-primary/5 aspect-square flex items-center justify-center relative border border-primary/10">
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(#5247e6 2px, transparent 2px)",
                                        backgroundSize: "24px 24px",
                                    }}
                                ></div>
                                <div className="relative w-4/5 bg-white rounded-2xl shadow-xl p-8 border border-slate-200 rotate-2">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="material-symbols-outlined text-primary">
                                            video_chat
                                        </span>
                                        <span className="font-bold">
                                            Active Session: Next.js Optimization
                                        </span>
                                    </div>
                                    <div className="h-40 bg-slate-100 rounded-xl mb-4 flex items-center justify-center text-slate-400 italic text-sm">
                                        [ Screen Share Active ]
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="text-2xl font-mono font-bold text-primary">
                                            12:45
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-600 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-sm">
                                                    mic_off
                                                </span>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                                                <span className="material-symbols-outlined text-sm">
                                                    videocam
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-6 lg:px-20">
                <div className="max-w-5xl mx-auto rounded-[2.5rem] bg-slate-900 text-white p-12 lg:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/30 blur-[100px] rounded-full"></div>
                    <div className="relative z-10 flex flex-col gap-8 items-center">
                        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
                            Stop wasting hours on Stack Overflow
                        </h2>
                        <p className="text-xl text-slate-400 max-w-2xl">
                            Whether you're a junior dev stuck on CSS or a senior
                            architect needing a second pair of eyes on a
                            migration plan.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            <Link
                                to="/mentors"
                                className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-primary/40 hover:scale-105 transition-all"
                            >
                                Find a Mentor Now
                            </Link>
                            <Link
                                to="/console"
                                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
                            >
                                Become a Mentor
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandingPage;
