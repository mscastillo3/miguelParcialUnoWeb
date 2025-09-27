import {useTranslations} from 'next-intl';
import React from 'react';
import Image from "next/image";
import Link from 'next/link';

type Pokemon = {
    nombre:string 
    imagen:string
} 

type pokemonPormt ={
    pokemon :{name:string 
    url:string}
    
} 

    //Colores del Background para Tailwind
    const BgColorTypes = {
        bug: 'bg-[#a8b820]',
        dark: 'bg-[#705848]',
        dragon: 'bg-[#7038f8]',
        electric: 'bg-[#f8d030]',
        fairy: 'bg-[#f0a6f7]',
        fighting: 'bg-[#c03028]',
        fire: 'bg-[#f08030]',
        flying: 'bg-[#a890f0]',
        ghost: 'bg-[#705898]',
        grass: 'bg-[#78c850]',
        ground: 'bg-[#e0c068]',
        ice: 'bg-[#98d8d8]',
        normal: 'bg-[#a8a878]',
        poison: 'bg-[#a040a0]',
        psychic: 'bg-[#f85888]',
        rock: 'bg-[#b8a038]',
        water: 'bg-[#6890f0]',
    }
    //Colores del Border para Tailwind
    const BorderColorTypes = {
        bug: 'border-[#a8b820]',
        dark: 'border-[#705848]',
        dragon: 'border-[#7038f8]',
        electric: 'border-[#f8d030]',
        fairy: 'border-[#f0a6f7]',
        fighting: 'border-[#c03028]',
        fire: 'border-[#f08030]',
        flying: 'border-[#a890f0]',
        ghost: 'border-[#705898]',
        grass: 'border-[#78c850]',
        ground: 'border-[#e0c068]',
        ice: 'border-[#98d8d8]',
        normal: 'border-[#a8a878]',
        poison: 'border-[#a040a0]',
        psychic: 'border-[#f85888]',
        rock: 'border-[#b8a038]',
        water: 'border-[#6890f0]',
    }



const CartaPokemon = async ({pokemon}: pokemonPormt) =>{

    const returnPokemon =  async () => {
        const result = await fetch(pokemon.url);
        const data = await result.json()
        console.log(data)
        return(data)
        
    }
    
    const pokemon1 = await returnPokemon()
    const imagen ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+pokemon1.id+".png"
    const tipo = pokemon1.types[0]["type"]["name"] as keyof typeof BgColorTypes;
    const classTipo = BgColorTypes[tipo] + " px-2 pb-1 capitalize rounded-xl text-white"
    const classBorder = BorderColorTypes[tipo] + " items-center py-5 justify-items-center rounded-xl  border-2"
    const link = "/Pokemon/" + pokemon1.id

    return (
        <Link href= {link}>
        <div className={classBorder}>
            <img src = {imagen} alt="logo" width={100} height={100} ></img>
            <div className= "py-2 capitalize" >{pokemon1.name}</div>
            <div className={classTipo}>{pokemon1.types[0]["type"]["name"]}</div>
        </div>
        </Link>
    )
}

export default CartaPokemon;
    
