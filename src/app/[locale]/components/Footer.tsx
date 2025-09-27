import {useTranslations} from 'next-intl';
import React from 'react';

const Footer = () =>{
    const t = useTranslations('Footer');
    return (

        <div className='flex min-w-full bg-[#11463B]'>
            <div className='flex w-1/2 '>
              <p className='py-2 px-10 text-white'> {t("rights")}</p>  
            </div>
              <div className='flex w-1/2 justify-end '>
              <p className='py-1 px-10 text-white'>{t("developed")}</p>  
            </div>

        </div>
    )
}

export default Footer;
    
