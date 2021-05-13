const text = "“Luck Is What Happens When Preparation Meets Opportunity. Seneca";

// show one letter at a time
let index = 0;

function typeTheLetters() {
  document.body.innerText = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 0;
  }
}

setInterval(typeTheLetters, 160);
