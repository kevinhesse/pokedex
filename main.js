let ul = document.querySelector("ul")

class AllPokemon {
  constructor () {
    this.all = []
  }
  add(info) {
    this.all.push(info)
  }
}

class Pokemon {
  constructor(hp, attack, defense, abilities, name) {
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.abilities = abilities
    this.name = name
  }

}

axios.get("https://pokeapi.co/api/v2/pokemon/5/")
  .then((response) => {
    let li = document.createElement("li")
    let p = document.createElement("p")
    let h1 = document.createElement("h1")
  })
