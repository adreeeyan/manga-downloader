import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import GlobalModalHolder from "./global-modal-holder";
import Feedback from "./feedback";

import { doToggleFeedback } from "../actions/feedback";

const NavBar = ({ toggleFeedback, isFeedBackShown }) => (
  <div className="nav-bar">
    <div className="menu">
      <NavLink to="/search" className="fa fa-search" />
      <NavLink exact to="/" className="fa fa-list-alt" />
      <NavLink to="/settings" className="fa fa-cog" />
      <NavLink to="/about" className="fa fa-address-card" />
      <a className="fa fa-envelope" onClick={toggleFeedback} />
    </div>
    {isFeedBackShown && (
      <GlobalModalHolder
        close={() => {
          if (isFeedBackShown) {
            toggleFeedback();
          }
        }}>
        <Feedback />
      </GlobalModalHolder>
    )}
  </div>
);

const mapStateToProps = state => ({
  isFeedBackShown: state.feedback.shown
});

const mapDispatchToProps = dispatch => ({
  toggleFeedback: () => {
    dispatch(doToggleFeedback());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
