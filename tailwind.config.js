module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'ifps-yellow': '#FDB913',
        'ifps-blue': '#00A8E1',
        'ifps-red': '#B83A3A',
        'text-primary': '#2D2D2D',
        'text-secondary': '#6B7280',
        'bg-light': '#F5F5F5',
      },
      fontFamily: {
        title: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
    screens: {
      'mobile': '0px',
      'tablet': '640px',
      'desktop': '1024px',
    },
  },
  plugins: [],
};