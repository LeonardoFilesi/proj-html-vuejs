<script>
import {store} from "../store"

export default {
   data() {
        return {
           store
        }
   },
   components: {

   },
   props: {
    cosplay: Object
   }
}
</script>

<template>
  
<div >
    <img src="" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">{{ this.cosplay.info }}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
        <p class="card-text"><small class="text-muted">Development</small></p>
    </li>
    <li class="list-group-item">A second item</li>
  </ul>
  <div class="ms_card-footer">
    <div class="ms_card-vote"></div>
    <div class="ms_card-price">
        <span class="ms_card-ogprice"></span>
        <span class="ms_card-discprice"></span>
    </div>
  </div>
</div>

</template>

<style scoped lang="scss">
@use "../style/partials/variables.scss" as *;
.ms_flex{
    display: flex;
}
.ms_card {
    width: calc(100% / 6 - 50px);
}
</style>