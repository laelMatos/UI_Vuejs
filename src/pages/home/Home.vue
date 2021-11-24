<template>
  <div id="home">
    <navBar />
    <transition name="fade" mode="out-in">
      <studentList />
    </transition>
  </div>
</template>

<script>
import studentList from "../StudenstList/StudentList";
import navBar from "../../components/layout/LayoutNavbar";

//import { store } from "vuex";

export default {
  name: "home",
  computed: {
    routes() {
      return this.$router.options.routes.filter(
        (route) => route.meta && route.meta.showNavbar
      );
    },
  },
  methods: {},
  components: {
    studentList,
    navBar,
  },
};
</script>

<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
  .fade-leave-to
    /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
