<template>
  <div class="main">
    <Loading v-if="loading" />
    <div v-else class="cards">
      <CategoryCard v-for="category in categories" v-bind:key="category.name" :category="category"/>
    </div>
  </div>
</template>

<script>
import CategoryCard from '@/components/content/cards/CategoryCard.vue'
import Loading from '@/components/content/Loading.vue'
import { api } from "@/api/gets";

export default {
  name: 'HomePage',
  components: {
    CategoryCard,
    Loading
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
