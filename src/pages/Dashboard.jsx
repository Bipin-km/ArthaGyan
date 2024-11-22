import React from "react";
import "./Dashboard.css";
import ProgressBar from "./completionbar";
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div className="dashboard">
    

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
        <div class="ag-format-container">
            <div class="ag-courses_box">
              <div class="ag-courses_item">
                <a href="/quizboard/quiz/0" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  <div class="ag-courses-item_title">
                    Understanding Banking
                  </div>

                  <div class="ag-courses-item_date-box">
                  Take Quiz to test your knowledge
                  </div>
                </a>
              </div>

              <div class="ag-courses_item">
                <a href="/quizboard/quiz/1" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  <div class="ag-courses-item_title">
                    Banking in Nepal
                  </div>

                  <div class="ag-courses-item_date-box">
                  Take Quiz to test your knowledge
                  </div>
                </a>
              </div>

              <div class="ag-courses_item">
                <a href="/quizboard/quiz/2" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  <div class="ag-courses-item_title">
                    Central Banks and Their Importance to the Economy
                  </div>

                  <div class="ag-courses-item_date-box">
                  Take Quiz to test your knowledge
                  </div>
                </a>
              </div>

              <div class="ag-courses_item">
                <a href="/quizboard/quiz/3" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  <div class="ag-courses-item_title">
                    Understanding Cheques and Their Types
                  </div>

                  <div class="ag-courses-item_date-box">
                  Take Quiz to test your knowledge
                  </div>
                </a>
              </div>
            </div>
          </div>
        <button className="show-more"><Link to = '/quizboard' style={{textDecoration:'none'}}>Show More</Link></button>
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
