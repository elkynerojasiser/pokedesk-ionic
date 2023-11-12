<template>
    <pokemon-detail v-if="pokemon.name" :pokemon="pokemon"/>
</template>
<script lang="ts">
    import PokemonDetail from '@/components/PokemonDetail.vue';
    import { useRoute } from 'vue-router';
    import PokemonServices from '@/services/PokemonServices';
    import "@/assets/scss/global.scss"
    export default {
        name: "DeatailPage",
        components: {
            PokemonDetail
        },
        data(){
            return {
                id: 1,
                pokemon: {}
            }
        },
        async created() {
            const route = useRoute()
            this.id = route.params.id
            await this.getPokemonDetail(this.id)
            console.log(this.pokemon)
        },
        methods: {
            async getPokemonDetail(id:number){
                this.pokemon = await PokemonServices.getPokemonDetail(id)
            }
        }
    }
</script>