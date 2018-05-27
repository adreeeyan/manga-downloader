import React from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import DownloadStatesFilter from "../components/download-states-filter";
import AddMangaButton from "../components/add-manga-button";
import DownloadsList from "../containers/downloads-list";

import "../../res/scss/download-list-page.scss";
import { setDownloadedMangaForDeletion } from "../actions/list_actions";
import { doDeleteDownloadedManga } from "../actions/download";
import EmptyListPlaceholder from "../components/emptylist-placeholder";

const DownloadListPage = ({
  downloadedMangaForDeletion,
  downloadedMangas,
  clearDownloadedMangaForDeletion,
  deleteDownloadedManga
}) => {
  let deleteDownloadedFilesControl;
  return (
    <div className="download-list-page transition-item page">
      {downloadedMangas.length == 0 && <EmptyListPlaceholder />}
      {downloadedMangas.length != 0 && (
        <div>
          <div className="filter-state mb-4">
            <DownloadStatesFilter />
          </div>
          <DownloadsList />
          <div className="add-button">
            <AddMangaButton />
          </div>
          <Modal
            show={!!downloadedMangaForDeletion}
            onHide={clearDownloadedMangaForDeletion}>
            <Modal.Header>Confirmation</Modal.Header>

            <Modal.Body>
              <span>
                Are you sure you want to delete{" "}
                <strong>
                  {downloadedMangaForDeletion &&
                    downloadedMangaForDeletion.info.title}
                </strong>{" "}
                from the list?
              </span>
              <div className="form-group mt-2 mb-0">
                <div className="custom-control custom-checkbox">
                  <input
                    ref={node => (deleteDownloadedFilesControl = node)}
                    type="checkbox"
                    className="custom-control-input"
                    id="deleteDownloadedFiles"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="deleteDownloadedFiles">
                    Also delete the files already downloaded<br />
                    <span className="text-danger">
                      (Warning: This action cannot be undone.)
                    </span>
                  </label>
                </div>
              </div>
            </Modal.Body>

            <Modal.Footer className="pt-1 pb-1">
              <Button
                className="btn-outline-success"
                autoFocus
                onClick={clearDownloadedMangaForDeletion}>
                No...
              </Button>
              <Button
                className="btn-danger"
                onClick={() => {
                  deleteDownloadedManga(
                    downloadedMangaForDeletion.info.location,
                    `${downloadedMangaForDeletion.location}/${
                      downloadedMangaForDeletion.info.title
                    }`,
                    deleteDownloadedFilesControl.checked
                  );
                }}>
                Yes!
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  downloadedMangas: state.downloadedMangas,
  downloadedMangaForDeletion: state.downloadedMangaForDeletion
});

const mapDispatchToProps = dispatch => ({
  clearDownloadedMangaForDeletion: () =>
    dispatch(setDownloadedMangaForDeletion(null)),
  deleteDownloadedManga: (id, location, includeFiles) =>
    dispatch(doDeleteDownloadedManga(id, location, includeFiles))
});

export default connect(mapStateToProps, mapDispatchToProps)(DownloadListPage);
