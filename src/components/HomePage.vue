<template>
  <div class="main">
    <div class="cards">
      <SmallCard v-for="category in categories" v-bind:key="category.name"/>
    </div>
  </div>
</template>

<script>
import SmallCard from '@/components/content/cards/SmallCard.vue'
import { api } from "@/api/gets";

export default {
  name: 'HomePage',
  components: {
    SmallCard
  },
  data: function () {
    return {
      loading: true,
      categories: [],
    };
  },
  methods: {
    getCategories: async function () {
      const categories = await api.getCategories();
      console.log("asd", categories)
      this.categories = categories;
      this.loading = false;
    },
  },
  mounted: async function () {
    await this.getCategories();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
