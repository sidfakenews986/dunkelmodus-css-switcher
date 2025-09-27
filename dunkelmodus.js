document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('mode-toggle');
    let currentMode = localStorage.getItem('mode') || 'light';
    document.body.classList.add(currentMode + '-mode');

    toggleButton.addEventListener('click', function() {
        let newMode = document.body.classList.contains('light-mode') ? 'dark' : 'light';
        document.body.classList.toggle('dark-mode', newMode === 'dark');
        document.body.classList.toggle('light-mode', newMode === 'light');
        localStorage.setItem('mode', newMode);
        // Update currentMode to reflect the new mode
        currentMode = newMode;
        // Also update the button text to reflect current mode
        toggleButton.textContent = newMode.charAt(0).toUpperCase() + newMode.slice(1) + ' Mode';
    });
});