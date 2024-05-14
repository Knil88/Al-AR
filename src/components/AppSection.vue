<script>

</script>

<template>
    <section id="About">
        <div class="container-fluid  row justify-content-center col-11 m-auto " id="Wrapper_Container"
            style="padding-top: 6%;">
            <h2 data-aos="fade-up" data-aos-duration="1200"> About Us</h2>
            <div id="cont_img" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000"
                class="col-5 rounded mx-1">
                <img id="img_cont" src="../assets/AL_LOGO.svg" alt="">
            </div>
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" class="col-5  mx-1 "
                id="txt_cont">

                <p class="txt_p">
                    "All Renovation" è una ditta emergente nel settore delle ristrutturazioni, distinguendosi per la sua
                    crescente professionalità e attenzione ai dettagli.<br>
                    Offre soluzioni personalizzate e risultati di alta qualità grazie all'impiego di materiali premium e
                    al focus costante sul cliente, garantendo affidabilità per ogni progetto di ristrutturazione.<br>
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
#img_cont {
    width: 100%;
    border-radius: 15px;
}



h2 {
    text-align: center;
}

.txt_p {
    font-size: 28px;
    padding: 37px;
    border-radius: 4%;
    height: 100%;

}

@media (max-width: 992px) and (min-width: 350px) {

    #Wrapper_Container {
        display: flex;
        flex-direction: column;
        align-content: center;
    }

    #cont_img,
    #txt_cont {

        width: 100%;
        margin-top: 5%;
    }
}
</style>