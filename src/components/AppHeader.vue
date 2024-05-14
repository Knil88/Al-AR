<script>
export default {
  data() {
    return {}
  },
  methods: {

    closeNavbar() {

      var navbar = document.getElementById('navbarScroll');
      var bsCollapse = new bootstrap.Collapse(navbar);
      bsCollapse.hide();
    }
  },
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-white fixed-top" id="Nav_Bar">
    <div class="container-fluid">
      <div id="lg_center">
        <a class="navbar-brand" id="lg_center" href="#">
          <img id="lg_img" src="../assets/AL_LOGO.svg" alt="">
        </a>
      </div>
      <button class="navbar-toggler" id="Tg_color" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" id="Tg_color">

        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll d-flex justify-content-center w-100 fw-bold"
          style="gap:16%">

          <li><a class="nav-link" href="#About" @click="closeNavbar">ABOUT US </a></li>
          <li><a class="nav-link" href="#Lavori" @click="closeNavbar">I NOSTRI LAVORI</a></li>
          <li class="nav-item"><a class="nav-link" href="#Contatti" @click="closeNavbar">CONTATTI</a></li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
#Nav_Bar {
  background-color: white;
  ;

  a {
    color: #D32F2F;
    transition: all 1s;
  }

  a:hover {
    cursor: pointer;
    color: #D32F2F;
    text-decoration: underline #D32F2F;
  }


}

#drp_Mn {
  background-color: #333333;
  font-size: 50px;
  text-align: center;
}

#lg_img {
  max-width: 50px;
  border-radius: 50%;
  border: 1px solid black;
}

#Tg_color {
  color: white;
}

#Btn_Jumbo {
  background-color: #333;
  border: none;
  border-radius: 5px;
  color: lightgray;
  padding: 8px 0px;
  vertical-align: -moz-middle-with-baseline;
  transition: ease-in 0.5s;

  &:hover {
    color: white;
  }
}

.link_btn {
  text-decoration: none;
}

#reserved_link {
  text-decoration: none;
  list-style: none;
  transition: ease-in 0.5s;

  &:hover {
    color: white;
  }
}

a {
  margin: 0px 5px;
}

@media (max-width: 750px) and (min-width: 350px) {
  ul {
    font-size: 30px;
    text-align: center;
    margin: auto;
  }
}
</style>
