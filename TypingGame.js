document.addEventListener('DOMContentLoaded', function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const show = urlParams.get('show');
    const extra = urlParams.get('extra');

    const inputField = document.querySelector('.input-field');

    if (show === 'true') {
        if (extra === 'true') {
            inputField.style.background = 'black';
        } else {
            inputField.style.background = 'white';
        }
    }

    const waterForm = document.getElementById('waterform'); 

    const paragraphs = localStorage.getItem('typedText') || "";

    const typingText = document.querySelector(".typing-text p");
    const inpField = document.querySelector(".wrapper .input-field");
    const tryAgainBtn = document.querySelector(".content button");
    const extraBtn = document.getElementById("extraBtn"); // Select the extra button
    const timeTag = document.querySelector(".time span b");
    const mistakeTag = document.querySelector(".mistake span");
    const wpmTag = document.querySelector(".wpm span");
    const cpmTag = document.querySelector(".cpm span");

    let timer;
    let maxTime = 60;
    let timeLeft = maxTime;
    let charIndex = mistakes = isTyping = 0;

    function loadParagraph() {
        const characters = paragraphs.split("");
        typingText.innerHTML = "";
        characters.forEach(char => {
            if (char === '\n') {
                typingText.innerHTML += '<br>';
            } else {
                let span = `<span>${char}</span>`;
                typingText.innerHTML += span;
            }
        });
        typingText.querySelectorAll("span")[0].classList.add("active");
        document.addEventListener("keydown", () => inpField.focus());
        typingText.addEventListener("click", () => inpField.focus());
    }

    function initTyping() {
        let characters = typingText.querySelectorAll("span");
        let inputValue = inpField.value.trim();
        let typedChar = inputValue !== "" ? inputValue.split("")[charIndex] : null;
        if (charIndex < characters.length && timeLeft > 0) {
            if (!isTyping) {
                timer = setInterval(initTimer, 1000);
                isTyping = true;
            }
            if (typedChar == null) {
                if (charIndex > 0) {
                    charIndex--;
                    if (characters[charIndex] && characters[charIndex].classList.contains("incorrect")) {
                        mistakes--;
                    }
                    if (characters[charIndex]) {
                        characters[charIndex].classList.remove("correct", "incorrect");
                    }
                }
            } else {
                if (characters[charIndex] && characters[charIndex].innerText == typedChar) {
                    characters[charIndex].classList.add("correct");
                } else {
                    mistakes++;
                    if (characters[charIndex]) {
                        characters[charIndex].classList.add("incorrect");
                    }
                }
                charIndex++;
            }
            characters.forEach(span => span.classList.remove("active"));
            if (characters[charIndex]) {
                characters[charIndex].classList.add("active");
            }

            let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
            wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

            wpmTag.innerText = wpm;
            mistakeTag.innerText = mistakes;
            cpmTag.innerText = charIndex - mistakes;
        } else {
            clearInterval(timer);
            inpField.value = "";
        }
    }

    function initTimer() {
        if (timeLeft > 0) {
            timeLeft--;
            timeTag.innerText = timeLeft;
            let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
            wpmTag.innerText = wpm;
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
        window.location.href = 'https://typogame.netlify.app/';
    }

    loadParagraph();
    inpField.addEventListener("input", initTyping);
    tryAgainBtn.addEventListener("click", resetGame);
});
