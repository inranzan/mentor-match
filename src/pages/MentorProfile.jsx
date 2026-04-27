import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const MentorProfile = () => {
    return (
        <div className="bg-background-light font-display min-h-screen text-text-main antialiased selection:bg-primary/20 selection:text-primary">
            <Navbar />

            <main className="mx-auto max-w-[1200px] px-4 py-8 lg:px-8">
                {/* Breadcrumbs */}
                <div className="mb-8 flex items-center gap-2 text-sm text-text-muted">
                    <Link
                        to="/mentors"
                        className="hover:text-primary transition-colors"
                    >
                        Mentors
                    </Link>
                    <span className="material-symbols-outlined text-xs">
                        chevron_right
                    </span>
                    <span className="hover:text-primary transition-colors cursor-pointer">
                        React
                    </span>
                    <span className="material-symbols-outlined text-xs">
                        chevron_right
                    </span>
                    <span className="font-medium text-text-main">
                        Priya Sharma
                    </span>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    {/* Left Sidebar (Sticky) */}
                    <aside className="lg:col-span-4 xl:col-span-3">
                        <div className="sticky top-28 flex flex-col gap-6">
                            {/* Profile Card */}
                            <div className="rounded-xl border border-slate-200 bg-surface p-6 shadow-soft">
                                <div className="mb-6 flex flex-col items-center text-center">
                                    <div className="relative mb-4">
                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNF8hOKeoxeq_mv-FB5qS4Wu_OaM1aMvcRbzNeZ5UKw4QgYx4q5Eogmokqbs6Knw1K-Vzm3TQKDPu3BYOE23Ip-HAgHETprUb9ExfOMAmdSRd7iLP6VRagmRJQr1Fo5fyFuEp6UuSRxAbfrpMxnGOoffhD5hLGHkOzIjj1CLOHCJROITaGok7bDsM0C9JnqeGnlzPitIzfaxVng-dDhbdfcwYcnTFyPJAXxnKVEyHuATB7qPLdiJf2zIfoc6VEsuy8YTVs1vAr8oII"
                                            alt="Priya Sharma"
                                            className="h-24 w-24 rounded-full object-cover ring-4 ring-slate-50"
                                        />
                                        <div
                                            className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow-sm ring-2 ring-white"
                                            title="Verified Mentor"
                                        >
                                            <span className="material-symbols-outlined text-[20px] fill-1">
                                                verified
                                            </span>
                                        </div>
                                    </div>
                                    <h2 className="text-2xl font-bold text-text-main">
                                        Priya Sharma
                                    </h2>
                                    <p className="text-text-body">
                                        Senior React Engineer @ Vercel
                                    </p>

                                    <div className="mt-4 flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-sm font-medium text-text-main">
                                        <span className="material-symbols-outlined text-amber text-lg fill-1">
                                            star
                                        </span>
                                        <span>4.9</span>
                                        <span className="text-text-muted">
                                            •
                                        </span>
                                        <span className="text-text-body">
                                            120 sessions
                                        </span>
                                    </div>
                                </div>

                                <div className="border-t border-slate-100 py-4">
                                    <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-text-muted">
                                        About
                                    </h3>
                                    <div className="relative group cursor-pointer">
                                        <p className="text-sm leading-relaxed text-text-body">
                                            Specializing in React performance
                                            optimization, Next.js architecture,
                                            and complex state management.
                                            Previously at Airbnb where I led the
                                            design system migration. I love
                                            helping devs unblock tricky bugs!
                                        </p>
                                        <button className="mt-1 flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                                            Read more{" "}
                                            <span className="material-symbols-outlined text-[14px]">
                                                expand_more
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <div className="border-t border-slate-100 pt-4">
                                    <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-text-muted">
                                        Expertise
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "React",
                                            "Next.js",
                                            "TypeScript",
                                            "GraphQL",
                                            "System Design",
                                        ].map((skill) => (
                                            <span
                                                key={skill}
                                                className="inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-text-main transition hover:bg-slate-200"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Response Time Card */}
                            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-surface px-5 py-4 shadow-soft">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600/30">
                                        <span className="material-symbols-outlined">
                                            bolt
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-text-main">
                                            Fast Responder
                                        </p>
                                        <p className="text-xs text-text-body">
                                            Usually replies in &lt; 2 min
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Right Content Area */}
                    <section className="lg:col-span-8 xl:col-span-9">
                        <div className="flex flex-col gap-8">
                            {/* Availability Grid */}
                            <div className="rounded-xl border border-slate-200 bg-surface p-6 shadow-soft">
                                <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                                    <div>
                                        <h2 className="text-lg font-bold text-text-main">
                                            Select a time
                                        </h2>
                                        <p className="text-sm text-text-body">
                                            Times are in your local timezone
                                            (PST)
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-1">
                                        <button className="rounded-md p-1 hover:bg-white hover:shadow-sm">
                                            <span className="material-symbols-outlined text-text-muted">
                                                chevron_left
                                            </span>
                                        </button>
                                        <span className="px-2 text-sm font-semibold text-text-main">
                                            Oct 24 - 30
                                        </span>
                                        <button className="rounded-md p-1 hover:bg-white hover:shadow-sm">
                                            <span className="material-symbols-outlined text-text-main">
                                                chevron_right
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                {/* Date Headers */}
                                <div className="mb-4 grid grid-cols-5 text-center">
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="text-xs font-semibold uppercase text-text-muted">
                                            Mon
                                        </span>
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-text-body">
                                            24
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="text-xs font-semibold uppercase text-primary">
                                            Tue
                                        </span>
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-glow">
                                            25
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="text-xs font-semibold uppercase text-text-muted">
                                            Wed
                                        </span>
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-text-body">
                                            26
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="text-xs font-semibold uppercase text-text-muted">
                                            Thu
                                        </span>
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-text-body">
                                            27
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="text-xs font-semibold uppercase text-text-muted">
                                            Fri
                                        </span>
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-text-body">
                                            28
                                        </span>
                                    </div>
                                </div>

                                {/* Time Slots Grid */}
                                <div className="grid max-h-[400px] overflow-y-auto pr-2 gap-2">
                                    {/* Row 9:00 AM */}
                                    <div className="grid grid-cols-5 gap-3">
                                        <button
                                            aria-label="Booked Slot"
                                            className="h-12 w-full rounded-lg bg-slate-100 opacity-60"
                                            disabled
                                        ></button>
                                        <button className="group h-12 w-full rounded-lg border border-slate-200 bg-white transition hover:border-primary hover:shadow-md">
                                            <span className="text-sm font-medium text-text-main group-hover:text-primary">
                                                9:00
                                            </span>
                                        </button>
                                        <button className="group h-12 w-full rounded-lg border border-slate-200 bg-white transition hover:border-primary hover:shadow-md">
                                            <span className="text-sm font-medium text-text-main group-hover:text-primary">
                                                9:00
                                            </span>
                                        </button>
                                        <button
                                            className="h-12 w-full rounded-lg bg-slate-100 opacity-60"
                                            disabled
                                        ></button>
                                        <button className="group h-12 w-full rounded-lg border border-slate-200 bg-white transition hover:border-primary hover:shadow-md">
                                            <span className="text-sm font-medium text-text-main group-hover:text-primary">
                                                9:00
                                            </span>
                                        </button>
                                    </div>
                                    {/* Row 9:15 AM */}
                                    <div className="grid grid-cols-5 gap-3">
                                        <button className="group h-12 w-full rounded-lg border border-slate-200 bg-white transition hover:border-primary hover:shadow-md">
                                            <span className="text-sm font-medium text-text-main group-hover:text-primary">
                                                9:15
                                            </span>
                                        </button>
                                        {/* Selected State */}
                                        <button className="relative h-12 w-full rounded-lg bg-primary shadow-glow ring-2 ring-primary ring-offset-2 ring-offset-white transition">
                                            <span className="text-sm font-bold text-white">
                                                9:15
                                            </span>
                                            <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-mint ring-2 ring-white"></div>
                                        </button>
                                        <button
                                            className="h-12 w-full rounded-lg bg-slate-100 opacity-60"
                                            disabled
                                        ></button>
                                        <button className="group h-12 w-full rounded-lg border border-slate-200 bg-white transition hover:border-primary hover:shadow-md">
                                            <span className="text-sm font-medium text-text-main group-hover:text-primary">
                                                9:15
                                            </span>
                                        </button>
                                        <button
                                            className="h-12 w-full rounded-lg bg-slate-100 opacity-60"
                                            disabled
                                        ></button>
                                    </div>
                                </div>
                            </div>

                            {/* Reviews Section */}
                            <div>
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="font-bold text-text-main">
                                        What developers say
                                    </h3>
                                    <div className="flex gap-2">
                                        <button className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-text-muted hover:border-primary hover:text-primary">
                                            <span className="material-symbols-outlined text-sm">
                                                arrow_back
                                            </span>
                                        </button>
                                        <button className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-text-muted hover:border-primary hover:text-primary">
                                            <span className="material-symbols-outlined text-sm">
                                                arrow_forward
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                {/* Horizontal Scroll Container */}
                                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                                    {/* Review Card 1 */}
                                    <div className="min-w-[300px] flex-1 rounded-xl border border-slate-200 bg-surface p-5 shadow-soft">
                                        <div className="mb-3 flex items-start justify-between">
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu0dkqisu_1wlM6ClOyrCz_YxORBXZ27-5wAixp_aez_CdNBDk3kwhKHBrbY5VIjdla_Ym5Ga5US5ILHWihlz-M7TuQdIn4H2JbRVVwk_fL2gN-XziwHFE1dZ0dXc4G6uIS7awNRbT74y6beIcqLSaQgT9DFDjwgxC_lDjkwLbcaVueZVpfWrIMzS-fSaZbYJo5gL_TjrtwkAMS1Obuhoqufipr3A2h8x3LnaUmCSLHLjSUAAL8wwB0jCl7hCMK9lhcbgupleF1VNA"
                                                    alt="Mark D. avatar"
                                                    className="h-8 w-8 rounded-full object-cover"
                                                />
                                                <div>
                                                    <p className="text-sm font-bold text-text-main">
                                                        Mark D.
                                                    </p>
                                                    <p className="text-xs text-text-muted">
                                                        Frontend Dev @ Stripe
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex text-amber">
                                                <span className="material-symbols-outlined text-[16px] fill-1">
                                                    star
                                                </span>
                                                <span className="material-symbols-outlined text-[16px] fill-1">
                                                    star
                                                </span>
                                                <span className="material-symbols-outlined text-[16px] fill-1">
                                                    star
                                                </span>
                                                <span className="material-symbols-outlined text-[16px] fill-1">
                                                    star
                                                </span>
                                                <span className="material-symbols-outlined text-[16px] fill-1">
                                                    star
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-sm italic leading-relaxed text-text-body">
                                            "Priya unblocked my useEffect issue
                                            in 5 minutes flat. She explained the
                                            'why' behind the fix, not just the
                                            code."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* Floating Action Bar (Sticky Bottom) */}
            <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-surface/95 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] backdrop-blur-lg/95">
                <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 lg:px-8">
                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                            <p className="text-xs font-bold uppercase tracking-wider text-text-muted">
                                Selected Time
                            </p>
                            <p className="text-lg font-bold text-text-main">
                                Tue, Oct 25 • 9:15 AM
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-text-body">
                            <span className="material-symbols-outlined text-lg">
                                schedule
                            </span>
                            <span>15 min session</span>
                        </div>
                        <div className="h-4 w-px bg-slate-300 hidden md:block"></div>
                        <div className="hidden md:flex items-center gap-2 text-sm font-medium text-mint">
                            <span className="material-symbols-outlined text-lg">
                                check_circle
                            </span>
                            <span>Priya is available</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden text-right sm:block">
                            <p className="text-sm font-bold text-text-main">
                                1 Credit
                            </p>
                            <p className="text-xs text-text-muted">
                                Balance: 4 credits
                            </p>
                        </div>
                        <Link
                            to="/book/1"
                            className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-bold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark hover:scale-105 active:scale-95"
                        >
                            <span>Confirm Booking</span>
                            <span className="material-symbols-outlined text-lg">
                                arrow_forward
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentorProfile;
