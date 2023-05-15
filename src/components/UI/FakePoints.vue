<script>
export default {
  name: "edit-points-input",
};
</script>
<script setup>
const emit = defineEmits(["upd"]);
const changeTotalPoints = (e) => {
  emit("upd", +e.target.value);
};
</script>
<template>
  <p>
    <input
      type="number"
      @input="changeTotalPoints"
      placeholder="Enter fake points"
    />
  </p>
</template>
<style lang="scss" module scoped>
input {
  position: relative;
  z-index: 100;
  width: 55.9%;
  margin: 10px auto 0;
  padding: 4.2221px 20.2221px;
}
</style>
