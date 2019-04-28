import React, { Component } from "react";
import "./FeedContent.css";
import FeedPostContent from "./FeedPostContent/FeedPostContent";

class FeedContent extends Component {
  render() {
    return (
      <div class="feed-content">
        <FeedPostContent />
      </div>
    );
  }
}

export default FeedContent;
