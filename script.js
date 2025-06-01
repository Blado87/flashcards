let currentPhraseIndex = 0;
let keywordsVisible = false;

const phrases = [
  {
    english: "Everyone in the crowd was really excited.",
    spanish: "Todos en la multitud estaban realmente emocionados.",
    keywordsEnglish: ["Everyone", "crowd", "really", "excited"],
    keywordsSpanish: ["Todos", "multitud", "realmente", "emocionado"]
  },
    {
    english: "People applauded as I stepped across the finish line.",
    spanish: "Las personas aplaudieron cuando crucé la línea de meta.",
    keywordsEnglish: ["applauded", "as", "stepped", "across"],
    keywordsSpanish: ["aplaudió", "mientras", "pisó", "a través de"]
  },
    {
    english: "My wonderful dog, Quinn, was right next to me.",
    spanish: "Mi maravilloso perro, Quinn, estaba justo al lado mío.",
    keywordsEnglish: ["wonderful"],
    keywordsSpanish: ["Maravilloso"]
  },
    {
    english: "The people who organized the race took a picture of us at that moment.",
    spanish: "Las personas que organizaron la carrera nos tomaron una foto en ese momento.",
    keywordsEnglish: ["who", "took", "that", "picture"],
    keywordsSpanish: ["quién", "tomó", "esa", "foto"]
  },
    {
    english: "In the picture, Quinn and I both look extremely happy.",
    spanish: "En la foto, Quinn y yo ambos nos vemos extremadamente felices.",
    keywordsEnglish: ["picture", "both", "look", "extremely"],
    keywordsSpanish: ["foto", "ambos", "mira", "extremadamente"]
  },
    {
    english: "It really was a great day.",
    spanish: "Realmente fue un gran día.",
    keywordsEnglish: ["really", "was", "great", "it"],
    keywordsSpanish: ["realmente", "fue", "genial", "eso"]
  },
    {
    english: "We were the first blind person and guide dog to finish the Boston 5K.",
    spanish: "Éramos la primera persona ciega y perro guía en terminar el Boston 5K.",
    keywordsEnglish: ["were", "blind", "finish", "first"],
    keywordsSpanish: ["fueron", "ciegos", "terminar", "primero"]
  },
    {
    english: "No one did it before us.",
    spanish: "Nadie lo hizo antes que nosotros.",
    keywordsEnglish: ["no one", "it", "before", "us"],
    keywordsSpanish: ["nadie", "eso", "antes", "nosotros"]
  },
    {
    english: "My dog loved running more than anything, so I loved it too.",
    spanish: "Mi perro amaba correr más que cualquier cosa, así que yo lo amaba también.",
    keywordsEnglish: ["running", "anything", "so", "too"],
    keywordsSpanish: ["corriendo", "cualquier cosa", "así que", "también"]
  },
    {
    english: "Quinn even inspired me to run one of the biggest races of all: the Boston Marathon.",
    spanish: "Quinn incluso me inspiró a correr una de las carreras más grandes de todas: el Maratón de Boston.",
    keywordsEnglish: ["even", "biggest", "races", "inspired"],
    keywordsSpanish: ["par", "más grande", "razas", "inspirado"]
  },
    {
    english: "I was feeling very sick, so I went to the emergency room.",
    spanish: "Me sentía muy enfermo, así que fui a la sala de emergencias.",
    keywordsEnglish: ["feeling", "sick", "so", "went"],
    keywordsSpanish: ["sentirse", "enfermo", "así que", "fue"]
  },
    {
    english: "After several different tests, the doctor gave me the results.",
    spanish: "Después de varias pruebas diferentes, el doctor me dio los resultados.",
    keywordsEnglish: ["After", "several", "gave", "results"],
    keywordsSpanish: ["Después", "varios", "dio", "resultados"]
  },
    {
    english: "I’ll never forget the look on his face.",
    spanish: "Nunca olvidaré la expresión en su rostro.",
    keywordsEnglish: ["forget", "look", "his", "never"],
    keywordsSpanish: ["olvidar", "mirar", "suyo", "nunca"]
  },
    {
    english: "He took off his glasses and just said, “Randy…” I knew it was going to be bad news.",
    spanish: "Se quitó los lentes y simplemente dijo: “Randy…” Supe que iban a ser malas noticias.",
    keywordsEnglish: ["took off", "said", "just", "knew"],
    keywordsSpanish: ["quitó", "dijo", "simplemente", "sabía"]
  },
      {
    english: "He told me that I had a rare neurological disease and I was going to be blind.",
    spanish: "Me dijo que tenía una rara enfermedad neurológica y que iba a quedarme ciego.",
    keywordsEnglish: ["told", "that", "had", "disease", "blind"],
    keywordsSpanish: ["dijo", "que", "tenía", "enfermedad", "ciego"]
  },
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
