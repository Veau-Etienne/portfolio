<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>page contact</title>
    <link rel="stylesheet" href="form.css">
</head>

<body>
    <canvas id="matrix"></canvas>
    <header>
        <nav class="navbar">
            <div class="pres">
                <h1>Veau Etienne</h1>
            </div>
            <div class="liens-nav">
                <a href="mon-portfolio.html">Home</a>
                <a href="Cursus_scolaire.html">Cursus scolaire</a>
                <a href="table.html">Planning</a>
                <div class="survol">
                    <div class="visible">
                        <a href="#">Média</a>
                    </div>
                    <div class="hidden">
                        <a href="page_image.html">Photo</a>
                        <a href="page_vidéo.html">Vidéo</a>
                    </div>
                </div>
                <a href="index.php" class="active">Contact</a>
            </div>
        </nav>
    </header>
    <?php
    $errors = [];
    $formData = [
        'nom' => '',
        'email' => '',
        'téléphone' => '',
        'motif' => '',
        'datetime' => '',
        'première_demande' => '',
        'message' => ''
    ];

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        if (empty($_POST['nom'])) {
            $errors[] = "Le champ nom est requis.";
        } else {
            $formData['nom'] = htmlspecialchars($_POST['nom']);
        }

        if (empty($_POST['email'])) {
            $errors[] = "Le champ email est requis.";
        } elseif (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $errors[] = "L'adresse email est invalide.";
        } else {
            $formData['email'] = htmlspecialchars($_POST['email']);
        }

        $formData['téléphone'] = htmlspecialchars($_POST['téléphone']);
        $formData['motif'] = htmlspecialchars($_POST['motif']);
        $formData['datetime'] = htmlspecialchars($_POST['datetime']);
        $formData['première_demande'] = htmlspecialchars($_POST['première_demande']);
        $formData['message'] = htmlspecialchars($_POST['message']);

        if (empty($_POST['message'])) {
            $errors[] = "Le champ message est requis.";
        }

        if (empty($errors)) {
            echo "<h2>Merci pour votre message !</h2>";
            echo "<p>Voici le récapitulatif de votre demande :</p>";
            echo "<p>Nom : " . $formData['nom'] . "</p>";
            echo "<p>Email : " . $formData['email'] . "</p>";
            echo "<p>Téléphone : " . $formData['téléphone'] . "</p>";
            echo "<p>Motif : " . $formData['motif'] . "</p>";
            echo "<p>Date et heure : " . $formData['datetime'] . "</p>";
            echo "<p>Première demande : " . $formData['première_demande'] . "</p>";
            echo "<p>Message : " . nl2br($formData['message']) . "</p>";
            exit;
        }
    }
    ?>

    <h2>Contactez-moi :</h2>
    <form method="POST" action="contact.php">
        <label for="nom">Nom <span style="color:red">*</span></label>
        <input type="text" name="nom" id="nom" required value="<?= htmlspecialchars($formData['nom']) ?>">

        <label for="email">Adresse email <span style="color:red">*</span></label>
        <input type="email" name="email" id="email" required value="<?= htmlspecialchars($formData['email']) ?>">

        <label for="téléphone">Numéro de téléphone</label>
        <input type="tel" name="téléphone" id="téléphone" value="<?= htmlspecialchars($formData['téléphone']) ?>">

        <label for="motif">Motif de contact</label>
        <select name="motif" id="motif">
            <option value="">Choisir un motif</option>
            <option value="question" <?= $formData['motif'] == 'question' ? 'selected' : '' ?>>Une question ?</option>
            <option value="suggestion" <?= $formData['motif'] == 'suggestion' ? 'selected' : '' ?>>Proposition de collaboration</option>
            <option value="autre" <?= $formData['motif'] == 'autre' ? 'selected' : '' ?>>Autre</option>
        </select>

        <label for="datetime">Créneau horaire</label>
        <input type="datetime-local" name="datetime" id="datetime" value="<?= htmlspecialchars($formData['datetime']) ?>">

        <label>Première demande ?</label>
        <input type="radio" name="première_demande" value="oui" <?= $formData['première_demande'] == 'oui' ? 'checked' : '' ?>> Oui
        <input type="radio" name="première_demande" value="non" <?= $formData['première_demande'] == 'non' ? 'checked' : '' ?>> Non

        <label for="message">Message <span style="color:red">*</span></label>
        <textarea name="message" id="message" required><?= htmlspecialchars($formData['message']) ?></textarea>

        <button type="submit">Envoyer</button>
        <button type="reset">Réinitialiser</button>
    </form>

    <?php
    if (!empty($errors)) {
        echo "<ul style='color:red;'>";
        foreach ($errors as $error) {
            echo "<li>$error</li>";
        }
        echo "</ul>";
    }
    ?>


    <footer>
        <p>&copy; 2024 Mon portfolio. IUT Informatique 1 A. Groupe 4.</p>
    </footer>
    <script>
        const canvas = document.getElementById('matrix');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}';
        const fontSize = 16;
        const columns = canvas.width / fontSize;

        const drops = Array(Math.floor(columns)).fill(1);

        function drawMatrix() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00ff00';
            ctx.font = `${fontSize}px monospace`;

            drops.forEach((y, i) => {
                const text = matrix[Math.floor(Math.random() * matrix.length)];
                ctx.fillText(text, i * fontSize, y * fontSize);

                if (y * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            });
        }

        setInterval(drawMatrix, 50);


        window.onresize = function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drops.length = Math.floor(canvas.width / fontSize);
            drops.fill(1);
        };
    </script>
</body>

</html>