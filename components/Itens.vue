<template>
    <div class="mb-16">
      <h1 class="text-gray-900 flex justify-center text-4xl font-bold mb-8">
        Community Market Buy
      </h1>

      <p class="text-gray-700 flex justify-center text-lg font-light">
          With over 100 years of combined experience, we've got a well-seasoned team at the helm.
      </p>

      <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button @click="filterImages('all')" :class="{ 'bg-blue-700': activeCategory === 'all', 'text-white': activeCategory === 'all' }" class="text-blue-700 hover:text-white border border-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
        <button @click="filterImages('butterfly ')" :class="{ 'bg-blue-700': activeCategory === 'butterfly ', 'text-white': activeCategory === 'butterfly ' }" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Butterfly </button>
        <button @click="filterImages('huntsman')" :class="{ 'bg-blue-700': activeCategory === 'huntsman', 'text-white': activeCategory === 'huntsman' }" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Huntsman</button>
        <button @click="filterImages('ursus')" :class="{ 'bg-blue-700': activeCategory === 'ursus', 'text-white': activeCategory === 'ursus' }" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Ursus</button>
      </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="image in filteredImages" :key="image.id" class="relative">
                <div class="sm:h-64 w-full overflow-hidden rounded-lg border-b-4 border-transparent transition-transform duration-300 hover:scale-110">
                <img
                    class="h-full w-full object-cover h-38 w-38"
                    :src="image.src"
                    :alt="image.alt"
                />
                </div>
            </div>
        </div>
        
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeCategory: 'all',
        images: [
          { id: 1, src: 'https://github.com/Icegreeen/counter_strike/assets/56550632/978ce4d0-360a-46ca-bc80-18f0a9637a21', alt: 'Image 1', category: 'all' },
          { id: 2, src: 'https://github.com/Icegreeen/counter_strike/assets/56550632/2e7aa48a-4b92-4ecd-b680-823389d30ce5', alt: 'Image 1', category: 'all' },
          { id: 3, src: 'https://github.com/Icegreeen/counter_strike/assets/56550632/0c2e1592-40af-4c0d-8033-55a94811e552', alt: 'Image 1', category: 'all' },

          { id: 4, src: 'https://github.com/Icegreeen/counter_strike/assets/56550632/b285d5b0-c617-4b32-a23f-4e1c8cd8e936', alt: 'Image 1', category: 'butterfly ' },
          { id: 5, src: 'https://github.com/Icegreeen/counter_strike/assets/56550632/14ef1cfa-a7e9-4b98-9d9f-d6306e0e824c', alt: 'Image 1', category: 'butterfly ' },

          { id: 6, src: 'https://github.com/Icegreeen/counter_strike/assets/56550632/ff345bdb-d11c-4982-8b2e-e876befe09de' , alt: 'Image 1', category: 'huntsman' },

          { id: 7, src: 'https://github.com/Icegreeen/counter_strike/assets/56550632/cb21f74c-f816-4292-b96f-04c715d5cb0e', alt: 'Image 1', category: 'ursus' },
          { id: 8, src: 'https://github.com/Icegreeen/counter_strike/assets/56550632/3cf8c558-7652-4374-9bd8-b9a52576c404', alt: 'Image 1', category: 'ursus' },
        ]
      };
    },
    computed: {
      filteredImages() {
        if (this.activeCategory === 'all') {
          return this.images;
        } else {
          return this.images.filter(image => image.category === this.activeCategory);
        }
      }
    },
    methods: {
      filterImages(category) {
        this.activeCategory = category;
      }
    }
  };
  </script>
  