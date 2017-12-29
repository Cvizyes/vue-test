<template>
  <div class="container">
      <input type="text" v-model="title">
    </br>
      <h1> {{title}} </h1>
      <p v-if="showName">{{user.firstName}} </p>
      <p v-else="NoBody" ></p>
      <ul>
        <li v-for="item in items"> {{ item.title }} </li>
      </ul>
      <button v-on:click="great">Say Greeting </button>
      </br>
      <input type="text" v-on:keyup="presskey" v-on:keyup.enterhit="">
        </br>
      <label for="">first Name:</label> <input type="text" v-model="user.firstName">
    </hr>
      <label for="">last Name:</label> <input type="text" v-model="user.lastName">
      <h3> {{ fullName }} </h3>
      <h2> {{ msg }} </h2>
  </div>
</template>

<script>
  export default {
    name: 'test',
    props:   {
        msg: {
          type: String,
          default:'foobar'
        }
      },
    data () {
      return {
        title: 'hello world',
        user: {
          firstName: 'Carlos',
          lastName: 'vizcaino'
        },
        showName:true,
        items: [
          {title: 'Item One'},
          {title: 'Item Two'},
          {title: 'Item Thre'}
        ]
      }
    },
    methods: {
      great: function(){
        alert('hello' + ' ' +this.user.firstName+ ' ' + this.user.lastName);
      },
      presskey: function() {
        console.log('pressed');
      },
      enterhit: function(){
        console.log('you hit enter');
          }
        },
        computed: {
          fullName: function () {
            return this.user.firstName + ' ' + this.user.lastName;
          }
        }

      }
</script>

<style scoped>

</style>
