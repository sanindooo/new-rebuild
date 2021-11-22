module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      backgroundImage: {
        'bg-hero': "url('public/img/background-spiral-hero.svg')",
        'bg-head': "url('/img/')",
        'bg-rocket': "url('/img/')",
        'bg-brain': "url('/img/')",
        'bg-icons': "url('/img/')",
        'bg-shape-1': "url('/img/')",
        'bg-shape-2': "url('/img/')",
        'bg-shape-3': "url('/img/')",
        'bg-email-footer': "url('/img/')",
        'bg-footer': "url('/img/')",
       },
      fontFamily: {
        'base-font': ['Poppins', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
