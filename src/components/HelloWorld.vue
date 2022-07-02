
<template>
  <div>
    <h1>{{ msg }}</h1>

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Docs
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <button type="button" @click="handleClick">点击你咋了</button>
    <p>Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<script setup lang="ts">
  import { effectScope, computed, watchEffect, watch, ref } from 'vue'

  // defineProps<{ msg: string }>()

  const props = defineProps({
    msg: String
  })

  const emits = defineEmits(['myChange'])

  let handleClick = () => {
    emits('myChange', '1222')
    console.log('点击了')
  }

  const count = ref(0)

  // watchEffect(
  //   () => count,
  //   (value, preValue) => {
  //     console.log('值更新了', value, preValue)
  //   }
  // )
  watch(count, (count, prevCount) => {
    console.log('我要做点什么', count, prevCount)
  })


  const scope = effectScope()
  let counter = ref(6)
  console.log(counter, 'counter')
  scope.run(() => {
    
  })
  // 处理该作用域内的所有 effect
  scope.stop()

  const doubled = computed(() => counter.value * 2)

  watch(doubled, () => console.log(doubled.value), {
    // immediate: true
  })
  watchEffect(() => console.log('Count: ', doubled.value))

  counter.value=20

  // watchEffect(() => {
  //   console.log('我要做点什么')
  // })
</script>


<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
