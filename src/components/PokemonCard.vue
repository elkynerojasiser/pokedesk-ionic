<template>
    <ion-card class="card-pokemon" :href="`/detail/${pokemon.id}`">
        <ion-card-content class="card-content">
            <img
            class="image-pokemon"
            :src="pokemon.image"
            alt=""
            height="50"
            />
            <h5 class="name-pokemon">{{ pokemon.name.toUpperCase() }}</h5>
        </ion-card-content>
    </ion-card>
</template>
<script lang="ts">

import { IonCard, IonCardContent } from '@ionic/vue';
export default {
    name: "PokemonCard",
    components: {
        IonCard,
        IonCardContent,
    },
    props: {
        pokemon: {
            type: Object,
            default: {}
        }
    }
}
</script>