document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = localStorage.getItem('typedText') || "";

    document.getElementById('submitBtn').addEventListener('click', function(event) {
        event.preventDefault(); 


        const typedText = document.getElementById('message').value.trim();
        if (typedText === "") {

            alert("Please enter some text before proceeding.");
            return; 
        }


        document.getElementById('message').setAttribute('required', '');
        audio.src = "https://res.cloudinary.com/dkh9qnxkd/video/upload/v1708856768/mouse-click-153941_dlwpdq.mp3";
audio.play();
        localStorage.setItem('typedText', typedText); 
        window.location.href = 'https://charansaiparvathala.github.io/TypingGame/TypingGame.html';
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = localStorage.getItem('typedText') || "";

    document.getElementById('Btn2').addEventListener('click', function(event) {
        event.preventDefault(); 


        const typedText = document.getElementById('message').value.trim();
        if (typedText === "") {

            alert("Please enter some text before proceeding.");
            return; 
        }


        document.getElementById('message').setAttribute('required', '');
        audio.src = "https://res.cloudinary.com/dkh9qnxkd/video/upload/v1708856768/mouse-click-153941_dlwpdq.mp3";
audio.play();

        localStorage.setItem('typedText', typedText); 
        window.location.href = 'https://charansaiparvathala.github.io/TypingGame/Invisible.html';
    });
});