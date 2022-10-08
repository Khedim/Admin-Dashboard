<template>
  <div id="app">
    <AsideView />
    <NavView />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import AsideView from "@/components/AsideView.vue";
import NavView from "@/components/NavView.vue";

export default {
  name: "app",
  components: {
    AsideView,
    NavView,
  },
};
</script>
