import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">


      <section className="dashboard-section">
        <h2>Courses</h2>
        <div className="current-course">
          <h3 style={{justifySelf:"flex-start"}}>Current Course Name</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: "68%" }}></div>
          </div>
          <p style={{justifySelf:"flex-start"}}>Progress 68%</p>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>Quizzes</h2>
        <div className="current-quiz">
          
          <h3 style={{justifySelf:"flex-start"}}>Current Quiz Name</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: "68%" }}></div>
          </div>
          <p style={{justifySelf:"flex-start"}}>Progress 68%</p>
        </div>
      </section>

      <section className="dashboard-section">
  <h2>New Courses</h2>
  <div className="course-list">
    <div className="course-card" style={{backgroundColor:"#8ecae6"}}>Title 1<br /> <br />Short Description</div>
    <div className="course-card" style={{backgroundColor:"#219ebc"}}>Title 2<br /> <br />Short Description</div>
    <div className="course-card" style={{backgroundColor:"#0077b6"}}>Title 3<br /> <br />Short Description</div>
    <div className="course-card" style={{backgroundColor:"#5266b0"}} >Title 4<br /> <br />Short Description</div>
  </div>
  <button className="show-more">Show More</button>
</section>

<section className="dashboard-section">
  <h2>New Quizzes</h2>
  <div className="quiz-list">
    <div className="quiz-card" style={{backgroundColor:"#ccff33"}}>Title 1<br /> <br />Short Description</div>
    <div className="quiz-card" style={{backgroundColor:"#9ef01a"}}>Title 2<br /> <br />Short Description</div>
    <div className="quiz-card" style={{backgroundColor:"#70e000"}}>Title 3<br /> <br />Short Description</div>
    <div className="quiz-card" style={{backgroundColor:"#38b000"}}>Title 4<br /> <br />Short Description</div>
  </div>
  <button className="show-more">Show More</button>
</section>

    </div>
  );
}

export default Dashboard;
