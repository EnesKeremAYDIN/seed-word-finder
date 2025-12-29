document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const resultsDiv = document.getElementById('results');
    const modes = document.querySelectorAll('input[name="mode"]');
    let allWords = [];

    fetch('bip39.txt')
        .then(r => r.text())
        .then(text => {
            allWords = text.split(/\r?\n/).map(w => w.trim()).filter(w => w.length > 0);
        })
        .catch(() => {
            resultsDiv.innerHTML = '<div class="empty">Failed to load wordlist!</div>';
        });

    function highlightMatch(word, query, mode) {
        if (!query) return word;
        if (mode === 'start') {
            return `<span class="highlight">${word.substring(0, query.length)}</span>${word.substring(query.length)}`;
        } else if (mode === 'end') {
            const idx = word.length - query.length;
            return `${word.substring(0, idx)}<span class="highlight">${word.substring(idx)}</span>`;
        } else {
            return word.replace(new RegExp(query, 'gi'), match => `<span class="highlight">${match}</span>`);
        }
    }

    function search() {
        const query = searchInput.value.toLowerCase().trim();
        if (!query) {
            resultsDiv.innerHTML = '<div class="empty">Results will appear here.</div>';
            return;
        }

        const mode = document.querySelector('input[name="mode"]:checked').value;

        const filtered = allWords.filter(word => {
            if (mode === 'start') return word.startsWith(query);
            if (mode === 'end') return word.endsWith(query);
            if (mode === 'contain') return word.includes(query);
            return false;
        });

        if (filtered.length === 0) {
            resultsDiv.innerHTML = '<div class="empty">No matches found.</div>';
        } else {
            resultsDiv.innerHTML = filtered.map(w => `<div class="chip">${highlightMatch(w, query, mode)}</div>`).join('');
        }
    }

    searchInput.addEventListener('input', search);
    modes.forEach(radio => radio.addEventListener('change', search));
});
