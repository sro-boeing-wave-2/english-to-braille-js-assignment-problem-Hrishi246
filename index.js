/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */
import englishToBrailleLiteralSet from './english-to-braille.js';

const mymap = new Map(englishToBrailleLiteralSet);
function converter() {
  let out = '';
  const inputtext = document.getElementById('sourceLangText').value;
  for (let i = 0; i <= inputtext.length - 1; i += 1) {
    out += mymap.get(inputtext[i]);
  }
  document.getElementById('targetLangText').innerHTML = out;
}
document.getElementById('btnConvertEnglishToBraille').addEventListener('click', converter);
