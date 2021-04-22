/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
(function () {
  const chars = 'ABCDEFGHIJKL0123456789';
  const btn = document.querySelector('button');
  const reset = document.querySelector('.reset');
  const leftSide = document.querySelector('.left-side');
  const div = document.querySelector('.output');
  const codesNumber = 1000; // liczba wygenerowanych kodów
  const charsNumbers = 7; // liczba znaków w generowanym kodzie
  let code = '';
  // cosnt codes = [];

  reset.addEventListener('click', () => {
    // leftSide.textContent = '';
    const paragraphs = leftSide.querySelectorAll('p');
    paragraphs.forEach((el) => {
      el.remove();
    });
  });

  function randomChar() {
    const index = Math.floor(Math.random() * chars.length);
    return chars[index];
  }

  const codesGenerator = () => {
    for (let j = 0; j < codesNumber; j++) {
      for (let i = 0; i < charsNumbers; i++) {
        code += randomChar();
        if (i == charsNumbers - 1) {
          code = '';
        } else if (code.length == charsNumbers - 1) {
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
}());

(function () {
  const form = document.querySelector('form');
  const btn = document.querySelector('.btn-generate');
  const inputNumber = document.querySelector('input[type=number]');
  const btnReset = document.querySelector('.btn-reset');
  const content = document.querySelector('.content');
  const chars = 'ABCDEFGHIJKLŁMNOPRSTUWXYVZ1234567890';
  const longCode = 7;
  let isContentFlag = false;

  console.log(`Ilość znaków do dyspozycji: ${chars.length}`);
  const renderRandomChar = () => Math.floor(Math.random() * (0 + chars.length)) + 0;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const df = document.createDocumentFragment();
    let code = '';
    if (!isContentFlag) {
      for (let j = 0; j < inputNumber.value; j++) {
        for (let i = 0; i < longCode; i++) {
          code += chars[renderRandomChar()];
        }
        const newCode = document.createTextNode(code);
        const paragraph = document.createElement('p');
        paragraph.appendChild(newCode);
        paragraph.classList.add('code');
        code = '';
        df.appendChild(paragraph);
      }
      content.appendChild(df);
      isContentFlag = true;
    }
  });

  function resetContent() {
    const content = document.querySelector('.content');
    const paragraphs = content.querySelectorAll('p');

    paragraphs.forEach((el) => {
      el.remove();
    });

    isContentFlag = false;
  }

  btnReset.addEventListener('click', resetContent);
}());
