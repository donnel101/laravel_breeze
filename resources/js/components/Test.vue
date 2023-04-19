<template>
  <div>
    <v-btn color="success" @click="getUsers()">Get All Users</v-btn>
    <v-btn v-if="isLoggedin == false" @click="login()" color="success">Login</v-btn>
    <v-btn v-if="isLoggedin == true" @click="logout()" color="success">Logout</v-btn>
    <v-card v-if="isLoggedin == true">
      <v-card-title primary-title>
        Login User
      </v-card-title>
      <v-card-text>
          <p> name : {{ loggedInUser.name }} </p>
          <p> email : {{ loggedInUser.email }} </p>
      </v-card-text>
    </v-card>
    <div>
      <div v-for="(user, index) in allUsers" :key="index">
          <p> {{ user.name }} </p>
          <p> {{ user.email }} </p>
          <v-divider></v-divider>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
   export default {
      data: () => ({
      }),

      methods: {
        ...mapActions([
            'login',
            'logout',
            'getUsers'
        ]),

      },
      computed: {
        ...mapState([
            'isLoggedin',
            'loggedInUser',
            'allUsers'
        ]),
      },
   }
</script>