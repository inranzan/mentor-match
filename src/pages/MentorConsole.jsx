import React from "react";
import { Link } from "react-router-dom";

const MentorConsole = () => {
    return (
        <div className="bg-background-light font-display text-text-main h-screen flex overflow-hidden antialiased selection:bg-primary/20 selection:text-primary">
            {/* Sidebar Navigation */}
            <aside className="w-64 bg-surface border-r border-slate-200 flex flex-col h-full hidden md:flex">
                <div className="p-6 flex items-center gap-3">
                    <h1 className="text-text-main font-bold text-lg tracking-tight">
                        MentorMatch
                    </h1>
                </div>

                <nav className="flex-1 px-4 py-4 space-y-1">
                    <a
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium"
                    >
                        <span className="material-symbols-outlined text-[20px]">
                            dashboard
                        </span>
                        Dashboard
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-body hover:bg-slate-50 transition-colors font-medium"
                    >
                        <span className="material-symbols-outlined text-[20px]">
                            calendar_month
                        </span>
                        Calendar
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-body hover:bg-slate-50 transition-colors font-medium"
                    >
                        <span className="material-symbols-outlined text-[20px]">
                            history
                        </span>
                        History
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-body hover:bg-slate-50 transition-colors font-medium"
                    >
                        <span className="material-symbols-outlined text-[20px]">
                            payments
                        </span>
                        Earnings
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-body hover:bg-slate-50 transition-colors font-medium"
                    >
                        <span className="material-symbols-outlined text-[20px]">
                            settings
                        </span>
                        Settings
                    </a>
                </nav>

                <div className="p-4 border-t border-slate-200">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-10 h-10 rounded-full bg-slate-200 bg-center bg-cover"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApirKhwRxMKlqt7X5uCpF33-BteqNBvIF9DCtlwgGq9QYCRF6uE2c1ZvNRF8mbKKBVA2IXy-tO-_8GsOv660Hn6CF9RGvqM4HOHPsyE9IQzBCoW9IP877teFJNMO8jZtSTcSGRhthr5Ugr97LOy6Rm9vSIchnCNHhkIBXTY0Rl5W9qfrZKzH9z8MMj1ZcQKRTDx_27K_M9PN4c44MP3hNmbF4oKjy_aLfSuGzQQFPMTV0Wj5RVgGoPFIV6P1IePDrc_gJPI-FHwREf')",
                            }}
                        ></div>
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-text-main">
                                Aditya Verma
                            </span>
                            <span className="text-xs text-text-muted">
                                Senior Engineer
                            </span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                {/* Top Bar (Mobile) */}
                <header className="h-16 border-b border-slate-200 bg-surface flex items-center justify-between px-4 md:hidden">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                            CC
                        </div>
                        <h1 className="font-bold text-lg">Console</h1>
                    </div>
                    <button className="text-text-main">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </header>

                {/* Scrollable Area */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12">
                    <div className="max-w-5xl mx-auto space-y-8">
                        {/* Page Header & Global Toggle */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-text-main">
                                    Mentor Console
                                </h2>
                                <p className="text-text-body mt-1">
                                    Manage your availability and track your
                                    impact.
                                </p>
                            </div>

                            {/* Toggle */}
                            <div className="bg-surface border border-slate-200 shadow-soft rounded-xl p-4 flex items-center gap-5 pr-6 w-full md:w-auto">
                                <label className="relative inline-flex items-center cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        defaultChecked
                                    />
                                    <div className="w-14 h-8 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-mint shadow-inner"></div>
                                </label>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-text-main flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-mint animate-pulse"></span>
                                        You are currently visible
                                    </span>
                                    <span className="text-xs text-text-body">
                                        Receiving booking requests
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Metrics Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                            <div className="bg-surface p-6 rounded-xl border border-slate-200 shadow-soft flex flex-col gap-4 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                                <div className="flex items-center justify-between">
                                    <div className="p-2 bg-slate-50 rounded-lg text-text-body group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">
                                            schedule
                                        </span>
                                    </div>
                                    <span className="text-xs font-medium text-mint bg-mint/10/20 px-2 py-1 rounded-full">
                                        +12% this week
                                    </span>
                                </div>
                                <div>
                                    <p className="text-text-muted text-sm font-medium uppercase tracking-wider">
                                        Minutes Mentored
                                    </p>
                                    <p className="text-3xl font-bold text-text-main mt-1 tracking-tight">
                                        345
                                    </p>
                                </div>
                            </div>

                            <div className="bg-surface p-6 rounded-xl border border-slate-200 shadow-soft flex flex-col gap-4 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                                <div className="flex items-center justify-between">
                                    <div className="p-2 bg-slate-50 rounded-lg text-text-body group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">
                                            payments
                                        </span>
                                    </div>
                                    <span className="text-xs font-medium text-mint bg-mint/10/20 px-2 py-1 rounded-full">
                                        +$240 pending
                                    </span>
                                </div>
                                <div>
                                    <p className="text-text-muted text-sm font-medium uppercase tracking-wider">
                                        Total Earnings
                                    </p>
                                    <p className="text-3xl font-bold text-text-main mt-1 tracking-tight">
                                        $1,240
                                    </p>
                                </div>
                            </div>

                            <div className="bg-surface p-6 rounded-xl border border-slate-200 shadow-soft flex flex-col gap-4 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                                <div className="flex items-center justify-between">
                                    <div className="p-2 bg-slate-50 rounded-lg text-text-body group-hover:text-primary transition-colors">
                                        <span
                                            className="material-symbols-outlined"
                                            style={{
                                                fontVariationSettings:
                                                    "'FILL' 1",
                                            }}
                                        >
                                            star
                                        </span>
                                    </div>
                                    <span className="text-xs font-medium text-text-muted bg-slate-100 px-2 py-1 rounded-full">
                                        120 sessions
                                    </span>
                                </div>
                                <div>
                                    <p className="text-text-muted text-sm font-medium uppercase tracking-wider">
                                        Mentor Rating
                                    </p>
                                    <p className="text-3xl font-bold text-text-main mt-1 tracking-tight">
                                        4.9
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Calendar & Upcoming Sessions */}
                        <div className="bg-surface rounded-xl border border-slate-200 shadow-soft overflow-hidden">
                            <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-bold text-text-main">
                                        Schedule &amp; Integration
                                    </h3>
                                    <p className="text-sm text-text-body">
                                        Manage your upcoming sessions and
                                        calendar sync.
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-200 w-fit">
                                    <div className="w-2 h-2 rounded-full bg-mint"></div>
                                    <span className="text-xs font-medium text-text-main">
                                        Google Calendar • Connected
                                    </span>
                                </div>
                            </div>

                            <div className="p-0">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-slate-50/50/50 border-b border-slate-200 text-xs uppercase text-text-muted font-semibold tracking-wider">
                                                <th className="px-6 py-4">
                                                    Time
                                                </th>
                                                <th className="px-6 py-4">
                                                    Mentee
                                                </th>
                                                <th className="px-6 py-4 w-1/2">
                                                    Topic
                                                </th>
                                                <th className="px-6 py-4 text-right">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-200">
                                            {/* Session 1 */}
                                            <tr className="group hover:bg-slate-50/50/50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-bold text-text-main">
                                                            Today
                                                        </span>
                                                        <span className="text-xs font-mono text-text-body">
                                                            14:00 - 14:15
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center gap-3">
                                                        <div
                                                            className="h-8 w-8 rounded-full bg-slate-200 bg-center bg-cover"
                                                            style={{
                                                                backgroundImage:
                                                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmutJu3j3Mh3xamUInA_Goh7p6Ph6YXvm_nf-NetNt48Jx98wNvr0xCJ21nThshh_vkyrXEkI60ghOkq74FXHn8EoGE5txF5MOc_DoVWt0Ay3hDN_ypq9L_lKJ9WDX8xy-A5As9eS8EFQC3mdUrYkYTDubOgkdgpVm2BlTBTKZrY5V8-TvMrGQSpv3cmvTaRDQQTHIOt93dIOApp56iKQU9JiAJBfpU3MHYsKHAl5TRrCmJh8xMEsHMlLVLpP1L3xdysjxe3xjgSfL')",
                                                            }}
                                                        ></div>
                                                        <span className="text-sm font-medium text-text-main">
                                                            Priya Sharma
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="text-sm text-text-body">
                                                        Debugging useEffect
                                                        dependency loop error in
                                                        Next.js 14 dashboard
                                                        component.
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right whitespace-nowrap">
                                                    <button className="text-sm font-medium text-primary hover:text-primary-dark border border-primary/20 hover:border-primary/50 bg-primary/5 px-4 py-2 rounded-lg transition-all">
                                                        Join Room
                                                    </button>
                                                </td>
                                            </tr>

                                            {/* Session 2 */}
                                            <tr className="group hover:bg-slate-50/50/50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-bold text-text-main">
                                                            Today
                                                        </span>
                                                        <span className="text-xs font-mono text-text-body">
                                                            15:30 - 15:45
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-primary text-xs font-bold">
                                                            MD
                                                        </div>
                                                        <span className="text-sm font-medium text-text-main">
                                                            Mark Davis
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="text-sm text-text-body">
                                                        System Design interview
                                                        prep: scaling a
                                                        notification service.
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right whitespace-nowrap">
                                                    <button className="text-sm font-medium text-text-muted hover:text-text-main px-4 py-2 rounded-lg transition-colors">
                                                        Reschedule
                                                    </button>
                                                </td>
                                            </tr>

                                            {/* Session 3 */}
                                            <tr className="group hover:bg-slate-50/50/50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-bold text-text-main">
                                                            Tomorrow
                                                        </span>
                                                        <span className="text-xs font-mono text-text-body">
                                                            09:15 - 09:30
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center gap-3">
                                                        <div
                                                            className="h-8 w-8 rounded-full bg-slate-200 bg-center bg-cover"
                                                            style={{
                                                                backgroundImage:
                                                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0Qt_2DCy7ovn5VkqNO2DtpyzwBOsKCofevnlT5hz4mtf6casgEA18WP5m6pBTYj30smMqlYJY8sXPRt0PSQpjU2bBrJ_uFtTzlFRCAPSHMhuCFfGiTv4Z9_7SFBVIToGTThYyx1_E8YSgKb8Tm7Y5cnjjaU8arXWAnmQXvge4mC1IY80B91RHcB9--HBSkZOs_iQvw1YV19WNhN6ojbsQ3gcpJgXnwnk8p6vnkvJ9LHn28g_wlKv8thh00teM2Z-EuqGdp_vD3fQw')",
                                                            }}
                                                        ></div>
                                                        <span className="text-sm font-medium text-text-main">
                                                            Rohan Singh
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="text-sm text-text-body">
                                                        Python async/await
                                                        patterns clarification
                                                        for data processing
                                                        pipeline.
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right whitespace-nowrap">
                                                    <button className="text-sm font-medium text-text-muted hover:text-text-main px-4 py-2 rounded-lg transition-colors">
                                                        Reschedule
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/30/30 flex justify-center">
                                    <button className="text-sm font-medium text-text-muted hover:text-primary transition-colors flex items-center gap-2">
                                        View full calendar
                                        <span className="material-symbols-outlined text-sm">
                                            arrow_forward
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MentorConsole;
