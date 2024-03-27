import { star } from "../Assets/icons"

const Popularproductcard = ({imgURL, price, name}) => {
    
  return (
    <div className="flex flex-1 flex-col max-sm:w-full w-full">
        <img src={imgURL} alt="popularshoeimg" className="h-[280px] w-[280px]"/>
        <div className="mt-8 flex justify-start gap-[2.5]">
            <img src={star} alt="start_icon" width={24} height={24}/>
            <p className="font-montserrat text-lg leading-normal text-slate-gray mx-3">4.5</p>
            
        </div>
          
          <h3 className="mt-2 text-2xl font-palanquin leading-normal font-semibold">{name}</h3>
          <p className=" text-21x font-semibold font-montserrat leading-normal text-coral-red mt-2">{price}</p>



    </div>
  )
}

export default Popularproductcard
