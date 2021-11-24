<template>
  <span class="bt-edit material-icons" @click="triggerSomeAction()">
    edit
  </span>
  <!-- trash icon -->
</template>
<script>
export default {
  name: "ButtonEdit",
  methods: {
    triggerSomeAction() {
      console.log("I'm about to delete user:", this.data.name);
      console.log("The user's gender is:", this.data.id);
    },
  },
  props: {
    // prop below is REQUIRED:
    data: {
      type: Object,
    },
  },
};
</script>
