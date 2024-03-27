import { star } from "../Assets/icons"

const Customercard = ({imgURL, CustomerName, feedback, Rating}) => {
  return (
    <div className="flex flex-1 justiyf-center items-center flex-col max-lg:mt-12">
      <img src={imgURL} alt="customer_img" className="rounded-full object-cover w-[120px] h-[120px]"/>
      <p className="info-text mt-6 text-center max-w-sm">{feedback}</p>
      <div className="flex justify-center gap-2 mt-2">
        <img src={star} alt="star_icon h-[20px] w-[20px] object-contain m-0"/>
        <p className="text-slate-gray text-xl font-montserrat">({Rating})</p>
       
      </div>
        <h3 className="text-3xl font-palanquin text-center font-bold">{CustomerName}</h3>
    </div>
  )
}

export default Customercard
