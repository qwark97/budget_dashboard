<template>
  <div class="general-content">
    <Header class="general-header" />
    <Sidebar class="general-sidebar" />
    <router-view class="general-middle" />
    <Footer class="general-footer" />
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

.general-content {
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr 12fr 1fr;
  height: 100vh;
  grid-template-areas: 
    "sidebar header"   
    "sidebar middle"
    "sidebar footer"
}

.general-header {
  grid-area: header;
  background-color: #638931;
}

.general-sidebar {
  grid-area: sidebar;
  background-color: #893144;
}

.general-middle {
  grid-area: middle;
  background-color: #efefef;
}

.general-footer {
  grid-area: footer;
  background-color: #317589;
}
</style>
