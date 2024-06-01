function updateWatch() {
    const watchElement = document.getElementById('digital-watch');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    watchElement.textContent = `${hours}:${minutes}:${seconds}`;
}


setInterval(updateWatch, 1000);

updateWatch();