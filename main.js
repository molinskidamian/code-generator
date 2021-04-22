const chars = 'ABCDEFGHIJKL0123456789';
const btn = document.querySelector('button');
const div = document.querySelector('div');
const codesNumber = 1000; // liczba wygenerowanych kodów
const charsNumbers = 7; // liczba znaków w generowanym kodzie
let code = '';
// cosnt codes = [];

function randomChar() {
  const index = Math.floor(Math.random() * chars.length);
  return chars[index];
}

const codesGenerator = () => {
  for (let j = 0; j < codesNumber; j++) {
    for (let i = 0; i < charsNumbers; i++) {
      code += randomChar();
      if (i == (charsNumbers - 1)) {
        code = '';
      } else if (code.length == (charsNumbers - 1)) {
        const p = document.createElement('p');
        const text = document.createTextNode(`${code}`);
        p.appendChild(text);
        p.classList.add('code');
        div.appendChild(p);
        console.log(`${j + 1}. ${code}`);
      }
    }
  }
};

btn.addEventListener('click', codesGenerator);
