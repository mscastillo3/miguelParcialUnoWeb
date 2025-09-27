import {useTranslations} from 'next-intl';
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
const Header = () =>{
    return (

        <header className=' py-4 flex items-center justify-center w-full bg-[#E71309]'>
            <Link href = "/"><Image src = "/pokemon-logo.png" alt="logo" width={200} height={100} className=' '></Image></Link >
        </header>
    )
}

export default Header;
    
