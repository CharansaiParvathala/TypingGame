document.addEventListener('DOMContentLoaded', function() {

    const inputField = document.querySelector('.input-field');

    const paragraphs = [localStorage.getItem('typedText') || "","There is something wrong Try again"];
const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const tryAgainBtn = document.querySelector(".content button")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[0].split("").forEach(char => {
        console.log(char);
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}




function initTyping() {
const audio = new Audio();
   audio.volume = value;
         audio.src = "audio/key_click.mp3";
         audio.play();

    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        if (timeLeft <= 0) {
            alert("Time's up! Your WPM is: " +wpmTag.innerText+"\n Checkout other information in page👇");
        } else {
            alert("You completed the text! Your WPM is : " + wpmTag.innerText+"\n Checkout other information in page👇");
        }
    }
/*}*/
}



function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

    loadParagraph();
    inpField.addEventListener("input", initTyping);
    tryAgainBtn.addEventListener("click", resetGame);
});



var currentAudio = 1;
function changeAudio() {
  var audioPlayer = document.getElementById('audio');
  if (currentAudio === 1) {
    audioPlayer.src = 'audio/Aurora - Runaway (lyrics) - Chilled Sad.m4a';
    currentAudio = 2;
  } else if(currentAudio === 2) {
    audioPlayer.src = 'audio/Maha Adhbhutham Full Video Song Oh Baby Songs Samantha , Naga Shaurya Mickey J Meyer - Aditya Music India.m4a';
    currentAudio = 3;
  }
else if(currentAudio === 3) {
    audioPlayer.src = 'audio/Indila - Love Story - Indila.m4a';
    currentAudio = 4;
  }

else if(currentAudio === 4) {
    audioPlayer.src = 'audio/Asha Pasham - Anurag Kulkarni.m4a';
    currentAudio = 5;
  }

else if(currentAudio === 5) {
    audioPlayer.src = 'audio/Suzume (feat Toaka) - RADWIMPS.m4a';
    currentAudio = 6;
  }  else{
      audioPlayer.src = 'audio/song.mp3';
    currentAudio = 1;
  }
  audioPlayer.play();
}



document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('audio');
  const playIcon = document.getElementById('playIcon');
  const volumeSlider = document.getElementById('volumeSlider');
  const forwardIcon = document.getElementById('forwardIcon');
  
  playIcon.addEventListener('click', function() {
    if (audio.paused) {
      value = 0;
      audio.play();
      playIcon.classList.remove('fa-play');
      playIcon.classList.add('fa-stop');
    } else {
      value = 0.8;
      audio.pause();
      playIcon.classList.remove('fa-stop');
      playIcon.classList.add('fa-play');
    }
  });
  let value=0.8;
  function changeValue() {
  if (value === 0.8) {
    value = 0.3;
  } else if (value === 0.3) {
    value = 0;
  } else {
    value = 0.8;
  }
}
  volumeSlider.addEventListener('input', function() {
    audio.volume = this.value;
  });
  
});
