<template>
  <div class="login-component">
    <!--! username section -->
    <div class="col-12 px-0">
      <v-text-field
        v-model="loginData.username"
        dense
        outlined
        hide-details
        color="mainColor"
        label="نام کاربری"
      />
    </div>
    <!--! password section -->
    <div class="col-12 px-0">
      <v-text-field
        v-model="loginData.password"
        :type="passShow ? 'text' : 'password'"
        :append-icon="passShow ? 'mdi-eye' : 'mdi-eye-off'"
        dense
        outlined
        hide-details
        color="mainColor"
        label="کلمه عبور"
        @click:append="passShow = !passShow"
        @keypress.enter="login"
      />
    </div>
    <!--! button section -->
    <div class="col-12 px-0">
      <v-btn block :loading="loginLoading" color="success" @click="login">
        ورود
      </v-btn>
    </div>
  </div>
</template>

<script>
import { _login } from '../../../api/auth/login'
export default {
  name: 'LoginComponent',
  data() {
    return {
      passShow: false,
      //! login action
      loginLoading: false,
      loginData: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      if (this.loginLoading) return

      this.loginLoading = true
      _login({
        username: this.loginData.username,
        password: this.loginData.password,
      })
        .then((res) => {
          if (res) {
            this.$store.dispatch('auth/loginConfig', res.data)
            this.$router.replace({ path: '/dashboard' })
            
            console.log('خوش آمدید');
            
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loginLoading = false
        })
    },
  },
}
</script>
