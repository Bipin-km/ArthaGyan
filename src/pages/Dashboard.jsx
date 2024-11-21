import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>ArthaGyat</h1>
      </header>

      <section className="dashboard-section">
        <h2>Courses</h2>
        <div className="current-course">
          <h3>Current Course Name</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: "68%" }}></div>
          </div>
          <p>Progress 68%</p>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>Quizzes</h2>
        <div className="current-quiz">
          <h3>Current Quiz Name</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: "68%" }}></div>
          </div>
          <p>Progress 68%</p>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>New Courses</h2>
        <div className="course-list">
          <div className="course-card">Title 1<br />Short Description</div>
          <div className="course-card">Title 1<br />Short Description</div>
          <div className="course-card">Title 1<br />Short Description</div>
          <div className="course-card">Title 1<br />Short Description</div>
        </div>
        <button className="show-more">Show More</button>
      </section>

      <section className="dashboard-section">
        <h2>New Quizzes</h2>
        <div className="quiz-list">
          <div className="quiz-card">Title 1<br />Short Description</div>
          <div className="quiz-card">Title 1<br />Short Description</div>
          <div className="quiz-card">Title 1<br />Short Description</div>
          <div className="quiz-card">Title 1<br />Short Description</div>
        </div>
        <button className="show-more">Show More</button>
      </section>
    </div>
  );
}

export default Dashboard;
