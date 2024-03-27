import { offer } from "../Assets/images"
import Button from "../components/button"
import {arrowRight} from '../Assets/icons'
const SpecialOffers = () => {
  return (
    <section className="flex flex-wrap items-center max-lg:flex-col-reverse gap-10 max-container ">
      <div className="flex-1">
        <img src={offer} alt="offers" width={773} height={687} className="object-contain"/>
      </div>
      <div className="flex flex-1 flex-col ">

        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          
          <span className="text-coral-red">Special   </span>
          Offer

        </h2>
        <p className="info-text mt-4 lg:max-w-lg" >Mirroring Nikes dedication to pushing boundaries, our clone not only replicates the aesthetic allure of the original but also channels the spirit of relentless progress.</p>
        <p className="info-text mt-6 lg:max-w-lg">Immerse yourself in a world where precision engineering meets unparalleled design. </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL= {arrowRight}/>
          <Button label="Learn more" backgroundColor = "bg-white"  borderColor = "bg-coral-red" textColor = "text-slate-gray"/>
        </div>

      </div>
    </section>
  )
}

export default SpecialOffers
