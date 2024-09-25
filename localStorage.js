function updateBestScore() {
    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('bestScore', bestScore);
        document.getElementById('best-score-value').innerText = bestScore;
    }
}

function loadBestScore() {
    bestScore = localStorage.getItem('bestScore') || 0;
    document.getElementById('best-score-value').innerText = bestScore;
}

// A játék indításakor hívj meg egy funkciót a legjobb pontszám betöltésére
loadBestScore();
