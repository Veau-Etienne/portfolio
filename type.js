document.addEventListener('DOMContentLoaded', () => {
    const texts = [
        { element: document.getElementById('presentation'), text: 'Etienne Veau -- Étudiant en B.U.T Informatique' },
    ];

    let currentText = 0;
    let currentChar = 0;
    const speed = 100;

    function typeWriter() {
        if (currentText < texts.length) {
            if (currentChar < texts[currentText].text.length) {
                texts[currentText].element.textContent += texts[currentText].text.charAt(currentChar);
                currentChar++;
                setTimeout(typeWriter, speed);
            } else {
                currentText++;
                currentChar = 0;
                if (currentText < texts.length) {
                    setTimeout(typeWriter, speed * 2);
                }
            }
        }
    }

    setTimeout(typeWriter, 500);
});