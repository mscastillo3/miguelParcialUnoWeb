import {useTranslations} from 'next-intl';
import React from 'react';
import Image from "next/image";
import CartaPokemon from './CartaPokemon';

type Pokemon = {
    name:string 
    url:string
} 


const returnPokemon =  async () => {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15");
    const data = await result.json()
    
    return(data)
    
}



const  ListadoPokemon = async () =>{

    const pokemones  = await returnPokemon()
    if (pokemones != null)
        return (
        
        pokemones["results"].map((pokemon: Pokemon) => {
                
                return(
                <div  className=""key= {pokemon.name}>
                
                <div><CartaPokemon pokemon={pokemon}></CartaPokemon>   </div>
                </div> )
                        
                    })
                )
    
}

export default ListadoPokemon;
    
