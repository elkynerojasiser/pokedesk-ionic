<template>
    <header-app title="Detalle"/>
    <ion-content class="detail-container" :fullscreen="true">
        <ion-row class="d-flex justify-content-center">
            <ion-col size="8" class="d-flex justify-content-center">
                <h4>{{ pokemon.name.toUpperCase() }}</h4>
            </ion-col>
        </ion-row>
        <ion-row class="d-flex justify-content-center">
            <ion-col size="8">
                <ion-img
                    class="pokemon-image"
                    :src="pokemon.image"
                    alt="The Wisconsin State Capitol building in Madison, WI at night"
                ></ion-img>
            </ion-col>
        </ion-row>
        <ion-row class="d-flex justify-content-center">
            <ion-col size="8" class="d-flex justify-content-center">
                <h4>Tipos</h4>
            </ion-col>
        </ion-row>
        <ion-row class="d-flex justify-content-center">
            <ion-col size="8" class="d-flex justify-content-center">
                <ion-chip v-for="(type, index) in pokemon.types" :key="index">{{ type.description.toUpperCase() }}</ion-chip>
            </ion-col>
        </ion-row>
        <ion-row  class="d-flex justify-content-center">
            <ion-col size="12">
                <ion-button expand="block" fill="outline" @click="openStats = true">Características</ion-button>
            </ion-col>
        </ion-row>
        <ion-row  class="d-flex justify-content-center">
            <ion-col size="12" >
                <ion-button expand="block" fill="outline" @click="openAbilities = true">Habilidades</ion-button>
            </ion-col>
        </ion-row>
        <ion-row  class="d-flex justify-content-center">
            <ion-col size="12">
                <ion-button expand="block" fill="outline" @click="openMoves = true">Movimientos</ion-button>
            </ion-col>
        </ion-row>
        <!--Modal Stats-->
        <ion-modal :is-open="openStats">
            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-button @click="openStats = false">Cerrar</ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
                <ion-title class="modal-title">
                    {{ pokemon.name }}
                </ion-title>
                <ion-list>
                    <ion-item v-for="(stat, index) in pokemon.stats" :key="index">
                        <small>{{ stat.description }}</small>
                    </ion-item>
                </ion-list>
            </ion-content>
        </ion-modal>
        <!--Modal Abilities-->
        <ion-modal :is-open="openAbilities">
            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-button @click="openAbilities = false">Cerrar</ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
                <ion-title class="modal-title">
                    {{ pokemon.name }}
                </ion-title>
                <ion-accordion-group>
                    <ion-accordion v-for="(ability, index) in pokemon.abilities" :key="index" :value="ability.name">
                        <ion-item slot="header" color="light">
                            <ion-label>{{ ability.name }}</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">{{ ability.description }}</div>
                    </ion-accordion>
                </ion-accordion-group>
            </ion-content>
        </ion-modal>
        <!--Modal Moves-->
        <ion-modal :is-open="openMoves">
            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-button @click="openMoves = false">Cerrar</ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
                <ion-title class="modal-title">
                    {{ pokemon.name }}
                </ion-title>
                <ion-accordion-group>
                    <ion-accordion v-for="(move, index) in pokemon.moves" :key="index" :value="move.name">
                        <ion-item slot="header" color="light">
                            <ion-label>{{ move.name }}</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">{{ move.description }}</div>
                    </ion-accordion>
                </ion-accordion-group>
            </ion-content>
        </ion-modal>
    </ion-content>
</template>

<script lang="ts">
import HeaderApp from './HeaderApp.vue';
import { IonContent, IonRow, IonCol, IonTitle, IonImg, IonList, IonItem, IonButton, IonModal, IonAccordionGroup, IonAccordion, IonBadge } from '@ionic/vue';
export default {
    name: "PokemonDetail",
    components: {
        HeaderApp,
        IonContent,
        IonRow,
        IonCol,
        IonTitle,
        IonImg,
        IonList,
        IonItem,
        IonButton, 
        IonModal,
        IonAccordionGroup,
        IonAccordion,
        IonBadge
    },
    props: {
        pokemon: Object
    },
    data() {
        return {
            openStats: false,
            openAbilities: false,
            openMoves: false
        }
    },
    methods: {
        
    }
}
</script>

<style scoped lang="scss">
.detail-container {
    .pokemon-image {
        margin-top: 20%;
        margin-bottom: 20%;
    }
}
.modal-title {
    margin-top: 5%;
    margin-bottom: 5%;
}
</style>