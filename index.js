document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = localStorage.getItem('typedText') || "";

    document.getElementById('waterform').addEventListener('submit', function(event) {
        event.preventDefault(); 
        const typedText = document.getElementById('message').value; 
        localStorage.setItem('typedText', typedText); 
        window.location.href = 'https://charansaiparvathala.github.io/TypingGame/TypingGame.html';
    });
});
