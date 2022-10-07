<template>
  <div>
    <AppAuthLogin />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'login',
  meta: {
    position: 1,
    show: false,
    disabled: true,
    roles: ['all'],
    icon: '/icons/profile.svg',
    title: 'صفحه اصلی',
  },
}
</script>
