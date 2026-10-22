/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F3',
          100: '#F6F1E7',
          200: '#EEE7D8',
          300: '#E4DAC6',
        },
        parchment: {
          light: '#FBF7EE',
          DEFAULT: '#F3ECE0',
          dark: '#E5DAC6',
        },
        celestial: {
          night: '#13111C',
          deep: '#1C1829',
          twilight: '#2A233C',
          dust: '#44385E',
        },
        stardust: {
          light: '#FFF9EB',
          DEFAULT: '#E8D7B0',
          gold: '#C9A96E',
          burnished: '#967843',
        },
        blush: {
          light: '#F8EAEE',
          DEFAULT: '#E5BAC4',
          dark: '#D49AA8',
        },
        rosewood: {
          light: '#C47A8E',
          DEFAULT: '#9E4760',
          dark: '#682436',
        },
        burgundy: {
          DEFAULT: '#4E1422',
          deep: '#350C16',
        },
        chocolate: {
          DEFAULT: '#332018',
          dark: '#22140F',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Dancing Script"', 'cursive'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],
      },
      boxShadow: {
        'scrapbook': '0 10px 35px rgba(35, 20, 25, 0.12), 0 2px 10px rgba(35, 20, 25, 0.06)',
        'polaroid': '0 14px 40px rgba(30, 20, 25, 0.16), 0 4px 12px rgba(0, 0, 0, 0.08)',
        'envelope': '0 22px 50px rgba(40, 15, 25, 0.2), 0 4px 15px rgba(0, 0, 0, 0.08)',
        'glow-gold': '0 0 25px rgba(201, 169, 110, 0.35)',
      }
    },
  },
  plugins: [],
}