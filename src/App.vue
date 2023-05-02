<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import {store} from "./store";

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      store,
      filteredCards: []
    }
  },
  methods: {
    handleSearch(query) {
      this.filteredCards = store.cosplays.filter(cosplay =>
        cosplay.title.toLowerCase().includes(query.toLowerCase()));
    }
  }
}
</script>

<template>
 <div class="app">
  <AppHeader @search="handleSearch"/>
  <AppMain :filteredCards="filteredCards"/>
  <AppFooter/>
 </div>
</template>

<style scoped lang="scss">
@use "./style/general.scss";
.app {
  padding: 0;
    margin: 0;
    box-sizing: border-box;
}

</style>
