<script>
import {store} from "../store"
import AppCard from "./AppCard.vue"

export default {
   data() {
        return {
           store
        }
   },
   components: {
    AppCard
   },
   methods: {
        popularCards() {

        }
   }
}
</script>

<template>
    <div class="ms_container">
        <h3>Popular Cringy Stuff</h3>
        <div class="ms_cards-display ms_flex ms_wrap">
            <div v-for="cosplay in store.cosplays" :key="cosplay.id" class="card ms_card">
                <AppCard :cosplay="cosplay"/>
            </div>
        </div>
   </div>
    <div class="ms_main-jumbo">
        <img src="../assets/img/Cattura.JPG" alt="">
        <div class="ms_main-jumbo-txt">
            <h3>Limitless cringe, more possibilities</h3>
            <span>Online cringe opens the opportunity for diying internally, regardless of how you do in life</span>
            
        </div>
    </div>
    <div class="ms_container">
        <h2>Recent Cringe</h2>
        <div class="ms_cards-display ms_flex ms_wrap">
            <div v-for="cosplay in store.cosplays" :key="cosplay.id" class="card ms_card">
                <AppCard :cosplay="cosplay"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables.scss" as *;
.ms_flex{
    display: flex;
}
.ms_wrap {
    flex-wrap: wrap;
}
.ms_container {
    width: 90%;
    align-content: center;
    margin: 0 auto;
}
.ms_cards-display {
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
}
.ms_card {
    width: calc(100% / 6 - 50px);
    height: 200px;
    margin-bottom: 20px;
}
.ms_main-jumbo {
    width: 100%;
    height: 400px;
    position: relative;
    /* background-image: url(../assets/img/Cattura.JPG); */
}
.ms_main-jumbo img {
    width: 100%;
    height: 400px;
    object-fit: fill;
}
.ms_main-jumbo-txt {
    position: absolute;
    left: 100px;
    top: 120px;
}
</style>

<!-- v-if="cosplay.popular === true" -->