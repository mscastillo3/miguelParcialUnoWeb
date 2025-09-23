import {useTranslations} from 'next-intl';
import React from 'react';
import Image from "next/image";

type Pokemon = {
    nombre:string 
    imagen:string
} 

type pokemonPormt ={
    pokemon :{name:string 
    url:string}
    
} 




const CartaPokemon = ({pokemon}: pokemonPormt) =>{

    const returnPokemon =  async () => {
    const result = await fetch(pokemon.url);
    const data = await result.json()
    console.log(data)
    return(data["results"])
        
    }
    
    const pokemon1 = returnPokemon()
    const imagen ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    return (
        <div className='reounded-xl border'>
            <img src = {imagen} alt="logo" width={100} height={100} ></img>
            <p>{pokemon.name}</p>
        </div>
    )
}

export default CartaPokemon;
    
