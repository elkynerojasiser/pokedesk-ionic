import axios from "axios"
async function getStats(stats) {
    
    let gottenStats = []
    stats.forEach(async (element) => {
        await axios.get(`${element.stat.url}`)
        
        .then(response => {
            const characteristics = response.data.characteristics
            characteristics.forEach(async(itemCharacteristic) => {
                let item = await getCharacteristics(itemCharacteristic)
                
                gottenStats.push({description: item.description})
            });
        })
        .catch(error => {
            console.log(error)
        })
    });

    return gottenStats
}

async function getCharacteristics(characteristic) {
    return await axios.get(`${characteristic.url}`)
    .then(response => {
        const descriptions = response.data.descriptions
        // console.log("descriptions", descriptions)
        const description = descriptions.find( itemDescription => {
            return itemDescription.language.name == "es"
        })
        return description
    })
    .catch(error => {
        console.log(error)
    })
}

async function getAbilities(abilities) {
    let gottenAbilities = []
    abilities.forEach(async (element) => {
        await axios.get(`${element.ability.url}`)
        
        .then(response => {
            const item = response.data
            let texts = item.flavor_text_entries
            let description = texts.find( element => {
                return element.language.name == "es"
            })
            gottenAbilities.push({
                name: element.ability.name,
                description : description.flavor_text
            })
        })
        .catch(error => {
            console.log(error)
        })
    });

    return gottenAbilities
}

async function getMoves(moves) {
    let gottenMoves = []
    moves.forEach(async (element) => {
        await axios.get(`${element.move.url}`)
        
        .then(response => {
            const item = response.data
            let texts = item.flavor_text_entries
            let description = texts.find( element => {
                return element.language.name == "es"
            })
            gottenMoves.push({
                name: element.move.name,
                description : description.flavor_text
            })
        })
        .catch(error => {
            console.log(error)
        })
    });

    return gottenMoves
}

async function getTypes(types){
    let gottenTypes = []
    types.forEach(element => {
        gottenTypes.push({
            description: element.type.name
        })
    });

    return gottenTypes
}

async function idsForGame() {
    let list = [];
    for(let i = 0; i<=3; i++){
        list[i] = Math.floor(Math.random() * 649) + 1
    }
    
    return list
}
export default {
    async getPokemonList(start:number,end:number){
        let gottenPokemons = []
        for(let i = start; i<= end; i ++){
            const itemPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error)
            })

            const addedPokemon = {
                id: itemPokemon.id,
                name: itemPokemon.name,
                image: itemPokemon.sprites.other.dream_world.front_default
            }

            gottenPokemons.push(addedPokemon)
        }
        return gottenPokemons;
    },

    async getPokemonDetail(id:number){
        
        const gottenPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
        })
        let pokemon = {
            id: gottenPokemon.id,
            name: gottenPokemon.name,
            image: gottenPokemon.sprites.other.dream_world.front_default,
            abilities: await getAbilities(gottenPokemon.abilities),
            moves: await getMoves(gottenPokemon.moves),
            stats: await getStats(gottenPokemon.stats),
            types: await getTypes(gottenPokemon.types)
        }


        return pokemon
    },
    async getListForGame() {
        const list = await idsForGame()
        let pokemons = [];
        list.forEach(async (element) => {
            const gottenPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${element}`)
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error)
            })
            let pokemon = {
                id: gottenPokemon.id,
                name: gottenPokemon.name,
                image: gottenPokemon.sprites.other.dream_world.front_default,
            }
            pokemons.push(pokemon)
        });
        return pokemons;
    }
}