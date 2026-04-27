import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ReviewPage = () => {
    const [rating, setRating] = useState(4);
    const navigate = useNavigate();

    return (
        <div className="bg-background-light font-display text-text-main min-h-screen">
            <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
                <div className="flex h-full grow flex-col">
                    {/* Header */}
                    <header className="flex items-center justify-between border-b border-solid border-primary/10 px-6 py-4 lg:px-40 bg-background-light">
                        <Link
                            to="/mentors"
                            className="flex items-center gap-4 text-primary"
                        >
                            <h2 className="text-text-main text-xl font-bold leading-tight tracking-tight">
                                MentorMatch
                            </h2>
                        </Link>
                        <button
                            onClick={() => navigate("/mentors")}
                            className="flex items-center justify-center rounded-full h-10 w-10 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                            <span className="material-symbols-outlined">
                                close
                            </span>
                        </button>
                    </header>

                    <main className="flex flex-1 justify-center py-10 px-4">
                        <div className="flex flex-col max-w-[600px] flex-1 gap-6">
                            <div className="flex flex-col gap-2 text-center mb-4">
                                <h1 className="text-text-main text-3xl font-bold leading-tight">
                                    Session Summary
                                </h1>
                                <p className="text-text-body text-base">
                                    You just finished a 15-minute consultation
                                    with Priya.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col gap-8">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20 relative">
                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZFx0D4N0VTa2KZGxpNrBPZ-RqBR3b3LWkANJw22TBgx_7-TYZw5m4GSmK_LPJ8CuSO1hppz5XOvd0bxlDRK_M5b_SMdubiwbuzypauFSiBTz2PkxjUfhSgyd9NY-uh-ggKa6CE1iRUkhNKo29BSuM14C8EDA0mTlupcpZKAE4nyLojN_Okmm4HPihSFZzKb-smHZg1xMIGfeDor6CrnLW31jGO5cAqS60F86E_RRPbb8xyNIgW6lmPp6VZ7euxajTP0OhubG4nvmj"
                                            alt="Priya"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-xl font-bold text-text-main">
                                            How was your session with Priya?
                                        </h2>
                                        <p className="text-text-body text-sm mt-1">
                                            Your feedback helps us improve the
                                            experience.
                                        </p>
                                    </div>
                                </div>

                                {/* Rating component */}
                                <div className="flex flex-col gap-4">
                                    <label className="text-sm font-semibold text-text-main">
                                        Rate your experience
                                    </label>
                                    <div className="flex justify-between items-center px-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                onClick={() => setRating(star)}
                                                className={`group flex flex-col items-center gap-2 ${rating >= star ? "text-primary" : ""}`}
                                            >
                                                <div
                                                    className={`${rating >= star ? "text-primary" : "text-slate-300 group-hover:text-primary"} transition-colors`}
                                                >
                                                    <span
                                                        className="material-symbols-outlined text-4xl"
                                                        style={{
                                                            fontVariationSettings:
                                                                "'FILL' 1",
                                                        }}
                                                    >
                                                        star
                                                    </span>
                                                </div>
                                                <span
                                                    className={`text-xs font-bold ${rating >= star ? "text-primary" : "text-slate-400 group-hover:text-primary"}`}
                                                >
                                                    {star}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Feedback textarea */}
                                <div className="flex flex-col gap-3">
                                    <label
                                        htmlFor="feedback"
                                        className="text-sm font-semibold text-text-main"
                                    >
                                        How did Priya help you?
                                    </label>
                                    <textarea
                                        id="feedback"
                                        placeholder="Share your experience here..."
                                        rows={4}
                                        className="w-full rounded-xl border-slate-200 bg-background-light focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all p-4 text-text-main placeholder:text-slate-400"
                                    ></textarea>
                                </div>

                                {/* Radio Selection */}
                                <div className="flex flex-col gap-4">
                                    <label className="text-sm font-semibold text-text-main">
                                        Was the problem solved?
                                    </label>
                                    <div className="grid grid-cols-1 gap-3">
                                        <label className="flex items-center gap-3 p-4 rounded-xl border border-primary/10 hover:border-primary/40 cursor-pointer bg-background-light transition-all">
                                            <input
                                                type="radio"
                                                name="solved"
                                                defaultChecked
                                                className="w-5 h-5 rounded border-primary/30 text-primary focus:ring-primary bg-white"
                                            />
                                            <span className="text-text-main font-medium">
                                                Yes, the issue is completely
                                                resolved
                                            </span>
                                        </label>
                                        <label className="flex items-center gap-3 p-4 rounded-xl border border-primary/10 hover:border-primary/40 cursor-pointer bg-background-light transition-all">
                                            <input
                                                type="radio"
                                                name="solved"
                                                className="w-5 h-5 rounded border-primary/30 text-primary focus:ring-primary bg-white"
                                            />
                                            <span className="text-text-main font-medium">
                                                Partially, I need more
                                                information
                                            </span>
                                        </label>
                                        <label className="flex items-center gap-3 p-4 rounded-xl border border-primary/10 hover:border-primary/40 cursor-pointer bg-background-light transition-all">
                                            <input
                                                type="radio"
                                                name="solved"
                                                className="w-5 h-5 rounded border-primary/30 text-primary focus:ring-primary bg-white"
                                            />
                                            <span className="text-text-main font-medium">
                                                No, the problem still exists
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Link
                                        to="/mentors"
                                        className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                                    >
                                        <span>Submit Review</span>
                                        <span className="material-symbols-outlined text-lg">
                                            send
                                        </span>
                                    </Link>
                                    <p className="text-center text-xs text-text-muted mt-4">
                                        By submitting, you agree to our
                                        community guidelines.
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center py-4">
                                <Link
                                    to="/mentors"
                                    className="text-primary text-sm font-semibold hover:underline flex items-center gap-1"
                                >
                                    <span className="material-symbols-outlined text-sm">
                                        arrow_back
                                    </span>
                                    Back to Dashboard
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ReviewPage;
