<template>
  <div class="video_container">
    <video class="video_bg" src="../assets/AR.mp4" autoplay loop muted></video>
    <div class="logo_container">
      <!-- Aggiungi l'elemento con la classe 'element' per utilizzarlo con Typed.js -->
      <div ref="typedElement" class="element fw-bold text-center" :style="{ fontSize: fontSize }">ALL
        RENOVATION</div>
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js';

export default {
  data() {
    return {
      fontSize: '' // Inizializza la dimensione del font
    };
  },
  mounted() {
    // Calcola la dimensione del font in base alla larghezza della finestra
    this.calculateFontSize();

    // Inizializza Typed.js dopo il montaggio del componente
    var typed = new Typed(this.$refs.typedElement, {
      strings: ["ALL RENOVATION", "VERNICIATURA", "IMPIANTI", "RISTRUTTURAZIONI", "SU ROMA", "E LITORALE"],
      typeSpeed: 90,
      loop: true,
      showCursor: false
    });
  },
  methods: {
    calculateFontSize() {
      // Calcola la dimensione del font in base alla larghezza della finestra
      const windowWidth = window.innerWidth;
      if (windowWidth <= 1200) {
        // Limita la dimensione del font quando la larghezza della finestra supera i 1200px
        this.fontSize = Math.max(16, windowWidth / 40) + 'px';
      } else {
        this.fontSize = '30px'; // Imposta una dimensione fissa del font
      }
    }
  },
  created() {
    // Aggiorna la dimensione del font quando la finestra viene ridimensionata
    window.addEventListener('resize', this.calculateFontSize);
  },
  destroyed() {
    // Rimuovi l'evento di ridimensionamento quando il componente viene distrutto
    window.removeEventListener('resize', this.calculateFontSize);
  }
}
</script>

<style scoped lang="scss">
.video_bg {
  width: 100%;
  filter: grayscale(1);
  opacity: 0.5;


}

.video_container {
  position: relative;
}

.logo_container {
  position: absolute;
  bottom: 50%;
  left: 40%;

  img {
    width: 40%;
  }
}

.element {
  text-align: center;
  color: #FFD700;
}

@media (max-width: 992px) {
  .logo_container {
    bottom: 26%;
  }
}
</style>