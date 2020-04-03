<template>
  <div id="app">
    <div id="nav">
      <headtop></headtop>
      <ul id="tabMenu">
        <li v-on:click="change(1)">PWA マニフェスト</li>
      </ul>
      <pwamani v-if="active === 1"></pwamani>
      <extension v-if="active === 2"></extension>
    </div>
    <router-view/>
  </div>
</template>

<script>
import headtop from '../src/components/header'
import pwamani from '../src/components/pwamani'
import extension from '../src/components/Extension'

export default {
  components:{
    headtop,
    pwamani,
    extension
  },
  data(){
        return{
            active: 1
        }
    },
    methods:{
        change: function(num){
            this.active = num;
        }
    }
}
</script>

<style lang="stylus">
*{
  margin: 0;
  padding: 0;
}

#nav{
  
}

#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#tabMenu{
  padding: 0;
  display: flex;
  justify-content : center;
  list-style:none;
  margin-top: 50px;
  margin-bottom: 50px;
}

#tabMenu li{
  width: auto;
  padding: 10px 20px;
  margin-right: 10px;
  color: black;
  border: 1px solid black;
  background-color: white;
  cursor :pointer;
}
</style>
