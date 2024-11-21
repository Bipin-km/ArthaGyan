import React from "react";
import "./Dashboard.css";
import ProgressBar from "./completionbar";
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
            <div class="card">
              <div class="card-header"></div>
              <div class="card-body">
                <h5 class="card-title">Tailwind card</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  felis ligula.
                </p>
              </div>
              <div class="card-footer">
                <button class="button">Read More</button>
              </div>
            </div>
          </div>

          <div className="course-card">
            <div class="card">
              <div class="card-header"></div>
              <div class="card-body">
                <h5 class="card-title">Tailwind card</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  felis ligula.
                </p>
              </div>
              <div class="card-footer">
                <button class="button">Read More</button>
              </div>
            </div>
          </div>

          <div className="course-card">
            <div class="card">
              <div class="card-header"></div>
              <div class="card-body">
                <h5 class="card-title">Tailwind card</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  felis ligula.
                </p>
              </div>
              <div class="card-footer">
                <button class="button">Read More</button>
              </div>
            </div>
          </div>

          <div className="course-card">
            <div class="card">
              <div class="card-header"></div>
              <div class="card-body">
                <h5 class="card-title">Tailwind card</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  felis ligula.
                </p>
              </div>
              <div class="card-footer">
                <button class="button">Read More</button>
              </div>
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
        </div>
        <button className="show-more">Show More</button>
      </section>
    </div>
  );
}

export default Dashboard;
