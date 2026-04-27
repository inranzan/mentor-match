import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="py-12 px-6 lg:px-20 border-t border-slate-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl font-extrabold tracking-tight">
                        MentorMatch
                    </h2>
                </div>
                <div className="flex gap-8 text-sm font-medium text-slate-500">
                    <Link
                        to="#"
                        className="hover:text-primary transition-colors"
                    >
                        Privacy
                    </Link>
                    <Link
                        to="#"
                        className="hover:text-primary transition-colors"
                    >
                        Terms
                    </Link>
                    <Link
                        to="#"
                        className="hover:text-primary transition-colors"
                    >
                        Cookies
                    </Link>
                    <Link
                        to="#"
                        className="hover:text-primary transition-colors"
                    >
                        Support
                    </Link>
                </div>
                <p className="text-sm text-slate-400">
                    © 2026 MentorMatch. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
