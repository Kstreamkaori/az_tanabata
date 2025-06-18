const data = [

  { word: "clips", sound: "clips.mp3" },
  { word: "fog", sound: "fog.mp3" },
  { word: "frog", sound: "frog.mp3" },
  { word: "gets", sound: "gets_tanabata.mp3" },
  { word: "in", sound: "in.mp3" },
  { word: "is", sound: "is.mp3" },
  { word: "kid", sound: "kid.mp3" },
   { word: "off", sound: "off.mp3", chunks: ["o", "ff"] },
  { word: "pen", sound: "pen.mp3" },
  { word: "picks", sound: "picks.mp3", chunks: ["p", "i", "ck", "s"] },
  { word: "pin", sound: "pin.mp3" },
  { word: "pocket", sound: "pocket.mp3", chunks: ["p", "o", "ck", "e", "t"] },
  { word: "tag", sound: "tag.mp3" },
  { word: "taps", sound: "taps.mp3" },
  { word: "tin", sound: "tin.mp3" },
  { word: "up", sound: "up_tanabata.mp3" },


];

let current = 0;

function showWord() {
  const wordEl = document.getElementById("word");
  const wordData = data[current];

  wordEl.innerHTML = "";
  document.getElementById("sound-btn").style.display = "none"; // タイピング中は非表示

  typeWriter(wordData);
}


function playSound() {
  const wordData = data[current];
  const audio = new Audio(`sounds/${wordData.sound}`);
  audio.play();
}


function prevWord() {
  current = (current - 1 + data.length) % data.length;
  showWord();
}

function nextWord() {
  current = (current + 1) % data.length;
  showWord();
}


function typeWriter(wordData, callback) {
  console.log(wordData);
console.log(wordData.word);

  
  const wordEl = document.getElementById("word");
  const chunks = wordData.chunks || wordData.word.split("");
  let i = 0;

  function type() {
    if (i < chunks.length) {
      wordEl.innerHTML += chunks[i];
      i++;
      setTimeout(type, 600);
    } else {
      if (typeof callback === "function") callback();
    
    }
  }

  type();
}

window.onload = showWord;

