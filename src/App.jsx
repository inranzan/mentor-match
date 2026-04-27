import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import FindMentors from "./pages/FindMentors";
import MentorProfile from "./pages/MentorProfile";
import SessionConfirmation from "./pages/SessionConfirmation";
import WaitingRoom from "./pages/WaitingRoom";
import CallSession from "./pages/CallSession";
import ReviewPage from "./pages/ReviewPage";
import MentorConsole from "./pages/MentorConsole";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginRegisterPage />} />
                <Route path="/register" element={<LoginRegisterPage />} />
                <Route path="/mentors" element={<FindMentors />} />
                <Route path="/mentor/:id" element={<MentorProfile />} />
                <Route path="/book/:id" element={<SessionConfirmation />} />
                <Route path="/waiting-room" element={<WaitingRoom />} />
                <Route path="/session/:id" element={<CallSession />} />
                <Route path="/review" element={<ReviewPage />} />
                <Route path="/console" element={<MentorConsole />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
