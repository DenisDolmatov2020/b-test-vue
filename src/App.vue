<template>
 <v-app id="app">
    <Drawer/>
    <v-content>
      <h1>{{ $router.currentRoute.name }}</h1>
      <hr>
      <router-view></router-view>
    </v-content>
</v-app>

</template>

<script>


import Drawer from './components/Drawer'
import store from './store/'

export default {
  name: 'App',
  components: {
    Drawer,
  },
  store,
  data: () => ({
    //
  }),
  created (){
      for (let i = 0; i < 3; i++) {
        let random_element = Math.floor(Math.random() * 300)
        this.$store.dispatch('selectedItem', random_element)
      }
    },
};
</script>
