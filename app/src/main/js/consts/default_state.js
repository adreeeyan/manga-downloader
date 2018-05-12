import LIST_ITEMS from "./list_items";

const mangas = [...Array(20).keys()].map(id => {
  return {
    id: id,
    title: (parseInt(Math.random() * 2) == 1 ? "manga" : "manhwa") + id,
    source: parseInt(Math.random() * 2) == 1 ? "KissManga" : "MangaPanda"
  };
});

// eslint-disable-next-line
export default { mangas: mangas, searchValue: "" };
