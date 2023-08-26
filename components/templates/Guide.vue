<template>
  <AppPage class="d-container">
    <PageContent :page="page"> </PageContent>
  </AppPage>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>
