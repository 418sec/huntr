<template>
  <main class="container mx-auto w-4/5">
    <section class="py-8 px-4">
      <div class="max-w-3xl mx-auto">
        <h2
          class="text-4xl text-center text-brand-500 mb-6 font-semibold font-heading"
        >
          Questions with answers that != 42
        </h2>
        <article v-for="faq in faqs" :key="faq.slug" class="p-1 mb-2 border-b">
          <button
            class="flex items-center w-full text-left"
            @click="$set(faq, 'visible', !faq.visible)"
          >
            <span class="text-2xl text-brand-500 mr-4">
              {{ faq.visible ? '-' : '+' }}
            </span>
            <span class="flex-grow font-semibold text-brand-500">
              {{ faq.title }}
            </span>
          </button>
          <p class="my-2">
            <nuxt-content v-if="faq.visible" :document="faq" />
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
article >>> a {
  @apply text-brand-500;
}
article >>> a:hover {
  @apply text-red-500;
  @apply underline;
}
</style>

<script>
export default {
  async asyncData({ $content }) {
    // Get's all the FAQs from the content folder and appends a `visible` flag
    const faqs = (await $content('faq').fetch()).map((obj) => ({
      ...obj,
      visible: false,
    }))

    return {
      faqs,
    }
  },
}
</script>
