<template>
  <div>
    <header id="navbar" class="sticky top-0 bg-black z-40">
      <nav
        id="nav"
        class="flex flex-wrap items-center justify-between p-4 w-5/6 mx-auto"
      >
        <nuxt-link id="logo" to="/" class="flex flex-shrink-0 mr-6">
          <img
            class="block h-10 w-auto mr-1"
            src="/img/sygnet.png"
            alt="Logo"
          />
          <span class="text-3xl text-white font-mono">huntr</span>
        </nuxt-link>
        <div class="block lg:hidden">
          <button
            class="navbar-burger flex items-center py-2 px-3 text-brand-500 rounded border border-brand-500"
            @click="menuVisible = !menuVisible"
          >
            <svg
              class="fill-current h-3 w-3"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div
          :class="{ hidden: !menuVisible }"
          class="navbar-menu lg:flex lg:flex-grow lg:items-center w-full lg:w-auto"
        >
          <div class="lg:mx-auto">
            <div
              v-if="!menuVisible"
              class="block lg:inline-block mt-4 lg:mt-0 mx-5"
              @mouseleave="aboutMenuVisible = false"
            >
              <a
                class="text-gray-400 hover:text-white"
                href="#"
                @click="aboutMenuVisible = true"
                @mouseover="aboutMenuVisible = true"
              >
                About
              </a>
              <div
                :class="aboutMenuClass"
                class="absolute z-10 left-1/2 transform -translate-y-3 pt-3 -translate-x-1/2 ml-8 mt-3 px-2 w-screen max-w-xs sm:px-0"
              >
                <div
                  class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                >
                  <div
                    class="bg-gray-900 relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8"
                  >
                    <nuxt-link
                      to="blog"
                      class="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                    >
                      <p class="font-medium text-brand-500">Blog</p>
                      <p class="mt-1 text-sm text-gray-500">
                        Tips from fellow huntrs, product updates and news in bug
                        hunting.
                      </p>
                    </nuxt-link>

                    <nuxt-link
                      to="faq"
                      class="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                    >
                      <p class="font-medium text-brand-500">FAQ</p>
                      <p class="mt-1 text-sm text-gray-500">
                        All of your questions answered.
                      </p>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <nuxt-link
              v-if="menuVisible"
              class="block lg:inline-block mt-4 lg:mt-0 text-gray-400 hover:text-white"
              to="blog"
            >
              Blog
            </nuxt-link>
            <nuxt-link
              v-if="menuVisible"
              class="block lg:inline-block mt-4 lg:mt-0 text-gray-400 hover:text-white"
              to="faq"
            >
              FAQ
            </nuxt-link>
            <a
              class="block lg:inline-block mt-4 lg:mt-0 lg:mx-5 text-gray-400 hover:text-white"
              href="#"
            >
              Fix
            </a>
            <a
              class="block lg:inline-block mt-4 lg:mt-0 lg:mx-5 text-gray-400 hover:text-white"
              href="#"
            >
              Disclose
            </a>
          </div>
          <div>
            <button
              v-if="!$auth.loggedIn"
              class="inline-block p-3 mt-4 lg:mt-0 leading-none font-semibold rounded shadow border border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white"
              href="#"
              @click="$auth.loginWith('cognito')"
            >
              <git-hub-icon class="inline mr-1 fill-current" />
              Sign in with GitHub
            </button>
            <nuxt-link
              v-if="$auth.loggedIn"
              :to="{
                name: 'users-id',
                params: { id: $auth.user.preferred_username },
              }"
            >
              <img
                class="inline-block mt-4 lg:mt-0 shadow border-2 border-brand-500 w-16 rounded-full"
                :src="$auth.user.picture"
              />
            </nuxt-link>
          </div>
        </div>
      </nav>
    </header>

    <Nuxt />

    <footer class="bg-black w-4/5 mx-auto">
      <div class="max-w-7xl mx-auto py-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8 xl:col-span-1">
            <p class="text-gray-500">2020 &copy; 418sec</p>
            <div class="flex space-x-6">
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <git-hub-icon class="fill-current" />
              </a>

              <a href="#" class="text-gray-400 hover:text-gray-500">
                <twitter-icon class="fill-current" />
              </a>

              <a href="#" class="text-gray-400 hover:text-gray-500">
                <discord-icon class="fill-current" />
              </a>

              <a href="#" class="text-gray-400 hover:text-gray-500">
                <linked-in-icon class="fill-current" />
              </a>

              <a href="#" class="text-gray-400 hover:text-gray-500">
                <instagram-icon class="fill-current" />
              </a>
            </div>
          </div>
          <div class="grid grid-cols-2 col-span-2">
            <div class="grid grid-cols-2 col-span-1 col-start-2">
              <div class="mx-auto">
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider">
                  huntr
                </h3>
                <ul class="mt-4 space-y-4">
                  <li>
                    <a href="#" class="text-brand-500 hover:text-brand-400">
                      Home
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-brand-500 hover:text-brand-400">
                      Blog
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-brand-500 hover:text-brand-400">
                      FAQ
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-brand-500 hover:text-brand-400">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mx-auto">
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider">
                  418sec
                </h3>
                <ul class="mt-4 space-y-4">
                  <li>
                    <a href="#" class="text-brand-500 hover:text-brand-400">
                      Company
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-brand-500 hover:text-brand-400">
                      About
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-brand-500 hover:text-brand-400">
                      Team
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import {
  GitHubIcon,
  TwitterIcon,
  DiscordIcon,
  LinkedInIcon,
  InstagramIcon,
} from 'vue-simple-icons'

export default {
  components: {
    GitHubIcon,
    TwitterIcon,
    DiscordIcon,
    LinkedInIcon,
    InstagramIcon,
  },
  data() {
    return {
      menuVisible: false,
      aboutMenuVisible: false,
    }
  },
  computed: {
    aboutMenuClass() {
      if (this.aboutMenuVisible)
        return [
          'transition',
          'ease-out',
          'duration-200',
          'opacity-100',
          'translate-y-0',
        ]
      else
        return [
          'transition',
          'ease-in',
          'duration-150',
          'opacity-0',
          'translate-y-1',
        ]
    },
  },
  head() {
    return {
      bodyAttrs: { class: 'bg-black text-white' },
    }
  },
}
</script>
