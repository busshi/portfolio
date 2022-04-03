module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      keyframes: {
        bounceUp: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-0.5em)" }
        },
        bounceBack: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-.5em)" },
        },
      },
      animation: {
        bounceUp: "bounceUp .2s ease-in-out 1",
        bounceBack: "bounceBack 1s ease-in infinite",
      }
    },
  },
  plugins: [],
}
