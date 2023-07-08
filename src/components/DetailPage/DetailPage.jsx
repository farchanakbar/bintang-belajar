import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Detail from './Detail.JSX'

function DetailPage() {
  const [active, setActive] = useState(null);
  return (
    <div className='flex'>
      <Sidebar active={active} />
      <div className='w-full h-screen bg-slate-300'>
        <Navbar handler={setActive} />
        <Detail />
      </div>
    </div>
  )
}

export default DetailPage