<template>
  <div class="my-component" :class="{ 'visible': isVisible }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    handleScroll() {
      const componentPosition = this.$el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      this.isVisible = componentPosition < windowHeight / 2;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
.my-component {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s, transform 0.8s;
}

.my-component.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
