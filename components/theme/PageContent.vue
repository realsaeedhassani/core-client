<template>
  <div>
    <slot name="mobile-toc" />
    <div class="px-4 sm:px-6 mt-4 xl:mt-0">
      <TranslatedContentBanner v-if="translated" :page="page" class="mb-8" />
      <!-- <DocusContent :document="page" class="docus-content" /> -->
      <!-- Code blocks -->
      <div ref="anim" class="mt-40 mb-40 lg:mt-0 lg:mb-0 w-full" :style="{ height: '300px' }">
        <div ref="codeBlock" class="relative">
          <Transition name="fade">
            <ChatBox />
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, useContext, ref, computed, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup(_, context) {
    const {
      app: { i18n }
    } = useContext()

    const translated = computed(() => {
      return i18n.locale !== i18n.defaultLocale
    })

    const activeCodeBlock = ref('')
    let anim = ref(null)
    let codeBlock = ref(null)

    onMounted(() => {
      codeBlock = context.refs.codeBlock
      anim = context.refs.anim
      animationObserver()
    })

    function animationObserver() {
      const callback = entries => {
        entries.forEach(({ _, isIntersecting }) => {
          if (isIntersecting) {
            activeCodeBlock.value = 'fromCLI'
          }
        })
      }

      const observer = new IntersectionObserver(callback, {
        root: anim.value
      })

      observer.observe(codeBlock)
    }

    return {
      translated,
      activeCodeBlock,
      anim,
      animationObserver
    }
  }
})
</script>
