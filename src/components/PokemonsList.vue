<template>
    <header-app title="Pokemons"/>
    <ion-content :fullscreen="true">
        <ion-row
        v-if="pokemons.length > 0"
        class="adjust-height d-flex justify-content-center"
        >
        <ion-col
            class="d-flex justify-content-center"
            v-for="pokemon in pokemons"
            :key="pokemon.id"
            size="6"
        >
            <pokemon-card :pokemon="pokemon" />
        </ion-col>
        </ion-row>
        <ion-row
        v-else
        class="d-flex justify-content-center aling-items-center spinner-container"
        >
        <ion-col class="d-flex justify-content-center aling-items-center">
            <ion-spinner name="dots" class="spinner-custom"></ion-spinner>
        </ion-col>
        </ion-row>
        <ion-row>
        <ion-col class="d-flex justify-content-center">
            <ion-button @click="previosPage()">
            Anterior
            </ion-button>
        </ion-col>
        <ion-col class="d-flex justify-content-center">
            <h5>{{ start }} - {{ end }}</h5>
        </ion-col>
        <ion-col class="d-flex justify-content-center">
            <ion-button @click="nextPage()">
            siguiente
            </ion-button>
        </ion-col>
        </ion-row>
    </ion-content>
</template>
<script lang="ts">
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonRow,
    IonCol,
    IonMenu,
    IonMenuButton,
    IonButtons,
    IonButton,
    IonSpinner,
} from "@ionic/vue";
import PokemonServices from "@/services/PokemonServices";
import PokemonCard from '@/components/PokemonCard.vue';
import HeaderApp from "@/components/HeaderApp.vue";
export default {
    name: "HomePage",
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonRow,
        IonCol,
        IonMenu,
        IonMenuButton,
        IonButton,
        IonButtons,
        IonSpinner,
        PokemonCard,
        HeaderApp
    },
    data() {
        return {
            pokemons: [
                {
                    id: "",
                    name: "",
                    image: "",
                },
            ],
            page: 0,
            start: 1,
            end: 10,
        };
    },
    async created() {
        await this.getPokemonsList(this.start, this.end);
    },
    methods: {
        async getPokemonsList(start: number, end: number) {
        this.pokemons = await PokemonServices.getPokemonList(start, end);
        },
        async nextPage() {
        if (this.page < 65) {
            this.pokemons = [];
            this.page = this.page + 1;
            this.start = this.page * 10 + 1;
            this.end = (this.page + 1) * 10;
            await this.getPokemonsList(this.start, this.end);
        }
        },
        async previosPage() {
            if (this.page > 0) {
                this.pokemons = [];
                this.page = this.page - 1;
                this.start = this.page * 10 + 1;
                this.end = (this.page + 1) * 10;
                await this.getPokemonsList(this.start, this.end);
            }
        },
    },
};
</script>
