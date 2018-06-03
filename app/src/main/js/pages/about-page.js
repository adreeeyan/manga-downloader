import React from "react";
import { connect } from "react-redux";

import "../../res/scss/about-page.scss";
import logo from "../../res/images/logo.png";

const appVersion = require("electron").remote.app.getVersion();

const AboutPage = () => (
  <div className="about-page transition-item page">
    <div className="logo">
      <img src={logo} alt="logo" className="animated bounce infinite" />
    </div>
    <div className="title">
      <h4>Baruch: Manga Downloader</h4>
      <h6>Version {appVersion}</h6>
    </div>
    <div className="contents">
      <p className="text-center">
        This app was created for the purpose of practicing ReactJS.<br />
        Baruch does not own any of the manga that can be downloaded through
        here.
      </p>
      <h3>Credits</h3>
      <div>
        <span>Background images used can be found here:</span>
        <ul>
          <li>
            <span> Blue girl: </span>
            <b className="text-info">
              http://www.freepngimg.com/png/9223-anime-png-image
            </b>
          </li>
          <li>
            <span>Cat girl: </span>
            <b className="text-info">
              http://www.freepngimg.com/png/9219-anime-png-hd
            </b>
          </li>
        </ul>
      </div>
      <h3>Links</h3>
      <div>
        <ul>
          <li>
            <span>Want something? Request a feature here: </span>
            <b className="text-info">
              https://github.com/adrianonrails/manga-downloader/issues
            </b>
          </li>
          <li>
            <span>Found a bug? Report it here: </span>
            <b className="text-info">
              https://github.com/adrianonrails/manga-downloader/issues
            </b>
          </li>
          <li>
            <span>Any other concerns? Email me at </span>
            <b className="text-info">adrian.onrails@gmail.com</b>
          </li>
        </ul>
      </div>
      <h3>Plugs</h3>
      <div className="plugs">
        <ul>
          <li>
            <div>Are you a light novel fan? Checkout my mobile app for that. It provides an offline reading for your favorite light novels.</div>
            <h6><strong>Baruch: Light novel reader <b className="text-info">https://github.com/adrianonrails/baruch</b></strong></h6>
            <img src="https://user-images.githubusercontent.com/18593260/28713447-af6dfe5c-73c1-11e7-871a-d0f59c96537c.PNG" alt="list"/>
            <img src="https://user-images.githubusercontent.com/18593260/28713455-afd09134-73c1-11e7-8e61-4840c07cebdf.PNG" alt="info" />
            <img src="https://user-images.githubusercontent.com/18593260/28713453-afbd9174-73c1-11e7-8fb5-4733f516e2ca.PNG" alt="reader"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
