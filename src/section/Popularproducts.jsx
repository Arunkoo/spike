import Popularproductcard from "../components/Popularproductcard"
import { products } from "../constant"

const Popularproducts = () => {
  return (
    <section  id="products" className="max-container max-sm:mt-12">
      <div  className="flex flex-col gap-4 justify-start">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">popular</span> products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top notch quality and style.With our stunning popular designs to fulfill you life.</p>
      </div>
      <div className="mt-16  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-16">
        {products.map((product)=>(
          <Popularproductcard key={product.name} {...product}/>
        ))}
      </div>

    </section>
  )
}

export default Popularproducts
