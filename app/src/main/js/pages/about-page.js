import React from "react";
import { connect } from "react-redux";

import "../../res/scss/about-page.scss";
import logo from "../../res/images/logo.png";

const AboutPage = () => (
  <div className="about-page transition-item page">
    <div className="logo">
      <img
        src={logo}
        alt="logo"
        className="animated bounce infinite"
      />
    </div>
    <div className="title">
      <h4>Baruch: Manga Downloader</h4>
      <h6>Version 0.0.2</h6>
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
            Fate stay night:{" "}
            <b className="text-info">
              http://www.freepngimg.com/png/26573-fate-stay-hd
            </b>
          </li>
          <li>
            Blue girl:{" "}
            <b className="text-info">
              http://www.freepngimg.com/png/9223-anime-png-image
            </b>
          </li>
          <li>
            Cat girl:{" "}
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
            Want something? Request a feature here:{" "}
            <b className="text-info">
              https://github.com/adrianonrails/manga-downloader/issues
            </b>
          </li>
          <li>
            Found a bug? Report it here:{" "}
            <b className="text-info">
              https://github.com/adrianonrails/manga-downloader/issues
            </b>
          </li>
          <li>
            Any other concerns? Email me at{" "}
            <b className="text-info">adrian.onrails@gmail.com</b>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
