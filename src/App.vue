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
      store
    }
  },
  methods: {

  }
}
</script>

<template>
  <AppHeader/>
  <AppMain/>
</template>

<style scoped lang="scss">
@use "./style/general.scss";
</style>
