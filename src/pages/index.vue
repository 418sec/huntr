<template>
  <main class="container mx-auto max-w-full">
    <section id="banner" class="bg-indigo-900">
      <div class="mx-auto p-3 text-center font-thin text-white">
        <span class="mx-3 block sm:inline">
          <svg
            class="inline w-6 h-6 text-brand-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <p class="inline">Get paid for every disclosure and fix</p>
        </span>
        <span class="mx-3 block md:inline">
          <svg
            class="inline w-6 h-6 text-brand-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <p class="inline">Share your profile, badges and ranking</p>
        </span>
        <span class="mx-3 block lg:inline">
          <svg
            class="inline w-6 h-6 text-brand-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <p class="inline">Broadcast your exploits to the world</p>
        </span>
      </div>
    </section>

    <section id="hero" class="py-20 mx-auto w-4/5">
      <div class="flex flex-wrap items-center text-center lg:text-left">
        <div class="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
          <h2
            class="text-white tracking-tight text-3xl sm:text-4xl mb-6 font-semibold"
          >
            The place to protect open source
          </h2>
          <p class="mb-8 text-gray-400 leading-relaxed">
            Get recognised for protecting millions of developers without dealing
            with sneaky closed bounty programmes.
          </p>
          <div>
            <a
              class="inline-block py-4 px-8 mr-6 text-white bg-brand-500 hover:bg-red-500 font-semibold rounded shadow"
              href="#"
            >
              Join 1000+ huntrs
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
            </a>
          </div>
        </div>
        <div class="lg:w-1/2">
          <img
            class="fill-current text-white"
            src="img/hero-hacker.svg"
            alt=""
          />
        </div>
      </div>
    </section>

    <section id="feature-impact" class="py-20 bg-gray-900">
      <div class="w-4/5 mx-auto">
        <h2
          class="text-3xl text-center text-white font-semibold font-heading mb-12"
        >
          Protect packages that are used
          <span class="text-brand-500">over 1 billion</span> times each day
        </h2>
        <div class="grid grid-cols-8 mx-auto">
          <div class="h-auto mx-3 md:mx-5 lg:mx-8">
            <img src="img/package-logos/vue.svg" alt="" />
          </div>
          <div class="h-auto mx-3 md:mx-5 lg:mx-8">
            <img src="img/package-logos/bitcoin.png" alt="" />
          </div>
          <div class="h-auto mx-3 md:mx-5 lg:mx-8">
            <img src="img/package-logos/kubernetes.svg" alt="" />
          </div>
          <div class="h-auto mx-3 md:mx-5 lg:mx-8">
            <img src="img/package-logos/angular.svg" alt="" />
          </div>
          <div class="h-auto mx-3 md:mx-5 lg:mx-8">
            <img src="img/package-logos/react.svg" alt="" />
          </div>
          <div class="h-auto mx-3 md:mx-5 lg:mx-8">
            <img src="img/package-logos/elastic.png" alt="" />
          </div>
          <div class="h-auto mx-3 md:mx-5 lg:mx-8">
            <img src="img/package-logos/bootstrap.svg" alt="" />
          </div>
          <div class="h-auto mx-3 md:mx-5 lg:mx-8">
            <img src="img/package-logos/tensorflow.svg" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section id="feature-timeline" class="py-12 w-4/5 mx-auto">
      <div class="flex flex-wrap items-center lg:text-left">
        <div class="md:w-2/3 lg:w-1/2 mt-10 lg:mt-0 mx-auto">
          <h2
            class="text-3xl lg:px-4 mb-6 text-white leading-tight font-semibold font-heading text-center lg:text-left"
          >
            The truly open bounty platform
          </h2>
          <div class="px-4 mb-4 grid grid-cols-6">
            <div class="bg-gray-900 h-12 w-12 rounded-full my-auto flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="text-brand-500 w-3/4 m-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            </div>
            <div class="col-span-5">
              <h3 class="text-2xl mb-2 text-white font-light">
                No more <s>redactions</s>
              </h3>
              <p class="text-gray-400 leading-relaxed">
                Say goodbye to suspicious backroom conversations.
              </p>
            </div>
          </div>
          <div class="px-4 mb-4 grid grid-cols-6">
            <div class="bg-gray-900 h-12 w-12 rounded-full my-auto flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="text-brand-500 h-10 m-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div class="col-span-5">
              <h3 class="text-2xl mb-2 text-white font-light">
                Save the world
              </h3>
              <p class="text-gray-400 leading-relaxed">
                See how many people you're protecting.
              </p>
            </div>
          </div>
          <div class="px-4 mb-4 grid grid-cols-6">
            <div class="bg-gray-900 h-12 w-12 rounded-full my-auto flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="text-brand-500 h-10 m-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </div>
            <div class="col-span-5">
              <h3 class="text-2xl mb-2 text-white font-light">
                Share with friends
              </h3>
              <p class="text-gray-400 leading-relaxed">
                Share your open source success!
              </p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <img src="img/feature-timeline.png" alt="" />
        </div>
      </div>
    </section>

    <section id="feature-opportunities" class="py-10 w-4/5 mx-auto">
      <div class="flex flex-wrap justify-center">
        <div class="sm:w-1/3 max-w-xs px-2 mb-6">
          <div class="bg-gray-900 h-12 w-12 rounded-lg m-auto flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="text-brand-500 h-10 m-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3
            class="text-xl text-white text-center my-3 font-semibold font-heading"
          >
            Disclose
          </h3>
          <p class="text-gray-400 leading-relaxed text-center">
            Dive into open source, and
            <a src="#" class="text-brand-500">discover</a> new vulnerabilities.
          </p>
        </div>
        <div class="sm:w-1/3 max-w-xs px-2 mb-6">
          <div class="bg-gray-900 h-12 w-12 rounded-lg m-auto flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="text-brand-500 h-10 m-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
          <h3
            class="text-xl text-white text-center my-3 font-semibold font-heading"
          >
            Patch
          </h3>
          <p class="text-gray-400 leading-relaxed text-center">
            <a src="#" class="text-brand-500">Browse</a> vulnerabilities, choose
            your bounty and write your fix.
          </p>
        </div>
        <div class="sm:w-1/3 max-w-xs px-2 mb-6">
          <div class="bg-gray-900 h-12 w-12 rounded-lg m-auto flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="text-brand-500 h-10 m-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <h3
            class="text-xl text-white text-center my-3 font-semibold font-heading"
          >
            Review
          </h3>
          <p class="text-gray-400 leading-relaxed text-center">
            Review community code.
            <a src="#" class="text-brand-500">Contact us</a> to find out more.
          </p>
        </div>
      </div>
    </section>

    <section id="cta" class="py-12 bg-gray-900 text-center">
      <div class="w-4/5 md:w-full mx-auto">
        <h2
          class="text-4xl text-white leading-tight font-semibold font-heading"
        >
          Start contributing to open source today
        </h2>
        <p class="mt-6 mb-8 text-gray-400 leading-relaxed">
          New vulnerabilities to fix every week
        </p>
        <a
          class="inline-block py-4 px-8 leading-none text-white bg-brand-500 hover:bg-red-500 font-semibold rounded shadow"
          href="#"
          >Browse Vulnerabilities
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
        </a>
      </div>
    </section>
  </main>
</template>
