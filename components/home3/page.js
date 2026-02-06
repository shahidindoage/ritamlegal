import Header from "@/components/common/header"
import Hero from "@/components/hero/hero3"
import Blogs from "@/components/hero/blogs"
import Event from "@/components/hero/event"

import Footer from "@/components/common/footer";
import Disclaimer from "@/components/common/disclaimer";
import Practise from '@/components/practise/page'
export default function Home (){
    return (
        <>
        <Hero/>
<Practise/>
<Blogs/>
<Event/>
        </>
    )
}