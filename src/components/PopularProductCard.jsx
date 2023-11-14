import { star } from "../assets/icons"

const PopularProductCard = ({imgURL , name ,price ,rating}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={imgURL} alt={name} 
            className="w-[280px] h-[280px]"
            />
            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="star-icon" 
                className="w-[24px] h-[24px]"
                />
                <p className="leading-normal text-xl text-slate-gray font-montserrat">
                    {rating}
                </p>
               
            </div>
            <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">
                    {name}
            </h3>
            <p className="text-[crimson] text-2xl leading-normal font-montserrat">
                {price}
            </p>
    </div>
  )
}

export default PopularProductCard