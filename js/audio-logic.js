function playSound(soundPath) {
    const button = document.getElementById('play-sound-button');
    const buttonText = document.getElementById('button-text');
    const audio = new Audio(soundPath);

    // 1. Marcar como cargando (feedback inmediato)
    button.classList.add('is-loading');
    buttonText.textContent = 'Loading Sound...';
    
    // 2. Cuando el audio esté listo para empezar a sonar
    audio.addEventListener('canplaythrough', () => {
        // Reproducir el sonido
        audio.play();

        // 3. Marcar como reproduciendo
        button.classList.remove('is-loading');
        button.classList.add('is-playing');
        buttonText.textContent = 'Playing... 🎶';
    }, { once: true }); // Usamos { once: true } para que solo se ejecute la primera vez

    // 4. Cuando el audio termina de sonar
    audio.addEventListener('ended', () => {
        // Regresar al estado original
        button.classList.remove('is-playing');
        buttonText.textContent = 'Listen to the animal sound!';
    });

    // 5. Manejo de errores (si el archivo de sonido no se encuentra)
    audio.addEventListener('error', () => {
        button.classList.remove('is-loading');
        button.classList.remove('is-playing');
        buttonText.textContent = 'Error loading sound 🙁';
        console.error("Error al cargar o reproducir el archivo de audio: " + soundPath);
        // Regresar al estado original después de un breve mensaje de error
        setTimeout(() => {
            buttonText.textContent = 'Listen to the animal sound!';
        }, 3000); 
    });
}