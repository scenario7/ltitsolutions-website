import React from 'react'
const NavBar = () => {


  return (
    <div className=''>
      <div className='bg-white w-screen px-5 py-2 outline outline-blue-600 outline-4 flex items-center justify-center sticky top-0'>
      <img src='https://firebasestorage.googleapis.com/v0/b/vistara-website.appspot.com/o/ltitlogo.jpeg?alt=media&token=7b1cb859-1f90-428b-8a81-2eaf234d05f6' alt="" className='w-36 h-12 object-cover' />

      </div>
    <div className='bg-stone-900 px-8 py-3 flex flex-col items-center'>
        <div className="flex items-center justify-between w-full">
        <a href="/">
            <h1 className='font-serif text-white text-2xl py-5 text-left'>LT IT Solutions</h1>
        </a>
        <div className='flex flex-col items-end'>
          <a href='tel:+971508263954'>
            <h1 className='font-sans text-white lg:text-lg md:text-lg text-xs'>+971 50 8263954</h1>
          </a>
          <a href='mailto:info@ltitsolutions.com'>
            <h1 className='font-sans text-white lg:text-lg md:text-lg text-xs'>info@ltitsolutions.com</h1>
          </a>
        </div>
        </div>
        <div className='flex items-center justify-center  pb-3 gap-2'>
            <a href="/solutions">
            <button className={`font-sans text-gray-400 hover:text-white  px-3 py-2 rounded-full`} href="/projects">
                Solutions
            </button>
            </a>
            <a href="/verticals">
            <button className={`font-sans text-gray-400 hover:text-white  px-3 py-2 rounded-full`} href="/projects">
                Verticals
            </button>
            </a>
            <a href="/contact">
            <button className='font-sans hover:bg-blue-600 hover:text-white transition ease-out bg-white text-blue-600 px-3 py-2 rounded-full' href="/projects">
                Contact
            </button>
            </a>
        </div>
    </div>
    </div>
  )
}

export default NavBar