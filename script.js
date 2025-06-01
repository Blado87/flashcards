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
  },
  {
    english: "I <span class='unknown-word'>was</span> <span class='unknown-word'>already</span> <span class='unknown-word'>losing</span> my vision, and I <span class='unknown-word'>was</span> <span class='unknown-word'>only</span> 22.",
    spanish: "<span class='unknown-word'>Ya</span> <span class='unknown-word'>estaba</span> <span class='unknown-word'>perdiendo</span> mi visión, y <span class='unknown-word'>solo</span> tenía 22 años.",
    keywordsEnglish: ["already", "losing", "only", "was"],
    keywordsSpanish: ["ya", "perdiendo", "sólo", "estaba"]
  },
  {
    english: "I <span class='unknown-word'>was</span> in <span class='unknown-word'>shock</span>.",
    spanish: "Estaba en <span class='unknown-word'>conmocionado</span>.",
    keywordsEnglish: ["was", "shock"],
    keywordsSpanish: ["fue", "conmocionó"]
  },
  {
    english: "I <span class='unknown-word'>was</span> <span class='unknown-word'>so</span> <span class='unknown-word'>young</span>, and my future <span class='unknown-word'>seemed</span> <span class='unknown-word'>so</span> dark.",
    spanish: "<span class='unknown-word'>Era</span> <span class='unknown-word'>tan</span> <span class='unknown-word'>joven</span>, y mi futuro <span class='unknown-word'>parecía</span> <span class='unknown-word'>tan</span> oscuro.",
    keywordsEnglish: ["so", "young", "seemed", "was"],
    keywordsSpanish: ["tan", "joven", "parecía", "era"]
  },
  {
    english: "<span class='unknown-word'>Walking</span> was <span class='unknown-word'>also</span> <span class='unknown-word'>becoming</span> <span class='unknown-word'>difficult</span>.",
    spanish: "<span class='unknown-word'>Caminar</span> <span class='unknown-word'>también</span> se estaba <span class='unknown-word'>volviendo</span> <span class='unknown-word'>difícil</span>.",
    keywordsEnglish: ["Walking", "also", "becoming", "difficult"],
    keywordsSpanish: ["Caminar", "también", "volverse", "difícil"]
  },
  {
    english: "For a <span class='unknown-word'>while</span>, I <span class='unknown-word'>even</span> <span class='unknown-word'>had</span> to use a <span class='unknown-word'>wheelchair</span>.",
    spanish: "Por un tiempo, <span class='unknown-word'>incluso</span> <span class='unknown-word'>tuve</span> que usar una <span class='unknown-word'>silla de ruedas</span>.",
    keywordsEnglish: ["while", "even", "had", "wheelchair"],
    keywordsSpanish: ["mientras", "incluso", "tenía", "silla de ruedas"]
  },
  {
    english: "I <span class='unknown-word'>could</span>n't <span class='unknown-word'>walk</span>, and <span class='unknown-word'>that</span> was <span class='unknown-word'>really</span> <span class='unknown-word'>hard</span> for me.",
    spanish: "No <span class='unknown-word'>podía</span> <span class='unknown-word'>caminar</span>, y <span class='unknown-word'>eso</span> fue <span class='unknown-word'>realmente</span> <span class='unknown-word'>duro</span> para mí.",
    keywordsEnglish: ["could", "walk", "that", "really", "hard"],
    keywordsSpanish: ["podría", "caminar", "eso", "realmente", "duro"]
  },
  {
    english: "I <span class='unknown-word'>thought</span> a guide dog <span class='unknown-word'>could</span> help me <span class='unknown-word'>walk</span> and <span class='unknown-word'>become</span> independent <span class='unknown-word'>again</span>.",
    spanish: "<span class='unknown-word'>Pensé</span> que un perro guía <span class='unknown-word'>podía</span> ayudarme a <span class='unknown-word'>caminar</span> y <span class='unknown-word'>volverme</span> independiente <span class='unknown-word'>otra vez</span>.",
    keywordsEnglish: ["thought", "could", "walk", "become", "again"],
    keywordsSpanish: ["pensé", "podría", "caminar", "volverse", "otra vez"]
  },
  {
    english: "<span class='unknown-word'>So</span>, I contacted a local organization <span class='unknown-word'>that</span> <span class='unknown-word'>offered</span> guide dogs for <span class='unknown-word'>blind</span> people.",
    spanish: "<span class='unknown-word'>Así que</span> contacté a una organización local <span class='unknown-word'>que</span> <span class='unknown-word'>ofrecía</span> perros guía para personas <span class='unknown-word'>ciegas</span>.",
    keywordsEnglish: ["so", "that", "blind", "offered"],
    keywordsSpanish: ["así que", "que", "ciego", "ofrecía"]
  },
  {
    english: "And <span class='unknown-word'>then</span> I <span class='unknown-word'>went</span> to New York to <span class='unknown-word'>get</span> my dog.",
    spanish: "Y <span class='unknown-word'>luego</span> <span class='unknown-word'>fui</span> a Nueva York a <span class='unknown-word'>buscar</span> a mi perro.",
    keywordsEnglish: ["then", "went", "get"],
    keywordsSpanish: ["luego", "fue", "conseguir"]
  },
  {
    english: "<span class='unknown-word'>That</span>'s <span class='unknown-word'>when</span> I <span class='unknown-word'>first met</span> Quinn.",
    spanish: "Ahí fue <span class='unknown-word'>cuando</span> <span class='unknown-word'>conocí</span> a Quinn <span class='unknown-word'>por primera vez</span>.",
    keywordsEnglish: ["That", "when", "first met"],
    keywordsSpanish: ["Eso", "cuando", "conocimos por primera vez"]
  },
  {
    english: "<span class='unknown-word'>At first</span>, he didn't notice me <span class='unknown-word'>at all</span>! He was <span class='unknown-word'>too</span> interested in <span class='unknown-word'>his</span> toys.",
    spanish: "<span class='unknown-word'>Al principio</span>, ¡ni siquiera me notó <span class='unknown-word'>en absoluto</span>! Estaba <span class='unknown-word'>demasiado</span> interesado en <span class='unknown-word'>sus</span> juguetes.",
    keywordsEnglish: ["At first", "at all", "too", "his"],
    keywordsSpanish: ["Al principio", "en absoluto", "también", "suyo"]
  },
  {
    english: "<span class='unknown-word'>Then</span> I <span class='unknown-word'>knew</span> <span class='unknown-word'>how</span> to connect <span class='unknown-word'>with</span> Quinn: by playing!.",
    spanish: "<span class='unknown-word'>Entonces</span> <span class='unknown-word'>supe</span> <span class='unknown-word'>cómo</span> conectar <span class='unknown-word'>con</span> Quinn: ¡jugando!",
    keywordsEnglish: ["then", "knew", "how", "with"],
    keywordsSpanish: ["entonces", "sabía", "cómo", "con"]
  },
  {
    english: "Quinn and I <span class='unknown-word'>always</span> played <span class='unknown-word'>after</span> we <span class='unknown-word'>went</span> on a <span class='unknown-word'>walk</span>.",
    spanish: "Quinn y yo <span class='unknown-word'>siempre</span> jugábamos <span class='unknown-word'>después</span> de <span class='unknown-word'>salir</span> a <span class='unknown-word'>caminar</span>.",
    keywordsEnglish: ["always", "after", "went", "walk"],
    keywordsSpanish: ["siempre", "después", "fue", "caminar"]
  },
  {
    english: "One day, he <span class='unknown-word'>got</span> a <span class='unknown-word'>little</span> <span class='unknown-word'>too</span> <span class='unknown-word'>excited</span>.",
    spanish: "Un día, se <span class='unknown-word'>emocionó</span> un <span class='unknown-word'>poco</span> <span class='unknown-word'>demasiado</span>.",
    keywordsEnglish: ["got", "little", "too", "excited"],
    keywordsSpanish: ["Tengo", "poco", "demasiado", "emocionado"]
  },
  {
    english: "He <span class='unknown-word'>could</span>n't <span class='unknown-word'>wait</span> to play, <span class='unknown-word'>so</span> we started <span class='unknown-word'>walking</span> <span class='unknown-word'>really</span> <span class='unknown-word'>fast</span>.",
    spanish: "No <span class='unknown-word'>podía</span> <span class='unknown-word'>esperar</span> para jugar, <span class='unknown-word'>así que</span> empezamos a <span class='unknown-word'>caminar</span> <span class='unknown-word'>muy</span> <span class='unknown-word'>rápido</span>.",
    keywordsEnglish: ["could", "wait", "so", "walking", "really", "fast"],
    keywordsSpanish: ["podría", "esperar", "así que", "caminando", "realmente", "rápido"]
  },
  {
    english: "<span class='unknown-word'>Soon</span>, we <span class='unknown-word'>started</span> <span class='unknown-word'>running</span>.",
    spanish: "<span class='unknown-word'>Pronto</span>, <span class='unknown-word'>empezamos</span> a <span class='unknown-word'>correr</span>.",
    keywordsEnglish: ["soon", "started", "running"],
    keywordsSpanish: ["pronto", "comenzó", "corriendo"]
  },
  {
    english: "<span class='unknown-word'>After</span> <span class='unknown-word'>that</span>, we ran <span class='unknown-word'>together</span> all the time, and <span class='unknown-word'>that</span> <span class='unknown-word'>changed</span> my life.",
    spanish: "<span class='unknown-word'>Después</span> de <span class='unknown-word'>eso</span>, corrimos <span class='unknown-word'>juntos</span> todo el tiempo, y <span class='unknown-word'>eso</span> <span class='unknown-word'>cambió</span> mi vida.",
    keywordsEnglish: ["After", "that", "together", "that", "changed"],
    keywordsSpanish: ["Después", "que", "juntos", "que", "cambió"]
  },
  {
    english: "<span class='unknown-word'>After</span> we did <span class='unknown-word'>really</span> <span class='unknown-word'>well</span> during that 5K, I celebrated <span class='unknown-word'>with</span> <span class='unknown-word'>some</span> of my running friends.",
    spanish: "<span class='unknown-word'>Después</span> de que lo hicimos <span class='unknown-word'>muy</span> <span class='unknown-word'>bien</span> en ese 5K, celebré <span class='unknown-word'>con</span> <span class='unknown-word'>algunos</span> de mis amigos corredores.",
    keywordsEnglish: ["After", "really", "well", "with", "some"],
    keywordsSpanish: ["Después", "realmente", "bueno", "con", "algunos"]
  },
  {
    english: "<span class='unknown-word'>Then</span> I <span class='unknown-word'>went</span> <span class='unknown-word'>back</span> to the <span class='unknown-word'>state</span> of New Hampshire.",
    spanish: "<span class='unknown-word'>Luego</span> <span class='unknown-word'>volví</span> al <span class='unknown-word'>estado</span> de New Hampshire.",
    keywordsEnglish: ["then", "went", "back", "state"],
    keywordsSpanish: ["luego", "fue", "regresó", "estado"]
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
  toggleKeywords();
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
