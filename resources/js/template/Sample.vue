<template>
  <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
      >
         <v-list dense>
            <v-subheader>LIST COMPONENTS:</v-subheader>
               <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  :to="item.to"
               >
                  <v-list-item-icon>
                     <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                     <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
               </v-list-item>
         </v-list>
      </v-navigation-drawer>

      <v-app-bar app>
         <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
         <v-toolbar-title>test</v-toolbar-title>
      </v-app-bar>

      <v-main class="ma-2">
         <router-view></router-view>
      </v-main>
  </v-app>
</template>

<script>
   export default {
      data: () => ({
         drawer: null,
         items:[
            {text:'Home', icon:'mdi-home', to:'home'},
            {text:'Hello', icon:'mdi-hand-wave', to:'hello'},
            {text: 'Test', icon: 'mdi-account', to : 'test'}
         ]
      }),
   }
</script>