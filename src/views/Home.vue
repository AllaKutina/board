<template>
  <div class="inner">
    <h1>Табло аэропорта</h1>
    <MainFilter v-bind:data="navigation" v-on:getFilter="saveFilter"/>
    <Search v-on:getValue="saveValue"/>
    <Board v-bind:data="flights"/>
  </div>
</template>

<script>

import MainFilter from '@/components/MainFilter.vue';
import Search from '@/components/Search.vue';
import Board from '@/components/Board.vue';

const navigation = [
  {
    text: 'Все рейсы',
    value: {
      type: 'all',
    },
  },
  {
    text: 'Вылетающие',
    value: {
      type: 'departure',
    },
  },
  {
    text: 'Прилетающие',
    value: {
      type: 'arrival',
    },
  },
  {
    text: 'Задержанные',
    value: {
      status: 'delay',
    },
  },
];

export default {
  name: 'home',
  data() {
    return {
      navigation,
    };
  },
  components: {
    MainFilter,
    Search,
    Board,
  },
  methods: {
    saveFilter(e) {
      return this.$store.dispatch('changeFilter', e);
    },
    saveValue(e) {
      return this.$store.dispatch('changeValue', e);
    },
  },
  computed: {
    flights() {
      return this.$store.getters.flights;
    },
  },
  created() {
    this.$store.dispatch('fetchFlights');
  },
};
</script>

<style lang="scss">
.inner {
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  max-width: 1280px;
}
</style>
