import React from 'react'
import {RiInformationFill} from 'react-icons/ri'
import {FaMoneyCheckAlt} from 'react-icons/fa'
import TableCicilan from './TableCicilan'

function Detail() {

  return (
    <div className='p-5'>
      <div>
        <h1 className='text-2xl font-semibold'>Skema Kewajiban Bayar</h1>
        <div className='text-white flex gap-2 items-center mt-3 bg-orange-400 px-3 py-2 rounded-md'>
          <RiInformationFill size={45} />
          <p>Pembayaran bersifat Pra Bayar (Pembayaran sebelum pembelajaran), paling lambat tanggal 5 bulan berjalan menunggu 1 bulan cicilan, maka mahasiswa akan dinonaktifkan sementara</p>
        </div>
      </div>
      
      <div className='px-3 py-2 bg-white mt-5 rounded-md'>
        <p className='font-bold text-lg'>Data Pembayaran</p>
        <div className='flex flex-wrap gap-5 items-center mt-5'>
          <p>No. Rekening : <span className='font-semibold'>879866887876</span></p>
          <p>Biaya Pendaptaran : <span className='font-semibold'>879866887876</span></p>
          <p>Diskon Reguler : <span className='font-semibold'>879866887876</span></p>
          <p>Total Biaya Les : <span className='font-semibold'>879866887876</span></p>
          <p>Pilihan Cicilan : <span className='font-semibold'>879866887876</span></p>
          <p>Biaya Les : <span className='font-semibold'>879866887876</span></p>
          <p>Diskon Harga Les : <span className='font-semibold'>879866887876</span></p>
        </div>
        <div className='w-full h-1 bg-gray-200 mt-3 rounded-md'></div>
        <TableCicilan />
      </div>
      <div className='px-3 py-2 bg-white mt-5 rounded-md flex justify-between items-center'>
        <div className='font-semibold'>
          <p>Pembayaran Cicilan</p>
          <p>Total Bayar</p>
        </div>
        <div className='font-semibold'>
          <p>:-</p>
          <p>:-</p>
        </div>
        <button className='flex items-center gap-2 p-2 bg-gray-300 rounded-md text-white'>
          <FaMoneyCheckAlt size={25} />
          <p>Bayar Sekarang</p>
        </button>
      </div>
    </div>
  )
}

export default Detail