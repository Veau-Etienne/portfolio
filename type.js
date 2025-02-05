document.addEventListener('DOMContentLoaded', () => {
    const texts = [
        { element: document.getElementById('name'), text: 'Etienne Veau' },
        { element: document.getElementById('title'), text: 'Étudiant en B.U.T Informatique' }
    ];

    let currentText = 0;
    let currentChar = 0;
    const speed = 100; // Vitesse de frappe en ms

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
                    setTimeout(typeWriter, speed * 2); // Pause entre les lignes
                } else {
                    // Supprimer les curseurs après l'animation
                    document.querySelectorAll('.typewriter-cursor').forEach(cursor => {
                        cursor.style.display = 'none';
                    });
                }
            }
        }
    }

    // Démarrer l'animation après un court délai
    setTimeout(typeWriter, 500);
});