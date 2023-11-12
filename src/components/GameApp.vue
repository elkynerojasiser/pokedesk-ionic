<template>
<ion-content class="game-container" :fullscreen="true">
    <ion-row class="d-flex justify-content-center">
        <ion-col size="12" class="d-flex justify-content-center">
            <h4>¿Quién es este pokemón?</h4>
        </ion-col>
    </ion-row>
    <ion-row class="d-flex justify-content-center" v-if="correct">
        <ion-col size="6" class="d-flex justify-content-center">
            <div class="container-image">
                <img v-if="!showResult" class="hidden-image" :src="correct.image" alt="">
                <img v-if="showResult"  :src="correct.image" alt="">
            </div>
            
        </ion-col>
    </ion-row>
    <ion-row class="d-flex justify-content-center">
        <ion-col size="10" v-for="(option, index) in pokemons" class="">
            <ion-button fill="outline" :disabled="disabledOptions" @click="validateCorrect(option.id)" expand="block">
                {{ option.name }}
            </ion-button>
        </ion-col>
    </ion-row>
    <ion-row v-if="showResult" class="d-flex justify-content-center">
        <ion-col size="10" class="d-flex justify-content-center flex-column">
            <h4 class="text-center" v-if="result">
                Correcto!!! 
            </h4>
            <h4 class="text-center" v-else="result">
                Incorrecto!!! 
            </h4>
            <h4 class="text-center">
                El pokemón es {{ correct.name.toUpperCase() }}
            </h4>
        </ion-col>
    </ion-row>
    <ion-row v-if="showResult" class="d-flex justify-content-center">
        <ion-col size="10">
            <ion-button href="/game" expand="block">
                Volver a intentarlo
            </ion-button>
        </ion-col>
    </ion-row>
    
</ion-content>
</template>

<script lang="ts">
import { IonContent, IonRow, IonCol, IonButton } from '@ionic/vue';
import PokemonService from '@/services/PokemonServices'

export default {
    name: "GameApp",
    components: {
        IonContent,
        IonRow,
        IonCol,
        IonButton
    },
    data() {
        return {
            pokemons: [{id:'',name:'', image:''}],
            pos: -1,
            correct: {},
            showResult: false,
            result : false,
            disabledOptions: false
        }
    },
    async created(){
        
        this.pokemons = await PokemonService.getListForGame()
        setTimeout(async () => {
            this.pos = await Math.floor(Math.random() * 4)
            this.correct = this.pokemons[this.pos]
        },1000)
    },
    async mounted() {
        
    },
    methods: {
        async getPokemons(){
            this.pokemons = await PokemonService.getListForGame()
            await setTimeout(()=>{this.correct = this.pokemons[2]},1000)
        },
        async validateCorrect(id) {
            if(id == this.correct.id){
                this.result = true
            }
            this.disabledOptions = true
            this.showResult = true
        }
    },
    computed : {
        
    }
}
</script>

<style lang="scss" scoped>

.container-image {

    img {
        max-height: 180px;
    }
    .hidden-image {
        filter: brightness(0);
    }

}

</style>