import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Detail from './Detail.JSX'

function DetailPage() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full bg-slate-300'>
        <Navbar />
        <Detail />
      </div>
    </div>
  )
}

export default DetailPage