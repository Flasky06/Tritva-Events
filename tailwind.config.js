import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans], // Adding Figtree to the default sans font family
                poppins: ["var(--font-poppins)"], // Custom Poppins font
            },
            backgroundImage: {
                'dotted-pattern': "url('/images/dotted-pattern.png')", // Ensure this path is correct
                "hero-img": "url('/assets/images/hero.png')", // Hero image background
            },
            colors: {
                primary: {
                    500: "#624CF5", // Primary color
                    50: "#F6F8FD",  // Light variant
                    DEFAULT: "#624CF5", // Default variant
                    foreground: "hsl(var(--primary-foreground))", // Foreground color
                },
                secondary: {
                    DEFAULT: "#1E3A8A", // Suggested secondary color (blue-600)
                    dark: "#1E40AF", // Darker blue (slate-950)
                },
                success: {
                    DEFAULT: "#22C55E", // Success color (green-500)
                    dark: "#16A34A", // Darker green (green-600)
                },
                danger: {
                    DEFAULT: "#EF4444", // Danger color (red-500)
                    dark: "#B91C1C", // Darker red (red-600)
                },
            },
        },
    },

    plugins: [forms],
};
