const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  if (expr.includes("*")) {
    let words = expr.split(/\*{10}/g);
    let word = words.map((w) => decode(w));
    return word.join(" ");
  }
  let letters = expr.match(/\d{10}/g);
  let dots = [];
  let dashes = [];
  let sym = [];
  letters.forEach((element) => {
    dots.push(element.replace(/(10)/g, "."));
  });
  dots.forEach((element) => {
    dashes.push(element.replace(/(11)/g, "-"));
  });
  dashes.forEach((element) => {
    sym.push(element.replace(/0/g, ""));
  });
  return sym.map((s) => MORSE_TABLE[s]).join("");
}

module.exports = {
  decode,
};
