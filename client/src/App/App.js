import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    isInUserDropDownClick: false
  };

  toggleUserDropDown = () => {
    let isInUserDropDownClick = this.state.isInUserDropDownClick;
    this.setState({
      isInUserDropDownClick: !isInUserDropDownClick
    });
  };

  render() {
    return (
      <React.Fragment>
        <div class="topbar">
          <div className="menuNavContent">
            <a href="javascript:void(0)">HOME</a>

            <a href="javascript:void(0)">SELF</a>

            <a href="javascript:void(0)">DESIGN</a>

            <a href="javascript:void(0)">MORE</a>
          </div>

          <div class="right-group">
            <div className="link-group ">
              <a href="javascript:void(0)" className="notification-icon">
                <span class="svgIcon svgIcon--bell svgIcon--25px">
                  <svg
                    class="svgIcon-use"
                    width="25"
                    height="25"
                    viewBox="-293 409 25 25"
                  >
                    <path d="M-273.327 423.67l-1.673-1.52v-3.646a5.5 5.5 0 0 0-6.04-5.474c-2.86.273-4.96 2.838-4.96 5.71v3.41l-1.68 1.553c-.204.19-.32.456-.32.734V427a1 1 0 0 0 1 1h3.49a3.079 3.079 0 0 0 3.01 2.45 3.08 3.08 0 0 0 3.01-2.45h3.49a1 1 0 0 0 1-1v-2.59c0-.28-.12-.55-.327-.74zm-7.173 5.63c-.842 0-1.55-.546-1.812-1.3h3.624a1.92 1.92 0 0 1-1.812 1.3zm6.35-2.45h-12.7v-2.347l1.63-1.51c.236-.216.37-.522.37-.843v-3.41c0-2.35 1.72-4.356 3.92-4.565a4.353 4.353 0 0 1 4.78 4.33v3.645c0 .324.137.633.376.85l1.624 1.477v2.373z" />
                  </svg>
                </span>
              </a>
            </div>

            <div class="link-group">
              <a href="javascript:void(0)">
                <img src="http://f1s.000webhostapp.com/images/avatar/avatar5.png" />
              </a>
            </div>
          </div>
        </div>

        <div class="feed-content">
          {/*   */}
          {/* {post card} */}
          <div class="post-container">
            <div class="post-card">
              <div class="post-card__content">
                <div class="post-card__info">
                  <h1>My most favorite place in the world</h1>

                  <div className="post-description">
                    <p className="post-description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quas doloribus dolorum ratione optio. Tenetur id fugiat
                      totam, ducimus velit? Officia mollitia reiciendis ipsum!
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
          <div class="post-container">
            <div class="post-card">
              <div class="post-card__content">
                <div class="post-card__info">
                  <h1>My most favorite place in the world</h1>

                  <div className="post-description">
                    <p className="post-description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quas doloribus dolorum ratione optio. Tenetur id fugiat
                      totam, ducimus velit? Officia mollitia reiciendis ipsum!
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
          <div class="post-container">
            <div class="post-card">
              <div class="post-card__content">
                <div class="post-card__info">
                  <h1>My most favorite place in the world</h1>

                  <div className="post-description">
                    <p className="post-description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quas doloribus dolorum ratione optio. Tenetur id fugiat
                      totam, ducimus velit? Officia mollitia reiciendis ipsum!
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
                  src="https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?cs=srgb&dl=connection-contemporary-data-450035.jpg&fm=jpg"
                  alt="post-img"
                />
              </div>
            </div>
          </div>
          <div class="post-container">
            <div class="post-card">
              <div class="post-card__content">
                <div class="post-card__info">
                  <h1>My most favorite place in the world</h1>

                  <div className="post-description">
                    <p className="post-description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quas doloribus dolorum ratione optio. Tenetur id fugiat
                      totam, ducimus velit? Officia mollitia reiciendis ipsum!
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
                  src="https://images.pexels.com/photos/461496/pexels-photo-461496.jpeg?cs=srgb&dl=coffee-commerce-connection-461496.jpg&fm=jpg"
                  alt="post-img"
                />
              </div>
            </div>
          </div>

          {/*   */}
        </div>
        <div class="thirdcol-content">
          <div class="section-content">
            <h4>
              Your Pages
              <a href="javascript:void(0)">
                <i class="fa fa-caret-up" />
              </a>
              <hr />
            </h4>

            <a href="javascript:void(0)">
              <i class="fa fa-caret-down" />
            </a>
            <a href="javascript:void(0)">
              <img src="//i.imgur.com/k2t0gee.png" />
            </a>
            <p>
              <a href="javascript:void(0)">
                <span>Your Page</span>
              </a>
              <a href="javascript:void(0)">
                <i class="fa fa-comment" />
                Messages
              </a>
              <a href="javascript:void(0)">
                <i class="fa fa-globe" />
                Notifications <span>1</span>
              </a>
              <hr />
            </p>
            <p>
              <a href="javascript:void(0)">
                <i class="fa fa-pencil-square-o" />
                Publish
              </a>
              <a href="javascript:void(0)">
                <i class="fa fa-camera" />
                Photo
              </a>
              <a href="javascript:void(0)">
                <i class="fa fa-calendar" />
                Event
              </a>
              <a href="javascript:void(0)">
                <i class="fa fa-bell" />
                Promote
              </a>
            </p>
          </div>
          <div class="section-content">
            <a href="javascript:void(0)">
              <i class="fa fa-calendar" />1 event invite
            </a>
          </div>
          <div class="section-content">
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
                  <h1 class="title">
                    Why You Should Invest in Life Experiences
                  </h1>
                </div>
                <div class="post">
                  <img src="http://lorempixel.com/100/70/business" />
                  <div class="post-meta">
                    <div class="tag">Business &nbsp;|</div>
                    <div class="category">Posted 12 Hours Ago</div>
                  </div>
                  <h1 class="title">
                    'Wonder' is a New Ad-free Video Platform for Lifestyle
                    Content
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
          </div>
          <div class="section-content">
            <h4>Sponsored</h4>

            <a href="javascript:void(0)">Create Ad</a>
            <div>
              <a href="javascript:void(0)">
                <img src="//i.imgur.com/pZ2VCSf.png" />
                <div>
                  Play at Global Poker!
                  <div>
                    <small>GlobalPoker.com</small>
                  </div>
                </div>
                <div>
                  Real Poker. Real Winnings. Legally Cash Out via PayPal
                </div>
              </a>
            </div>
            <div>
              <a href="javascript:void(0)">
                <img src="//i.imgur.com/2miHaRa.png" />
                <div>
                  How To Start Your Own Social Media Marketing Agency and Get
                  Small Businesses To Hire You
                </div>
                <div>
                  Tai Lopez went from broke & sleeping on his mom's sofa to
                  becoming a social media mogul an...
                </div>
              </a>
            </div>
          </div>
          <div class="section-content">
            <a href="javascript:void(0)">English (US)</a> ·{" "}
            <a href="javascript:void(0)">Español</a> ·{" "}
            <a href="javascript:void(0)">Português (Brasil)</a> ·{" "}
            <a href="javascript:void(0)">Français (France)</a> ·{" "}
            <a href="javascript:void(0)">Deutsch</a>
          </div>

          <div>
            <a href="javascript:void(0)">Privacy</a> ·{" "}
            <a href="javascript:void(0)">Terms</a> ·{" "}
            <a href="javascript:void(0)">Advertising</a> ·{" "}
            <a href="javascript:void(0)">Ad Choices</a> ·{" "}
            <a href="javascript:void(0)">Cookies</a> ·{" "}
            <a href="javascript:void(0)">More</a>
            <p>Sudoblog © 2019</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
