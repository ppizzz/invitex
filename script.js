const button = document.getElementById('moveButton');

button.addEventListener('mouseenter', () => {
    const randomX = Math.random() * (window.innerWidth - button.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});
