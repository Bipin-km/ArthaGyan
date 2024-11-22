import React from "react";
import "./Dashboard.css";
import ProgressBar from "./completionbar";
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div className="dashboard">
      <section className="dashboard-section">
        <h2>Courses</h2>
        <div className="current-course">
          <h3 style={{ justifySelf: "flex-start" }}>Current Course Name</h3>
          <div className="App">
            <ProgressBar />
          </div>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>Quizzes</h2>
        <div className="current-quiz">
          <ProgressBar />
        </div>
      </section>

      <section className="dashboard-section">
        <h2>New Courses</h2>
        <div className="course-list">
          <div className="course-card">
            <div class="card-header">
              <img src="banker.png" />
            </div>
            <div class="card-body">
              <h5 class="card-title">
                <Link to="/Banking" style={styles.link}>
                  Understanding Banking: A Fundamental Pillar of Modern
                  Economies
                </Link>
              </h5>
              <p class="card-text">
                A discussion abouts the fundamentals of banking
              </p>
            </div>
            <div class="card-footer">
              <button class="button">Read More</button>
            </div>
          </div>

          <div className="course-card">
            <div class="card-header">
              <img src="bank.png" />
            </div>
            <div class="card-body">
              <h5 class="card-title">
                <Link to="/TypesOfBank" style={styles.link}>
                  Banking in Nepal
                </Link>
              </h5>
              <p class="card-text">
                A discussion abouts the varios types of banking in Nepal
              </p>
            </div>
            <div class="card-footer">
              <button class="button">Read More</button>
            </div>
          </div>

          <div className="course-card">
            <div class="card-header">
              <img src="money.png" />
            </div>
            <div class="card-body">
              <h5 class="card-title">
                {" "}
                <Link to="/centralbanks" style={styles.link}>
                  Central Banks and Their Importance to the Economy
                </Link>
              </h5>
              <p class="card-text">
                Discussion og the central banks and their importance to the
                economy
              </p>
            </div>
            <div class="card-footer">
              <button class="button">Read More</button>
            </div>
          </div>

          <div className="course-card">
            <div class="card-header">
              <img src="cheque.png" />
            </div>
            <div class="card-body">
              <h5 class="card-title">
                <Link to="/cheques" style={styles.link}>
                  Understanding Cheques and Their Types
                </Link>
              </h5>
              <p class="card-text">
                Discussion about the various types of cheques used by banks in
                nepal
              </p>
            </div>
            <div class="card-footer">
              <button class="button">Read More</button>
            </div>
          </div>
        </div>
        <button className="show-more">Show More</button>
      </section>

      <section className="dashboard-section">
      <h2>New Quizzes</h2>
      <div className="quiz-list">
        <div className="quiz-card">
          <div className="terobau">
            <div className="ag-format-container">
              <div className="ag-courses_box">
                {/* First Card */}
                <div className="ag-courses_item">
                  <a href="#" className="ag-courses-item_link">
                    <div className="ag-courses-item_bg"></div>
                    <div className="ag-courses-item_title">
                      UI/Web &amp; Graphic Design for teenagers 11-17 years old
                    </div>
                    <div className="ag-courses-item_date-box">
                      Start:
                      <span className="ag-courses-item_date">04.11.2022</span>
                    </div>
                  </a>
                </div>
                {/* Second Card */}
                <div className="ag-courses_item">
                  <a href="#" className="ag-courses-item_link">
                    <div className="ag-courses-item_bg"></div>
                    <div className="ag-courses-item_title">
                      UX/UI Web-Design &amp; Mobile Design
                    </div>
                    <div className="ag-courses-item_date-box">
                      Start:
                      <span className="ag-courses-item_date">04.11.2022</span>
                    </div>
                  </a>
                </div>
                {/* Third Card */}
                <div className="ag-courses_item">
                  <a href="#" className="ag-courses-item_link">
                    <div className="ag-courses-item_bg"></div>
                    <div className="ag-courses-item_title">
                      Annual Package: Product + UX/UI + Graphic Design 2022
                    </div>
                    <div className="ag-courses-item_date-box">
                      Start:
                      <span className="ag-courses-item_date">04.11.2022</span>
                    </div>
                  </a>
                </div>
                {/* Fourth Card */}
                <div className="ag-courses_item">
                  <a href="#" className="ag-courses-item_link">
                    <div className="ag-courses-item_bg"></div>
                    <div className="ag-courses-item_title">Graphic Design</div>
                    <div className="ag-courses-item_date-box">
                      Start:
                      <span className="ag-courses-item_date">04.11.2022</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="show-more">Show More</button>
    </section>

    </div>
  );
}
const styles = {
  link: {
    color: "black",
    textDecoration: "none",
    fontSize: "1rem",
  },
};

export default Dashboard;
