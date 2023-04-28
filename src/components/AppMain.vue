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
    <div class="ms_cards-display ms_flex">
        <div v-for="cosplay in store.cosplays" :key="cosplay.id" class="card ms_card">
            <AppCard :cosplay="cosplay"/>
        </div>
    </div>
    <h2>Recent Cringe</h2>
  </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables.scss" as *;
.ms_flex{
    display: flex;
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
}
</style>

<!-- v-if="cosplay.popular === true" -->