import React from "react";
import { connect } from "react-redux";
import { setFilterValue } from "../actions/list_actions";
import _ from "lodash";

const SearchBar = ({ value, setFilterValue }) => {
  let input;

  return (
    <div>
      <input
        ref={node => (input = node)}
        className="form-control form-control-lg"
        type="text"
        value={value}
        placeholder="Type the manga title here..."
        onChange={() => setFilterValue(input.value)}
        autoFocus
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  value: state.searchValue
});

const mapDispatchToProps = dispatch => ({
  setFilterValue: name => dispatch(setFilterValue(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
