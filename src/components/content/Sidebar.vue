<template>
  <div class="sidebar">
    <div class="navigations">
      <ul>
        <li class="nav-item">
          <router-link class="nav-link" to="/">
            {{ homePage }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/add-expense">
            {{ addExpenses }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { lang } from "@/descriptions/descriptions";

export default {
  name: "Sidebar",
  computed: {
    homePage() {
      return lang.LANG[this.$chosenLang]["HOME_PAGE"];
    },
    addExpenses() {
      return lang.LANG[this.$chosenLang]["ADD_EXPENSES_PAGE"];
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
