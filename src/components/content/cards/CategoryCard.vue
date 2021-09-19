<template>
  <div class="cat-card">
    <div class="cat-name">
      {{ category.Name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: ['category']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
