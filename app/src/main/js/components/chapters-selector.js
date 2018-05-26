import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import _ from "lodash";

import "../../res/scss/chapters-selector.scss";
import {
  toggleChapter,
  selectAllChapters,
  unselectAllChapters,
  selectChapters
} from "../actions/list_actions";

const ChaptersSelector = ({
  chapters,
  selectedChapters = [],
  toggleChapter,
  selectAll,
  unselectAll,
  selectChapters
}) => {
  const isSelected = index => {
    return selectedChapters.indexOf(index) != -1;
  };
  let rangeFrom, rangeTo;
  return (
    <div className="chapters-selector">
      <div className="header-item col-lg d-flex">
        <span className="col-sm">Chapters</span>
        <div className="float-right">
          <button
            type="button"
            className="btn btn-sm"
            onClick={() => selectAll(chapters)}>
            <span className="fa fa-check mr-2" />Select all
          </button>
          |
          <button
            type="button"
            className="btn btn-sm"
            onClick={() => unselectAll()}>
            <span className="fa fa-times mr-2" />Unselect all
          </button>
        </div>
      </div>
      <div className="list-group row chapters-list">
        {chapters.map((chapter, id) => (
          <span
            className={classNames(
              "list-group-item",
              "list-group-item-action",
              "d-flex",
              "align-items-center",
              "mt-1",
              "mb-1",
              "col-md-6 col-lg-4",
              {
                active: isSelected(chapter.index)
              }
            )}
            key={id}
            onClick={() => toggleChapter(chapter.index)}>
            <span className="col-sm-1 count">{chapter.index}</span>
            <span className="col-lg">{chapter.title}</span>
            <span className="fa fa-check checked mr-2" />
          </span>
        ))}
      </div>
      <div className="range">
        <div className="form-group row ml-0 mr-0 mt-2 mb-1">
          <label className="col-form-label">From</label>
          <div className="mt-1 ml-2 mr-2">
            <input
              type="number"
              className="form-control form-control-sm"
              ref={node => {
                rangeFrom = node;
              }}
            />
          </div>
          <label className="col-form-label">To</label>
          <div className="mt-1 ml-2">
            <input
              type="number"
              className="form-control form-control-sm"
              ref={node => {
                rangeTo = node;
              }}
            />
          </div>
          <button
            type="button"
            className="btn btn-outline-success btn-sm"
            onClick={() =>
              selectChapters(
                parseInt(rangeFrom.value),
                parseInt(rangeTo.value) + 1
              )
            }>
            <span className="fa fa-list mr-1" />
            <span>Select these chapters</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  selectedChapters: state.selectedChapters
});

const mapDispatchToProps = dispatch => ({
  toggleChapter: index => dispatch(toggleChapter(index)),
  selectAll: chapters =>
    dispatch(selectAllChapters(chapters.map(chapter => chapter.index))),
  unselectAll: () => dispatch(unselectAllChapters()),
  selectChapters: (from, to) => dispatch(selectChapters(_.range(from, to)))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChaptersSelector);
