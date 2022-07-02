

<template>
  <div>
    <img ref="myTupian" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld @myChange="myHandleChange" msg="Hello Vue 3 + TypeScript + Vite" />
    <span>{{name}}{{age}}----111111</span>
  </div>
</template>



<!--<script lang="ts">
import { computed, defineComponent, onMounted, onUpdated, onUnmounted, getCurrentInstance, ComponentInternalInstance, reactive, ref, toRefs } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default{
  name: 'AppComp',
  data(){
    return {
      name:'xiaosan'
    }
  },

  beforeCreate() {
    console.log('beforeCreate')
  },

  created() {
    console.log('created')
  },

  beforeMount() {
    console.log('beforeMount')
  },

  mounted() {
    console.log('mounted')
  },

  beforeUpdate() {
    console.log('beforeUpdate')
  },

  updated() {
    console.log('updated')
  },

  beforeUnmount() {
    console.log('beforeUnmount')
  },

  unmounted() {
    console.log('unmounted')
  },

  setup(){
    console.log('setup')
    // const { proxy } = getCurrentInstance() as ComponentInternalInstance

    const {proxy} = getCurrentInstance()
    const name =ref('小四')
    const age=ref(18)
    console.log(name, age)
    function plusOne(){
      age.value++ //想改变值或获取值 必须.value
    }
    

    let myTupian = ref()
    console.log(myTupian, 'myTupian--')

    proxy.$nextTick(() => {
      console.dir(proxy.$refs.myTupian)
    })

    onMounted(() => {
      // eslint-disable-next-line no-console
      console.dir(myTupian.value, 'myTupianRef--')
      
    })

    return { //必须返回 模板中才能使用
      name, age, plusOne, myTupian, HelloWorld
    }
  }
}
</script>-->
<script setup lang="ts">
  import { computed, onMounted, onUnmounted, getCurrentInstance, reactive, ref, toRefs } from 'vue'
  import HelloWorld from './components/HelloWorld.vue'

  console.log('setup')
    // const { proxy } = getCurrentInstance() as ComponentInternalInstance

  const {proxy} = getCurrentInstance()
  const name =ref('小四')
  const age=ref(18)
  console.log(name, age)
  function plusOne(){
    age.value++ //想改变值或获取值 必须.value
  }
  // 修改了代码
  let myHandleChange = (value) => {
    console.log('啥意思', value)
  }

  let myTupian = ref()
  console.log(myTupian, 'myTupian--')

  proxy.$nextTick(() => {
    console.dir(proxy.$refs.myTupian)
  })

  onMounted(() => {
    // eslint-disable-next-line no-console
    console.dir(myTupian.value, 'myTupianRef--')
  })

</script>

<!--<script setup lang="ts">
//   // This starter template is using Vue 3 <script setup> SFCs
//   // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//   import HelloWorld from './components/HelloWorld.vue'
  
//   console.log('走吗')

// </script>-->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
