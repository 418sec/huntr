<template>
  <main class="container mx-auto w-4/5">
    <section class="py-8 px-4 grid gap-8">
      <header class="mx-auto md:w-2/3 border-b-4 pb-8 text-center">
        <h2 class="text-3xl tracking-tight font-extrabold">
          Welcome to the huntr blog!
        </h2>
      </header>

      <article
        v-for="blog in blogs"
        :key="blog.slug"
        class="mx-auto md:w-3/4 border-b pb-8"
      >
        <div class="text-xs leading-5 text-gray-500 max-w-prose">
          <span class="">
            Published
            <time :datetime="blog.publishedAtDate">
              {{ blog.publishedAtFormatted }}
            </time>
            by {{ blog.author }}
          </span>
          <span class="float-right">{{ blog.readingTimeText }}</span>
        </div>

        <nuxt-link
          :to="{ name: 'blog-slug', params: { slug: blog.slug } }"
          class="mt-2 block"
        >
          <p class="text-xl font-semibold text-brand-500">
            {{ blog.title }}
          </p>
          <figure v-if="blog.image">
            <img class="w-full rounded-lg" :src="blog.image" />
          </figure>
          <p class="mt-3 text-gray-500">
            {{ blog.description }}
          </p>
        </nuxt-link>
        <div class="mt-3">
          <nuxt-link
            :to="{ name: 'blog-slug', params: { slug: blog.slug } }"
            class="font-semibold text-brand-500 hover:text-red-500"
          >
            Read full story
            <svg
              class="inline w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </nuxt-link>
        </div>
      </article>
      <footer class="mx-auto w-full md:w-3/4">
        <nuxt-link
          v-if="prevPage"
          :to="{ name: 'blog', query: { page: prevPage } }"
          class="float-left text-brand-500 hover:text-red-500"
        >
          <svg
            class="inline w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Newer posts
        </nuxt-link>

        <nuxt-link
          v-if="nextPage"
          :to="{ name: 'blog', query: { page: nextPage } }"
          class="float-right text-brand-500 hover:text-red-500"
        >
          Older posts
          <svg
            class="inline w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </nuxt-link>
      </footer>
    </section>
  </main>
</template>

<script>
const { DateTime } = require('luxon')
const readingTime = require('reading-time')
const truncate = require('truncate')

export default {
  watchQuery: ['page'], // Watches the querystring page parameter for updates
  scrollToTop: true,
  async asyncData({ $content, query }) {
    const perPage = 5

    // If no page parameter provided, default to the first page
    const currentPage =
      typeof query.page !== 'undefined' ? parseInt(query.page) : 1
    const totalPages = Math.ceil(
      (await $content('blog').only([]).fetch()).length / perPage
    )

    const prevPage = currentPage > 1 ? currentPage - 1 : null
    const nextPage = currentPage + 1 <= totalPages ? currentPage + 1 : null
    const skipNumber = (currentPage - 1) * perPage

    // Get this pages' blogs from the content folder
    const blogs = (
      await $content('blog', { text: true })
        .sortBy('publishedAt')
        .limit(perPage)
        .skip(skipNumber)
        .fetch()
    ).map((obj) => ({
      ...obj,
      publishedAtDate: obj.publishedAt
        ? DateTime.fromISO(obj.publishedAt).toISODate()
        : DateTime.fromISO(obj.createdAt).toISODate(),
      publishedAtFormatted: obj.publishedAt
        ? DateTime.fromISO(obj.publishedAt).toLocaleString(DateTime.DATE_FULL)
        : DateTime.fromISO(obj.createdAt).toLocaleString(DateTime.DATE_FULL),
      readingTimeText: readingTime(obj.text).text, // Reading time text
      author: obj.author ? obj.author : 'the huntr team', // Provides a default author
      description: obj.description // If no description provided, display the truncated body
        ? obj.description
        : truncate(obj.text, 300),
    }))

    return {
      blogs,
      prevPage,
      nextPage,
    }
  },
}
</script>
