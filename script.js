let currentPhraseIndex = 0;
let keywordsVisible = false;

const phrases = [
  {
    english:
      "<span class='unknown-word'>Everyone</span> in the crowd was <span class='unknown-word'>really</span> excited.",
    spanish:
      "<span class='unknown-word'>Todos</span> en la multitud estaban <span class='unknown-word'>realmente</span> emocionados.",
    keywordsEnglish: ["everyone", "really"],
    keywordsSpanish: ["todos", "realmente"],
  },
  {
    english:
      "People applauded <span class='unknown-word'>as</span> I <span class='unknown-word'>stepped</span> <span class='unknown-word'>across</span> the finish line.",
    spanish:
      "La gente aplaudió <span class='unknown-word'>mientras</span> yo <span class='unknown-word'>cruzaba</span> <span class='unknown-word'>la</span> línea de meta.",
    keywordsEnglish: ["as", "stepped", "across"],
    keywordsSpanish: ["mientras", "pisó", "al otro lado de"],
  }
];

function updateCard() {
  const phrase = phrases[currentPhraseIndex];
  document.getElementById("english-phrase").innerHTML = phrase.english;
  document.getElementById("spanish-phrase").innerHTML = phrase.spanish;
  document.getElementById("counter").textContent = `${currentPhraseIndex + 1}/${
    phrases.length
  }`;

  const keywordsGrid = document.getElementById("keywords-grid");
  keywordsGrid.innerHTML = "";
  phrase.keywordsEnglish.forEach((word, index) => {
    const span = document.createElement("span");
    span.className = "keyword";
    span.textContent = `${word} / ${phrase.keywordsSpanish[index]}`;
    keywordsGrid.appendChild(span);
  });
}

function flipCard() {
  document.getElementById("card").classList.toggle("flipped");
}

function nextCard() {
  currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
  updateCard();
  document.getElementById("card").classList.remove("flipped");
}

function toggleKeywords() {
  keywordsVisible = !keywordsVisible;
  const grid = document.getElementById("keywords-grid");
  const toggleText = document.querySelector(".toggle-keywords span");
  if (keywordsVisible) {
    grid.classList.add("visible");
    toggleText.textContent = "Ocultar palabras clave";
  } else {
    grid.classList.remove("visible");
    toggleText.textContent = "Mostrar palabras clave";
  }
}

window.addEventListener("DOMContentLoaded", updateCard);
