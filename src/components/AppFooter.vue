<script>
import {store} from "../store";
/* import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* library.add(faArrowUp); */

export default {
   data() {
        return {
           store
        }
   },
   components: {
      FontAwesomeIcon
   }, 
   methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
}}
</script>

<template>
   <div>
    <button @click="scrollToTop" id="scrollToTopBtn">
      <font-awesome-icon :icon="faArrowUp" />
    </button>
  </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables.scss" as *;

</style>
