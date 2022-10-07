<template>
  <div class="col-12 px-4 py-2 rounded" :style="{ backgroundColor: bgColor }">
    <div class="row ma-0">
      <!--! icon section -->
      <div v-if="!!iconUrl" class="col-auto px-0">
        <v-avatar :size="iconSize" rounded>
          <img :src="iconUrl" />
        </v-avatar>
      </div>
      <div class="col">
        <!--! title section -->
        <div v-if="!!title" class="col-12 pa-0">
          <span class="font-12 ir-med grey--text text--darken-3">{{
            title
          }}</span>
        </div>
        <!--! description section -->
        <div v-if="!!description" class="col-12 pa-0">
          <span class="font-9 text--text">{{ description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionHeaderBanner',
  props: {
    iconUrl: {
      type: String,
      default: '',
    },
    iconSize: {
      type: String,
      default: '',
    },
    bgColor: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>
