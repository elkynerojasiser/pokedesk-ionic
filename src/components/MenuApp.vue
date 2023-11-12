<template>
    <ion-menu content-id="main-content">
        <ion-header>
            <ion-toolbar>
            <ion-title>Menu</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-list>
                <ion-item href="/">
                    <ion-label>Listado de pokemons</ion-label>
                </ion-item>
                <ion-item href="/game">
                    <ion-label>Quién es este pokemón</ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-menu>
</template>

<script lang="ts">
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        IonButtons,
        IonContent,
        IonHeader,
        IonMenu,
        IonMenuButton,
        IonPage,
        IonTitle,
        IonToolbar,
        IonList,
        IonItem,
        IonLabel
    },
});
</script>
