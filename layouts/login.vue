<template>
  <v-app>
    <div class="login_layout py-4">
      <v-card loader-height="3" max-width="374" class="mx-a my-a">
        <!--! cover section -->
        <v-img
          height="200"
          src="login-vector.svg"
        ></v-img>
        <!--! content section -->
        <v-card-text>
          <nuxt />
        </v-card-text>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'LoginLayout',
  middleware: ['auth'],
}
</script>
