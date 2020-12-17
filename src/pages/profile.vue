<template>
  <div></div>
</template>

<script>
export default {
  layout: 'none',
  async mounted() {
    if (await this.$auth.loggedIn) {
      this.$router.push(`/users/${this.$auth.user.preferred_username}`)
    } else {
      this.$auth.loginWith('cognito')
    }
  },
}
</script>
