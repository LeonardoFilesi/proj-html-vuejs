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

    <section class="ms_top-header ms_flex ms_container">
        <div class="ms_flex">
            <p class="text-danger">English</p>
            <p>Icon</p>
        </div>
        <div class="ms_flex">
            <a href="#" v-for="element in store.top_menu" :key="element.id">{{ element.text }}</a>
            <a href="#" v-for="element in store.top_menu_icons" :key="element.id">{{ element.icon }}</a>
        </div>
    </section>

    <hr>

    <section class="ms_menu-bar ms_flex ms_container">
        <div class="ms_flex left-side">
            <img src="../assets/img/MasterStudy.svg" alt="">
            <span>icon</span>
            <span>CATEGORY</span>
        </div>

        <input type="text"
            class="form-control me-3"
            placeholder="Search Courses"
        />

        <div class="ms_flex">
                <span>icon</span>
                <span>Become an Instructore</span>
           </div>
           <div class="ms_flex">
                <span>icon</span>
                <span>Become an Instructor</span>
           </div>
        
        <div class="ms_flex right-side">
                <span>icon</span>
                <span>Log In</span>
                <img src="../assets/hover-button1.png" alt="">
                <span class="">icon</span>
           
        </div>
    </section>
    <section class="ms_jumbotron-bar ms_flex">
        <a href="#" v-for="element in store.jumbotron_bar" :key="element.id" class="ms_jumbo-bar">{{ element.text }}</a>
        <span v-for="element in store.jumbotron_bar" :key="element.id" class="ms_jumbo-bar">{{ element.icon }}</span>
    </section>
    <section class="ms_jumbotron">
        <div class="ms_jumbo-left">
            <h1>Udemy Cringe Cosplay Sales</h1>
            <h3>Monetize your cringe ideas and disgust new customers with Udemy</h3>
        </div>
        <div class="ms_jumbo-right">

        </div>
        <img src="../assets/img/cringe-cosplay-jumbo.jpg" alt="">
    </section>
  </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables.scss" as *;
a {
    text-decoration: none;
    color: $venus;
    margin-right: 7px;
}
.ms_flex{
    display: flex;
}
.ms_container-wide {
    width: 100%;
    margin: 0 auto;
}
.ms_container {
    width: 90%;
    align-content: center;
    margin: 0 auto;
}
.ms_top-header {
    background-color: $white;
    color: $venus;
    justify-content: space-between;
    align-items: center;
}
hr {
    color: $mystic;
}
.ms_menu-bar {
    background-color: $white;
    color: $venus;
    justify-content: space-between;
    align-items: center;
}
.left-side {
    align-items: center;
}
input {
    background-color: $mystic;
}
.right-side {
    align-items: center;
    justify-content: space-between;
}
.ms_jumbotron-bar{
    background-color: $ebonyclay;
    width: 100%;
    margin: 0 auto 30px auto;
    padding: 20px 0;
    justify-content: center;
}
.ms_jumbo-bar {
    color: $white;
    margin: 0 5px;
}
.ms_jumbotron {
    width: 100;
    position: relative;
}
.ms_jumbo-left {
    position: absolute;
    left: 0;
    width: 80%;
    height: 100%;
    background-image: linear-gradient(to right, #ff4550, rgba(255, 117, 117, 0));
    color: $white;
}
.ms_jumbo-right {
    position: relative;
    width: 100%;
}
.ms_jumbo-right img {
    position: absolute;
    right: 0;
}
</style>
