const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    darkMode: "class",

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },

            colors:{
                CustomBlue:{
                    100: '#0077b6',
                    200: '#023e8a',
                },
                CustomOrange:{
                    100: '#f2a154 ',
                    200:'#d98c3b ',
                },
                CustomYellow:{
                    100:'#f2c057 ',
                    200:'#d9a13b ',
                },
      
            }
            height: {
                128: "32rem",
                160: "40rem",
            },

        },
    },

    plugins: [require("@tailwindcss/forms")],
};
