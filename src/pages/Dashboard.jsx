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
            
              <div class="card-header"><img src="banker.png"/></div>
              <div class="card-body">
                <h5 class="card-title"><Link to="/Banking" style={styles.link}>Understanding Banking: A Fundamental Pillar of Modern Economies</Link></h5>
                <p class="card-text">
                A discussion abouts the fundamentals of banking
                </p>
              </div>
              <div class="card-footer">
                <button class="button">Read More</button>
              </div>
   
          </div>

          <div className="course-card">
           
              <div class="card-header"><img src="bank.png"/></div>
              <div class="card-body">
                <h5 class="card-title"><Link to="/TypesOfBank" style={styles.link}>Banking in Nepal</Link></h5>
                <p class="card-text">
                 A discussion abouts the varios types of banking in Nepal
                </p>
              </div>
              <div class="card-footer">
                <button class="button">Read More</button>
              </div>

          </div>

          <div className="course-card">
           
              <div class="card-header"><img src="money.png"/></div>
              <div class="card-body">
                <h5 class="card-title"> <Link to="/centralbanks" style={styles.link}>Central Banks and Their Importance to the Economy</Link></h5>
                <p class="card-text">
                  Discussion og the central banks and their importance to the economy
                </p>
              </div>
              <div class="card-footer">
                <button class="button">Read More</button>
              </div>
     
          </div>

          <div className="course-card">
           
              <div class="card-header"><img src="cheque.png"/></div>
              <div class="card-body">
                <h5 class="card-title"><Link to="/cheques" style={styles.link}>Understanding Cheques and Their Types</Link></h5>
                <p class="card-text">
                  Discussion about the various types of cheques used by banks in nepal
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
            <div class="quizcard-container">
              <div class="quizcard">

                <div class="quizcard-image"></div>
                <div class="quizcard-content">
                  <div>
                    <h2 class="quizcard-title">Discover Nature</h2>
                    <p class="quizcard-description">
                      Immerse yourself in the beauty of nature. Experience
                      tranquility and peace in some of the world's most
                      breathtaking landscapes.
                    </p>
                  </div>
                  <a href="#" class="quizcard-button">
                    Learn More
                  </a>
                </div>
              </div>
              
            </div>
          </div>
         
          <div className="quiz-card">
            <div class="quizcard-container">
              <div class="quizcard">

                <div class="quizcard-image"></div>
                <div class="quizcard-content">
                  <div>
                    <h2 class="quizcard-title">Discover Nature</h2>
                    <p class="quizcard-description">
                      Immerse yourself in the beauty of nature. Experience
                      tranquility and peace in some of the world's most
                      breathtaking landscapes.
                    </p>
                  </div>
                  <a href="#" class="quizcard-button">
                    Learn More
                  </a>
                </div>
             
              
            </div>
          </div>
          </div>
      
          <div className="quiz-card">
            <div class="quizcard-container">
              <div class="quizcard">
                <div class="quizcard-image">Please Complete the course before viewing the quiz</div>
                <div class="quizcard-content">
                  <div>
                    <h2 class="quizcard-title">Discover Nature</h2>
                    <p class="quizcard-description">
                      Immerse yourself in the beauty of nature. Experience
                      tranquility and peace in some of the world's most
                      breathtaking landscapes.
                    </p>
                  </div>
                  <a href="#" class="quizcard-button">
                    Learn More
                  </a>
                </div>      
            </div>
          </div>
          </div>
        
          <div className="quiz-card">
            <div class="quizcard-container">
              <div class="quizcard">
                <div class="quizcard-image"></div>
                <div class="quizcard-content">
                  <div>
                    <h2 class="quizcard-title">Discover Nature</h2>
                    <p class="quizcard-description">
                      Immerse yourself in the beauty of nature. Experience
                      tranquility and peace in some of the world's most
                      breathtaking landscapes.
                    </p>
                  </div>
                  <a href="#" class="quizcard-button">
                    Learn More
                  </a>     
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
