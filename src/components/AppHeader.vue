<script>
import {store} from "../store"

export default {
   data() {
        return {
           store
        }
   },
   components: {

   }
}
</script>

<template>
  <div class="ms_container-wide">
    <section class="ms_top-header d-flex ms_container">
        <div>
            <p>English</p>
            <p>Icon</p>
        </div>
        <div>
<!--             <p v-for="(element, index)" in store.top_menu></p>
            <p v-for="(element, index)" in store.top_menu_icons></p> -->
        </div>
    </section>
    <hr>
    <section class="ms_menu-bar d-flex ms_container">
        <img src="../assets/img/MasterStudy.svg" alt="">
        <div class="d-flex">
            <p></p>
            <p>Category</p>
        </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.ms_container-wide {
    width: 100%;
}
.ms_container {
    width: 90%;
}
.ms_top-header {
    background-color: #fff;
    color: #9b8a92;
    justify-content: space-between;
    text-align: center;
}
hr {
    color: #dde6eb;
}
</style>
