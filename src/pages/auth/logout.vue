<template>
  <main></main>
</template>

<script>
export default {
  layout: 'none',
  async mounted() {
    await this.$auth.logout()
  },
}
</script>
