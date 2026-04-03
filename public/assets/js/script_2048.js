class Game2048 {
    constructor() {
        this.grid = Array(4).fill().map(() => Array(4).fill(0));
        this.score = 0;
        this.gridElement = document.querySelector('.grid');
        this.scoreElement = document.getElementById('score');
        this.setupGrid();
        this.addNumber();
        this.addNumber();
        this.setupEventListeners();
        this.showInstructions();  // Ajout de l'appel à la nouvelle méthode
    }

    setupGrid() {
        for (let i = 0; i < 16; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            this.gridElement.appendChild(cell);
        }
        this.updateGrid();
    }

    updateGrid() {
        const cells = this.gridElement.getElementsByClassName('cell');
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                const value = this.grid[i][j];
                const cell = cells[i * 4 + j];
                const previousValue = parseInt(cell.getAttribute('data-value')) || 0;

                cell.textContent = value || '';
                cell.setAttribute('data-value', value);

                // Ajouter les animations
                if (value && value !== previousValue) {
                    // Animation de fusion si la valeur a doublé
                    if (previousValue && value === previousValue * 2) {
                        cell.classList.add('merge');
                    }
                    // Animation de glissement selon la direction
                    else if (value) {
                        const lastMove = this.lastMoveDirection;
                        if (lastMove) {
                            cell.classList.add(`slide-${lastMove}`);
                        }
                    }
                }

                // Retirer les classes d'animation après leur exécution
                cell.addEventListener('animationend', () => {
                    cell.classList.remove('merge', 'slide-left', 'slide-right', 'slide-up', 'slide-down');
                });
            }
        }
        this.scoreElement.textContent = this.score;
    }

    addNumber() {
        const emptyCells = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.grid[i][j] === 0) {
                    emptyCells.push({ x: i, y: j });
                }
            }
        }
        if (emptyCells.length) {
            const { x, y } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            this.grid[x][y] = Math.random() < 0.9 ? 2 : 4;
        }
    }

    move(direction) {
        let moved = false;

        // Convertir la direction en format plus simple
        this.lastMoveDirection = direction.toLowerCase().replace('arrow', '');

        switch (direction) {
            case 'ArrowLeft':
                moved = this.moveLeft();
                break;
            case 'ArrowRight':
                moved = this.moveRight();
                break;
            case 'ArrowUp':
                moved = this.moveUp();
                break;
            case 'ArrowDown':
                moved = this.moveDown();
                break;
        }

        if (moved) {
            this.addNumber();
            this.updateGrid();
            if (this.isGameOver()) {
                alert('Game Over! Score: ' + this.score);
            }
        }
    }

    moveRow(row) {
        let arr = row.filter(x => x !== 0);
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === arr[i + 1]) {
                arr[i] *= 2;
                this.score += arr[i];
                arr.splice(i + 1, 1);
            }
        }
        while (arr.length < 4) arr.push(0);
        return arr;
    }

    moveLeft() {
        let moved = false;
        for (let i = 0; i < 4; i++) {
            const oldRow = [...this.grid[i]];
            const newRow = this.moveRow([...oldRow]);
            this.grid[i] = newRow;
            if (JSON.stringify(oldRow) !== JSON.stringify(newRow)) moved = true;
        }
        return moved;
    }

    moveRight() {
        let moved = false;
        for (let i = 0; i < 4; i++) {
            const oldRow = [...this.grid[i]];
            const newRow = this.moveRow([...oldRow].reverse()).reverse();
            this.grid[i] = newRow;
            if (JSON.stringify(oldRow) !== JSON.stringify(newRow)) moved = true;
        }
        return moved;
    }

    moveUp() {
        let moved = false;
        for (let j = 0; j < 4; j++) {
            const oldColumn = this.grid.map(row => row[j]);
            const newColumn = this.moveRow([...oldColumn]);
            for (let i = 0; i < 4; i++) {
                if (this.grid[i][j] !== newColumn[i]) {
                    moved = true;
                    this.grid[i][j] = newColumn[i];
                }
            }
        }
        return moved;
    }

    moveDown() {
        let moved = false;
        for (let j = 0; j < 4; j++) {
            const oldColumn = this.grid.map(row => row[j]);
            const newColumn = this.moveRow([...oldColumn].reverse()).reverse();
            for (let i = 0; i < 4; i++) {
                if (this.grid[i][j] !== newColumn[i]) {
                    moved = true;
                    this.grid[i][j] = newColumn[i];
                }
            }
        }
        return moved;
    }

    isGameOver() {
        // Check for empty cells
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.grid[i][j] === 0) return false;
            }
        }

        // Check for possible merges
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                const current = this.grid[i][j];
                if ((j < 3 && current === this.grid[i][j + 1]) ||
                    (i < 3 && current === this.grid[i + 1][j])) {
                    return false;
                }
            }
        }
        return true;
    }

    setupEventListeners() {
        document.addEventListener('keydown', (e) => {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
                this.move(e.key);
            }
        });

        document.getElementById('new-game').addEventListener('click', () => {
            this.grid = Array(4).fill().map(() => Array(4).fill(0));
            this.score = 0;
            this.addNumber();
            this.addNumber();
            this.updateGrid();
        });
    }

    showInstructions() {
        const message = document.createElement('div');
        message.className = 'instruction-message';
        message.textContent = '↑ ↓ ← → Utilisez les flèches du clavier pour jouer';
        document.body.appendChild(message);

        // Supprime le message après 60 secondes
        setTimeout(() => {
            message.remove();
        }, 60000);
    }
}

// Start the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new Game2048();
});
