import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [follow, setFollow] = useState(false);
  const [followers, setFollowers] = useState(66868);

  const handleFollow = () => {
    if (follow) {
      setFollowers(prev => prev - 1);
    } else {
      setFollowers(prev => prev + 1);
    }
    setFollow(!follow);
  };

  return (
    <div className="main-container">
      <div className="card">
        <div className="left">
          <div className="profile-pic">200 × 200</div>
        </div>
            
        <div className="right">
          
 <div className="user">
             <h2>Chrisse</h2>
          <p className="address">4018 Sachs Trail</p>
           </div>
          <div className="stats">
            <div>
              <h3>Posts</h3>
              <p>1841</p>
            </div>

            <div>
              <h3>Followers</h3>
              <p>{followers}</p>
            </div>
          </div>
        </div>

        <button className="follow-btn" onClick={handleFollow}>
          {follow ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default App;
