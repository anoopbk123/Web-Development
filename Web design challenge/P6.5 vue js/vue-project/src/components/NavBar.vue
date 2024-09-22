<template>
    <nav class="d-flex">
        <RouterLink :to="'/'">
        <h1 class="m1 ">{{title}}</h1>
        </RouterLink>
        <ul class="d-flex">
            <li>
                <RouterLink :to="'/counter'">Counter App</RouterLink>
            </li>
            <li>HH</li>
        </ul>
    </nav>
</template>

<script setup>
    import { RouterLink } from "vue-router"
    const props = defineProps(['title'])
</script>

<style scoped>

</style>