document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = localStorage.getItem('typedText') || "";

    document.getElementById('waterform').addEventListener('submit', function(event) {
        event.preventDefault(); 
        const typedText = document.getElementById('message').value; 
        localStorage.setItem('typedText', typedText); 
        window.location.href = 'file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/TypingGame.html';
    });
});
