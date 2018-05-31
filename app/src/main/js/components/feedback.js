import React from "react";
import { connect } from "react-redux";

import { doSetFeedback, doToggleFeedback } from "../actions/feedback";

import "../../res/scss/feedback.scss";

const Feedback = ({ feedback, setFeedback, mailTo, closeFeedback }) => (
  <div className="feedback">
    <h1 className="mb-3">Any comments or suggestions?</h1>
    <div className="input">
      <textarea
        value={feedback}
        onChange={evt => setFeedback(evt.target.value)}
      />
    </div>
    <a href={mailTo} onClick={closeFeedback} className="btn btn-outline-primary w-50 mt-4">
      Send
    </a>
    <small className="mt-2"><strong>NOTE:</strong> This will open your default email app, just hit send in there directly.</small>
  </div>
);

const mapStateToProps = state => ({
  feedback: state.feedback.message,
  mailTo: `mailto:adrian.onrails@gmail.com?subject=Baruch MD&body=${
    state.feedback.message || ""
  }`
});

const mapDispatchToProps = dispatch => ({
  setFeedback: feedback => dispatch(doSetFeedback(feedback)),
  closeFeedback: () => dispatch(doToggleFeedback())
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
