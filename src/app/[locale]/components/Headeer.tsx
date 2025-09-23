import {useTranslations} from 'next-intl';
import React from 'react';
import Image from "next/image";
const Header = () =>{
    return (

        <div className=' justifay-center w-full bg-[#E71309]'>
            <Image src = "/pokemon-logo.png" alt="logo" width={100} height={100} className=' '></Image>
        </div>
    )
}

export default Header;
    
