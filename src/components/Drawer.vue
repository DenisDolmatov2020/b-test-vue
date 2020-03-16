<template>
  <v-navigation-drawer :value="true" app floating persistent>
    <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense>
        <v-list-item v-for="route in $router.options.routes" :key="route.path" router :to="route.path">
          <v-list-item-action>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ route.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
</template>


<script>
  export default {
    name: 'Drawer',
    props: {
      source: String,
    },
    data: () => ({

    }),
    created (){
    },
    computed: {

    },
    methods: {

    }
  };
</script>

<style scoped>

</style>