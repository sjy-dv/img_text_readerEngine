const tesseract = require("tesseract.js");
const fs = require("fs");
const image = fs.readFileSync("./1.jpg");
const translate = require("@vitalets/google-translate-api");
//영어 eng
//한국어 kor
//일본어 jpn

tesseract
  .recognize(image, "eng", { logger: (m) => console.log(m) })
  .then((res) => {
    let pureText = res.data.text;
    console.log(pureText);
    translate(pureText, { to: "ko" }).then((res) => {
      console.log(res.text);
    });
  });
