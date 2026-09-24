"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function Sidebar() {

  const pathname = usePathname();
  return (
    <div>
      <aside className='w-[300px] h-full bg-gray-900 text-gray-400 flex flex-col'>
        <div className='mb-8'>
          <h1 className='text-3xl text-white items-center flex justify-center h-20'>Admin Panel</h1>
          <div className='w-full h-[1px] bg-white'></div>
        </div>
        <div className='flex flex-col gap-2'>
          <Link href={"/dashboard"} className={`mx-10 p-3 hover:bg-blue-950 rounded-2xl hover:scale-105 transition-all duration-200 ${pathname === "/dashboard" ? "bg-blue-800" : ""}`}>Dashboard</Link>
          <Link href={"/products"} className={`mx-10 p-3 hover:bg-blue-950 rounded-2xl hover:scale-105 transition-all duration-200 ${pathname === "/products" ? "bg-blue-800" : ""} `}>Products</Link>
          <Link href={"/users"} className={`mx-10 p-3 hover:bg-blue-950 rounded-2xl hover:scale-105 transition-all duration-200 ${pathname === "/users" ? "bg-blue-800" : ""}`}>Users</Link>
          <Link href={"/customers"} className={`mx-10 p-3 hover:bg-blue-950 rounded-2xl hover:scale-105 transition-all duration-200 ${pathname === "/customers" ? "bg-blue-800" : ""}`}>Customers</Link>
          <Link href={"/orders"} className={`mx-10 p-3 hover:bg-blue-950 rounded-2xl hover:scale-105 transition-all duration-200 ${pathname === "/orders" ? "bg-blue-800" : ""}`}>Orders</Link>
          <Link href={"/categories"} className={`mx-10 p-3 hover:bg-blue-950 rounded-2xl hover:scale-105 transition-all duration-200 ${pathname === "/categories" ? "bg-blue-800" : ""}`}>Categories</Link>
          <Link href={"/settings"} className={`mx-10 p-3 hover:bg-blue-950 rounded-2xl hover:scale-105 transition-all duration-200 ${pathname === "/settings" ? "bg-blue-800" : ""}`}>Settings</Link>
        </div>

      </aside>
    </div>
  )
}
