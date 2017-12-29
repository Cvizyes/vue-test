<template>
  <div class="users">
    <h1>users</h1>
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="enter name">
        <br>
      <input type="text" v-model="newUser.email" placeholder="enter email">
        <br>
      <input type="Submit"  value="Submit">
    </form>
    <ul>
      <li v-for="user in users" >
          <input type="checkbox" class="toggle" v-model="user.contacted">
          <span :class="{contacted: user.contacted}">
             {{ user.name }}: {{ user.email }}
          </span>
          <button v-on:click="deleteUser (user)">x</button>
       </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'users',
    data () {
      return {
        newUser: {},
        users:[
          {
            name: 'carlos vizcaino',
            email: 'cvizcaino@gmail.com',
            contacted: false
          },
          {
            name: 'carlos reyes',
            email: 'creyes@gmail.com',
            contacted: false
          },
          {
            name: 'juan vizcaino',
            email: 'jvizcaino@gmail.com',
            contacted: false
          }
        ]

      }
    },
    methods: {
      addUser: function(e) {
        this.users.push({
          name: this.newUser.name,
          email: this.newUser.email,
          contacted: false
        });
        e.preventDefault();
        },
        deleteUser: function(user){
          this.users.splice(this.users.indexOf(user), 1);
        }
        },
        created: function(){
          this.$http.get('https://jsonplaceholder.typicode.com/users')
          .then(function(response){
            this.users= response.data;
          });
        }
      }
</script>

<style scoped>
  .contacted{
    text-decoration: line-through;
  }

</style>
