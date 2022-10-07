export default ({ store, redirect }) => {
  if (!store.state.auth.token) {
    store.dispatch('auth/logoutConfig').then(() => {})
    redirect('/')
  }
}
