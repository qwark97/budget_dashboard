<template>
  <div class="main">
    <div class="adding-category">
      <div class="input-field">
        <form>
          <input v-model="newCategory" />
          <button type="button" @click="addCategory">
            {{ addButtonTitle }}
          </button>
        </form>
      </div>
      <div class="message" v-if="addingHappened">
        <div v-if="success" class="success">
          {{ successMsg }}
        </div>
        <div v-else class="fail">
          {{ failMsg }}
        </div>
      </div>
      <div v-else class="non-message">#tu powinna byc luka wypełniana wiadomością</div>
    </div>
    <Loading v-if="loading" />
    <div v-else class="content">
      <div class="categories">{{ categoriesTitle }}:</div>
      <div class="cards" v-for="category in categories" v-bind:key="category">
        <SmallCard :name="category.Name" />
      </div>
    </div>
  </div>
</template>

<script>
import SmallCard from "@/components/content/cards/SmallCard.vue";
import Loading from "@/components/content/Loading.vue";
import { getsApi } from "@/api/gets";
import { postsApi } from "@/api/posts";
import { lang } from "@/descriptions/descriptions";

export default {
  name: "CategoriesPage",
  components: {
    SmallCard,
    Loading,
  },
  data: function () {
    return {
      loading: true,
      categories: [],
      newCategory: "",
      success: undefined,
      addingHappened: false,
    };
  },
  methods: {
    addingHappenedEvent() {
      this.addingHappened = true;
      setTimeout(() => (this.addingHappened = false), 1500);
      if (this.success) {
        this.newCategory = "";
      }
    },
    getCategories: async function () {
      const categories = await getsApi.getCategories();
      this.categories = categories;
      this.loading = false;
    },
    addCategory: async function () {
      let category = this.newCategory;
      let success = false;
      if (category == "") {
        this.success = false;
        this.addingHappenedEvent();
        return;
      }
      postsApi
        .postCategory(category)
        .then((res) => {
          console.log('res:', res)
          if (res == "saved category into DB") {
            success = true;
            this.getCategories()
          } else {
            success = false;
          }
        })
        .then(() => {
          if (success == undefined) {
            return;
          }
          this.success = success;
          this.addingHappenedEvent();
        });
    },
  },
  computed: {
    addButtonTitle() {
      return lang.LANG[this.$chosenLang]["ADD_CATEGORY_BUTTON_TITLE"];
    },
    successMsg() {
      return lang.LANG[this.$chosenLang]["ADD_OPERATION_SUCCESS_MSG"];
    },
    failMsg() {
      return lang.LANG[this.$chosenLang]["ADD_OPERATION_FAIL_MSG"];
    },
    categoriesTitle() {
      return lang.LANG[this.$chosenLang]["ADD_CATEGORY_CATEGORIES_TITLE"];
    }
  },
  mounted: async function () {
    await this.getCategories();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.cards:hover {
  background-color: bisque;
}
</style>
