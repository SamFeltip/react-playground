/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./src/Desktop.js"

  ],
  theme: {
    extend: {
        fontFamily: {
            'inter': ['Inter', 'sans-serif']
        },
        keyframes: {
            slideUp: {
                from: {
                    transform: 'translateY(0px)',
                    opacity: '1'
                },
                to: {
                    transform: 'translateY(-50px)',
                    opacity: '0'
                }

            }
        },
        animation: {
            slideUp: '0.8s ease-in 0s 1 slideUp'
        }
    },
  },
  plugins: [],
}

