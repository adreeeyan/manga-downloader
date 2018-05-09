import React from "react";

import "../../res/scss/manga-info.scss";

const MangaInfo = () => (
  <div className="manga-info row">
    <div className="info col-lg col-md">
      <h4>Manga title here</h4>
      <h6>
        <em>Author name</em>
      </h6>
      <div>
        <h6>
          35 chapters | <span className="badge badge-primary">Ongoing</span>
        </h6>
      </div>
      <dl className="row mt-4">
        <dt className="col-sm-3">Other titles</dt>
        <dd className="col-sm-9">Another title here; This one too</dd>
        <dt className="col-sm-3">Genre</dt>
        <dd className="col-sm-9">
          Action; Adventure; Manhua; Martial arts; Seinen
        </dd>
      </dl>
      <div className="summary text-center">
        <h6>
          <strong>Summary</strong>
        </h6>
        <em id="less-summary">
          Bacon ipsum dolor amet pastrami alcatra porchetta biltong turducken.
          Short ribs drumstick burgdoggen
        </em>
        <span className="show-more" id="more-summary">
          <a className="more" href="#more-summary">
            &nbsp;more...
          </a>
          <em>
            jowl meatloaf doner pig corned beef venison ribeye. Shoulder jerky
            rump short ribs bacon shankle. Tri-tip spare ribs doner strip steak,
            shoulder boudin corned beef drumstick meatloaf andouille flank.
            Shank bacon pork loin, ball tip chicken tail jowl venison jerky
            biltong sirloin pig andouille swine. Swine spare ribs salami
            kielbasa meatball fatback flank corned beef meatloaf.
          </em>
          <a className="less" href="#less-summary">
            ...less
          </a>
        </span>
      </div>
      <div className="actions row float-right mt-3">
        <button type="button col-sm" className="btn btn-success">
          <span className="fa fa-plus-circle mr-1" />Add to queue
        </button>
        <button type="button col-sm" className="btn btn-outline-warning">
          <span className="fa fa-bookmark mr-1" />Bookmark
        </button>
      </div>
    </div>
    <div className="cover col-lg col-md d-none d-md-block">
      <img src="http://via.placeholder.com/170x180" alt="Cover" />
    </div>
  </div>
);

export default MangaInfo;
