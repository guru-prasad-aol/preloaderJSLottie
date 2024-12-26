// Include the Lottie library by dynamically creating a script element
(function() {
    const lottieScript = document.createElement('script');
    lottieScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.6/lottie.min.js';
    lottieScript.onload = () => {
        // Lottie library is loaded, now we can proceed with the rest of the script
        initializePreloader();
    };
    document.head.appendChild(lottieScript);
})();

function initializePreloader() {
    const overlay = document.createElement('div');
    overlay.id = 'loader';
    overlay.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.7);
        z-index: 999;
    `;

    const lottieContainer = document.createElement('div');
    lottieContainer.id = 'lottieContainer';
    lottieContainer.style.cssText = `
        max-width: 100%;
        max-height: 100%;
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(lottieContainer);

    function hideOverlay() {
        overlay.style.display = 'none';
        lottieContainer.style.display = 'block';
        // Load the Lottie animation
        lottie.loadAnimation({
            container: lottieContainer,
            renderer: 'svg', // or 'canvas' if preferred
            loop: true,
            autoplay: true,
            path: 'https://cdn.jsdelivr.net/gh/guru-prasad-aol/preloaderJSLottie@2343442/JVGIsylS3F-3.json',
        });
    }

    // Use only the load event to hide the overlay and start the animation
    window.addEventListener('load', hideOverlay);
}
