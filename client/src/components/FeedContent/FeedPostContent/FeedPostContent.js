import React, { Component } from "react";
import "./FeedPostContent.css";

class FeedPostContent extends Component {
  render() {
    return (
      <div class="post-container">
        <div class="post-card">
          <div class="post-card__content">
            <div class="post-card__info">
              <h1>My most favorite place in the world</h1>

              <div className="post-description">
                <p className="post-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                  doloribus dolorum ratione optio. Tenetur id fugiat totam,
                  ducimus velit? Officia mollitia reiciendis ipsum!
                </p>
              </div>

              <a href="#">Tawhid Abdullah</a>

              <div className="post-date-read-time">
                {" "}
                <p>April 28 &rarr; 3 min read</p>
              </div>
            </div>
          </div>
          <div class="post-img-container">
            <img
              class="post-card__img"
              id="post-card__img"
              src="https://images.pexels.com/photos/1772120/pexels-photo-1772120.jpeg?cs=srgb&dl=blackboard-close-up-computer-keyboard-1772120.jpg&fm=jpg"
              alt="post-img"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FeedPostContent;
