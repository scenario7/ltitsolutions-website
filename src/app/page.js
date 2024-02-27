import Image from 'next/image'
import NavBar from '@/components/navbar'
import HeroSection from '@/components/herosection'
import WhatWeDo from '@/components/whatwedo'
import CustomFooter from '@/components/customfooter'
import { Inter_Tight } from 'next/font/google'
import Head from 'next/head'


const inter = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className={`flex flex-col overscroll-none ${inter.classname} tracking-tight`}>
      <Head>
      <title>LT IT Solutions</title>
      <meta name="LT IT Solutions" content="LT IT Solutions is a multi-domain technology solutions provider in Dubai with a focus on IT and AV solutions" />
      </Head>
      <NavBar/>
      <HeroSection></HeroSection>
      <WhatWeDo/>
      <CustomFooter/>
    </div>
  )
}