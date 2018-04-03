
let ul = document.querySelector("pokeOne")
//create a class to contain selected api info
class kevinKetchum {
  constructor () {
    this.all = []
  }
  add(info) {
    this.all.push(info)
    //adds and pushes needed api info
  }
  }

//links api to page when linked in html
axios.get("https://pokeapi.co/api/v2/pokemon/5/")
.then((response) => {
  let data = response.data

  let name = document.createElement("li")
  name.innerHTML = data.name
  pokeOne.appendChild(name)

  let attack = document.createElement("li")
  attack.innerHTML = data.stats[4].base_stat
  pokeOne.appendChild(attack)

  let defense = document.createElement("li")
  defense.innerHTML = data.stats[3].base_stat
  pokeOne.appendChild(defense)

  let abilities = document.createElement("li")
  abilities.innerHTML = data.abilities
  pokeOne.appendChild(abilities)

  let hp = document. createElement("li")
  hp.innerHTML = data.stats[5].base_stat
  pokeOne.appendChild(hp)

  })
