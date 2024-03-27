
import { shoe8 } from "../Assets/images"
import Button from "../components/button"
const SuperQuality = () => {
  return (
    <div id="about_us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col ">
    
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <br/>
          <span className="text-coral-red">Super</span>
          <span className="text-coral-red inline-block ml-2">Quality</span> Shoes

        </h2>
        <p className="info-text mt-4 lg:max-w-lg" >Mirroring Nikes dedication to pushing boundaries, our clone not only replicates the aesthetic allure of the original but also channels the spirit of relentless progress.</p>
        <p className="info-text mt-6 lg:max-w-lg">Immerse yourself in a world where precision engineering meets unparalleled design. </p>
        <div className="mt-11">
          <Button label="View details" /> 
        </div>

      </div>
      <div className=" flex flex-1 justify-center items-center ">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
      </div>
    </div>
  )
}

export default SuperQuality
