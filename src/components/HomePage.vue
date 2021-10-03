<template>
  <div class="main">
    <Loading v-if="loading" />
    <div v-else class="content" >
      <div class="cards">
        <SmallCard :name="leftMoneyCardTitle" :value="moneyLeft" :unit="moneyUnit"/>
      </div>
    </div>
  </div>
</template>

<script>
import SmallCard from '@/components/content/cards/SmallCard.vue'
import Loading from '@/components/content/Loading.vue'
import { getsApi } from "@/api/gets";
import { lang } from "@/descriptions/descriptions";

export default {
  name: 'HomePage',
  components: {
    SmallCard,
    Loading
  },
  data: function () {
    return {
      loading: true,
      moneyLeft: 0,
      moneyUnit: "PLN",
    };
  },
  methods: {
    computeMoneyLeft: async function() {
      const moneyLeftObject = await getsApi.getMoneyLeft();
      this.moneyLeft = moneyLeftObject.amount;
    }
  },
  computed: {
    leftMoneyCardTitle() {
      return lang.LANG[this.$chosenLang]['ALL_FREE_MONEY']
    },
  },
  mounted: async function () {
    await this.computeMoneyLeft();
    this.loading = false;
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
</style>
