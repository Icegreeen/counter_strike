<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
};
</script>

<template>
  <swiper
    :pagination="{
      dynamicBullets: true,
    }"
    :modules="modules"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    class="mySwiper"
  >
    <swiper-slide class="custom-slide" style="height: 750px; position: relative;">
      <img src="https://github.com/Icegreeen/my-blog/assets/56550632/ca414ce1-488a-4200-a0fe-5837dc8e1a36" class="filter brightness-75 swiper-img" />
      <div class="slide-content">
        <h1>Sua gestão de apostas mais rápida e eficiente</h1>
        <p>Plataforma profissional para gestão de banca no trade esportivo na betfair, automatizando tarefas repetitivas para você economizar tempo e investir de forma mais lucrativa e profissional.</p>
        <li>
          <a
            href="javascript:void(0)"
            class="shadow bg-yellow transition-opacity my-4 hover:opacity-75 inline-flex items-center justify-center px-6 py-2 bg-yellow text-base font-medium text-center text-white rounded-md bg-primary hover:bg-blue-dark lg:px-7"
            >
              Cadastrar
            </a>
        </li>

        <div class="clients pt-2">
              <h6 class="flex items-center mb-6 text-xs font-normal text-body-color dark:text-dark-6">
                Parceiros e clientes
                <span class="inline-block w-8 h-px ml-3 bg-body-color"></span>
              </h6>
              <div class="flex items-center gap-4 xl:gap-[50px]">
                  <img src="~/assets/images/logo2.png" class="h-8" />
                  <img src="~/assets/images/logo2.png" class="h-8" />
              </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="custom-slide" style="height: 750px; position: relative;">
      <img src="https://github.com/Icegreeen/my-blog/assets/56550632/40d41fc4-8e4d-4f6a-8f34-e06c791cb92f" class="filter brightness-75 swiper-img" />
      <div class="slide-content">
        <h1>Sua gestão de apostas mais rápida e eficiente</h1>
        <p>Plataforma profissional para gestão de banca no trade esportivo na betfair, automatizando tarefas repetitivas para você economizar tempo e investir de forma mais lucrativa e profissional</p>
        <li>
          <a
            href="javascript:void(0)"
            class="shadow bg-yellow transition-opacity my-4 hover:opacity-75 inline-flex items-center justify-center px-6 py-2 bg-yellow text-base font-medium text-center text-white rounded-md bg-primary hover:bg-blue-dark lg:px-7"
            >
              Cadastrar
            </a>
          </li>

          <div class="clients pt-2">
              <h6 class="flex items-center mb-6 text-xs font-normal text-body-color dark:text-dark-6">
                Parceiros e clientes
                <span class="inline-block w-8 h-px ml-3 bg-body-color"></span>
              </h6>
              <div class="flex items-center gap-4 xl:gap-[50px]">
                  <img src="~/assets/images/logo2.png" class="h-8" />
                  <img src="~/assets/images/logo2.png" class="h-8" />
              </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="custom-slide" style="height: 750px; position: relative;">
      <img src="https://github.com/Icegreeen/my-blog/assets/56550632/68c9f291-0b0a-451d-8c03-12a2cc9e6443" class="filter brightness-75 swiper-img" />
      <div class="slide-content">
        <h1>Sua gestão de apostas mais rápida e eficiente</h1>
        <p>Plataforma profissional para gestão de banca no trade esportivo na betfair, automatizando tarefas repetitivas para você economizar tempo e investir de forma mais lucrativa e profissional</p>
        <li>
          <a
            href="javascript:void(0)"
            class="shadow bg-yellow transition-opacity my-4 hover:opacity-75 inline-flex px-6 py-2 bg-yellow text-base font-medium text-center text-white rounded-md bg-primary hover:bg-blue-dark lg:px-7"
            >
              Cadastrar
            </a>
        </li>

        <div class="clients pt-2">
              <h6 class="flex items-center mb-6 text-xs font-normal text-body-color dark:text-dark-6">
                Parceiros e clientes
                <span class="inline-block w-8 h-px ml-3 bg-body-color"></span>
              </h6>
              <div class="flex items-center gap-4 xl:gap-[50px]">
                  <img src="~/assets/images/logo2.png" class="h-8" />
                  <img src="~/assets/images/logo2.png" class="h-8" />
              </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.mySwiper {
  width: 100%;
  height: 100%;
}

.custom-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-content {
  width: 50%; /* Ajustado para 80% em telas maiores */
  max-width: 600px; /* Adicionado limite de largura */
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  padding: 20px;
  color: #fff;
}

.slide-content h1 {
  line-height: 1.5;
  font-weight: 900;
  font-size: 3.2rem; /* Ajustado o tamanho da fonte para telas menores */
  color: #f5f5f5;
}

.slide-content p {
  color: #f5f5f5;
}

@media (max-width: 768px) {
  .slide-content {
    width: 90%; /* Ajustado para 90% em telas menores */
    left: 50%;
  }

  .slide-content h1 {
    font-size: 1.5rem; /* Ajustado o tamanho da fonte para telas menores */
  }
}
</style>
