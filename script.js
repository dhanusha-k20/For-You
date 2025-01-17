function revealMessage() {
    // Shrink main content
    const mainContent = document.getElementById('mainContent');
    mainContent.classList.add('shrink');

    // Highlight the secret message
    const secretMessage = document.getElementById('secretMessage');
    secretMessage.classList.add('highlight');

    // Add a "reveal-mode" class to the body to center new content
    document.body.classList.add('reveal-mode');

    // Show the additional content after a delay
    setTimeout(() => {
        document.getElementById('additionalContent').style.display = 'block';
    }, 1000);
}
