<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const open = ref(false)
const dropdownButtonRef = ref<HTMLButtonElement | null>(null)

const toggleNavbar = () => {
  open.value = !open.value
}

const navigateToSection = (section: string) => {
  const sectionIds = ['home', 'sobre', 'preços', 'funcionalidades', 'contato'];

  if(sectionIds.includes(section.toLowerCase())) {
    const targetSection = document.getElementById(section.toLowerCase())
    if(targetSection) {
      targetSection.scrollIntoView({behavior: 'smooth'})
      toggleNavbar()
    }
  }
}

const navLinkItems = ref([
  { text: 'Inicio', href: 'javascript:void(0)' },
  { text: 'Sobre', href: 'javascript:void(0)' },
  { text: 'Contato', href: 'javascript:void(0)' },
])

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
  <header class="flex h-22 w-full items-center mx-auto max-w-screen-xl px-16 sm:px-6 lg:px-8">
    <div class="container">
      <div class="relative -mx-8 flex items-center justify-between">
        <div class="w-40 max-w-full">
          <a href="https://www.mybetspace.com/" class="block w-full">
            <img
              src="~/assets/images/logo.png"
              alt="logo"
              class="dark:hidden"
            />
            <img
              src="~/assets/images/logo.png"
              alt="logo"
              class="hidden dark:block"
            />
          </a>
        </div>
        <div class="flex w-full items-center justify-between px-2">
          <div>
            <button
              @click="toggleNavbar"
              ref="dropdownButtonRef"
              id="navbarToggler"
              class="absolute right-0 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
            >
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-yellow  dark:bg-white"
              ></span>
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-yellow  dark:bg-white"
              ></span>
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-yellow dark:bg-white"
              ></span>
            </button>

            <nav
              :class="{ hidden: !open }"
              id="navbarCollapse"
              style="z-index: 9999;"
              class=" absolute right-2 top-full w-full max-w-[200px] rounded-lg px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent"
            >
              <ul class="block lg:flex">
                <template v-for="(item, index) in navLinkItems" :key="index">
                  <li>
                    <a
                      v-if="item.href"
                      :href="item.href"
                      @click="navigateToSection(item.text)"
                      class="flex py-2 text-base font-medium text-white hover:text-yellow dark:text-dark-6 dark:hover:text-yellow lg:ml-12 lg:inline-flex"
                    >
                      {{ item.text }}
                    </a>
                  </li>
                </template>
              </ul>
            </nav>
          </div>
          <div class="hidden justify-end pr-16 sm:flex lg:pr-0">
            <a
              href="/login"
              class="px-7 py-3 text-base font-medium text-white hover:text-primary dark:text-white transition-opacity hover:opacity-75"
              >Login</a
            >
            <a href="/login" style="height: 40px;" class="rounded-md px-6 py-3 my-1 text-base font-medium bg-yellow text-white shadow bg-yellow transition-opacity hover:opacity-75 flex items-center justify-center">
              Cadastrar
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
