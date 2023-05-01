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
        return store.cosplays.filter(cosplay => cosplay.popular === true);
    }
   }
}
</script>

<template>
    <div v-for="cosplay in popularCards" :key="cosplay.id" class="ms_cards-display ms_flex ms_wrap">
        <AppCard :data="cosplay"></AppCard>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables.scss" as *;

</style>