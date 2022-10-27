console.log ('Mason')

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data)
// })

const pokeSection = document.querySelector('#poke-section')
const getPokeData = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    console.log(data)

    const pokeName = document.createElement('h3')
    pokeName.innerText = data['name']
    pokeSection.append(pokeName)
    const pokeImg = document.createElement('img')
    pokeImg.setAttribute('src', data.sprites.front_default)
    pokeSection.append(pokeImg)

} 

const pokeBtn = document.querySelector('#poke-btn')
pokeBtn.addEventListener('click', getPokeData)

const clearBtn = document.querySelector('#clear-btn')
const clearPoke = () => {
    pokeSection.innerHTML = ''

}
clearBtn.addEventListener('click', clearPoke)

const formData = document.querySelector('#test-data')
formData.addEventListener('submit', (event) => {
    event.preventDefault()
    const PokeFirstName = event['path'][0][0]['value']
    console.log(PokeFirstName)
})
