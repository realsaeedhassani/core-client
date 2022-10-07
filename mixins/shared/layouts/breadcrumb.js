export default {
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'رایکا',
          disabled: true,
          exact: true,
          to: '',
        },
      ],
    }
  },
  watch: {
    '$route.fullPath': {
      handler() {
        this.createBreadcrumb()
      },
    },
  },
  methods: {
    createBreadcrumb() {
      this.fillBreadcrumbItems(this.$router.history.current.matched)
    },
    fillBreadcrumbItems(items) {
      this.breadcrumbItems.splice(1, this.breadcrumbItems.length)
      for (const breadcrumbItemsKey of items) {
        this.breadcrumbItems.push({
          text: breadcrumbItemsKey.meta.title,
          exact: true,
          to: breadcrumbItemsKey.path.includes(':')
            ? ''
            : breadcrumbItemsKey.path,
        })
      }
    },
  },
}
