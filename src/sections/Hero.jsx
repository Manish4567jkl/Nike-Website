import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import {shoes, statistics} from '../links'
//! check the spelling of big shoe image if errors occours 
const Hero = () => {
  const [bigShoeImage , setBigShoeImage] = useState(bigShoe1);
  return (
    <section id="home" className="w-full p-2 flex xl:flex-row flex-col 
    justify-center min-h-screen gap-10 max-container">
     <div className="relative xl:w-2/5 flex flex-col justify-center
      items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-[crimson]">
          Our Winter Collection
        </p>
        <h1 className="font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span
          className="xl:bg-white xl:whitespace-nowrap relative pr-10 z-10"
          >The New Arrival</span>
          <br />
          <span className="text-[crimson] inline-block mt-3">Nike </span> Shoes 
        </h1>
        <p
        className="text-slate-gray text-lg font-montserrat mt-6 mb-14 leading-8 sm:max-w-sm"
        >
          Discover stylish Nike arrivals,quality,comfort,innovation for your active life.
        </p>
        <Button label='Shop now' iconURL={arrowRight}/>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
         {statistics.map((stat) => (
          <div key={stat.label}>
            <p className="text-4xl font-palanquin font-bold">
              {stat.value}
            </p>
            <p className="leading-7 font-montserrat text-slate-gray">
              {stat.label}
            </p>
          </div>
         ))}
        </div>
     </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoe1}
         alt=""
         className="w-[610px] h-[540px] object-contain relative z-10" />
      <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] max-sm:px-6">
        {shoes.map((image , index ) => (
          <div key={index}>
            <ShoeCard 
            index={index}
            imgURL={image}
            changeBigShoeImage={(shoe)=>setBigShoeImage(shoe)}
            BigShoeImage ={bigShoeImage}
            />
          </div>
        ))}
      </div>
      
      
      </div>
    </section>
  )
}

export default Hero