import {footerLogo} from '../Assets/images'
import{footerLinks, socialMedia} from '../constant'
const Footer = () => {
  return (
    <footer>
      <div className="flex max-sm:flex-col gap-20 items-start justify-between flex-wrap ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer" width={150} height={46}/>
          </a>
          <p className="mt-6 font-montserrat text-base text-white-400 leading-7 sm:max-w-sm">Step into greatness with every stride. Elevate your journey in Nike - where style meets performance. Just do it!</p>
        </div>
        <div className='flex item-center gap-5 mt-8 '>
          {socialMedia.map((icon)=>(
            <div className='flex justify-center item-center w-12 h-12 rounded-full bg-white'>
              <img src={icon.src} alt={icon.alt} width={24} height={24}/>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap mt-10'>
        {footerLinks.map((section)=>(
          <div key={section}>
            <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>
              {section.title}
            </h4>
            <ul>
              {section.links.map((link)=>(
                <li className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray'>
                  <a>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
