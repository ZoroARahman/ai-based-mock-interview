import React from 'react'
import Headers from './_components/Headers'

function DashboardLayout({children}) {
  return (
    <div>
      <Headers/>
      <div className='mx-5 md:mx-20 lg:mx-36'>
      {children}
      </div>
        
    </div>
  )
}

export default DashboardLayout