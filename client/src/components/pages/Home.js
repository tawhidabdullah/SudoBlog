import React, { Component } from "react";
import FeedContent from "../FeedContent/FeedContent";
import TrendingOrRelatePosts from "../TrendingOrRelatePosts/TrendingOrRelatePosts";
import "../../PagesStyles/Home.css";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <FeedContent />
        <TrendingOrRelatePosts />
      </React.Fragment>
    );
  }
}
