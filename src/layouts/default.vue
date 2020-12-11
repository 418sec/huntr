<template>
  <div>
    <header id="navbar" class="sticky top-0 bg-black">
      <nav
        id="nav"
        class="flex flex-wrap items-center justify-between p-4 w-5/6 mx-auto"
      >
        <a id="logo" class="flex flex-shrink-0 mr-6" href="#">
          <img class="block h-10 w-auto mr-1" src="img/sygnet.png" alt="Logo" />
          <span class="text-3xl text-white font-mono">huntr</span>
        </a>
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
          <div class="lg:ml-auto">
            <a
              class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-400 hover:text-white"
              href="#"
              >About</a
            ><a
              class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-400 hover:text-white"
              href="#"
              >Fix</a
            ><a
              class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-400 hover:text-white"
              href="#"
              >Disclose</a
            >
          </div>
          <div>
            <a
              class="inline-block py-3 px-3 mt-4 lg:mt-0 leading-none font-semibold rounded shadow border border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white"
              href="#"
            >
              <git-hub-icon class="inline mr-1 fill-current" />
              Sign in with GitHub
            </a>
          </div>
        </div>
      </nav>
    </header>

    <Nuxt />

    <footer class="bg-black w-4/5 mx-auto">
      <div class="max-w-7xl mx-auto py-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8 xl:col-span-1">
            <p class="text-gray-500 text-base">2020 &copy; 418sec</p>
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
                    <a
                      href="#"
                      class="text-base text-brand-500 hover:text-brand-400"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-brand-500 hover:text-brand-400"
                    >
                      Blog
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-brand-500 hover:text-brand-400"
                    >
                      FAQ
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-brand-500 hover:text-brand-400"
                    >
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
                    <a
                      href="#"
                      class="text-base text-brand-500 hover:text-brand-400"
                    >
                      Company
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-brand-500 hover:text-brand-400"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-brand-500 hover:text-brand-400"
                    >
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
    }
  },
  head() {
    return {
      bodyAttrs: { class: 'bg-black text-white' },
    }
  },
}
</script>
