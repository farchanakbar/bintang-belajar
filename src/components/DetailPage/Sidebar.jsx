import React, { useState } from 'react'
import {FaUserCircle} from 'react-icons/fa'
import {BiEdit} from 'react-icons/bi'
import {RiBankCardFill} from 'react-icons/ri'
import {IoIosArrowUp} from 'react-icons/io'
import {IoIosArrowDown} from 'react-icons/io'
import {FaRegCircle} from 'react-icons/fa'

import logo from '../../assets/bintangpelajar.png'

function Sidebar({active}) {
  const [cicilan, setCicilan] = useState(false);

  const cicilanHandler = () => {
    setCicilan(!cicilan);
  }

  return (
    <div className='bg-gray-500 h-screen'>
      <div className={`w-[300px] ${active ? 'block' : 'hidden'}`}>
        <div className='w-full bg-slate-200'>
          <img className='py-2 px-5 mx-auto' width={250} src={logo} alt="" />
        </div>
        <div className='w-full p-2 bg-[#2C3333] text-white'>
          <FaUserCircle size={40} className='text-white mx-auto mt-2 cursor-pointer' />
          <p className='mt-4'>Anak<span className='ml-5'>: Zahra Lathifa</span> </p>
          <p className='mt-2'>T.A<span className='ml-[34px]'>: 2020-2023 Kelompok</span></p>
          <button className='flex gap-2 items-center justify-center rounded-md mt-4 py-2 w-full bg-green-600'>
            <p>Ganti anak</p>
            <BiEdit size={20} />
          </button>
        </div>
        <div className='px-3 py-2'>
          <div onClick={cicilanHandler} className='cursor-pointer text-white flex justify-between'>
            <span className='flex gap-2 items-center'>
              <RiBankCardFill size={30} />
              <p>Info Keuangan</p>
            </span>
            {cicilan ? <IoIosArrowUp size={30} /> : <IoIosArrowDown size={30} />}
          </div>
          {cicilan && <span className='flex gap-2 text-black bg-white items-center justify-center font-bold mt-3 w-full py-2 rounded-lg'>
            <FaRegCircle />
            <p>Cicilan</p>
          </span>}
        </div>
      </div>
    </div>
  )
}

export default Sidebar