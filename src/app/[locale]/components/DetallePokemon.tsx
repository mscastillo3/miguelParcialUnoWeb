
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Metadata } from 'next';



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
type Params = {
    id: number;
    altura: string;
    peso: string;
    habilidades: string;
    tipos: string;
    titulo: string 

} 

export const metadata: Metadata = {
  title: 'Detalle del Pokémon - PokeApp',
  description: 'Consulta información detallada de cada Pokémon: estadísticas, tipos, habilidades y otros datos relevantes de la primera generación.',
};
const DetallePokemon = async ({ id, altura, peso, habilidades, tipos, titulo}: Params) =>{

  
    

    const returnPokemon =  async () => {
        const result = await fetch("https://pokeapi.co/api/v2/pokemon/"+id);
        const data = await result.json()
        console.log(data)
        return(data)
        
    }
    
    const pokemon1 = await returnPokemon()
    const imagen ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+id+".png"
    const tipo = pokemon1.types[0]["type"]["name"] as keyof typeof BgColorTypes;
    const tipo2 = pokemon1.types[1] ? pokemon1.types[1]["type"]["name"] as keyof typeof BgColorTypes : null;
    const classTipo = BgColorTypes[tipo] + " items-center justify-center px-2 pb-1 rounded-xl text-white text-center capitalize"
    const classBorder = BorderColorTypes[tipo] + " items-center py-5 justify-items-center rounded-xl bg-white border-2"
    const classTipo2 = tipo2 ? BgColorTypes[tipo2] + " items-center justify-center pb-1 px-2 rounded-xl text-white text-center capitalize" : "";
    const tipo2Existe = pokemon1.types[1] ? true: false; 


    return (
        <div className= "items-center " >
        <div className= "py-4 flex  justify-center w-full font-bold font-bold text-2xl text-400 capitalize " ><h2>{pokemon1.name} - {titulo}</h2></div>
        <div className=" flex items-center py-5 justify-items-center  rounded-xl ">
            <img src = {imagen} alt="logo" width={400} height={200} className={classBorder} ></img>
            <div className= "px-20">
                <div className= "flex gap-1"><p className="font-bold">{altura}: </p> <p> {pokemon1.height*10}cm</p></div>
                <div className= "flex gap-1"><p className="font-bold">{peso}: </p> <p> {pokemon1.weight/10}Kg</p></div>
                <p className="font-bold">{habilidades}:  </p>
                <ul className="list-disc px-5 ">
                    <li>{pokemon1.moves[0]["move"]["name"]} </li>
                    <li>{pokemon1.moves[1]["move"]["name"]} </li>
                </ul>
                <p className="font-bold" >{tipos}: </p>
                <div className='flex gap-1'>
                <div className={classTipo}>{pokemon1.types[0]["type"]["name"]}</div>
                {tipo2Existe && (<div className={classTipo2}>{pokemon1.types[1]["type"]["name"]}</div>)}
                
                </div>

                </div>
            
        </div>
        </div>
    )
}

export default DetallePokemon;
    
