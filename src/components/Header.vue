<template>
<div>
  <v-app-bar>
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/portfolio">Portfolio</v-btn>
      <v-btn text to="/stocks">Stocks</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text @click="endDay">Finish</v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            Save & Load
          </v-btn>
        </template>
        <!-- <template v-slot:activator="{ on }">
          <v-toolbar-title v-on="on">
            <span>Save & Load</span>
          </v-toolbar-title>
        </template> -->
        <!-- <v-btn slot="activator">Save & Load</v-btn> -->
        <v-list>
          <v-list-item @click="saveData">
            <v-list-item-title>Save Data</v-list-item-title>
          </v-list-item>
          <v-list-item @click="loadDataLocal">
            <v-list-item-title>Load Data</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-layout align-center>
        <span class="text-uppercase grey--text text--darken-2">
          Balance: {{ funds }}
        </span>
      </v-layout>
    </v-toolbar-items>
  </v-app-bar>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions(['randomizeStocks', 'loadData'])
    ,
    endDay() {
      this.randomizeStocks();
    }  ,
    saveData() {
      const { funds, stockPortfolio, stocks } = this.$store.getters;
      this.$http.put('data.json', { funds, stockPortfolio, stocks });
    },
    loadDataLocal() {
      this.loadData();
    }
  }
}
</script>

<style>

</style>