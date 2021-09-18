<template>
  <div class="content">
    <Header />
    <Sidebar />
    <HomePage />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Content/Sidebar.vue'
import HomePage from '@/components/HomePage.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: "App",
  components: {
    Header,
    Sidebar,
    HomePage,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
