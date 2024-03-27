import headerLogo from '../Assets/images/header-logo.svg'
import hamburger from '../Assets/icons/hamburger.svg'
import {navLinks} from '../constant/index'
const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img 
          src={headerLogo} 
          alt="NikeLogo"
          width={130}
          height={29} 
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item)=>(
            <li 
            key={item.label}>
              <a href={item.href}
              className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
              
            </li>
          ))}

        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger-icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
