
import { Metadata } from 'next';
import CartaPokemon from './components/CartaPokemon';
import {useTranslations} from 'next-intl';
import ListadoPokemon from './components/ListadoPokemon';

export const metadata: Metadata = {
  title: 'Pokedex Nacional - PokeApp',
  description: 'Explora la Pokédex de la primera generación: un listado completo de Pokémon con sus características y detalles principales.',
};





  type Pokemon = {
    name:string 
    url:string
} 
export  default  function Home() {
  

  const t = useTranslations('HomePage');


   
      return (
         <div className="  items-center   py-5 px-50 min-h-screen  bg-[#D9E9FE] ">
          <div className=" py-4 flex  justify-center w-full">
            <h2 className=" text-black font-bold text-2xl">{t("Pokemons")}</h2>
          </div>
            
            <div className="    grid grid-cols-3 gap-4">
            <ListadoPokemon/>
            </div>



         </div>
      );
}
