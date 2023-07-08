import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaUserCircle} from 'react-icons/fa'

function Navbar({handler}) {
  const [active, setActive] = useState(true);

  const menuHandler = () => {
    setActive(!active);
    handler(active);
  }

  return (
    <div className=' bg-green-500 text-white px-2 py-4 flex justify-between'>
      <div className='flex gap-2 items-center cursor-pointer'>
        <GiHamburgerMenu onClick={menuHandler} size={25} />
        <p className='text-lg font-bold'>Learning Management System</p>
      </div>
      <div className='flex gap-2 items-center mr-5'>
        <FaUserCircle size={25} />
        <p className='text-lg font-bold'>Username</p>
      </div>
    </div>
  )
}

export default Navbar