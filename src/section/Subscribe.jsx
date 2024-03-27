import Button from '../components/button.jsx'
const Subscribe = () => {
  return (
    <section className="max-container flex justify-between max-lg:flex-col gap-10 "id="Contact_us">
      <h3 className="text-4xl   leading-[68px] font-palanquin font-bold ">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type="text" placeholder="Sign up for@nike.com" className="input"/>
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label="SignUp" fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
