import React from "react";

import "./App.css";

function App() {
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
              <img src="//i.imgur.com/5jInimY.jpg" />
            </a>
          </div>
        </div>
      </div>

      <div class="feed-content">
        <div class="recentcontainer">
          <ul class="newpostheader nav nav-tabs nav-justified">
            <li>
              <a href="javascript:void(0)">
                <i class="fa fa-pencil" />
                <span>Create a Post</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="fa fa-book" />
                <span>Media Album</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="fa fa-video-camera" />
                <span>Live Video</span>
              </a>
            </li>
          </ul>
          <div class="newpost">
            <textarea placeholder="Post Something..." />
          </div>
          <ul class="newpostfooter nav nav-tabs nav-justified">
            <li>
              <a href="javascript:void(0)">
                <i class="fa fa-picture-o" />
                <span>Photo/Video</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="fa fa-smile-o" />
                <span>Feeling/Activity</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="fa fa-ellipsis-h" />
              </a>
            </li>
          </ul>
        </div>
        <div class="recentcontainer">
          <div class="newpostheader">
            <a href="javascript:void(0)">
              <img src="//i.imgur.com/5jInimY.jpg" />
              <span class="name">First Last</span>
            </a>
            <span>
              shared <a href="javascript:void(0)">Demyos's</a>{" "}
              <a href="javascript:void(0)">post</a>.
            </span>
            <p>
              <a class="date" href="javascript:void(0)">
                44 mins
              </a>
              <a href="javascript:void(0)">
                <i class="fa fa-globe" />
              </a>
              <div class="rightsideofpost">
                <a class="follow" href="javascript:void(0)">
                  <i class="fa fa-star" />
                </a>
                <a class="personpostmenu" href="javascript:void(0)">
                  <i class="fa fa-caret-down" />
                </a>
              </div>
            </p>
          </div>
          <div class="newpost">
            <div class="postcontent">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate sunt quasi in quam asperiores! Optio voluptate impedit
              eos ex nisi, molestias facilis sint cupiditate, dolores veritatis
              cum? Enim vel, qui!
            </div>
          </div>
          <ul class="newpostfooter nav nav-tabs nav-justified">
            <li>
              <a href="javascript:void(0)">
                <i class="fa fa-thumbs-up" />
                <span>Like</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" title="Leave a comment">
                <i class="fa fa-comment-o" />
                <span>Comment</span>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                title="Send this to friends or post it to your timeline"
              >
                <i class="fa fa-share" />
                <span>Share</span>
              </a>
            </li>
          </ul>
          <ul class="community-counter nav nav-tabs nav-justified">
            <li>
              <a href="javascript:void(0)">
                <i class="fa fa-thumbs-up" />
                <span>1</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="fa fa-comment-o" />
                <span>3</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="fa fa-share" />
                <span>4</span>
              </a>
            </li>
          </ul>
          <div class="commentpost">
            <div class="input-group">
              <a href="javascript:void(0)">
                <img src="//i.imgur.com/5jInimY.jpg" />
              </a>

              <textarea class="form-control" placeholder="Write a comment..." />
              <div class="input-group-btn">
                <a class="btn btn-default" href="javascript:void(0)">
                  <i class="fa fa-smile-o" />
                </a>
                <a class="btn btn-default" href="javascript:void(0)">
                  <i class="fa fa-picture-o" />
                </a>
                <a class="btn btn-default" href="javascript:void(0)">
                  <i class="fa fa-gift" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="recentcontainer">
          <div class="newpostheader">
            <h4>Suggested post</h4>
            <hr />
            <a href="javascript:void(0)">
              <img src="//i.imgur.com/5jInimY.jpg" />
              <span class="name">First Last</span>
            </a>
            <p>
              <a class="date" href="javascript:void(0)">
                Sponsored
              </a>
              <a href="javascript:void(0)">
                <i class="fa fa-globe" />
              </a>
              <div class="rightsideofpost">
                <a class="follow" href="javascript:void(0)">
                  <i class="fa fa-star" />
                </a>
                <a class="personpostmenu" href="javascript:void(0)">
                  <i class="fa fa-caret-down" />
                </a>
              </div>
            </p>
          </div>
          <div class="newpost">
            <div class="postcontent">
              We lose 48 football fields of forest every minute. :-( By using "
              <a href="http://ecosia.org">Ecosia.org</a>" for your web searches
              you can help stop this trend. Let's plant some trees together!
              <div class="tc">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fecosia%2Fvideos%2F10154359809121611%2F&show_text=0&width=400"
                  width="400"
                  height="400"
                  style={{
                    border: "none",
                    overflow: "hidden"
                  }}
                  scrolling="no"
                  frameborder="0"
                  allowTransparency="true"
                  allowFullScreen="true"
                />
              </div>
            </div>
          </div>
          <ul class="newpostfooter nav nav-tabs nav-justified">
            <li>
              <a href="javascript:void(0)">
                <i class="fa fa-thumbs-up" />
                <span>Like</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" title="Leave a comment">
                <i class="fa fa-comment-o" />
                <span>Comment</span>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                title="Send this to friends or post it to your timeline"
              >
                <i class="fa fa-share" />
                <span>Share</span>
              </a>
            </li>
          </ul>
          <ul class="community-counter nav nav-tabs nav-justified">
            <li>
              <a href="javascript:void(0)">
                <i class="fa fa-thumbs-up" />
                <span>1</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="fa fa-comment-o" />
                <span>3</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="fa fa-share" />
                <span>4</span>
              </a>
            </li>
          </ul>
          <div class="commentpost">
            <div class="input-group">
              <a href="javascript:void(0)">
                <img src="//i.imgur.com/5jInimY.jpg" />
              </a>

              <textarea class="form-control" placeholder="Write a comment..." />
              <div class="input-group-btn">
                <a class="btn btn-default" href="javascript:void(0)">
                  <i class="fa fa-smile-o" />
                </a>
                <a class="btn btn-default" href="javascript:void(0)">
                  <i class="fa fa-picture-o" />
                </a>
                <a class="btn btn-default" href="javascript:void(0)">
                  <i class="fa fa-gift" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="recentcontainer">
          <div class="newpostheader">
            <a href="javascript:void(0)">
              <img src="//i.imgur.com/5jInimY.jpg" />
              <span class="name">First Last</span>
            </a>
            <p>
              <a class="date" href="javascript:void(0)">
                44 mins
              </a>
              <a href="javascript:void(0)">
                <i class="fa fa-globe" />
              </a>
              <div class="rightsideofpost">
                <a class="follow" href="javascript:void(0)">
                  <i class="fa fa-star" />
                </a>
                <a class="personpostmenu" href="javascript:void(0)">
                  <i class="fa fa-caret-down" />
                </a>
              </div>
            </p>
          </div>
          <div class="newpost">
            <div class="postcontent">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate sunt quasi in quam asperiores! Optio voluptate impedit
              eos ex nisi, molestias facilis sint cupiditate, dolores veritatis
              cum? Enim vel, qui!
            </div>
          </div>
          <ul class="newpostfooter nav nav-tabs nav-justified">
            <li>
              <a href="javascript:void(0)">
                <i class="fa fa-thumbs-up" />
                <span>Like</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" title="Leave a comment">
                <i class="fa fa-comment-o" />
                <span>Comment</span>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                title="Send this to friends or post it to your timeline"
              >
                <i class="fa fa-share" />
                <span>Share</span>
              </a>
            </li>
          </ul>
          <ul class="community-counter nav nav-tabs nav-justified">
            <li>
              <a href="javascript:void(0)">
                <i class="fa fa-thumbs-up" />
                <span>1</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="fa fa-comment-o" />
                <span>3</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="fa fa-share" />
                <span>4</span>
              </a>
            </li>
          </ul>
          <div class="commentpost">
            <div class="input-group">
              <a href="javascript:void(0)">
                <img src="//i.imgur.com/5jInimY.jpg" />
              </a>

              <textarea class="form-control" placeholder="Write a comment..." />
              <div class="input-group-btn">
                <a class="btn btn-default" href="javascript:void(0)">
                  <i class="fa fa-smile-o" />
                </a>
                <a class="btn btn-default" href="javascript:void(0)">
                  <i class="fa fa-picture-o" />
                </a>
                <a class="btn btn-default" href="javascript:void(0)">
                  <i class="fa fa-gift" />
                </a>
              </div>
            </div>
          </div>
        </div>
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
          <h4>
            Trending
            {/* entertainment  */}
            <a href="javascript:void(0)">
              <i class="fa fa-video-camera" />
            </a>
            {/* sports */}
            <a href="javascript:void(0)">
              <i class="fa fa-futbol-o" />
            </a>
            {/* science and technology */}
            <a href="javascript:void(0)">
              <i class="fa fa-flask" />
            </a>
            {/* politics */}
            <a href="javascript:void(0)">
              <i class="fa fa-balance-scale" />
            </a>
            {/* top trends */}
            <a class="activetrend" href="javascript:void(0)">
              <i class="fa fa-line-chart" />
            </a>
          </h4>
          <div class="trend-feed">
            <ul>
              <li>
                <a href="javascript:void(0)">Alex Honnold</a>
                <span>
                  'Free solo' climber conquers El Capitan without rope, safety
                  gear ‑ <span>msn.com</span>
                </span>
              </li>
              <li>
                <a href="javascript:void(0)">Michael Bloomberg</a>
                <span>
                  Michael Bloomberg Pledges $15 Million For Paris Climate Pact ‑{" "}
                  <span>huffingtonpost.com</span>
                </span>
              </li>
              <li>
                <a href="javascript:void(0)">Theresa May</a>
                <span>
                  UK PM May's lead cut to just 1 point over Labour - Survation
                  poll ‑ <span>reuters.com</span>
                </span>
              </li>
            </ul>
            <div>
              <a href="javascript:void(0)">
                <i class="fa fa-caret-down" />
                See More
              </a>
              <a href="javascript:void(0)">
                <i class="fa fa-question" />
              </a>
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
              <div>Real Poker. Real Winnings. Legally Cash Out via PayPal</div>
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
          <p>Facebook © 2017</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
