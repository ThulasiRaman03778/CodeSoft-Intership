//Loading Page
window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.style.display = 'none';
    }, 3000);
});

// Automatically set the current year
document.getElementById('year').textContent = new Date().getFullYear();