/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,svelte,ts}"],
};
<button on:click={() => document.documentElement.classList.toggle('dark')}>
  Toggle Theme
</button>