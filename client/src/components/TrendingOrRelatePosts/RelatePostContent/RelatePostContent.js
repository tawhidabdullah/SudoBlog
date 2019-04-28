import React, { Component } from "./node_modules/react";
import "./RelatePostContent";
class RelatePostContent extends Component {
  render() {
    return (
      <div class="blog">
        <div class="blog-type">
          <div class="popular active">Popular</div>
          <div class="recent">Most Recent</div>
        </div>
        <div class="popular-posts" />
        <div class="recent-posts hide">
          <div class="post">
            <img src="http://lorempixel.com/100/70/fashion" />
            <div class="post-meta">
              <div class="tag">Fashion &nbsp;|</div>
              <div class="category">Posted 12 Hours Ago</div>
            </div>
            <h1 class="title">Why You Should Invest in Life Experiences</h1>
          </div>
          <div class="post">
            <img src="http://lorempixel.com/100/70/business" />
            <div class="post-meta">
              <div class="tag">Business &nbsp;|</div>
              <div class="category">Posted 12 Hours Ago</div>
            </div>
            <h1 class="title">
              'Wonder' is a New Ad-free Video Platform for Lifestyle Content
            </h1>
          </div>
          <div class="post">
            <img src="http://lorempixel.com/100/70/animals" />
            <div class="post-meta">
              <div class="tag">Animals &nbsp;|</div>
              <div class="category">Posted 12 Hours Ago</div>
            </div>
            <h1 class="title">
              Amazon AppStream Is Now Open To All Developers
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default RelatePostContent;
