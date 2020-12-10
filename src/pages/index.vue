<template>
  <main class="container mx-auto max-w-full">
    <section id="banner" class="bg-indigo-900">
      <div class="mx-auto p-3 text-center font-thin text-white">
        <span class="mx-2 block sm:inline">
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
        <span class="mx-2 block md:inline">
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
        <span class="mx-2 block lg:inline">
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
          <h2 class="text-white tracking-tight text-4xl mb-6 font-semibold">
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
      <h2
        class="text-3xl text-center text-white font-semibold font-heading mb-12"
      >
        Protect packages that are used
        <span class="text-brand-500">over 1 billion</span> times each day
      </h2>
      <div class="grid grid-cols-8 mx-auto w-4/5">
        <div class="w-auto mx-auto px-8">
          <img src="img/package-logos/vue.svg" alt="" />
        </div>
        <div class="w-auto mx-auto px-8">
          <img src="img/package-logos/bitcoin.png" alt="" />
        </div>
        <div class="w-auto mx-auto px-8">
          <img src="img/package-logos/kubernetes.svg" alt="" />
        </div>
        <div class="w-auto mx-auto px-8">
          <img src="img/package-logos/angular.svg" alt="" />
        </div>
        <div class="w-auto mx-auto px-8">
          <img src="img/package-logos/react.svg" alt="" />
        </div>
        <div class="w-auto mx-auto px-8">
          <img src="img/package-logos/elastic.png" alt="" />
        </div>
        <div class="w-auto mx-auto px-8">
          <img src="img/package-logos/bootstrap.svg" alt="" />
        </div>
        <div class="w-auto mx-auto px-8">
          <img src="img/package-logos/tensorflow.svg" alt="" />
        </div>
      </div>
    </section>

    <section id="feature-timeline" class="py-12 w-4/5 mx-auto">
      <div class="flex flex-wrap items-center text-center lg:text-left -mx-2">
        <div class="lg:w-1/2 px-2">
          <img src="img/feature-timeline.png" alt="" />
        </div>
        <div class="lg:w-1/2 px-2 lg:pl-16 mt-10 lg:mt-0">
          <h2
            class="text-4xl px-4 mb-4 leading-tight font-semibold font-heading"
          >
            How to get Dunder Mifflined?
          </h2>
          <div class="p-4 mb-4">
            <h3 class="text-2xl mb-2 font-semibold font-heading">
              1. Contact our Sales
            </h3>
            <p class="text-gray-400 leading-relaxed">
              During the phone call we will be able to present you all details
              of cooperation, pricing and special offers, suited for your
              company.
            </p>
          </div>
          <div class="p-4 mb-4 rounded shadow-md">
            <h3 class="text-2xl mb-2 font-semibold font-heading">
              2. Sign the documents
            </h3>
            <p class="text-gray-400 leading-relaxed">
              We can also talk during business meeting, or visit your office
              anytime you want! Our employees will provide proper contracts.
            </p>
          </div>
          <div class="p-4 mb-4">
            <h3 class="text-2xl mb-2 font-semibold font-heading">
              3. Wait for delivery!
            </h3>
            <p class="text-gray-400 leading-relaxed">
              You don’t buy a pig... or shall I say a paper in a poke. The
              supplies will be delivered to your company every first Monday of
              the month.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-8 w-4/5 mx-auto">
      <div class="flex flex-wrap -mx-4 -mb-6">
        <div class="lg:w-1/3 px-4 mb-6">
          <svg
            class="text-indigo-600 w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewbox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            ></path>
          </svg>
          <h3 class="text-xl my-3 font-semibold font-heading">
            High durability
          </h3>
          <p class="text-gray-400 leading-relaxed">
            Forget about paper jams with our increased stability product. Ideal
            for high-quality printing, colour printing and photocopying.
          </p>
        </div>
        <div class="lg:w-1/3 px-4 mb-6">
          <svg
            class="text-indigo-600 w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewbox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
            ></path>
          </svg>
          <h3 class="text-xl my-3 font-semibold font-heading">Versatility</h3>
          <p class="text-gray-400 leading-relaxed">
            Multi-functional paper for various office needs. Snow-white sheets
            will shine bright like diamond for many years.
          </p>
        </div>
        <div class="lg:w-1/3 px-4 mb-6">
          <svg
            class="text-indigo-600 w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewbox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          <h3 class="text-xl my-3 font-semibold font-heading">
            Value-based price
          </h3>
          <p class="text-gray-400 leading-relaxed">
            The best combination of quality and economy comes with Dunder
            Mifflin paper. The offer includes paper in wide range of density and
            sizes.
          </p>
        </div>
      </div>
    </section>

    <section class="py-12 px-4 text-center bg-gray-900">
      <div class="w-full max-w-2xl mx-auto">
        <h2 class="text-5xl leading-tight font-semibold font-heading">
          No paper plane can be made without paper
        </h2>
        <p class="mt-6 mb-8 text-gray-400 leading-relaxed">
          Professional, dedicated, local. Dunder Mifflin is on its best patch to
          change the way you think about paper. That’s us - people who sell
          limitless paper in the paperless world.
        </p>
        <a
          class="inline-block py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
          href="#"
          >Sign up</a
        >
      </div>
    </section>
  </main>
</template>
