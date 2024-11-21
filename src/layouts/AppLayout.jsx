import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header"; // Example header
import Footer from "../components/Footer"; // Example footer

const AppLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet /> {/* Render nested routes */}
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default AppLayout;
