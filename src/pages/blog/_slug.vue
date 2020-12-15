<template>
  <main class="py-8 px-4 sm:px-6 lg:px-8">
    <div class="text-lg max-w-prose mx-auto">
      <h1>
        <span
          class="block text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl"
          >{{ blog.title }}</span
        >
        <span
          class="mt-2 block text-base text-center text-brand-500 font-semibold tracking-wide uppercase"
        >
          Published by {{ blog.author }}
        </span>
      </h1>
      <figure v-if="blog.image">
        <img class="mx-auto w-full max-w-3xl rounded-lg" :src="blog.image" />
      </figure>
    </div>
    <article class="mt-6 prose prose-dark prose-lg text-gray-500 mx-auto">
      <nuxt-content :document="blog" />
    </article>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content('blog', params.slug).fetch()

    return {
      blog,
    }
  },
  head() {
    return {
      title: this.blog.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blog.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.blog.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.blog.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.blog.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.blog.description,
        },
      ],
    }
  },
}
</script>
