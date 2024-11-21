import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.logo}>ArthaGyan</h1>
            <nav style={styles.nav}>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/courseboard" style={styles.link}>Modules</Link>
                <Link to="/quizboard" style={styles.link}>Quiz</Link>
                <Link to="/calculator" style={styles.link}>Calculators</Link>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: "#8ecae6",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        color: "#fff",
        fontSize: "1.5rem",
    },
    nav: {
        display: "flex",
        gap: "1rem",
    },
    link: {
        color: "#fff",
        textDecoration: "none",
        fontSize: "1rem",
    },
};

export default Header;
