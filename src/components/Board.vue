<template>
  <table class="board">
    <tr class="board__item" v-for="item in data" v-bind:key="item.index">
      <td>{{ item.city }}</td>
      <td>{{ item.airlineFlightNumber.join(' / ') }}</td>
      <td>{{ checkType(item.status) }}</td>
    </tr>
  </table>
</template>

<script>

export default {
  name: 'Board',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  methods: {
    checkType(status) {
      switch (status) {
        case 'delay':
          return 'Задержан';
        case 'arrival':
          return 'Прибыл';
        case 'departure':
          return 'Вылетает';
        default:
          return 'Нет статуса';
      }
    },
  },
};
</script>

<style scoped lang="scss">
.board {
  width: 100%;
  height: 100%;
  border-spacing: 0;

  &__item {
    width: 100%;
    height: 100%;
  }

  td {
    padding: 20px 0;
    border-bottom: 1px solid black;
  }
}
</style>
