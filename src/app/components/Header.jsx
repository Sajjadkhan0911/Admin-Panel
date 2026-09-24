import React from 'react'

export default function Header() {
    return (
        <div>
            <div className='w-full h-20 bg-blue-950 flex items-center justify-between px-10'>
                <div className='flex items-center'>
                    <input type="text" placeholder='Search...' className='bg-white text-gray-700 py-2 px-4 w-96 outline-none rounded-2xl ' />
                </div>
                <div>
                    <button className='bg-blue-950 text-white p-2 rounded-lg hover:bg-blue-800'>Logout</button>
                </div>

            </div>
            
        </div>
    )
}
