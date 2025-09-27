
import CartaPokemon from '../../components/CartaPokemon';
import {useTranslations} from 'next-intl';
import ListadoPokemon from '../../components/ListadoPokemon';
import DetallePokemon from '../../components/DetallePokemon';

type Pokemon = {
    name:string 
    url:string
} 

type Props = {
  params: {
    id: string;
    locale: string;
  }
}

export default function Home({ params }: Props) {
  
  const t = useTranslations('Ditile');
  const id = Number(params.id);

   
      return (
         <div className="  items-center   py-5 px-50 min-h-screen   bg-[#D9E9FE]">
          <div className=" py-4 flex  justify-center w-full">
          
          </div>
            
            <div className="">
            <DetallePokemon id={id}
            titulo={t("title")} altura={t("hight")} peso={t("wight")} habilidades={t('habilitis')} tipos={t('Types')} 
    />
            </div>



         </div>
      );
}
