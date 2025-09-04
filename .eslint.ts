module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:tailwindcss/recommended',
    // optionally add: 'next/core-web-vitals' or other framework-specific configs
  ],
  plugins: ['tailwindcss'],
  rules: {
    // optional tweaks
    'tailwindcss/no-custom-classname': 'off', // turn off if you use custom class names
  },
}
