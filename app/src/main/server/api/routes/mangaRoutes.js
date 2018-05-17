module.exports = function(app) {
  var mangaCtrl = require("../controllers/mangaController");

    app
        .route("/manga")
        .get(mangaCtrl.getMangas)

    app
        .route("/manga/:mangaLocation")
        .get(mangaCtrl.getMangaInfo)

    app
        .route("/chapter/:mangaLocation")
        .get(mangaCtrl.getChapters)

    app
        .route("/page/:chapterLocation")
        .get(mangaCtrl.getPages)

    app
        .route("/provider")
        .post(mangaCtrl.updateMangaProviders)
};
