import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import {statistics} from '../links'

const Hero = () => {
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
    </section>
  )
}

export default Hero