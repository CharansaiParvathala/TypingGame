const paragraphs = [
    "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How razorback-jumping frogs can level six piqued gymnasts!",
    "Sphinx of black quartz, judge my vow. The five boxing wizards jump quickly. Jackdaws love my big sphinx of quartz. The jay, pig, fox, zebra, and my wolves quack!",
    "Amazingly few discotheques provide jukeboxes. My girl wove six dozen plaid jackets before she quit. We promptly judged antique ivory buckles for the next prize.",
    "A quick movement of the enemy will jeopardize six gunboats. All questions asked by five watched experts amaze the judge. Jack quietly moved up front and seized the big ball of wax.",
    "A mad boxer shot a quick, gloved jab to the jaw of his dizzy opponent. The hungry purple hippo quickly ate the juicy watermelon. Crazy Frederick bought many very exquisite opal jewels.",
    "Sixty zippers were quickly picked from the woven jute bag. Jinxed wizards pluck ivy from the big quilt. Big July earthquakes confound zany experimental vow.",
    "Few quips galvanized the mock jury box. The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How razorback-jumping frogs can level six piqued gymnasts!",
    "Sphinx of black quartz, judge my vow. The five boxing wizards jump quickly. Jackdaws love my big sphinx of quartz. The jay, pig, fox, zebra, and my wolves quack!",
    "Amazingly few discotheques provide jukeboxes. My girl wove six dozen plaid jackets before she quit. We promptly judged antique ivory buckles for the next prize.",
    "A quick movement of the enemy will jeopardize six gunboats. All questions asked by five watched experts amaze the judge. Jack quietly moved up front and seized the big ball of wax."
];


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
    paragraphs[ranIndex].split("").forEach(char => {
        console.log(char);
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

let value = 0.8;

function changeValue() {
  if (value === 0.8) {
    value = 0.3;
  } else if (value === 0.3) {
    value = 0;
  } else {
    value = 0.8;
  }
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
        // Display result here
        // For example:
        if (timeLeft <= 0) {
            alert("Time's up! Your WPM is: "+ wpmTag.innerText+"\n\nCheckout other information in the page 👇");
        } else {
            alert("You completed the text! Your WPM is : " + wpmTag.innerText+"\n\nCheckout other information in the page 👇");
        }
    }
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

var currentAudio = 1;
function changeAudio() {
  var audioPlayer = document.getElementById('audio');
  if (currentAudio === 1) {
    audioPlayer.src = '';
    currentAudio = 2;
  } else if(currentAudio === 2) {
    audioPlayer.src = '';
    currentAudio = 3;
  }
else if(currentAudio === 3) {
    audioPlayer.src = '';
    currentAudio = 4;
  }

else if(currentAudio === 4) {
    audioPlayer.src = '';
    currentAudio = 5;
  }
 
else if(currentAudio === 5) {
    audioPlayer.src = '';
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
  
  volumeSlider.addEventListener('input', function() {
    audio.volume = this.value;
  });
  
});
