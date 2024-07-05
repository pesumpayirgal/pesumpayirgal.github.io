function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
            document.getElementById('current-year').innerText = new Date().getFullYear();
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Call the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadFooter);
