/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-montserrat)'],
            },
            colors: {
                azul: {
                    dark: '#004A7C',
                    light: '#005691',
                },
                blanco: {
                    dark: '#E8F1F5',
                    light: '#FAFAFA',
                }
            }
        },
    },
    plugins: [],
}
