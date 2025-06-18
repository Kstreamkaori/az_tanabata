const data = [

  { word: "clips", sound: "clips.mp3" },
  { word: "fog", sound: "fog.mp3" },
  { word: "frog", sound: "frog.mp3" },
  { word: "gets", sound: "gets_tanabata.mp3" },
  { word: "in", sound: "in.mp3" },
  { word: "is", sound: "is.mp3" },
  { word: "kid", sound: "kid.mp3" },
  { word: "off", sound: "off.mp3" },
  { word: "pen", sound: "pen.mp3" },
  { word: "picks", sound: "picks.mp3" },
  { word: "pin", sound: "pin.mp3" },
  { word: "pocket", sound: "pocket.mp3" },
  { word: "tag", sound: "tag.mp3" },
  { word: "taps", sound: "taps.mp3" },
  { word: "tin", sound: "tin.mp3" },
  { word: "up", sound: "up_tanabata.mp3" },


];

let current = 0;

function showWord() {
  const wordEl = document.getElementById("word");
  const imageEl = document.getElementById("image");
  const showBtn = document.getElementById("show-image-btn");
  const wordData = data[current];

  wordEl.innerHTML = "";
  imageEl.src = ""; // ← ★ここで前の画像をリセット！
  imageEl.style.visibility = "hidden";

  // ↓ 追加（スペースを残してボタン非表示にしない）
  showBtn.style.visibility = "visible";

  typeWriter(wordData, function () {
    // 絵を見るボタンが出る処理
    document.getElementById("show-image-btn").style.display = "block";
  });
}

function playSound() {
  const wordData = data[current];
  const audio = new Audio(wordData.sound);
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
      document.getElementById("show-image-btn").style.display = "block"; // タイプ完了後ボタン出す
    }
  }

  type();
}

window.onload = showWord;

