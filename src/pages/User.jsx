import React, { useState, useEffect } from "react";
import "./User.css";

const Profile = () => {
  return (
    <div>
      <div className="user_details">
        <div>
          <div style={{ display: "flex", gap: "1rem" }}>
            {" "}
            <img src="/ag.png" alt="pandey_gay" className="user_avatar" />
          </div>

          <div>
            <h1>Pandey Man</h1>
            <h2>Mail : Pandey@aimoi.com</h2>
          </div>

          <div>
            <h1>Name : Pandey aimoi</h1>
          </div>
          <div>
            <h1>Address : Aimoi Marga</h1>
          </div>
          <div>
            <h1>Phone Number : 0028e08280</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
