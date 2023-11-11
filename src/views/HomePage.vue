<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>POKEDEX</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-row v-if="pokemons.length > 0" class="adjust-height d-flex justify-content-center">
        <ion-col  class="d-flex justify-content-center" v-for="pokemon in pokemons" :key="pokemon.id" size="6">
          <ion-card class="card-pokemon">
            <ion-card-content class="card-content">
              <img class="image-pokemon" :src="pokemon.image" alt="" height="50">
              <h5 class="name-pokemon">{{ pokemon.name.toUpperCase() }}</h5>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
      <ion-row v-else class="d-flex justify-content-center aling-items-center spinner-container">
        <v-col class="d-flex justify-content-center aling-items-center">
          <ion-spinner name="dots" class="spinner-custom"></ion-spinner>
        </v-col>   
      </ion-row>
      <ion-row>
        <ion-col class="d-flex justify-content-center">
          <ion-button @click="previosPage()">
            Anterior
          </ion-button>
        </ion-col>
        <ion-col class="d-flex justify-content-center">
          <h5>
            {{ start }} - {{ end }}
          </h5>
        </ion-col>
        <ion-col class="d-flex justify-content-center">
          <ion-button @click="nextPage()">
            siguiente
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script  lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonRow, IonCol } from '@ionic/vue';
import PokemonServices from '@/services/PokemonServices'

export default {
  name: "HomePage",
  components: {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonRow, IonCol
  },
  data() {
    return {
      pokemons: [
        {
          id: "",
          name: "",
          image: ""
        }
      ],
      page: 0,
      start: 1,
      end: 10
    }
  },
  async created() {
    await this.getPokemonsList(this.start, this.end)
    console.log("pokemons", this.pokemons)
  },
  methods: {
    async getPokemonsList(start:number, end:number) {
      this.pokemons = await PokemonServices.getPokemonList(start,end)
    },
    async nextPage() {
      
      if(this.page < 65){
        this.pokemons = []
        this.page = this.page + 1;
        this.start = (this.page * 10) + 1
        this.end = (this.page + 1) * 10

        await this.getPokemonsList(this.start, this.end)
      }
      
    },
    async previosPage() {
      if(this.page > 0){
        this.pokemons = []
        this.page = this.page - 1;
        this.start = (this.page * 10) + 1
        this.end = (this.page + 1) * 10

        await this.getPokemonsList(this.start, this.end)
        console.log("start", this.start)
        console.log("end", this.end)
      }
      
    }
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
