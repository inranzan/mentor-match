import React from "react";
import { Link } from "react-router-dom";

const CallSession = () => {
    return (
        <div className="bg-background-light text-slate-900 antialiased overflow-hidden h-screen flex flex-col font-display">
            {/* Session Info Bar (Top) */}
            <header className="h-16 border-b border-slate-200 bg-white px-6 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-4">
                    <Link
                        to="/mentors"
                        className="flex items-center gap-2 text-primary"
                    >
                        <span className="font-bold text-xl tracking-tight text-slate-900">
                            MentorMatch
                        </span>
                    </Link>
                    <div className="h-6 w-px bg-slate-200 mx-2 hidden sm:block"></div>
                    <div className="flex flex-col hidden sm:flex">
                        <span className="text-sm font-semibold text-slate-900 leading-none">
                            Priya Sharma
                        </span>
                        <span className="text-xs text-slate-500 truncate max-w-[200px] md:max-w-md">
                            Debugging a race condition in useEffect
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                    <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 rounded-lg text-primary">
                        <span className="material-symbols-outlined text-xl">
                            schedule
                        </span>
                        <span className="font-bold text-base md:text-lg tabular-nums">
                            12:45
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-2">
                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                            <span className="material-symbols-outlined text-slate-600">
                                settings
                            </span>
                        </button>
                        <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAscBSQGZz51-aK8e7J5TE7OFRlGqwuShiBOVe6Yt8xSrMUYfxwLChdjvHTYU_z23UjwAoJ3aakGhcJP-qj9kNYiXgiaCVHalk6Tg-bWNuxh7j-ropP2b3oiae9Ro_L4vWs3qYHVsFCMPcA3c4gSr-RkPLVkI0tPkcp4b0KvbaehLfSWWamQAdQxDRcDGNFGtFX8G8INjQCuizuJRuzLRrZq7Ar9yuLVrPemuyGl871hL2BD2h5rxL711tplOtNpFNLcvlCSzJsjC9G"
                                alt="User"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex flex-1 overflow-hidden relative">
                {/* Primary Video Area */}
                <div className="flex-1 flex flex-col relative bg-slate-900">
                    <div className="flex-1 relative flex items-center justify-center p-4 sm:p-6">
                        {/* Main Mentor Feed */}
                        <div className="relative w-full h-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-slate-800">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbl6FUkbvb8E1OsKmc5urAKvqX9zqvPcyPXucOWlkPRCOuAqukclIIqyJ7Rxq4q9HLCCqmPLEqa8meyIbSR6K50falC1-52D_mVVAFS76KU99P3odoDNPQh1paWLfuTeA3-T4H3m4Eu-JxuKE1J7gm63q4E8pFur1BQef-dGwYnp-bzvXOGJYgIy5-B0qk-X9rnhSCLKh6TwuzJihlX8EC2sE1K_ImjmChxBgFyV5GI0xegBk-g64ysBeGh9UjWrSQp_RTqHpXCypM"
                                alt="Mentor feeds"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg text-white text-xs sm:text-sm font-medium">
                                Priya Sharma (Senior Frontend)
                            </div>
                        </div>

                        {/* User PiP Feed */}
                        <div className="absolute top-8 right-8 w-32 h-20 sm:w-48 sm:h-32 rounded-xl overflow-hidden shadow-xl border-2 border-white/20 bg-slate-800">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVizxZlMepiY848g2FatDd1n27uGtcI1gdIycNu3p1zXlGHOrrOkUc1uveuYRw7ohV6hup4eyKuRxOnxX5sS4W6bztFhesu386fvuE9NDiVeg0pCMv2HGBzZ7K0qLFRdccOMoyblsRnlewsA37mtBZ526GPDOsLpnuvF5RbBcEVhO2p1nJNtO8arXwMfLPANbYtBSpbXqMwklWA4ZrFojuLEFzpGot5LgfQ8Fo_TGu7G74GB4YcnpJcmUDdTLUyV3Yutd8PPhAOmAu"
                                alt="User feed"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-2 left-2 bg-black/40 px-2 py-0.5 rounded text-[10px] text-white font-medium">
                                You
                            </div>
                        </div>
                    </div>

                    {/* Video Control Bar */}
                    <div className="h-20 sm:h-24 flex items-center justify-center gap-2 sm:gap-4 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 w-full pb-4 sm:pb-6 z-10 px-2 overflow-x-auto scrollbar-hide">
                        <button className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-slate-700/50 hover:bg-slate-600/50 text-white backdrop-blur-md transition-all">
                            <span className="material-symbols-outlined">
                                mic
                            </span>
                        </button>
                        <button className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-slate-700/50 hover:bg-slate-600/50 text-white backdrop-blur-md transition-all">
                            <span className="material-symbols-outlined">
                                videocam
                            </span>
                        </button>
                        <button className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-primary hover:bg-primary/90 text-white shadow-lg transition-all">
                            <span className="material-symbols-outlined">
                                present_to_all
                            </span>
                        </button>
                        <button className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-slate-700/50 hover:bg-slate-600/50 text-white backdrop-blur-md transition-all hidden sm:flex">
                            <span className="material-symbols-outlined">
                                code
                            </span>
                        </button>
                        <button className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-slate-700/50 hover:bg-slate-600/50 text-white backdrop-blur-md transition-all">
                            <span className="material-symbols-outlined">
                                more_horiz
                            </span>
                        </button>
                        <div className="w-px h-6 sm:h-8 bg-white/20 mx-1 sm:mx-2 flex-shrink-0"></div>
                        <Link
                            to="/review"
                            className="flex-shrink-0 px-4 sm:px-6 h-10 sm:h-12 rounded-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold shadow-lg transition-all gap-1 sm:gap-2"
                        >
                            <span className="material-symbols-outlined">
                                call_end
                            </span>
                            <span className="hidden sm:inline">
                                Leave Session
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Chat Sidebar (Right) */}
                <aside className="w-72 sm:w-80 border-l border-slate-200 bg-white flex-col shrink-0 hidden lg:flex">
                    <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                        <h3 className="font-bold text-slate-800">Live Chat</h3>
                        <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">
                            2 active
                        </span>
                    </div>

                    {/* Message History */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        <div className="text-center">
                            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                                Session Started • 2:15 PM
                            </span>
                        </div>

                        {/* Mentor Message */}
                        <div className="flex flex-col items-start gap-1">
                            <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-xs font-bold text-slate-700">
                                    Priya Sharma
                                </span>
                                <span className="text-[10px] text-slate-400">
                                    2:16 PM
                                </span>
                            </div>
                            <div className="bg-slate-100 rounded-tr-xl rounded-br-xl rounded-bl-xl p-3 max-w-[90%]">
                                <p className="text-sm text-slate-700">
                                    Hey there! I'm taking a look at that
                                    useEffect hook you shared. Can you try to
                                    trigger the race condition again?
                                </p>
                            </div>
                        </div>

                        {/* User Message */}
                        <div className="flex flex-col items-end gap-1">
                            <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-[10px] text-slate-400">
                                    2:17 PM
                                </span>
                                <span className="text-xs font-bold text-primary">
                                    You
                                </span>
                            </div>
                            <div className="bg-primary text-white rounded-tl-xl rounded-br-xl rounded-bl-xl p-3 max-w-[90%] shadow-sm">
                                <p className="text-sm">
                                    Sure thing. It usually happens when I
                                    navigate between tabs quickly. I'll share my
                                    screen now.
                                </p>
                            </div>
                        </div>

                        {/* Shared Snippet Card */}
                        <div className="bg-primary/5 border border-primary/20 rounded-xl p-3 flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-primary">
                                <span className="material-symbols-outlined text-sm">
                                    terminal
                                </span>
                                <span className="text-xs font-bold">
                                    Code Snippet Shared
                                </span>
                            </div>
                            <p className="text-[11px] font-mono text-slate-600 line-clamp-2 bg-white/50/20 p-2 rounded">
                                {"useEffect(() => { let active = true; ..."}
                            </p>
                            <button className="text-[11px] font-bold text-primary hover:underline self-start">
                                View Workspace
                            </button>
                        </div>

                        {/* Mentor Typing */}
                        <div className="flex items-center gap-2 text-slate-400">
                            <div className="flex gap-1">
                                <span className="w-1 h-1 rounded-full bg-slate-300 animate-pulse"></span>
                                <span className="w-1 h-1 rounded-full bg-slate-300 animate-pulse delay-75"></span>
                                <span className="w-1 h-1 rounded-full bg-slate-300 animate-pulse delay-150"></span>
                            </div>
                            <span className="text-[10px] italic">
                                Priya is typing...
                            </span>
                        </div>
                    </div>

                    {/* Input Field */}
                    <div className="p-4 border-t border-slate-100 bg-slate-50/50/50">
                        <div className="relative">
                            <textarea
                                className="w-full pr-12 bg-white border-slate-200 rounded-xl text-sm focus:ring-primary focus:border-primary resize-none py-3 placeholder-slate-400 outline-none"
                                placeholder="Type your message..."
                                rows={1}
                            ></textarea>
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary p-2 hover:bg-primary/10 rounded-lg transition-colors">
                                <span
                                    className="material-symbols-outlined"
                                    style={{
                                        fontVariationSettings: "'FILL' 1",
                                    }}
                                >
                                    send
                                </span>
                            </button>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                            <button className="flex items-center gap-1.5 text-slate-500 hover:text-slate-700 transition-colors">
                                <span className="material-symbols-outlined text-lg">
                                    attach_file
                                </span>
                            </button>
                            <button className="flex items-center gap-1.5 text-slate-500 hover:text-slate-700 transition-colors">
                                <span className="material-symbols-outlined text-lg">
                                    mood
                                </span>
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Code Snippet Workspace Button (Floating Toggle) */}
                <button className="hidden sm:flex fixed bottom-32 left-8 bg-white shadow-2xl border border-slate-200 rounded-2xl p-4 items-center gap-4 hover:translate-y-[-2px] transition-all group z-20">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined">
                            data_object
                        </span>
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                            Shared Tool
                        </span>
                        <span className="text-sm font-bold">
                            Collaborative Workspace
                        </span>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 ml-4 group-hover:translate-x-1 transition-transform">
                        arrow_forward_ios
                    </span>
                </button>
            </main>
        </div>
    );
};

export default CallSession;
