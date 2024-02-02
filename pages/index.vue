<template>
  <section>
      <Header />

      <TransitionOnScroll>
        <Hero />
      </TransitionOnScroll>

      <Divider />

      <TransitionOnScroll>
        <About />
      </TransitionOnScroll>

      <TransitionOnScroll>
        <Itens />
      </TransitionOnScroll>

      <TransitionOnScroll>
        <Testimonial />
      </TransitionOnScroll>

      <TransitionOnScroll>
        <BannerKnife />
      </TransitionOnScroll>

      <TransitionOnScroll>
        <Blog />
      </TransitionOnScroll>

      <TransitionOnScroll>
        <ImagesGrid />
      </TransitionOnScroll>

      <TransitionOnScroll>
        <Maps />
      </TransitionOnScroll>
  </section>
  <Footer /> 
</template>

<script>
import TransitionOnScroll from '~/components/TransitionOnScroll.vue';
import Header from '~/components/Header.vue';
import About from '~/components/About.vue';


export default {
  components: {
    TransitionOnScroll,
    Header,
    About,
  },}
</script>

<style scoped>

section {
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px; 
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 32px;
}

/*
@media (min-width: 640px) {
  body {
    padding-left: 24px;
    padding-right: 24px;
  }
}

@media (min-width: 1024px) {
  body {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 64px;
  }
*/
</style>