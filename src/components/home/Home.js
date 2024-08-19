import React, { useState } from "react";
import "./home.css";
import postComments from "../../constant/data";
import UserAuth from "../auth/userAuth.js";
import "../../App.css";

function Home() {
  const [showAuthPopup, setShowAuthPopup] = useState(false);

  const handlePostClick = () => {
    setShowAuthPopup(!showAuthPopup);
  };

  return (
    <div className="home-container">
      <div className="home-container-title">Hello Jane</div>
      <p className="home-container-sub-title">
        How are you doing today? Would you like to share something with the
        community?🤗
      </p>

      <div className="post-box">
        <div className="post-box-title">Create post</div>
        <input
          type="text"
          placeholder="💬 How are you feeling today?"
          className="post-input"
        />
        <div className="post-box-button">
          <button className="post-button" onClick={handlePostClick}>
            Post
          </button>
        </div>
      </div>
      <div className="post-box">
        <div className="post-style">
          <img
            src="https://bit.ly/3Mdqgo0"
            alt="person-image"
            className="post-img"
          />
          <div>
            <div className="post-style-name">Theresa Webb</div>
            <span className="post-timestamp">5 mins ago </span>
          </div>
          <div className="dots-style">
            <img src="https://bit.ly/3AuPADt" alt="dots" />
          </div>
        </div>
        <div className="post-input">
          <p className="post-home-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="post-comment-style">
          <img
            className="post-img"
            src="https://bit.ly/3STOwj4"
            alt="chat-bubble"
          />
          <div className="post-timestamp">24 comments</div>
        </div>
      </div>
      {/* {postComments.map((item) => (
        <div className="post-box" key={item.id}>
          <div className="post-style">
            <img src={item.src} alt="person-image" className="post-img" />
            <div>
              <div className="post-style-name">{item.name}</div>
              <span className="post-timestamp">{item.timing} </span>
            </div>
            <div className="dots-style">
              <img src="https://bit.ly/3AuPADt" alt="dots" />
            </div>
          </div>
          <div className="post-input">
            <p className="post-home-text">{item.comment}</p>
          </div>
          <div className="post-comment-style">
            <img
              className="post-img"
              src="https://bit.ly/3STOwj4"
              alt="chat-bubble"
            />
            <div className="post-timestamp">{item.totalComment}</div>
          </div>
        </div>
      ))} */}

      {showAuthPopup && (
        <div className="popup-overlay">
          <div>
            <UserAuth handlePostClick={handlePostClick} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
