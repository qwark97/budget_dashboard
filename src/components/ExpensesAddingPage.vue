<template>
  <div class="main">
    <Loading v-if="loading" />
    <div class="adding-operation">
      <div class="input-field">
        <form>
          <select v-model="operation.category">
            <option disabled value="">{{ categoryPlaceholder }}</option>
            <option v-for="category in categories" :key="category">
              {{ category.Name }}
            </option>
          </select>

          <input
            class="amount-input"
            type="number"
            required="required"
            min="0.00"
            max="10000.00"
            step="0.01"
            v-model="operation.amount"
          />
          <button type="button" @click="save">{{ addButtonTitle }}</button>
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
    </div>
  </div>
</template>

<script>
import { postsApi } from "@/api/posts";
import { getsApi } from "@/api/gets";
import { lang } from "@/descriptions/descriptions";
import Loading from "@/components/content/Loading.vue";

export default {
  name: "ExpenseAddingPage",
  components: {
    Loading,
  },
  data() {
    return {
      operation: {
        category: "",
        amount: "0.00",
      },
      success: undefined,
      addingHappened: false,
      categories: [],
      loading: true,
    };
  },
  methods: {
    save() {
      let operation = this.operation;
      if (operation.category == "" || operation.amount <= 0) {
        this.success = false;
        this.addingHappenedEvent();
        return;
      }
      let success = undefined;
      postsApi
        .postOperation(operation)
        .then((res) => {
          if (res == "saved operation into DB") {
            success = true;
          } else if (res == "passed category is invalid") {
            postsApi.postCategory(operation.category).then((res) => {
              if (res == "saved category into DB") {
                postsApi
                  .postOperation(operation)
                  .then((res) => {
                    if (res == "saved operation into DB") {
                      success = true;
                    } else {
                      success = false;
                    }
                  })
                  .then(() => {
                    this.success = success;
                    this.addingHappenedEvent();
                  });
              }
            });
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
    addingHappenedEvent() {
      this.addingHappened = true;
      setTimeout(() => (this.addingHappened = false), 1500);
      if (this.success) {
        this.operation.category = "";
        this.operation.amount = "0.00";
      }
    },
    getCategories: async function () {
      const categories = await getsApi.getCategories();
      this.categories = categories;
      this.loading = false;
    },
  },
  computed: {
    addButtonTitle() {
      return lang.LANG[this.$chosenLang]["ADD_OPERATION_BUTTON_TITLE"];
    },
    successMsg() {
      return lang.LANG[this.$chosenLang]["ADD_OPERATION_SUCCESS_MSG"];
    },
    failMsg() {
      return lang.LANG[this.$chosenLang]["ADD_OPERATION_FAIL_MSG"];
    },
    categoryPlaceholder() {
      return lang.LANG[this.$chosenLang]["ADD_OPERATION_CATEGORY_PLACEHOLDER"];
    },
  },
  mounted: async function () {
    await this.getCategories();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
