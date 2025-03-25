"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Headers() {
    const path=usePathname();
    useEffect(()=>{
        console.log(path)
    },[])

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
       <Image src={'/logo.svg'} width={80} height={30} alt='logo'/>
       <ul className='hidden md:flex gap-6'>
        <Link href={"/dashboard"}>
        <li className={`hover:text-amber-600 hover:font-bold transition-all cursor-pointer
            ${path=='/dashboard'&&'text-amber-600 font-bold'}
        `}>Dashboard</li></Link>
        <li className={`hover:text-amber-600 hover:font-bold transition-all cursor-pointer
            ${path=='/dashboard/questions'&&'text-amber-600 font-bold'}
        `}>Questions</li>

        <li className={`hover:text-amber-600 hover:font-bold transition-all cursor-pointer
            ${path=='/dashboard/upgrade'&&'text-amber-600 font-bold'}
        `}>Upgrade</li>
        <li className={`hover:text-amber-600 hover:font-bold transition-all cursor-pointer
            ${path=='/dashboard/how'&&'text-amber-600 font-bold'}
        `}>How it Works?</li>
       </ul>
       <UserButton/> 
    </div>
  )
}

export default Headers 