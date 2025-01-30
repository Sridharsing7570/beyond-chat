// chatbot-loader.js
(function () {
    // Create container for React app
    const container = document.createElement("div");
    container.id = "test-chatbot-root";
    document.body.appendChild(container);

    // Load React and ReactDOM
    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    };

    // Load required styles
    const loadStyles = () => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://your-cdn.com/chatbot-styles.css"; // Replace with your actual CSS URL
        document.head.appendChild(link);
    };

    // Initialize chatbot
    const initialize = async () => {
        try {
            await Promise.all([
                loadScript(
                    "https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"
                ),
                loadScript(
                    "https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"
                ),
            ]);

            // Load your bundled chatbot component
            await loadScript("https://your-cdn.com/chatbot-bundle.js"); // Replace with your actual bundle URL
            loadStyles();

            // Initialise the chatbot
            window.TestChatbot.init({
                containerId: "test-chatbot-root",
            });
        } catch (error) {
            console.error("Failed to load chatbot:", error);
        }
    };

    initialize();
})();
