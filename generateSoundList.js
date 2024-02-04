const fs = require("fs");
const soundsDir = "./public/sounds";
const outputFile = "./src/sounds.js";

const soundFiles = fs
  .readdirSync(soundsDir)
  .filter((file) => file.endsWith(".ogg"))
  .map((file) => ({
    text: file.replace(".ogg", "").replace(/_/g, " ").replace(/\d+/, ""),
    sound: `/sounds/${file}`,
  }));

const content = `export const sounds = ${JSON.stringify(soundFiles, null, 2)};`;

fs.writeFileSync(outputFile, content, "utf8");
console.log("Sound list generated:", outputFile);
