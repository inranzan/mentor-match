import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginRegisterPage = () => {
    const [activeTab, setActiveTab] = useState("signin");

    return (
        <div className="bg-background-light font-display text-slate-900 min-h-screen flex flex-col">
            <main className="flex-1 flex items-center justify-center p-6 md:p-12">
                <div className="max-w-md w-full bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
                    <div className="p-8 pb-4">
                        <h2 className="text-3xl font-extrabold mb-2">
                            {activeTab === "signin"
                                ? "Welcome back"
                                : "Create Account"}
                        </h2>
                        <p className="text-slate-500">
                            Simplify your space with a single click.
                        </p>
                    </div>

                    <div className="px-8 mb-6">
                        <div className="flex border-b border-slate-200">
                            <button
                                onClick={() => setActiveTab("signin")}
                                className={`flex-1 py-4 text-sm font-bold border-b-2 ${activeTab === "signin" ? "border-primary text-primary" : "border-transparent text-slate-500 hover:text-slate-700"}`}
                            >
                                Sign In
                            </button>
                            <button
                                onClick={() => setActiveTab("signup")}
                                className={`flex-1 py-4 text-sm font-bold border-b-2 ${activeTab === "signup" ? "border-primary text-primary" : "border-transparent text-slate-500 hover:text-slate-700"}`}
                            >
                                Create Account
                            </button>
                        </div>
                    </div>

                    <div className="px-8 mb-6">
                        <div className="flex p-1 bg-slate-100 rounded-xl gap-1">
                            <button className="flex-1 py-2 px-4 rounded-lg text-sm font-semibold bg-white shadow-sm text-slate-900">
                                Email
                            </button>
                            <button className="flex-1 py-2 px-4 rounded-lg text-sm font-semibold text-slate-500 hover:text-slate-700">
                                Phone
                            </button>
                        </div>
                    </div>

                    <form className="px-8 pb-10 space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">
                                Email Address
                            </label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                                    mail
                                </span>
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-900"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-semibold text-slate-700">
                                    Password
                                </label>
                                {activeTab === "signin" && (
                                    <a
                                        href="#"
                                        className="text-xs font-semibold text-primary hover:underline"
                                    >
                                        Forgot?
                                    </a>
                                )}
                            </div>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                                    lock
                                </span>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-900"
                                />
                            </div>
                        </div>

                        {activeTab === "signin" && (
                            <div className="flex items-center gap-2 py-1">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="w-4 h-4 text-primary bg-slate-100 border-slate-300 rounded focus:ring-primary"
                                />
                                <label
                                    htmlFor="remember"
                                    className="text-sm text-slate-600"
                                >
                                    Keep me signed in
                                </label>
                            </div>
                        )}

                        <Link
                            to="/mentors"
                            className="block w-full text-center py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:opacity-90 active:scale-[0.98] transition-all"
                        >
                            {activeTab === "signin" ? "Sign In" : "Sign Up"}
                        </Link>

                        <div className="relative flex py-2 items-center">
                            <div className="flex-grow border-t border-slate-200"></div>
                            <span className="flex-shrink mx-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
                                Or continue with
                            </span>
                            <div className="flex-grow border-t border-slate-200"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                            >
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx3OIkAFqSCTFmH5KXaxDxtdeZgvfuTklPNQqAOXqlk1lVqgrqncCgmhxj0aMiPPzAXm7ZoKNpSrGkNXwfkHxqOo1XL71gKsYaqvV6rJVh8SBO7isCLBEQp7_3ZTYsa7ps_mmEZHwGwcjP6L1DFU_g_PZcp-f_4tUAYLjdV0gHHMqHMS_8PJxTu_7INaEVKAYe74-3P7po62zIQa5sM8BttrT_vGhC5KvHfRoutuZQ-s4NIjVyDUkkgbuXMgxdSEpO-qb1xQHjYfdT"
                                    alt="Google"
                                    className="w-5 h-5"
                                />
                                <span className="text-sm font-bold">
                                    Google
                                </span>
                            </button>
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                            >
                                <span className="material-symbols-outlined text-slate-900">
                                    smartphone
                                </span>
                                <span className="text-sm font-bold">Apple</span>
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            <footer className="w-full p-8 text-center text-slate-500 text-sm">
                <p>© 2026 MentorMatch. All rights reserved.</p>
                <div className="mt-2 space-x-4">
                    <a href="#" className="hover:text-primary">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-primary">
                        Terms of Service
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default LoginRegisterPage;
