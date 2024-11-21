import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
// import Quiz from "./pages/Quiz";
// import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const Main = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    {/* Home Page */}
                    <Route index element={<Home />} />

                    {/* Quiz Page */}
                    {/* <Route path="quiz" element={<Quiz />} /> */}

                    {/* Login Page */}
                    {/* <Route path="login" element={<Login />} /> */}

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
