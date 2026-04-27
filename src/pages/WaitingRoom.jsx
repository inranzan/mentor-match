import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const WaitingRoom = () => {
    return (
        <div className="bg-background-light font-display min-h-screen flex flex-col antialiased text-text-main">
            <Navbar />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
                {/* Abstract Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl mix-blend-multiply filter"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl mix-blend-multiply filter"></div>
                </div>

                <div className="relative z-10 w-full max-w-lg flex flex-col gap-8">
                    {/* Status Badge */}
                    <div className="flex justify-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <span className="text-sm font-semibold text-text-body tracking-wide">
                                SESSION CONFIRMED
                            </span>
                        </div>
                    </div>

                    {/* Countdown Timer Card */}
                    <div className="flex flex-col items-center">
                        <div className="font-mono text-7xl sm:text-8xl font-bold text-text-main tracking-tighter tabular-nums leading-none">
                            02:14
                        </div>
                        <p className="mt-4 text-text-body text-base font-medium">
                            until your session with{" "}
                            <span className="text-text-main font-bold">
                                Priya Sharma
                            </span>
                        </p>
                    </div>

                    {/* Context Card */}
                    <div className="bg-surface rounded-2xl shadow-soft border border-slate-100 overflow-hidden">
                        <div className="bg-slate-50 px-6 py-3 border-b border-slate-100 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-sm">
                                topic
                            </span>
                            <span className="text-xs font-bold uppercase tracking-wider text-text-body">
                                Session Topic
                            </span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-text-main mb-2">
                                Debugging a race condition in useEffect
                            </h3>
                            <p className="text-text-body text-sm leading-relaxed">
                                "I'm encountering an infinite loop when adding
                                an object to the dependency array, even when
                                using useMemo. Need help structuring the effect
                                properly."
                            </p>
                            <div className="mt-4 flex gap-2">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-50/30 text-blue-700">
                                    React
                                </span>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-600">
                                    Hooks
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Prep Checklist */}
                    <div className="flex flex-col gap-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted px-2">
                            Prep Checklist
                        </h4>

                        <div className="bg-surface p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 transition-transform hover:translate-y-[-2px] duration-300">
                            <div className="flex-shrink-0 size-10 rounded-full bg-indigo-50/30 text-primary flex items-center justify-center">
                                <span
                                    className="material-symbols-outlined"
                                    style={{
                                        fontVariationSettings: "'FILL' 1",
                                    }}
                                >
                                    code
                                </span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-text-main">
                                    Have code open
                                </p>
                                <p className="text-xs text-text-body">
                                    Ensure your IDE is ready and irrelevant tabs
                                    are closed.
                                </p>
                            </div>
                            <div className="text-emerald-500">
                                <span
                                    className="material-symbols-outlined"
                                    style={{
                                        fontVariationSettings: "'FILL' 1",
                                    }}
                                >
                                    check_circle
                                </span>
                            </div>
                        </div>

                        <div className="bg-surface p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 transition-transform hover:translate-y-[-2px] duration-300">
                            <div className="flex-shrink-0 size-10 rounded-full bg-indigo-50/30 text-primary flex items-center justify-center">
                                <span
                                    className="material-symbols-outlined"
                                    style={{
                                        fontVariationSettings: "'FILL' 1",
                                    }}
                                >
                                    mic
                                </span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-text-main">
                                    Check microphone
                                </p>
                                <p className="text-xs text-text-body">
                                    Test your input levels to ensure clear
                                    communication.
                                </p>
                            </div>
                            <div className="text-emerald-500">
                                <span
                                    className="material-symbols-outlined"
                                    style={{
                                        fontVariationSettings: "'FILL' 1",
                                    }}
                                >
                                    check_circle
                                </span>
                            </div>
                        </div>

                        <div className="bg-surface p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 transition-transform hover:translate-y-[-2px] duration-300">
                            <div className="flex-shrink-0 size-10 rounded-full bg-indigo-50/30 text-primary flex items-center justify-center">
                                <span
                                    className="material-symbols-outlined"
                                    style={{
                                        fontVariationSettings: "'FILL' 1",
                                    }}
                                >
                                    link
                                </span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-text-main">
                                    Prepare snippet link
                                </p>
                                <p className="text-xs text-text-body">
                                    Have a GitHub Gist or CodeSandbox link ready
                                    to share.
                                </p>
                            </div>
                            <div className="size-6 rounded-full border-2 border-slate-200"></div>
                        </div>
                    </div>

                    {/* Action Area */}
                    <div className="pt-4 flex flex-col gap-3">
                        {/* For demonstration, Link to session is active instead of disabled */}
                        <Link
                            to="/session/1"
                            className="w-full h-14 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all hover:bg-primary-dark group shadow-lg shadow-primary/20"
                        >
                            <span className="material-symbols-outlined">
                                video_chat
                            </span>
                            <span>Join Meeting Now (Demo)</span>
                        </Link>
                        <button className="text-sm text-text-body hover:text-red-500 font-medium transition-colors text-center py-2">
                            Cancel or reschedule session
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default WaitingRoom;
