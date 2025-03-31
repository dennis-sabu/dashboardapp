import Link from 'next/link'
import React from 'react'


const Home = () => {
  return (<>
  
   <div className='min-h-screen bg-gradient-tp-br from-blue-50 to-indigo-100 flex flex-col item-center justify-center p-6'><div className='text-center'>
   <h1 className='text-5xl font-bold text5-gray-800 mb-6'>
   Welcome to the Dashboard app </h1>
   <p className='text-lg text-gray-600 mb-8'>Manage youer tasks, track analytics, and stay organized with our powerfull dashboard.</p>
   <Link href='/dashboard' className="inline-flex item-center justify-center bg-blue-600 text-whitw px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadoe">
            Go To the Dashboard
          </Link>

   
   </div>
    </div>
    </>
  
  )
}

export default Home