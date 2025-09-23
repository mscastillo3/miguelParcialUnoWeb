
import {useTranslations} from 'next-intl';
import CartaPokemon from './components/CartaPokemon';

  const returnPokemon =  async () => {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15");
    const data = await result.json()
    console.log(data)
    return(data)
        
  }



  type Pokemon = {
    name:string 
    url:string
} 
export default async function Home() {

  const pokemones  = await returnPokemon()


   if (pokemones != null){
      return (
         <div className="min-h-screen px-10 py-10 bg-sky-50 grid grid-cols-3 gap-4">
        
          {pokemones["results"].map((pokemon: Pokemon) => {
            
            return(
              <div  className=""key= {pokemon.name}>
              <div><CartaPokemon pokemon={pokemon}></CartaPokemon>   </div>
              </div> )
                    
                })}
          </div> 
  );}
}
