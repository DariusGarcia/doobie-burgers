import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Catering = () => {
  return (
    <div className='flex flex-col w-full md:justify-center md:items-center py-24 md:py-36'>
      <div className='flex flex-col w-full md:max-w-7xl px-4 md:justify-center'>
        <h1 className='text-center text-4xl mb-4'>Catering</h1>

        <section className='flex flex-col w-full md:items-center gap-8 mt-4 md:p-4 rounded-md py-8'>
          <div className='flex flex-col gap-2 px-2 md:px-0'>
            <p>Name</p>
            <p>Phone number</p>
            <p>Email</p>
            <p>Date of request</p>
            <p>Burgers only or full menu</p>
            <p>Number of guests</p>
            <p>Ideas</p>
          </div>

          <form
            action='#'
            method='POST'
            className='md:px-6 flex flex-col w-full md:max-w-4xl px-2'>
            <div className=''>
              <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                <div>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-semibold leading-6 text-white'>
                    First name
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      autoComplete='given-name'
                      className='block w-full rounded-md border-0 bg-[#e1dfdb] bg-opacity-10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='last-name'
                    className='block text-sm font-semibold leading-6 text-white'>
                    Last name
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='text'
                      name='last-name'
                      id='last-name'
                      autoComplete='family-name'
                      className='block w-full rounded-md border-0 bg-[#e1dfdb] bg-opacity-10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-semibold leading-6 text-white'>
                    Email
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      autoComplete='email'
                      className='block w-full rounded-md border-0 bg-[#e1dfdb] bg-opacity-10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='phone-number'
                    className='block text-sm font-semibold leading-6 text-white'>
                    Phone number
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='tel'
                      name='phone-number'
                      id='phone-number'
                      autoComplete='tel'
                      className='block w-full rounded-md border-0 bg-[#e1dfdb] bg-opacity-10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='message'
                    className='block text-sm font-semibold leading-6 text-white'>
                    Message
                  </label>
                  <div className='mt-2.5'>
                    <textarea
                      name='message'
                      id='message'
                      rows={4}
                      className='block w-full rounded-md border-0 bg-[#e1dfdb] bg-opacity-10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6'
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className='mt-8 flex justify-end'>
                <button
                  type='submit'
                  className='rounded-md bg-green-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500'>
                  Send message
                </button>
              </div>
            </div>
          </form>
        </section>
        <section className='flex flex-col md:flex-row gap-8 md:gap-0 items-center md:justify-around md:px-12 w-full mt-24'>
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
