const paragraphs = [
    "The_quick_brown_fox_jumps_over_the_lazy_dog.Pack_my_box_with_five_dozen_liquor_jugs.How_razorback-jumping_frogs_can_level_six_piqued_gymnasts!",
    "Sphinx_of_black_quartz,_judge_my_vow.The_five_boxing_wizards_jump_quickly.Jackdaws_love_my_big_sphinx_of_quartz.The_jay,_pig,_fox,_zebra,_and_my_wolves_quack!",
    "Amazingly_few_discotheques_provide_jukeboxes.My_girl_wove_six_dozen_plaid_jackets_before_she_quit.We_promptly_judged_antique_ivory_buckles_for_the_next_prize.",
    "A_quick_movement_of_the_enemy_will_jeopardize_six_gunboats.All_questions_asked_by_five_watched_experts_amaze_the_judge.Jack_quietly_moved_up_front_and_seized_the_big_ball_of_wax.",
    "A_mad_boxer_shot_a_quick,_gloved_jab_to_the_jaw_of_his_dizzy_opponent.The_hungry_purple_hippo_quickly_ate_the_juicy_watermelon.Crazy_Frederick_bought_many_very_exquisite_opal_jewels.",
    "Sixty_zippers_were_quickly_picked_from_the_woven_jute_bag.Jinxed_wizards_pluck_ivy_from_the_big_quilt.Big_July_earthquakes_confound_zany_experimental_vow.",
    "Few_quips_galvanized_the_mock_jury_box.The_quick_brown_fox_jumps_over_the_lazy_dog.Pack_my_box_with_five_dozen_liquor_jugs.How_razorback-jumping_frogs_can_level_six_piqued_gymnasts!",
    "Sphinx_of_black_quartz,_judge_my_vow.The_five_boxing_wizards_jump_quickly.Jackdaws_love_my_big_sphinx_of_quartz.The_jay,_pig,_fox,_zebra,_and_my_wolves_quack!",
    "Amazingly_few_discotheques_provide_jukeboxes.My_girl_wove_six_dozen_plaid_jackets_before_she_quit.We_promptly_judged_antique_ivory_buckles_for_the_next_prize.",
    "A_quick_movement_of_the_enemy_will_jeopardize_six_gunboats.All_questions_asked_by_five_watched_experts_amaze_the_judge.Jack_quietly_moved_up_front_and_seized_the_big_ball_of_wax."
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

function initTyping() {
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
