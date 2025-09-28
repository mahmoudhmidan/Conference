import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
        './resources/js/**/*.jsx',
    ],
     safelist: [
    'lang-ar:text-xl',
    'lang-en:text-base'
  ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                etab: ['etab', ...defaultTheme.fontFamily.sans],
                kufi: ['Droid-Arabic-Kufi', ...defaultTheme.fontFamily.sans],
                english: ['Roboto', 'sans-serif'],
                fontSize: ['lang-ar', 'lang-en'],
            },
        },
    },
    plugins: [forms, typography],
};
