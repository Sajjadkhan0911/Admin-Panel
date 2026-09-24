import React from 'react'

export default function page() {
  return (
    <div className='py-12 px-8 bg-gray-200 h-full'>
      <div className=' text-4xl font-bold'>
        <h1>Dashboard</h1>
      </div>
      <div className='mt-12 grid grid-cols-3 gap-5 '>

        <div className='bg-white p-5 rounded-2xl border border-gray-900'>
          <p className=''>Total Products</p>
          <div className='w-full h-px bg-gray-900 mt-5'></div>
          <div className=' my-8'>
            <p className='font-bold text-2xl'>47 Products</p>
          </div>
        </div>


        <div className='bg-white p-5 rounded-2xl border border-gray-900'>
          <p className=''>Total Categories</p>
          <div className='w-full h-px bg-gray-900 mt-5'></div>
          <div className=' my-8'>
            <p className='font-bold text-2xl'>7 Categories</p>
          </div>
        </div>


        <div className='bg-white p-5 rounded-2xl border border-gray-900'>
          <p className=''>Total Users</p>
          <div className='w-full h-px bg-gray-900 mt-5'></div>
          <div className=' my-8'>
            <p className='font-bold text-2xl'>138 Users</p>
          </div>
        </div>


        <div className='bg-white p-5 rounded-2xl border border-gray-900'>
          <p className=''>Total Orders</p>
          <div className='w-full h-px bg-gray-900 mt-5'></div>
          <div className=' my-8'>
            <p className='font-bold text-2xl'>907 Orders</p>
          </div>
        </div>
        
        
        <div className='bg-white p-5 rounded-2xl border border-gray-900'>
          <p className=''>Pending Orders</p>
          <div className='w-full h-px bg-gray-900 mt-5'></div>
          <div className=' my-8'>
            <p className='font-bold text-2xl'>23 Pending Orders</p>
          </div>
        </div>

        <div className='bg-white p-5 rounded-2xl border border-gray-900'>
          <p className=''>Orders Delivered</p>
          <div className='w-full h-px bg-gray-900 mt-5'></div>
          <div className=' my-8'>
            <p className='font-bold text-2xl'>837 Orders Delivered</p>
          </div>
        </div>

      </div>
    </div>
  )
}
