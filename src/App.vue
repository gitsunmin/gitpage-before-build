<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class App extends Vue {
  isSelection(path: string) { return this.$route.path === path; }

  created() {
    const lastPath = window.location.href.split('/').pop();
    console.log('lastPath:', lastPath);
    if (this.isSelection(`/${lastPath}`)) return;
    console.log('lastPath?', lastPath);
    this.$router.push(`/${lastPath}`);
  }
}
</script>

<style lang="scss">
body {
  margin: 0px;
  ::selection {
    background-color: teal;
    color: white;
  }
}
</style>
