<template>
  <div class="content">
    <Header />
    <Sidebar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/content/Sidebar.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: "App",
  components: {
    Header,
    Sidebar,
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
