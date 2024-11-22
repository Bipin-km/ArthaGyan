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
                <Link to="courseboard/banking" style={styles.link}>
                  Understanding Banking: A Fundamental Pillar of Modern
                  Economies
                </Link>
              </h5>
              <p class="card-text">
                A discussion abouts the fundamentals of banking
              </p>
            </div>
          </div>

          <div className="course-card">
            <div class="card-header">
              <img src="bank.png" />
            </div>
            <div class="card-body">
              <h5 class="card-title">
                <Link to="/courseboard/typesofbank" style={styles.link}>
                  Banking in Nepal
                </Link>
              </h5>
              <p class="card-text">
                A discussion about the various types of banking in Nepal
              </p>
            </div>
          </div>

          <div className="course-card">
            <div class="card-header">
              <img src="money.png" />
            </div>
            <div class="card-body">
              <h5 class="card-title">
                {" "}
                <Link to="/courseboard/centralbanks" style={styles.link}>
                  Central Banks and Their Importance to the Economy
                </Link>
              </h5>
              <p class="card-text">
                Discussion og the central banks and their importance to the
                economy
              </p>
            </div>
          </div>

          <div className="course-card">
            <div class="card-header">
              <img src="cheque.png" />
            </div>
            <div class="card-body">
              <h5 class="card-title">
                <Link to="courseboard/cheques" style={styles.link}>
                  Understanding Cheques and Their Types
                </Link>
              </h5>
              <p class="card-text">
                Discussion about the various types of cheques used by banks in
                nepal
              </p>
            </div>
          </div>
        </div>
        <button className="show-more">
          <Link to="/courseboard" style={{ textDecoration: "none" }}>
            Show more
          </Link>
        </button>
      </section>

      <section className="dashboard-section">
        <h2>New Quizzes</h2>
        <div className="quiz-list">    
          <div className="quiz-card">

            <div class="quizcard-container">
              <div class="ag-format-container">
                <div class="ag-courses_box">
                  <div class="ag-courses_item">
                    <a href="#" class="ag-courses-item_link">
                      <div class="ag-courses-item_bg"></div>

                      <div class="ag-courses-item_title">
                        UI/Web&amp;Graph design for teenagers 11-17&#160;years
                        old
                      </div>

                      <div class="ag-courses-item_date-box">
                        Start:
                        <span class="ag-courses-item_date">04.11.2022</span>
                      </div>
                    </a>
                  </div>

                  <div class="ag-courses_item">
                    <a href="#" class="ag-courses-item_link">
                      <div class="ag-courses-item_bg"></div>

                      <div class="ag-courses-item_title">
                        UX/UI Web-Design&#160;+ Mobile Design
                      </div>

                      <div class="ag-courses-item_date-box">
                        Start:
                        <span class="ag-courses-item_date">04.11.2022</span>
                      </div>
                    </a>
                  </div>

                  <div class="ag-courses_item">
                    <a href="#" class="ag-courses-item_link">
                      <div class="ag-courses-item_bg"></div>

                      <div class="ag-courses-item_title">
                        Annual package "Product+UX/UI+Graph designer&#160;2022"
                      </div>

                      <div class="ag-courses-item_date-box">
                        Start:
                        <span class="ag-courses-item_date">04.11.2022</span>
                      </div>
                    </a>
                  </div>

                  <div class="ag-courses_item">
                    <a href="#" class="ag-courses-item_link">
                      <div class="ag-courses-item_bg"></div>

                      <div class="ag-courses-item_title">Graphic Design</div>

                      <div class="ag-courses-item_date-box">
                        Start:
                        <span class="ag-courses-item_date">04.11.2022</span>
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
