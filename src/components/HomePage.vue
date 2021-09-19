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
import { api } from "@/api/gets";
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
      categories: [],
      moneyLeft: 0,
      moneyUnit: "PLN",
      chosenLang: "PL",
    };
  },
  methods: {
    getCategories: async function () {
      const categories = await api.getCategories();
      this.categories = categories;
      this.loading = false;
    },
    computeMoneyLeft: async function() {
      const moneyLeftObject = await api.getMoneyLeft();
      this.moneyLeft = moneyLeftObject.amount;
    }
  },
  computed: {
    leftMoneyCardTitle() {
      return lang.LANG[this.chosenLang]['ALL_FREE_MONEY']
    },
  },
  mounted: async function () {
    await this.getCategories();
    await this.computeMoneyLeft();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
