import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Dashboard = () => {
    return (
        <div className="bg-background-light text-text-main min-h-screen flex flex-col">
            {/* Main Content Area */}
            <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {/* Filter Bar */}
                <div className="sticky top-20 z-40 mb-8">
                    <div className="bg-surface rounded-xl shadow-soft border border-slate-100 p-3 flex flex-col md:flex-row items-center gap-4">
                        {/* Search Input */}
                        <div className="relative flex-1 w-full md:w-auto">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-primary">
                                <span className="material-symbols-outlined">
                                    search
                                </span>
                            </div>
                            <input
                                type="text"
                                placeholder="Find a mentor or skill (e.g. 'React performance')..."
                                className="block w-full pl-10 pr-3 py-2.5 bg-slate-50 border-none rounded-lg text-sm text-text-main placeholder-text-muted focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                            />
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-8 bg-slate-100"></div>

                        {/* Tags Scroller */}
                        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide w-full md:w-auto pb-1 md:pb-0">
                            <button className="flex-shrink-0 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg shadow-sm shadow-primary/30 transition-all hover:bg-primary-dark">
                                All
                            </button>
                            <button className="flex-shrink-0 px-4 py-2 bg-white border border-slate-200 text-text-body text-sm font-medium rounded-lg hover:border-primary/50 hover:text-primary transition-all">
                                React
                            </button>
                            <button className="flex-shrink-0 px-4 py-2 bg-white border border-slate-200 text-text-body text-sm font-medium rounded-lg hover:border-primary/50 hover:text-primary transition-all">
                                Node.js
                            </button>
                            <button className="flex-shrink-0 px-4 py-2 bg-white border border-slate-200 text-text-body text-sm font-medium rounded-lg hover:border-primary/50 hover:text-primary transition-all">
                                Python
                            </button>
                            <button className="flex-shrink-0 px-4 py-2 bg-white border border-slate-200 text-text-body text-sm font-medium rounded-lg hover:border-primary/50 hover:text-primary transition-all">
                                System Design
                            </button>
                            <button className="flex-shrink-0 px-4 py-2 bg-white border border-slate-200 text-text-body text-sm font-medium rounded-lg hover:border-primary/50 hover:text-primary transition-all">
                                DevOps
                            </button>
                        </div>
                    </div>
                </div>

                {/* Section Title */}
                <div className="flex items-center justify-between mb-6 px-1">
                    <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
                        Available Now
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-mint"></span>
                        </span>
                    </h2>
                    <span className="text-sm text-text-muted">
                        Showing online mentors
                    </span>
                </div>

                {/* Mentors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                    {/* Card 1: Priya Sharma */}
                    <article className="group bg-surface rounded-lg border border-slate-200 p-6 shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-mint/10 px-2.5 py-1 rounded-full border border-mint/20">
                            <div className="size-1.5 rounded-full bg-mint animate-pulse"></div>
                            <span className="text-xs font-semibold text-mint uppercase tracking-wider">
                                Online
                            </span>
                        </div>

                        <Link
                            to="/mentor/1"
                            className="flex items-start gap-4 mb-5"
                        >
                            <div className="size-12 rounded-full bg-slate-100 border border-slate-100 overflow-hidden flex-shrink-0">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcI8_f3qXo4G4vjBxd1LLNZNb3w30IcJXEDntkkLpfF5RiObJ9F5ENk7f_4hwfktPJaM40pnpkbSfENS9Rra6pUOZ6r0ZNgU9bv_jUVY9HT1h0JV4fTXsCRyrIc0rd5Kquk1CtpBlN-hCH-Od5UBAgTB0GgDUiWn9E4Q2hEeh165J7MYyUUZvhwv73PaKLtAVbSo7h6nIVm38OZx3Ai1W0XQGQqb9xYqtWt2auFjlslM_Of7kbsJVPsabjl2fFhakDGPdBNY62CyET"
                                    alt="Priya Sharma"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-bold text-text-main text-lg leading-tight group-hover:text-primary transition-colors">
                                    Priya Sharma
                                </h3>
                                <p className="text-text-body text-sm font-medium">
                                    Senior Frontend @ Airbnb
                                </p>
                            </div>
                        </Link>

                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs font-medium text-text-body">
                                #React
                            </span>
                            <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs font-medium text-text-body">
                                #NextJS
                            </span>
                            <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs font-medium text-text-body">
                                #TypeScript
                            </span>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                            <div className="flex items-center gap-1.5 text-text-muted">
                                <span className="material-symbols-outlined text-amber text-[18px]">
                                    bolt
                                </span>
                                <span className="text-xs font-medium text-text-body">
                                    &lt; 2min response
                                </span>
                            </div>
                        </div>

                        <Link
                            to="/book/1"
                            className="mt-4 w-full py-2.5 rounded-md border border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
                        >
                            Book 15 min
                            <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-0.5 transition-transform">
                                arrow_forward
                            </span>
                        </Link>
                    </article>

                    {/* Card 2: David Miller */}
                    <article className="group bg-surface rounded-lg border border-slate-200 p-6 shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-mint/10 px-2.5 py-1 rounded-full border border-mint/20">
                            <div className="size-1.5 rounded-full bg-mint animate-pulse"></div>
                            <span className="text-xs font-semibold text-mint uppercase tracking-wider">
                                Online
                            </span>
                        </div>

                        <Link
                            to="/mentor/2"
                            className="flex items-start gap-4 mb-5"
                        >
                            <div className="size-12 rounded-full bg-slate-100 border border-slate-100 overflow-hidden flex-shrink-0">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnWDiz9N6JY3j3SyCS3cSHX1z7TY8ZDbyQLI1c9qS7cto0nFas2IsUullUQvrSq5vf6zFhHu8lNHUomC28K53OtrBL9VNLSEOnj721blXni8DI7hbfR6toeRzaCdXyyMArf_siwX5QGDl1YJrLV8Nu5dC8d1KKk4wX2_iEz1r5SJV9s_tQjo7jzWiEXodb-c_PZOh0kVlK3OdB1J5qD5bm8c2uyDG7wKgQiBmNUjd8IxnMNAYt4RzSNH4P8-u9sxUbj4wFV_qr1SyG"
                                    alt="David Miller"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-bold text-text-main text-lg leading-tight group-hover:text-primary transition-colors">
                                    David Miller
                                </h3>
                                <p className="text-text-body text-sm font-medium">
                                    Staff Backend Eng @ Uber
                                </p>
                            </div>
                        </Link>

                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs font-medium text-text-body">
                                #Python
                            </span>
                            <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs font-medium text-text-body">
                                #Django
                            </span>
                            <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs font-medium text-text-body">
                                #SystemDesign
                            </span>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                            <div className="flex items-center gap-1.5 text-text-muted">
                                <span className="material-symbols-outlined text-amber text-[18px]">
                                    bolt
                                </span>
                                <span className="text-xs font-medium text-text-body">
                                    &lt; 5min response
                                </span>
                            </div>
                        </div>

                        <Link
                            to="/book/2"
                            className="mt-4 w-full py-2.5 rounded-md border border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
                        >
                            Book 15 min
                            <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-0.5 transition-transform">
                                arrow_forward
                            </span>
                        </Link>
                    </article>

                    {/* Card 3 (Busy Example): Thomas Wood */}
                    <article className="group bg-surface rounded-lg border border-slate-200 p-6 shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-amber/10 px-2.5 py-1 rounded-full border border-amber/20">
                            <div className="size-1.5 rounded-full bg-amber"></div>
                            <span className="text-xs font-semibold text-amber uppercase tracking-wider">
                                Busy
                            </span>
                        </div>

                        <Link
                            to="/mentor/3"
                            className="flex items-start gap-4 mb-5"
                        >
                            <div className="size-12 rounded-full bg-slate-100 border border-slate-100 overflow-hidden flex-shrink-0 grayscale group-hover:grayscale-0 transition-all">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaSDF0UtCtXpWw8SpJRxwoEQgkfHLCCZbbSSLVKQNhk_4Ap4GePxnQTfkt8i896xM5UDeoGA5AtIo5uCBDtSFesw9h6RzHb6d9AaQj5vLoSTrKl4ulMkMOEqz3t9cwu93T3y0X9Rtz_EueSitx7lcELhwY27NGFUH1yUZPfIGhx2NowNvaEhjQb8MhA3utrxvXxBl2iRzknQblt5XrMxv89mfHzjaqjY5-Sv5Ip9t4M1CTOj0xTd-xDXPM2R7Y0z4h0Jm-DtKJLz_E"
                                    alt="Thomas Wood"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-bold text-text-main text-lg leading-tight group-hover:text-primary transition-colors">
                                    Thomas Wood
                                </h3>
                                <p className="text-text-body text-sm font-medium">
                                    DBRE @ Netflix
                                </p>
                            </div>
                        </Link>

                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs font-medium text-text-body">
                                #Postgres
                            </span>
                            <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs font-medium text-text-body">
                                #Redis
                            </span>
                            <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs font-medium text-text-body">
                                #Kafka
                            </span>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                            <div className="flex items-center gap-1.5 text-text-muted">
                                <span className="material-symbols-outlined text-text-muted text-[18px]">
                                    schedule
                                </span>
                                <span className="text-xs font-medium text-text-body">
                                    Available in 25m
                                </span>
                            </div>
                        </div>

                        <button className="mt-4 w-full py-2.5 rounded-md border border-slate-300 text-slate-500 font-bold text-sm hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2 group/btn">
                            Notify Me
                            <span className="material-symbols-outlined text-[18px]">
                                notifications_active
                            </span>
                        </button>
                    </article>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
