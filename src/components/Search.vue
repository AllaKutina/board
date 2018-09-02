<template>
  <input
    class="search"
    type="search"
    placeholder="Введите номер рейса..."
    v-on:input="onInput($event.target.value)"
    value=""
  />
</template>

<script>
export default {
  name: 'Search',
  methods: {
    onInput(value) {
      this.$emit('getValue', value);
    },
  },
};
</script>

<style scoped lang="scss">
.search {
  margin-bottom: 20px;
  padding: 20px;
  width: 50%;
  height: 30px;
}
</style>
