import Hero from "./section/Hero"
import Popularproducts from "./section/Popularproducts"
import Services from "./section/Services"
import SpecialOffers from "./section/SpecialOffers"
import Subscribe from "./section/Subscribe"
import SuperQuality from "./section/SuperQuality"
import CustomerReviews from "./section/customerReviews"
import Footer from "./section/footer"
import Navbar from "./components/nav"

const App = () => {
  return(
    <main className="relative">
      <Navbar/>
      <section className=" xl:p-l0 wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <Popularproducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffers/>
      </section>
      <section className="padding bg-pale-blue">
        < CustomerReviews/>
      </section>
      <section className="padding sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>

    </main>
  )
}

export default App
