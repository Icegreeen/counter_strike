<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const open = ref(false)
const dropdownButtonRef = ref<HTMLButtonElement | null>(null)

const toggleNavbar = () => {
  open.value = !open.value
}

const navLinkItems = ref([
  { text: 'Home', href: 'javascript:void(0)' },
  { text: 'Payment', href: 'javascript:void(0)' },
  { text: 'About', href: 'javascript:void(0)' },
  { text: 'Blog', href: 'javascript:void(0)' }
])

// Custom composition function to handle click outside
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownButtonRef.value && !dropdownButtonRef.value.contains(event.target as Node)) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

</script>

<template>
  <!-- ====== Hero Section Start -->
  <div class="relative pt-[80px] pb-[110px] lg:pt-[150px]">
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center -mx-4">
        <div class="w-full px-1 lg:w-5/12">
          <div class="hero-content">
            <h1
              class="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl"
            > 
              Counter-Strike: Global Offensive (CS:GO) <br />
            </h1>
            <p class="mb-8 max-w-[480px] text-base text-grayWhite dark:text-dark-6">       
              Counter-Strike: Global Offensive (CS:GO) is a 2012 multiplayer tactical first-person shooter. Counter-Strike: Global Offensive (CS:GO) is a 2012 multiplayer tactical first-person shooter
            </p>
            <ul class="flex flex-wrap items-center">
              <li>
                <a
                  href="javascript:void(0)"
                  class="shadow bg-yellow transition-opacity hover:opacity-75 inline-flex items-center justify-center px-6 py-2 bg-yellow text-base font-medium text-center text-white rounded-md bg-primary hover:bg-blue-dark lg:px-7"
                >
                  Cadastrar
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="inline-flex items-center justify-center py-3 px-5 text-center text-base font-medium text-[#464646] dark:text-white hover:text-primary"
                >

                  Entrar   →
                </a>
              </li>
            </ul>
            
          </div>
        </div>
        <div class="hidden px-4 lg:block lg:w-1/12"></div>
        <div class="w-full px-4 lg:w-6/12">
          <div class="lg:ml-auto lg:text-right">
            <div class="relative z-10 inline-block pt-11 lg:pt-0">
            <Slider />
              <span class="absolute -left-8 -bottom-8 z-[-1]">
                <svg
                  width="93"
                  height="93"
                  viewBox="0 0 93 93"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#fa541cff" />
                  <circle cx="2.5" cy="24.5" r="2.5" fill="#fa541cff" />
                  <circle cx="2.5" cy="46.5" r="2.5" fill="#fa541cff" />
                  <circle cx="2.5" cy="68.5" r="2.5" fill="#fa541cff" />
                  <circle cx="2.5" cy="90.5" r="2.5" fill="#fa541cff" />
                  <circle cx="24.5" cy="2.5" r="2.5" fill="#fa541cff" />
                  <circle cx="24.5" cy="24.5" r="2.5" fill="#fa541cff" />
                  <circle cx="24.5" cy="46.5" r="2.5" fill="#fa541cff" />
                  <circle cx="24.5" cy="68.5" r="2.5" fill="#fa541cff" />
                  <circle cx="24.5" cy="90.5" r="2.5" fill="#fa541cff" />
                  <circle cx="46.5" cy="2.5" r="2.5" fill="#fa541cff" />
                  <circle cx="46.5" cy="24.5" r="2.5" fill="#fa541cff" />
                  <circle cx="46.5" cy="46.5" r="2.5" fill="#fa541cff" />
                  <circle cx="46.5" cy="68.5" r="2.5" fill="#fa541cff" />
                  <circle cx="46.5" cy="90.5" r="2.5" fill="#fa541cff" />
                  <circle cx="68.5" cy="2.5" r="2.5" fill="#fa541cff" />
                  <circle cx="68.5" cy="24.5" r="2.5" fill="#fa541cff" />
                  <circle cx="68.5" cy="46.5" r="2.5" fill="#fa541cff" />
                  <circle cx="68.5" cy="68.5" r="2.5" fill="#fa541cff" />
                  <circle cx="68.5" cy="90.5" r="2.5" fill="#fa541cff" />
                  <circle cx="90.5" cy="2.5" r="2.5" fill="#fa541cff" />
                  <circle cx="90.5" cy="24.5" r="2.5" fill="#fa541cff" />
                  <circle cx="90.5" cy="46.5" r="2.5" fill="#fa541cff" />
                  <circle cx="90.5" cy="68.5" r="2.5" fill="#fa541cff" />
                  <circle cx="90.5" cy="90.5" r="2.5" fill="#fa541cff" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ====== Hero Section End -->
</template>
