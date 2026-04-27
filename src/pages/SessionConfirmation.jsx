import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const SessionConfirmation = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light font-display text-text-main antialiased min-h-screen flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <div
                className="fixed inset-0 bg-slate-900/20 backdrop-blur-[5px] z-40 transition-opacity cursor-pointer"
                onClick={() => navigate(-1)}
            ></div>

            {/* Modal Container */}
            <div className="relative z-50 w-full max-w-[480px] bg-surface rounded-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-slate-200 overflow-hidden flex flex-col group/modal">
                {/* Header Section */}
                <div className="p-6 pb-4 border-b border-slate-200/50">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                                Confirm Session
                            </h2>
                            <h1 className="text-2xl font-bold text-text-main tracking-tight">
                                Booking with Priya
                            </h1>
                        </div>
                        <button
                            onClick={() => navigate(-1)}
                            className="text-text-muted hover:text-text-main transition-colors p-1 rounded-md hover:bg-slate-100"
                        >
                            <span className="material-symbols-outlined text-2xl">
                                close
                            </span>
                        </button>
                    </div>

                    {/* Mentor Mini-Profile */}
                    <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <div className="relative">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB94g0UfQbM1AVpNlmOk21rkieMeS7X32uicvjOz4JyHVNOG_ofMk4jLOO7mZ1HBcLPEV9xfHLqtsfTLDR5BdbQdlafim6toEDzI40a-R4JDEqld-bcps7gE00z227pX_SCbMpdsR88VCdLQwTB7XgbVKLhNs3d7VL4ksoMgJFVviL9SMKdh186Cu7-BDQHI4tO1LryMh92nn_STzqi8IhnGeWIIFNY0WGC72NKMin4YsKApm-qY2EkH9yMejfxD1YeLxmqSmlb1SRn"
                                alt="Priya Sharma"
                                className="w-10 h-10 rounded-full object-cover border border-white shadow-sm"
                            />
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-mint rounded-full border-2 border-white"></div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-sm font-semibold text-text-main">
                                Priya Sharma
                            </span>
                            <span className="text-xs text-text-body">
                                React Expert • @priya_dev
                            </span>
                        </div>
                    </div>
                </div>

                {/* Body Section */}
                <div className="p-6 space-y-6">
                    {/* Time Confirmation */}
                    <div className="flex items-center gap-3 text-text-main">
                        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-primary flex-shrink-0">
                            <span className="material-symbols-outlined">
                                schedule
                            </span>
                        </div>
                        <div>
                            <p className="text-sm text-text-body">
                                Session Time
                            </p>
                            <p className="font-bold text-base">
                                Today, 2:15 PM - 2:30 PM{" "}
                                <span className="text-text-muted font-normal text-sm ml-1">
                                    (15 min)
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Input Field */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-end">
                            <label
                                htmlFor="blocker-input"
                                className="text-sm font-semibold text-text-main"
                            >
                                What's your blocker?
                            </label>
                            <span className="text-xs font-mono text-text-muted">
                                0/140
                            </span>
                        </div>
                        <div className="relative">
                            <textarea
                                id="blocker-input"
                                maxLength="140"
                                placeholder="e.g., Debugging a race condition in useEffect dependency array..."
                                className="w-full min-h-[120px] rounded-lg border-slate-200 bg-background-light p-4 text-sm text-text-main placeholder:text-text-muted focus:border-primary focus:ring-1 focus:ring-primary resize-none transition-all outline-none shadow-inner"
                            ></textarea>
                        </div>
                        <p className="text-xs text-text-muted flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">
                                info
                            </span>
                            Keep it specific for a faster resolution.
                        </p>
                    </div>
                </div>

                {/* Footer / Action Area */}
                <div className="p-6 pt-2 bg-surface">
                    <div className="flex items-center justify-between mb-4 text-sm">
                        <span className="text-text-body">Total Cost</span>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-text-main">
                                1 Credit
                            </span>
                            <span className="text-xs text-text-muted bg-slate-100 px-2 py-0.5 rounded-full">
                                Balance: 4
                            </span>
                        </div>
                    </div>

                    <Link
                        to="/waiting-room"
                        className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg shadow-lg shadow-indigo-500/20 transition-all duration-200 flex items-center justify-center gap-2 transform active:scale-[0.98]"
                    >
                        <span>Confirm Booking</span>
                        <span className="material-symbols-outlined text-lg">
                            arrow_forward
                        </span>
                    </Link>
                    <p className="text-center text-[11px] text-text-muted mt-3">
                        By confirming, you agree to our session guidelines.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SessionConfirmation;
