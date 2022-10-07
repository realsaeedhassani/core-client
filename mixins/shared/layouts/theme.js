export default {
  data() {
    return {
      darkTheme: false,
    }
  },
  methods: {
    setThemeStatus(value) {
      // ? @TS =(means)= Theme Status
      this.$vuetify.theme.dark = value
      this.darkTheme = value
      localStorage.setItem('@TS', value)
    },
    getThemeStatus() {
      if (localStorage.getItem('@TS')) {
        this.$vuetify.theme.dark = localStorage.getItem('@TS') === 'true'
        return localStorage.getItem('@TS') === 'true'
      } else {
        this.setThemeStatus(false)
        return false
      }
    },
  },
}
