import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  state = {
    isInUserDropDownClick: false,
    isInNotiFicationClicked: false
  };

  toggleUserDropDown = () => {
    let isInUserDropDownClick = this.state.isInUserDropDownClick;
    this.setState({
      isInUserDropDownClick: !isInUserDropDownClick
    });
  };

  toggleNotificationDropDown = () => {
    let isInNotiFicationClicked = this.state.isInNotiFicationClicked;
    this.setState({
      isInNotiFicationClicked: !isInNotiFicationClicked
    });
  };

  render() {
    return (
      <div class="topbar">
        <div className="menuNavContent">
          <a href="javascript:void(0)" style={{ color: "#fff" }}>
            HOME
          </a>

          <a href="javascript:void(0)">SELF</a>

          <a href="javascript:void(0)">DESIGN</a>

          <a href="javascript:void(0)">MORE</a>
        </div>

        <div class="right-group">
          <div className="link-group notiGroup ">
            <a href="javascript:void(0)" className="notification-icon">
              <span
                class="svgIcon svgIcon--bell svgIcon--25px"
                onClick={this.toggleNotificationDropDown}
              >
                <svg
                  class={
                    this.state.isInNotiFicationClicked
                      ? "svgIcon-use active-notification-icon"
                      : "svgIcon-use"
                  }
                  width="25"
                  height="25"
                  viewBox="-293 409 25 25"
                >
                  <path d="M-273.327 423.67l-1.673-1.52v-3.646a5.5 5.5 0 0 0-6.04-5.474c-2.86.273-4.96 2.838-4.96 5.71v3.41l-1.68 1.553c-.204.19-.32.456-.32.734V427a1 1 0 0 0 1 1h3.49a3.079 3.079 0 0 0 3.01 2.45 3.08 3.08 0 0 0 3.01-2.45h3.49a1 1 0 0 0 1-1v-2.59c0-.28-.12-.55-.327-.74zm-7.173 5.63c-.842 0-1.55-.546-1.812-1.3h3.624a1.92 1.92 0 0 1-1.812 1.3zm6.35-2.45h-12.7v-2.347l1.63-1.51c.236-.216.37-.522.37-.843v-3.41c0-2.35 1.72-4.356 3.92-4.565a4.353 4.353 0 0 1 4.78 4.33v3.645c0 .324.137.633.376.85l1.624 1.477v2.373z" />
                </svg>
              </span>
              <ul
                class={
                  this.state.isInNotiFicationClicked
                    ? "Notification-Dropdown U-open"
                    : "Notification-Dropdown"
                }
              >
                <li>
                  <a href="#">You don't have any notification yet!</a>
                </li>
              </ul>
            </a>
          </div>

          <div className="link-group user-group">
            <a href="javascript:void(0)">
              <div class="User-area" onClick={this.toggleUserDropDown}>
                <div class="User-avtar">
                  <img src="http://f1s.000webhostapp.com/images/avatar/avatar5.png" />
                </div>
                <ul
                  class={
                    this.state.isInUserDropDownClick
                      ? "User-Dropdown U-open"
                      : "User-Dropdown"
                  }
                >
                  <li>
                    <a>New Story</a>
                  </li>
                  <li>
                    <a href="#">My Profile</a>
                  </li>
                  <li>
                    <a href="#">Notifications</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <a href="#">Settings</a>
                  </li>
                  <li>
                    <a href="#">Logout</a>
                  </li>
                </ul>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
