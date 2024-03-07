module.exports = {
  content: ["./index.html", "./src/**/*.css"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },

      fontWeight: {  
        'poppins-light': 300,
        'poppins-medium': 500,
        'poppins-semibold': 600,
        'poppins-bold': 700  
      }
    }
  },
  plugins: [] 
}