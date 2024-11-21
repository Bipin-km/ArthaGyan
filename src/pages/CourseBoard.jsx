import React from "react";
import "./CourseBoard.css";
import Header from "../components/Header.jsx";
function CourseBoard() {
  return (
    <div className="course-board">
      <section className="list-section">
        <h2>Courses</h2>
        <div className="course-list">
          <div className="course-item">
            <h3>Title 1</h3>
            <p>Medium Description</p>
          </div>
          <div className="course-item">
            <h3>Title 1</h3>
            <p>Medium Description</p>
          </div>
          <div className="course-item">
            <h3>Title 1</h3>
            <p>Medium Description</p>
          </div>
          <div className="course-item">
            <h3>Title 1</h3>
            <p>Medium Description</p>
          </div>
          <div className="course-item">
            <h3>Title 1</h3>
            <p>Medium Description</p>
          </div>
          <div className="course-item">
            <h3>Title 1</h3>
            <p>Medium Description</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CourseBoard;
