<script>
import {store} from "../store";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


export default {
   data() {
        return {
           store
        }
   },
   components: {
    FontAwesomeIcon
   },
   props: {
    cosplay: Object
   },
   methods: {
    getImagePath() {
      return new URL(`${img}`, import.meta.url).href;
    }

   }
}
</script>

<template>
  <!-- this.cosplay.img -->
    <img :src="getImagePath" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">{{ this.cosplay.info }}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
        <p class="card-text"><small class="text-muted">Development</small></p>
    </li>
  </ul>
  <div class="ms_card-footer ms_flex">
    <div class="ms_card-vote"></div>
    <div class="ms_card-price">
        <span class="ms_card-ogprice">{{ this.cosplay.ogprice }} </span>
        <span class="ms_card-discprice">{{ this.cosplay.discprice }}</span>
    </div>
  </div>
</template>
<!-- cosplay.img[0] -->

<style scoped lang="scss">
@use "../style/partials/variables.scss" as *;
.ms_flex{
    display: flex;
}
.ms_wrap {
    flex-wrap: wrap;
}
.ms_card {
    width: calc(100% / 6 - 50px);
}
.list-group-item {
  list-style-type: none;
  color: $venus;
}
.ms_card-price {
    display: flex;
    flex-direction: column;
}
.ms_card-ogprice {
  color: $venus;
  text-decoration: line-through;
}
</style>