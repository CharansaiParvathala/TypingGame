
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
        
        localStorage.setItem('typedText', typedText); 
        window.location.href = 'file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/TypingGame.html';
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
        
        localStorage.setItem('typedText', typedText); 
        window.location.href = 'file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/Entry.html';
    });
});
