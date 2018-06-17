<template>
<div>
  <mu-appbar color="primary" title="Muse-UI-Loading"></mu-appbar>
  <div style="padding: 16px">
    <mu-button @click="loading()">Loading</mu-button>
    <mu-button @click="loading({text: 'loading......'})" color="primary">Loading Text</mu-button>
    <mu-button @click="loading({color: 'secondary', text: 'loading......'})" color="secondary">Loading Color</mu-button>
    <mu-button @click="loading({color: 'secondary', overlayColor: 'rgba(0, 0, 0, .7)', text: 'loading......'})" color="success">Loading Overlay Color</mu-button>
  </div>
  <div style="padding: 16px">
    <mu-button v-loading="isLoading" data-mu-loading-size="24" @click="vloading">v-loading</mu-button>
    <mu-button v-loading="isLoading" color="primary" data-mu-loading-color="secondary" data-mu-loading-size="24" @click="vloading">v-loading color</mu-button>
    <mu-button v-loading="isLoading" color="success" data-mu-loading-color="secondary" data-mu-loading-overlay-color="rgba(0, 0, 0, .7)" data-mu-loading-size="24" @click="vloading">v-loading overlay color</mu-button>
  </div>
</div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    loading (options) {
      const loading = this.$loading(options);
      setTimeout(() => loading.close(), 3000);
    },
    vloading () {
      if (this.isLoading) return;
      this.isLoading = true;
      setTimeout(() => this.isLoading = false, 3000);
    }
  }
};
</script>

