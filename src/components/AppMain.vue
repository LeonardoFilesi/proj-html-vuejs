<script>
import {store} from "../store"
import AppCard from "./AppCard.vue"
import AppPopularCards from "./AppPopularCards.vue"

export default {
   data() {
        return {
           store,
           cosplay: store.cosplays,
           filteredCards: store.cosplays
        }
   },
   components: {
    AppCard,
    AppPopularCards
   },
   methods: {
      filterCards(filter) {
        if (filter === 'all') {
            /* this.filteredCards = this.cosplays; */
            this.allCards();
        } else {
            this.filteredCards = this.cosplay.filter(cosplay => cosplay.filter === filter);
        }
      },
      allCards() {
        this.filteredCards = this.cosplay;
      }
   }
}
</script>

<template>
    <div class="ms_container">
        <h3>Popular Cringy Stuff</h3>
        <AppPopularCards/>
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
        <div>
            <button @click="allCards('All')">All</button>     
            <button @click="filterCards('Cringe')">Cringe</button>
            <button @click="filterCards('Design')">Design</button>
            <button @click="filterCards('Development')">Development</button>
            <button @click="filterCards('Furry')">Furry</button>
            <button @click="filterCards('2 Much Weeb')">2 Much Weeb</button>
        </div>
        <div class="ms_cards-display ms_flex ms_wrap">
            <div v-for="cosplay in filteredCards" :key="cosplay.id" :data="cosplay" class="card ms_card">
                <AppCard :cosplay="cosplay"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables.scss" as *;
.ms_container button {
    margin: 5px 10px 5px 0px;
}

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
    justify-content: center;
    flex-direction: row;
}
.ms_card {
    width: calc(100% / 6 - 50px);
    
    padding: 10px;
    margin: 10px 10px;
    outline: 1px solid $venus;
    border-radius: 10px;
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