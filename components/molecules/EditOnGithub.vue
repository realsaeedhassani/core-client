<template>
  <div></div>
</template>

<script>
import { computed, defineComponent, useContext, ref, useFetch } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'
import { joinURL } from 'ufo'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const contributors = ref([])
    const { $docus, $config } = useContext()

    const apiURL = $config.apiURL || 'https://api.nuxtjs.org'

    const { value: settings } = computed(() => $docus.settings)

    const repoUrl = computed(() => joinURL(settings.value.github.url, settings.value.github.repo))

    const link = computed(() => {
      if (!settings.value.github) return

      // TODO: Fix source; regression from split
      const key = props.page.key.split(':')
      const dir = key.slice(1, key.length - 1).join('/')
      const source = key[key.length - 1]

      return [
        repoUrl.value,
        'edit',
        settings.value.github.branch,
        settings.value.github.dir || '',
        settings.value.contentDir,
        dir,
        `${source}`.replace(/^\//g, '')
      ]
        .filter(Boolean)
        .join('/')
    })
    const path = [
      settings.value.github.repo,
      settings.value.github.branch,
      settings.value.contentDir,
      props.page.source
    ].join('/')
    useFetch(async () => {
      contributors.value = await $fetch(`${apiURL}/api/github/contributors/${path}`)
    })
    return {
      link,
      contributors
    }
  }
})
</script>
