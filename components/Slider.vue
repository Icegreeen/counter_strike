<template>
    <div class="slideshow">
      <div class="slide" :class="{ active: currentIndex === index }" v-for="(item, index) in items" :key="index">
        <img :src="item.image" alt="Slide Image" class="carousel-image" :style="{ width: imageWidth + 'px', height: imageHeight + 'px' }" />
        <p>{{ item.caption }}</p>
      </div>
      <!--
        <div class="slideshow-controls">
        <div class="arrow left" @click="prevSlide"><img src="~/assets/images/arrow.svg" alt=""></div>
        <div class="arrow right" @click="nextSlide"><img src="~/assets/images/arrow.svg" alt=""></div>
      </div>
      -->
      <div class="indicators">
        <span
          v-for="(item, index) in items"
          :key="index"
          @click="goToSlide(index)"
          :class="{ active: currentIndex === index }"
        ></span>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    props: {
      imageWidth: {
        type: Number,
        default: 700, 
      },
      imageHeight: {
        type: Number,
        default: 500, 
      },
    },
    data() {
      return {
        currentIndex: 0,
        intervalId: null,
        items: [ 
          { image: 'https://github.com/Icegreeen/my-blog/assets/56550632/56650964-d751-4b18-9a8e-b217dfce3ab3' }, 
          { image: 'https://github.com/Icegreeen/my-blog/assets/56550632/b3d3a95e-5814-4d48-9bf9-fa7dadbbac87'},
      ]
      };
    },
    mounted() {
      this.intervalId = setInterval(this.nextSlide, 2000); 
    },
    beforeDestroy() {
  
      clearInterval(this.intervalId);
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
      },
      goToSlide(index) {
        this.currentIndex = index;
      },
    },
  };
  </script>
  
  <style scoped>
  .carousel-image {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
  }
  
  .slideshow {
    max-width: 600px;
    margin: 0 auto;
    position: relative;
  }
  
  .slide {
    display: none;
    transition: opacity 0.5s ease-in-out;
  }
  
  .slide.active {
    display: block;
    opacity: 1;
  }
  .slideshow-controls {
    margin-top: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .arrow {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .arrow.left {
    left: 10px;
  }
  
  .arrow.right {
    right: 10px;
    transform: scaleX(-1);
  }
  
  .indicators {
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 5px;
  }
  
  .indicators span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ddd;
    cursor: pointer;
  }
  
  .indicators span.active {
    background-color: #333;
  }
  </style>
  