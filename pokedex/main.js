
//create a class to contain selected api info
class KevinKetchum {
  constructor () {
    this.all = []
  }
  add(pokemon) {
    this.all.push(pokemon)
    //adds and pushes needed api info
   }
  }

  class Pokemon {
    constructor(name, attack, defense, abilities,hp) {
      this.name = name
      this.attack = attack
      this.defense = defense
      this.abilities = abilities
      this.hp = hp
    }
  }

  // let ul = document.querySelector("ul")
  let kevinKetchum = new KevinKetchum()


  //Charmeleon
  axios.get("https://pokeapi.co/api/v2/pokemon/5/")
  .then((response) => {

    let ul = document.querySelector("#char")

    let name = document.createElement("li")
    let attack = document.createElement("li")
    let defense = document.createElement("li")
    let abilities = document.createElement("li")
    let hp= document.createElement("li")
    let data = response.data


    let charmeleon = new Pokemon(
      data.name,
      data.stats[4].base_stat,
      data.stats[3].base_stat,
      data.abilities,
      data.stats[5].base_stat
    )

    kevinKetchum.add(charmeleon)

    name.innerHTML = charmeleon.name
    attack.innerHTML = charmeleon.attack
    defense.innerHTML = charmeleon.defense
    abilities.innerHTML = [
      charmeleon.abilities[0].ability.name,
      charmeleon.abilities[1].ability.name,
      ]

    hp.innerHTML = charmeleon.hp
    data.innerHTML = charmeleon.data

    ul.appendChild(name)
    ul.appendChild(attack)
    ul.appendChild(defense)
    ul.appendChild(abilities)
    ul.appendChild(hp)

  }).catch((error) => {
     console.log(error)
   })

    axios.get("https://pokeapi.co/api/v2/pokemon/jigglypuff/")
    .then((response) => {

      let ul = document.querySelector("#jiggly")

      let name = document.createElement("li")
      let attack = document.createElement("li")
      let defense = document.createElement("li")
      let abilities = document.createElement("li")
      let hp= document.createElement("li")
      let data = response.data


      let jigglypuff = new Pokemon(
        data.name,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities,
        data.stats[5].base_stat
      )

      kevinKetchum.add(jigglypuff)

      name.innerHTML = jigglypuff.name
      attack.innerHTML = jigglypuff.attack
      defense.innerHTML = jigglypuff.defense
      abilities.innerHTML = [
        jigglypuff.abilities[0].ability.name,
        jigglypuff.abilities[1].ability.name,
        jigglypuff.abilities[2].ability.name
      ]
      hp.innerHTML = jigglypuff.hp
      data.innerHTML = jigglypuff.data

      ul.appendChild(name)
      ul.appendChild(attack)
      ul.appendChild(defense)
      ul.appendChild(abilities)
      ul.appendChild(hp)

  }).catch((error) => {
     console.log(error)
   })


   axios.get("https://pokeapi.co/api/v2/pokemon/meowth/")
   .then((response) => {

     let ul = document.querySelector("#meowth")

     let name = document.createElement("li")
     let attack = document.createElement("li")
     let defense = document.createElement("li")
     let abilities = document.createElement("li")
     let hp= document.createElement("li")
     let data = response.data

     let meowth = new Pokemon(
       data.name,
       data.stats[4].base_stat,
       data.stats[3].base_stat,
       data.abilities,
       data.stats[5].base_stat
     )

     kevinKetchum.add(meowth)

     name.innerHTML = meowth.name
     attack.innerHTML = meowth.attack
     defense.innerHTML = meowth.defense
     abilities.innerHTML = [
       meowth.abilities[0].ability.name,
       meowth.abilities[1].ability.name,
       meowth.abilities[2].ability.name,

     ]

     hp.innerHTML = meowth.hp
     data.innerHTML = meowth.data

     ul.appendChild(name)
     ul.appendChild(attack)
     ul.appendChild(defense)
     ul.appendChild(abilities)
     ul.appendChild(hp)

   }).catch((error) => {
      console.log(error)
    })
//Charmeleon
// axios.get("https://pokeapi.co/api/v2/pokemon/5/")
// .then((response) => {
//   let data = response.data
//   let kevinKetchum = new KevinKetchum()
//
//   let name = document.createElement("li")
//   name.innerHTML = data.name
//   pokeOne.appendChild(name)
//
//   let attack = document.createElement("li")
//   attack.innerHTML = data.stats[4].base_stat
//   pokeOne.appendChild(attack)
//
//   let defense = document.createElement("li")
//   defense.innerHTML = data.stats[3].base_stat
//   pokeOne.appendChild(defense)
//
//   let abilities = document.createElement("li")
//   abilities.innerHTML = data.abilities
//   pokeOne.appendChild(abilities)
//
//   let hp = document.createElement("li")
//   hp.innerHTML = data.stats[5].base_stat
//   pokeOne.appendChild(hp)
//   })
//
// //Jigglypuff
// axios.get("https://pokeapi.co/api/v2/pokemon/jigglypuff/")
// .then((response)=> {
//   let data = response.data
//
//   let name = document.createElement("li")
//   name.innerHTML = data.name
//   pokeTwo.appendChild(name)
//
//   let attack = document.createElement("li")
//   attack.innerHTML = data.stats[4].base_stat
//   pokeTwo.appendChild(attack)
//
//   let defense = document.createElement("li")
//   defense.innerHTML = data.stats[3].base_stat
//   pokeTwo.appendChild(defense)
//
//   let abilities = document.createElement("li")
//   abilities.innerHTML = data.abilities
//   pokeTwo.appendChild(abilities)
//
//   let hp = document.createElement("li")
//   hp.innerHTML = data.stats[5].base_stat
//   pokeTwo.appendChild(hp)
//   })
//
// //Meowth
// axios.get("https://pokeapi.co/api/v2/pokemon/meowth/")
// .then((response) => {
//   let data = response.data
//
//   let name = document.createElement("li")
//   name.innerHTML = data.name
//   pokeThree.appendChild(name)
//
//   let attack = document.createElement("li")
//   attack.innerHTML = data.stats[4].base_stat
//   pokeThree.appendChild(attack)
//
//   let defense = document.createElement("li")
//   defense.innerHTML = data.stats[3].base_stat
//   pokeThree.appendChild(defense)
//
//   let abilities = document.createElement('li')
//   abilities.innerHTML = data.abilities.ability
//   pokeThree.appendChild(abilities)
//
//   let hp = document.createElement("li")
//   hp.innerHTML = data.stats[5].base_stat
//   pokeThree.appendChild(hp)
//   })

// console.log(KevinKetchum)
