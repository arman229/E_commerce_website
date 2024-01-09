'use client'
import {HeroPage} from "@/components/ui/heropage";
import {InputWithButton} from "@/components/ui/newsletter";
import {PromotionsEvents} from "@/components/ui/promotionsEvents";
import Myswiper from "@/components/ui/swiper";
import {Uniquedesigner} from "@/components/ui/uniquedesigner";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect} from 'react';



export default function Home() {
    useEffect(() => {
        AOS.init({duration: 1000,})
    }, []);
    return (
        <>

            <HeroPage/>
            <PromotionsEvents/>
            <Myswiper/>
            <Uniquedesigner/>
            <InputWithButton/>
        </>)
}
