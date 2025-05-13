const searchInput = document.getElementById('searchInput');
const appCards = document.querySelectorAll('.app-card');
const noResult = document.getElementById('noResult');
const requestForm = document.getElementById('requestForm');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    let found = false;

    appCards.forEach(card => {
        const appName = card.getAttribute('data-name').toLowerCase();
        if (appName.startsWith(query)) {
            card.style.display = 'block';
            found = true;
        } else {
            card.style.display = 'none';
        }
    });

    noResult.style.display = found || query === '' ? 'none' : 'block';
    requestForm.style.display = found || query === '' ? 'none' : 'block';
});

// Optional: close nav menu when a link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});
