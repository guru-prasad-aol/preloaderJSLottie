// Preloader.js: A script to play a Lottie animation from a remote URL with optimized loading.

// Create and append a container for the Lottie animation
const createPreloaderContainer = () => {
    const container = document.createElement('div');
    container.id = 'preloader-container';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.backgroundColor = 'white'; // Set background color to white
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.zIndex = '9999';
    document.body.appendChild(container);
    return container;
};

// Load the Lottie animation
const loadLottieAnimation = async (container) => {
    try {
        // Dynamically load the Lottie library if not already loaded
        if (!window.lottie) {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';
            script.async = true;
            document.head.appendChild(script);
            await new Promise((resolve) => {
                script.onload = resolve;
            });
        }

        // Play the animation
        window.lottie.loadAnimation({
            container: container,
            renderer: 'svg', // SVG renderer for best quality and performance
            loop: true,
            autoplay: true,
            path: 'https://guru-prasad-aol.github.io/preloaderJSLottie/JoynIncreasesWhenSharedAnimation.lottie',
        });
    } catch (error) {
        console.error('Error loading Lottie animation:', error);
    }
};

// Remove the preloader after the main content has loaded
const removePreloader = (container) => {
    window.addEventListener('load', () => {
        setTimeout(() => {
            container.style.opacity = '0'; // Smooth fade-out
            setTimeout(() => {
                container.remove();
            }, 500); // Allow time for fade-out animation
        }, 1000); // Keep preloader visible for at least 1 second
    });
};

// Initialize the preloader
const initPreloader = () => {
    const container = createPreloaderContainer();
    loadLottieAnimation(container);
    removePreloader(container);
};

// Run the preloader script
initPreloader();
