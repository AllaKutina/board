<template>
  <div class="filter">
    <ul class="filter__list">
      <li
        class="filter__item"
        v-for="(item, index) in data"
        v-bind:key="index"
        v-bind:class="{'filter__item_active': activeItem == index}"
        v-on:click="filter(item.value, index)"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'MainFilter',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data: function () {
    return {
      activeItem: 0,
    }
  },
  methods: {
    filter(value, index) {
      this.$emit('getFilter', value);
      this.activeItem = index;
    },
  },
};
</script>

<style scoped lang="scss">
.filter {
  margin-bottom: 40px;

  &__list {
    display: flex;
    padding: 0;
  }

  &__item {
    margin-right: 20px;
    width: 100%;
    list-style: none;
    cursor: pointer;
    text-align: center;
    border: 1px solid black;
    color: #000;
    padding: 20px;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      background-color: grey;
      color: #fff;
      border: 1px solid grey;
    }

    &_active {
      background-color: grey;
      border: 1px solid grey;
      color: #fff;
    }
  }
}
</style>
