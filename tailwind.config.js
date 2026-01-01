export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#BF953F",
                "primary-hover": "#AA8535",
                "primary-light": "#F3E5AB",
                "background-light": "#050505",
                "background-dark": "#000000",
                "surface-light": "#121212",
                "surface-dark": "#0a0a0a",
                "text-main": "#ffffff",
                "text-secondary": "#9ca3af",
                "border-subtle": "rgba(255, 255, 255, 0.1)",
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
        },
    },
    plugins: [],
}
