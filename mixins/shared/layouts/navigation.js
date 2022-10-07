export default {
  data() {
    return {
      drawer: true,
      routes: [],
    }
  },
  methods: {
    createNavigationDrawer() {
      this.routes = this.$router.options.routes
        .filter((route) => {

          if (route.meta) {
            try {
              if (route.meta.roles.includes('all')) {
                return route.meta
              } else if (route.meta.roles.includes(this.$store.state.auth.role)) {
                return route.meta
              }

            }catch(e) {}
          }
        })
        .sort((a, b) => +a.meta.position - +b.meta.position)
      this.routes.forEach((el) => {
        if (el.children) {
          el.children = el.children.sort(
            (a, b) => +a.meta.position - +b.meta.position
          )
        }
      })
    },
  },
}
