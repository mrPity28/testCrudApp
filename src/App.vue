<template>
  <navbar v-if="rederselect" />
  <router-view></router-view>
</template>

<script>
import navbar from "./components/Navbar.vue";


export default {
  components: {
    navbar,
  },
  computed: {
    rederselect() {
      return this.$route.path !== "/login";
    },
  },
};
</script>

<style>
@media all and (max-width: 1023px) {
  .sidebarno {
    display: none;
  }
}
.scroller {
  scrollbar-color: gray rgb(17 24 39 / var(--tw-bg-opacity));
  scrollbar-width: thin;
}
</style>
