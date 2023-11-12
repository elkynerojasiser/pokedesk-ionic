<template>
    <header-app title="Juego"/>
    <game-app/>
</template>

<script lang="ts">
import HeaderApp from '@/components/HeaderApp.vue';
import GameApp from '@/components/GameApp.vue';
export default {
    name: 'GamePage',
    components: {HeaderApp, GameApp}
}
</script>

<style>

</style>