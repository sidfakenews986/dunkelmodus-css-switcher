document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('mode-toggle');
    const currentMode = localStorage.getItem('mode') || 'light';
    document.body.classList.add(currentMode + '-mode');

    toggleButton.addEventListener('click', function() {
        let newMode = document.body.classList.contains('light-mode') ? 'dark' : 'light';
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        localStorage.setItem('mode', newMode + '-mode');
        // Update currentMode to reflect the new mode
        currentMode = newMode;
    });
});