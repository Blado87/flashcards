let currentPhraseIndex = 0;
let keywordsVisible = false;

const phrases = [
  {
    english: "<span class='unknown-word'>Everyone</span> in the <span class='unknown-word'>crowd</span> was <span class='unknown-word'>really</span> <span class='unknown-word'>excited</span>.",
    spanish: "<span class='unknown-word'>Todos</span> en la <span class='unknown-word'>multitud</span> estaban <span class='unknown-word'>realmente</span> <span class='unknown-word'>emocionado</span>.",
    keywordsEnglish: ["Everyone", "crowd", "really", "excited"],
    keywordsSpanish: ["Todos", "multitud", "realmente", "emocionado"]
  },
  {
    english: "People <span class='unknown-word'>applauded</span> <span class='unknown-word'>as</span> I <span class='unknown-word'>stepped</span> <span class='unknown-word'>across</span> the finish line.",
    spanish: "Las personas <span class='unknown-word'>aplaudió</span> <span class='unknown-word'>mientras</span> <span class='unknown-word'>pisó</span> <span class='unknown-word'>a través de</span> la línea de meta.",
    keywordsEnglish: ["applauded", "as", "stepped", "across"],
    keywordsSpanish: ["aplaudió", "mientras", "pisó", "a través de"]
  },
  {
    english: "My <span class='unknown-word'>wonderful</span> dog, Quinn, was right next to me.",
    spanish: "Mi <span class='unknown-word'>Maravilloso</span> perro, Quinn, estaba justo al lado mío.",
    keywordsEnglish: ["wonderful"],
    keywordsSpanish: ["Maravilloso"]
  },
  {
    english: "The people <span class='unknown-word'>who</span> organized the race <span class='unknown-word'>took</span> a <span class='unknown-word'>picture</span> of us at <span class='unknown-word'>that</span> moment.",
    spanish: "Las personas <span class='unknown-word'>quién</span> organizaron la carrera nos <span class='unknown-word'>tomó</span> una <span class='unknown-word'>foto</span> en <span class='unknown-word'>esa</span> momento.",
    keywordsEnglish: ["who", "took", "that", "picture"],
    keywordsSpanish: ["quién", "tomó", "esa", "foto"]
  },
  {
    english: "In the <span class='unknown-word'>picture</span>, Quinn and I <span class='unknown-word'>both</span> <span class='unknown-word'>look</span> <span class='unknown-word'>extremely</span> happy.",
    spanish: "En la <span class='unknown-word'>foto</span>, Quinn y yo <span class='unknown-word'>ambos</span> nos <span class='unknown-word'>mira</span> <span class='unknown-word'>extremadamente</span> felices.",
    keywordsEnglish: ["picture", "both", "look", "extremely"],
    keywordsSpanish: ["foto", "ambos", "mira", "extremadamente"]
  },
  {
    english: "<span class='unknown-word'>It</span> <span class='unknown-word'>really</span> <span class='unknown-word'>was</span> a <span class='unknown-word'>great</span> day.",
    spanish: "<span class='unknown-word'>Realmente</span> <span class='unknown-word'>fue</span> un <span class='unknown-word'>genial</span> <span class='unknown-word'>eso</span>.",
    keywordsEnglish: ["really", "was", "great", "it"],
    keywordsSpanish: ["realmente", "fue", "genial", "eso"]
  },
  {
    english: "We <span class='unknown-word'>were</span> the <span class='unknown-word'>first</span> <span class='unknown-word'>blind</span> person and guide dog to <span class='unknown-word'>finish</span> the Boston 5K.",
    spanish: "<span class='unknown-word'>Fueron</span> la <span class='unknown-word'>primero</span> persona <span class='unknown-word'>ciegos</span> y perro guía en <span class='unknown-word'>terminar</span> el Boston 5K.",
    keywordsEnglish: ["were", "blind", "finish", "first"],
    keywordsSpanish: ["fueron", "ciegos", "terminar", "primero"]
  },
  {
    english: "<span class='unknown-word'>No one</span> did <span class='unknown-word'>it</span> <span class='unknown-word'>before</span> <span class='unknown-word'>us</span>.",
    spanish: "<span class='unknown-word'>Nadie</span> lo <span class='unknown-word'>eso</span> <span class='unknown-word'>antes</span> <span class='unknown-word'>nosotros</span>.",
    keywordsEnglish: ["no one", "it", "before", "us"],
    keywordsSpanish: ["nadie", "eso", "antes", "nosotros"]
  },
  {
    english: "My dog loved <span class='unknown-word'>running</span> more than <span class='unknown-word'>anything</span>, <span class='unknown-word'>so</span> I loved it <span class='unknown-word'>too</span>.",
    spanish: "Mi perro amaba <span class='unknown-word'>corriendo</span> más que <span class='unknown-word'>cualquier cosa</span>, <span class='unknown-word'>así que</span> yo lo amaba <span class='unknown-word'>también</span>.",
    keywordsEnglish: ["running", "anything", "so", "too"],
    keywordsSpanish: ["corriendo", "cualquier cosa", "así que", "también"]
  },
  {
    english: "Quinn <span class='unknown-word'>even</span> <span class='unknown-word'>inspired</span> me to run one of the <span class='unknown-word'>biggest</span> <span class='unknown-word'>races</span> of all: the Boston Marathon.",
    spanish: "Quinn <span class='unknown-word'>par</span> me <span class='unknown-word'>inspirado</span> a correr una de las <span class='unknown-word'>más grande</span> <span class='unknown-word'>razas</span> de todas: el Maratón de Boston.",
    keywordsEnglish: ["even", "biggest", "races", "inspired"],
    keywordsSpanish: ["par", "más grande", "razas", "inspirado"]
  },
  {
    english: "I was <span class='unknown-word'>feeling</span> very <span class='unknown-word'>sick</span>, <span class='unknown-word'>so</span> I <span class='unknown-word'>went</span> to the emergency room.",
    spanish: "Me <span class='unknown-word'>sentirse</span> muy <span class='unknown-word'>enfermo</span>, <span class='unknown-word'>así que</span> <span class='unknown-word'>fue</span> a la sala de emergencias.",
    keywordsEnglish: ["feeling", "sick", "so", "went"],
    keywordsSpanish: ["sentirse", "enfermo", "así que", "fue"]
  },
  {
    english: "<span class='unknown-word'>After</span> <span class='unknown-word'>several</span> different tests, the doctor <span class='unknown-word'>gave</span> me the <span class='unknown-word'>results</span>.",
    spanish: "<span class='unknown-word'>Después</span> de <span class='unknown-word'>varios</span> pruebas diferentes, el doctor me <span class='unknown-word'>dio</span> los <span class='unknown-word'>resultados</span>.",
    keywordsEnglish: ["After", "several", "gave", "results"],
    keywordsSpanish: ["Después", "varios", "dio", "resultados"]
  },
  {
    english: "I'll never <span class='unknown-word'>forget</span> the <span class='unknown-word'>look</span> on <span class='unknown-word'>his</span> face.",
    spanish: "Nunca <span class='unknown-word'>olvidar</span> la <span class='unknown-word'>mirar</span> en <span class='unknown-word'>suyo</span> rostro.",
    keywordsEnglish: ["forget", "look", "his", "never"],
    keywordsSpanish: ["olvidar", "mirar", "suyo", "nunca"]
  },
  {
    english: "He <span class='unknown-word'>took off</span> his glasses and <span class='unknown-word'>just</span> <span class='unknown-word'>said</span>, 'Randy...' I <span class='unknown-word'>knew</span> it was going to be bad news.",
    spanish: "Se <span class='unknown-word'>quitó</span> los lentes y <span class='unknown-word'>simplemente</span> <span class='unknown-word'>dijo</span>: 'Randy...' <span class='unknown-word'>Sabía</span> que iban a ser malas noticias.",
    keywordsEnglish: ["took off", "said", "just", "knew"],
    keywordsSpanish: ["quitó", "dijo", "simplemente", "sabía"]
  },
  {
    english: "He <span class='unknown-word'>told</span> me <span class='unknown-word'>that</span> I <span class='unknown-word'>had</span> a rare neurological <span class='unknown-word'>disease</span> and I was going to be <span class='unknown-word'>blind</span>.",
    spanish: "Me <span class='unknown-word'>dijo</span> <span class='unknown-word'>que</span> <span class='unknown-word'>tenía</span> una rara <span class='unknown-word'>enfermedad</span> neurológica y que iba a quedarme <span class='unknown-word'>ciego</span>.",
    keywordsEnglish: ["told", "that", "had", "disease", "blind"],
    keywordsSpanish: ["dijo", "que", "tenía", "enfermedad", "ciego"]
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
