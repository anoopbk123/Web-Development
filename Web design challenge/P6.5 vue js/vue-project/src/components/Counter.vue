<template>
    <h1 class="text-center m1">
        Counter
    </h1>
    <div class="text-center m1">
        <button @click="add">+</button>Count: {{count}} <button @click="minus">-</button>
        <div class="text-center m3"><button :class="{'red':color}" @click="changeColor">Change color</button></div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted, onUpdated, onUnmounted, reactive } from "vue"
    const count = ref(0)
    const count2 = ref(0)
    const color = ref(true)
    const add = ()=>{count.value++, count2.value++}
    const minus = ()=>{count.value--}
    watch(count, (prev)=>{
        alert(`count changed to${ prev}, ${count.value}`)
        console.log(prev)
    })
    watch(count2, ()=>{alert('count2 updated')})
    onMounted(()=>{
        alert('mounted')
    })
    onUpdated(()=>{
        alert('updated')
    })
    onUnmounted(()=>{alert('unmounted')})
    const changeColor = ()=>{
        color.value = !color.value
    }
</script>

<style scoped>
.red{
    background: red;
}
</style>