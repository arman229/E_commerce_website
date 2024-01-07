'use client'
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import CardComponent from "@/components/ui/card";
import {HeroPage} from "@/components/ui/heropage";
import {InputWithButton} from "@/components/ui/newsletter";
import {PromotionsEvents} from "@/components/ui/promotionsEvents";
import {EmptyCartComponent} from "@/components/ui/emptyitms";
import MySwiper from "@/components/ui/swiper";
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

</> )
}
