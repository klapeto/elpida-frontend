
<template>
  <div id="app">

<div class="page-wrapper">
 <div class="nav-wrapper">
  <div class="grad-bar"></div>
  <nav class="navbar" >
    <img src="assets/logo.png" alt="Company Logo">
    <div class="menu-toggle" id="mobile-menu" ref="toggler" @click="someFunc()" v-bind:class="{ 'is-active': componentVar }">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <ul class="nav" v-bind:class="{ 'mobile-nav': componentVar }">
     <li class="nav-item"> <router-link to="/"> Get started </router-link></li>
     <li class="nav-item"> <router-link to="/docs"> Documentation</router-link></li>
     <li class="nav-item"> <router-link to="/search"> <i class="icon-search"></i> Benchmark </router-link></li>
     <li class="nav-item"> <router-link to="/test"> Chart </router-link></li>
    </ul>
  </nav>
  </div>

    <div class="content">
        <!--startOfContent--->
            <router-view/>
        <!--endOfContent--->
    </div> <!--/content--->

        <div class="footer">
         <i class="icon-heart"></i> Klapeto 2020
        </div>   <!--/footer--->

    </div>  <!--/pageWrapper--->
  </div>    <!--/app--->

</template>

<style>

</style>
<script>
const menuToggle = false;
  export default {
    data() {
      return {
        componentVar: menuToggle
      }
    },
    methods: {
      someFunc() {
          this.componentVar= !this.componentVar
       // alert(this.componentVar)
      }
    },
    created() {
      //this.someFunc()
    }
  }


/*
 data: {
        menuToggle: false
    },
    methods: {
        activeLink() {
            // the line below did not work
            // document.getElementsByClassName("active").isActive = false,
            this.menuToggle = !this.menuToggle
        }
    },
    */
</script>