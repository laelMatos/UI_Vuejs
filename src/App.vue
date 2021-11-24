<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("auth", ["sessionData"]),
  },
};
</script>

<style lang="postcss" scoped>
</style>
