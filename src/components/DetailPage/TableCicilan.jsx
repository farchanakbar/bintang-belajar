import React from 'react'

function TableCicilan() {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs mt-5">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-sm text-center font-semibold border-b bg-gray-50">
              <th className="px-4 py-3">Cicilan</th>
              <th className="px-4 py-3">Bulan</th>
              <th className="px-4 py-3">Nominal</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Bayar</th>
              <th className="px-4 py-3">Riwayat Bayar</th>
            </tr>
          </thead>
          <tbody className="bg-white text-center">
            <tr className="text-gray-700">
              <td className="px-4 py-3">Data 1</td>
              <td className="px-4 py-3">Data 2</td>
              <td className="px-4 py-3">Data 3</td>
              <td className="px-4 py-3">Data 4</td>
              <td className="px-4 py-3">Data 5</td>
              <td className="px-4 py-3">Data 6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableCicilan