import { useState } from "react"
import { arrowRight } from "../Assets/icons"
import {bigShoe2 } from "../Assets/images"
import Shoecard from "../components/Shoecard"
import Button from "../components/button"
import { shoes, statistics } from "../constant"
const Hero = () => {
  const[shoecollection, setshoecollection]  = useState(bigShoe2);
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col min-h-screen justify-center relative">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white relative z-10 xl:whitespace-nowrap">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
          
        </h1>
        <p className="text-slate-gray font-montserrat text-lg leading-8 mt-6 mb-14 sm:max-w-sm" >Discover,Stylish Nike designs with great, Comfort and Quality to charge your life.</p>
        <Button label = "Shop Now"  iconURL ={arrowRight}/>
        <div className="flex justify-start items-start w-full xl:flex-nowrap flex-wrap  gap-16 mt-20">
          {statistics.map((stat)=>(
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
        
      </div>
      <div className="flex justify-center items-center relative flex-1 xl:min-h-screen max-xl:py-40  bg-[#88AB8E] ">
        <img src={shoecollection} alt="shoe1" width={610} height={510} className="object-contain relative z-10" />
      </div>
      <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[50%] sm:px-20 justify-center">
        {shoes.map((shoe, index)=>(
          <div key={index}>
            <Shoecard
                imgURL = {shoe}
                changeBigshoe = {(shoe)=>{setshoecollection(shoe)}}
                bigshoeimage={shoecollection}
            />

          </div>
        ))}
      </div>
      
    </section>
  )
}

export default Hero
