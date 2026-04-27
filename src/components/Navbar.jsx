import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn = false }) => {
    if (isLoggedIn) {
        return (
            <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 h-16 flex items-center justify-between px-6 lg:px-8">
                <div className="flex items-center gap-3">
                    <h1 className="text-text-main text-lg font-bold tracking-tight">
                        MentorMatch
                    </h1>
                </div>
                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-body">
                        <Link
                            to="/mentors"
                            className="text-text-main hover:text-primary transition-colors"
                        >
                            Pulse
                        </Link>
                        <Link
                            to="#"
                            className="hover:text-primary transition-colors"
                        >
                            Sessions
                        </Link>
                        <Link
                            to="#"
                            className="hover:text-primary transition-colors"
                        >
                            History
                        </Link>
                    </nav>
                    <div className="h-6 w-px bg-slate-200 mx-2 hidden md:block"></div>
                    <button className="relative p-2 text-text-body hover:text-primary transition-colors rounded-full hover:bg-slate-50">
                        <span className="material-symbols-outlined text-[20px]">
                            notifications
                        </span>
                        <span className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full border border-white"></span>
                    </button>
                    <div className="flex items-center gap-3 pl-2">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold text-text-main leading-tight">
                                Arjun Kumar
                            </p>
                            <p className="text-xs text-text-muted font-mono">
                                4 Credits
                            </p>
                        </div>
                        <div
                            className="size-9 rounded-full bg-slate-200 bg-cover bg-center border border-slate-100 shadow-sm"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAANWkuPMV8yRyQlk-v8EuSxmpz-StEeQiuN3sU2DNv3NQ4MebOwPePYl6OepX9q3GrW29yHskSOMRtXK650uNxVwR3sX0X_hOC2thU-E5ucgjCkI9R6stRCMtlBcON5asy-ADBYexh1k303xFxpX7Ld2dO0_JdWN-FMp5qCxv9jK1AGpV1dZv-Wnt65fYRCNoy8mLr7l1nbiAwPxC3oy8UN3xTO6HK-SaXZ_V1EXDM5umzKbGkZyQykt8Q9I8JfGc-fIiMEJQYyLPb')",
                            }}
                        ></div>
                    </div>
                </div>
            </header>
        );
    }

    return (
        <header className="sticky top-0 z-50 glass-effect border-b border-primary/10 px-6 lg:px-20 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <h2 className="text-xl font-extrabold tracking-tight">
                        MentorMatch
                    </h2>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    <a
                        href="#how-it-works"
                        className="text-sm font-semibold hover:text-primary transition-colors"
                    >
                        How it works
                    </a>
                    <a
                        href="#features"
                        className="text-sm font-semibold hover:text-primary transition-colors"
                    >
                        Why 15 minutes?
                    </a>
                    <Link
                        to="/console"
                        className="text-sm font-semibold hover:text-primary transition-colors"
                    >
                        For Mentors
                    </Link>
                </nav>
                <div className="flex items-center gap-3">
                    <Link
                        to="/login"
                        className="hidden sm:block text-sm font-bold px-4 py-2 hover:bg-primary/5 rounded-lg transition-colors"
                    >
                        Log In
                    </Link>
                    <Link
                        to="/mentors"
                        className="bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        Find a Mentor
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
