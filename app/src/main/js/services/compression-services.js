import fs from "fs";
import archiver from "archiver";
import path from "path";
import rimraf from "rimraf";

const compressChapter = (chapterDir, removeSourceDir) => {
  return new Promise(resolve => {
    const output = fs.createWriteStream(`${chapterDir}.cbz`);
    const archive = archiver("zip", {
      zlib: { level: 9 } // Sets the compression level.
    });

    output.on("close", () => {
      // check if directory needs to be removed
      if (removeSourceDir) {
        rimraf(chapterDir, () => {
          resolve();
        });
      } else {
        resolve();
      }
    });

    // pipe archive data to the file
    archive.pipe(output);

    // append all files from the chapter directory
    archive.glob(`${chapterDir}/*.*`);

    archive.finalize();
  });
};

const CompressionService = {
  compressChapter
};

export default CompressionService;
