import React from "react";
import { connect } from "react-redux";
import MangaInfo from "../components/manga-info";
import { selectMangaForDownload } from "../actions/list_actions";

const SelectedMangaInfo = ({ manga, close }) => {
  let isClosing = false;

  return (
    <div>
      {manga != null && (
        <MangaInfo
          manga={manga}
          onClickClose={() => {
            setTimeout(() => {
              close();
            }, 500);
          }}
        />
      )}
    </div>
  );
};

const getMangaInfo = id => {
  if (id == null) {
    return null;
  }
  const chapters = [...Array(20).keys()].map(id => `Chaptero ${id}`);
  return {
    title: `Manga title #${id}`,
    author: "Author name",
    cover: "http://via.placeholder.com/170x180",
    chapters: chapters,
    status: "Ongoing",
    alternativeTitle: "Another title here; This one too",
    genre: "Action; Adventure; Manhua; Martial arts; Seinen",
    summary:
      "Bacon ipsum dolor amet pastrami alcatra porchetta biltong turducken. Short ribs drumstick burgdoggen jowl meatloaf doner pig corned beef venison ribeye. Shoulder jerky rump short ribs bacon shankle. Tri-tip spare ribs doner strip steak, shoulder boudin corned beef drumstick meatloaf andouille flank. Shank bacon pork loin, ball tip chicken tail jowl venison jerky biltong sirloin pig andouille swine. Swine spare ribs salami kielbasa meatball fatback flank corned beef meatloaf."
  };
};

const mapStateToProps = state => ({
  manga: getMangaInfo(state.selectedMangaForDownload)
});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(selectMangaForDownload(null))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedMangaInfo);
