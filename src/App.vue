<script>
import AppHeader from './components/AppHeader.vue'
import jumbotron from './components/jumbotron.vue'
import AppSection from './components/AppSection.vue'

import AppSection_3 from './components/AppSection_3.vue'
import AppFooter from './components/AppFooter.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';




export default {



  data() {
    return {
      isLoaded: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      AOS.init();
    });

    setTimeout(() => {
      this.isLoaded = true
    }, 4000);
  },
  components: {
    AppHeader,
    jumbotron,
    AppSection,
    AppSection_3,
    AppFooter


  }



}
</script>

<template>

  <div>
    <div class="text-center" v-if="!isLoaded">
      <div class="Flex_Load">
        <div class="pos_img">
          <img class="img_loading" src="./assets/AL_LOGO.svg" alt="">
        </div>
        <img id="loader" src="./assets/Eclipse-1s-200px.svg" alt="">
      </div>
    </div>
    <div v-else>
      <div>
        <AppHeader />
        <jumbotron />
        <AppSection />
        <AppSection_3 />
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: white;
}

.Flex_Load {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative
}

.img_loading {
  width: 100px !important;
  height: 100px !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

#loader {

  align-content: center;


}
</style>
