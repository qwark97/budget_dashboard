<template>
  <div class="small-card">
    <div class="card-name">
      {{ name }}
    </div>
    <div class="card-value">
      {{ value }} {{ unit }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SmallCard",
  props: ['name', 'value', 'unit'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
