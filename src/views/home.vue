<template>
  <div class="home">
      <!--
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld msg="Get started"/>
     <HelloWorld msg="Download"/>
      <HelloWorld msg="Features"/>
      <HelloWorld msg="Contact us"/>
-->


 <section class="headline">
    <h1>Test your performances</h1>
  

    
  </section>
  <section class="download">
  <h3 style="display:inline">Install Elpida and do your benchmarks</h3>  <a class="btn-success btn btn-large" style="width=150px;height:40px;"><i class="icon-arrow-down" aria-hidden="true"></i> Download </a>
 </section>
  <section class="features">
    <div class="feature-container">
      <img src="https://cdn-images-1.medium.com/max/2000/1*HFAEJvVOq4AwFuBivNu_OQ.png" alt="Flexbox Feature">
      <h2>Flexbox Featured</h2>
      <p>This pen contains use of flexbox for the headline and feature section! We use it in our mobile navbar and show the power of mixing css grid and flexbox.</p>
    </div>
    <div class="feature-container">
      <img src="https://blog.webix.com/wp-content/uploads/2017/06/20170621-CSS-Grid-Layout-710x355-tiny.png" alt="Flexbox Feature">
      <h2>CSS Grid Navigation</h2>
      <p>While flexbox is used for the the mobile navbar, CSS grid is used for the desktop navbar showing many ways we can use both.</p>
    </div>
    <div class="feature-container">
      <img src="https://blog.edx.org/wp-content/uploads/2015/09/null-1.jpg" alt="Flexbox Feature">
      <h2>Basic HTML5</h2>
      <p>This pen contains basic html to setup the page to display the responsive navbar.</p>
    </div>
  </section>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
