import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Catering = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center mt-12 '>
      <div className='flex flex-col w-full md:max-w-7xl px-4 justify-center'>
        <h1 className='text-center text-4xl mb-4'>Catering</h1>
        <section className='flex flex-col gap-8 mt-4 bg-[#e1dfdb] bg-opacity-10 p-4 rounded-md mb-12'>
          <h2 className='text-2xl'>Catering Packages</h2>
          <div className='flex flex-col gap-6'>
            <p>Little Joint - up to 20 guests</p>
            <p>Big Joint - up to 60 guests</p>
            <p>
              A Phatty - You have a custom request. Call us and we will make it
              happen.
            </p>
          </div>
        </section>
        <section className='flex flex-col gap-8 mt-4 bg-[#e1dfdb] bg-opacity-10 p-4 rounded-md py-8'>
          <p>Name</p>
          <p>Phone number</p>
          <p>Email</p>
          <p>Date of request</p>
          <p>Burgers only or full menu</p>
          <p>Number of guests</p>
          <p>Ideas</p>
          <div className='flex justify-center'>
            <button className='w-full md:w-56 bg-green-600 rounded-md p-2 hover:bg-green-500 transition ease-out'>
              <Link href='mailTo:pablo@doobieburgers.com'>Contact Us</Link>
            </button>
          </div>
        </section>
        <section className='flex flex-col md:flex-row gap-8 items-center md:justify-around w-full mt-24'>
          <Image
            src='/burger.png'
            width={200}
            height={200}
            className='rounded-md'
          />
          <Image
            src='/burger.png'
            width={200}
            height={200}
            className='rounded-md'
          />
          <Image
            src='/burger.png'
            width={200}
            height={200}
            className='rounded-md'
          />
        </section>
      </div>
    </div>
  )
}

export default Catering
