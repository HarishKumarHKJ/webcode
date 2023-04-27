const poke = document.querySelector('#poke')
   poke.addEventListener('click', getName)
     
    async function getName() {
         
      try{
         const getPokemonStats = await axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => res.data.results)
            .then(data => {
                data.map(pokeStat =>{
                    getStats(pokeStat)
                })
                return data
            })
      } catch (error) {
        console.log(error)
      }
    }

    const getMainContainer = document.querySelector('#maincontainer')
    const getStats = async (charStats) => {
        try {
            const inStats = await axios.get(charStats.url)
            .then(res => res.data)
            .then(data => {
                  console.log(charStats)
               
                  // <div class="card" style="width: 18rem;">
                const card = document.createElement('div')
                    card.className = 'card'
                   
                    //<img src="..." class="card-img-top" alt="..."?
                  const frontShiny = data.sprites.front_shiny     
                  const img = document.createElement('img')
                     img.src = frontShiny
                     img.className = 'card-img-top'
                   card.append(img)
                    
            //<div class="card-body">
            const cardBody = document.createElement('div')
              cardBody.className = 'card-body'
             //<h5 class="card-tittle">Card tittle</h5>
             const h5El = document.createElement('h5')
               h5El.className = 'card-tittle'
               h5El.textContent = charStats.name
               cardBody.append(h5El)
               
             // p element.card-text

             const pEl = document.createElement('p')
                 pEl.className = 'card-text'
                 pEl.textContent = data.types.map(type => {
                     console.log(type.type.name)
                    return ' '+ type.type.name
                 })
                 cardBody.append(pEl)

            // const ability = document.createElement('ablty')
              //    ability.className = 'card-text'
                //  ability.textContent = data.ability
                  
                  
                 card.append(cardBody)

             getMainContainer.append(card)

            })
        } catch (error) {
            console.log|(error)
        }
    }


     // https://pokeapi.co/api/v2/pokemon/

     /*
      <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
      */