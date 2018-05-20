const fs = require("fs");
const mkdirp = require("mkdirp")
const fetch = require("node-fetch");
const MangaProvider = require("baruch-manga-provider");

exports.save = async (req, res) => {
  const location = req.body.location;
  const title = req.body.title;
  const chapters = req.body.chapters;

  // create the manga folder
  const baseFolder = `${location}/${title}`;
  mkdirp.sync(baseFolder);

  // iterate the chapters list
  for (const chapter of chapters) {
    // create the folder for the chapter
    const chapterFolder = `${baseFolder}/${chapter.index.toString().padStart(4, "0")} - ${chapter.title}`;
    mkdirp.sync(chapterFolder);

    // get the pages for the chapter
    const pages = await MangaProvider.getPages(chapter.location);
    // download each pages
    for (const page of pages) {
      const pageLocation = `${chapterFolder}/${page.index.toString().padStart(4, "0")}.jpg`;
      await downloadImage(page.image, pageLocation);
    }
  }
  res.json({ status: "success" });
};

const downloadImage = async (url, location) => {
  const res = await fetch(url);
  return await new Promise((resolve, reject) => {
    const fileStream = fs.createWriteStream(location);
    res.body.pipe(fileStream);
    res.body.on("error", err => {
      reject(err);
    });
    fileStream.on("finish", function() {
      resolve();
    });
  });
};

const encryptParam = param => {
  return new Buffer(param).toString("base64");
};
