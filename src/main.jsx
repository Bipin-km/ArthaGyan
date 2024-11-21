import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
// import Quiz from "./pages/Quiz";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import QuizBoard from "./pages/QuizBoard";
import CourseBoard from "./pages/CourseBoard";
import Profile from "./pages/User";
import ChequeForm from "./pages/Cheque";

const Main = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    {/* Home Page */}
                    <Route index element={<Dashboard />} />

                    {/* Quiz Page */}
                    {/* <Route path="quiz" element={<Quiz />} /> */}

                    <Route path="Dashboard" element={<Dashboard />} />

                    {/* Register Page */}
                    <Route path="Register" element={<Register />} />

                    {/* Login Page */}
                    <Route path="Login" element={<Login />} />
                        
                        {/* Profile Page */}
                    <Route path="Profile" element={<Profile />} />

                    <Route path="QuizBoard" element={<QuizBoard />} />
                    <Route path="CourseBoard" element={<CourseBoard />} />

                    <Route path="Cheque" element={<ChequeForm />} />

                    {/* Catch-all for 404 */}
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);
