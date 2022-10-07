<template>
    <div
    class="col-11 pa-0"
    style="position: absolute; z-index: 2"
  >
    <div class="row ma-0">
      <v-spacer />
      <div class="col-auto text-center">
        <v-progress-circular
          color="mainColor"
          size="50"
          width="7"
          indeterminate
        />
      </div>
      <v-spacer />
    </div>
  </div>
<!--  <v-overlay absolute>
    <v-progress-circular
      indeterminate
      color="mainColor"
      size="50"
      width="7"
    ></v-progress-circular>
  </v-overlay>-->
</template>

<script>
export default {
  name: 'AppLoading',
}
</script>

<style scoped></style>
