import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
      {/* Header CTA */}
      <div className=' '>
        <div className='mx-auto max-w-7xl px-6 py-12 sm:py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto'>
            <div className='flex '>
              <div className='flex flex-col'>
                <div className=' lg:mt-0 mb-6 lg:flex-shrink-0 lg:flex-grow flex justify-center'>
                  <Image src='/doobieLogo2.png' width={300} height={300} />
                </div>
                <div className='relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                  <span className='font-semibold text-green-700'>
                    A burger joint.
                  </span>
                  <span
                    className='h-4 w-px bg-gray-900/10'
                    aria-hidden='true'
                  />
                  <p className='flex items-center gap-x-1'>
                    <span className='absolute inset-0' aria-hidden='true' />
                    Est. Hollywood 2021
                  </p>
                </div>
              </div>
            </div>
            <h1 className='mt-10 max-w-lg text-4xl font-bold tracking-tight  sm:text-6xl'>
              Doobie Burgers
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-500'>
              Burgers are unique and always have a story to tell. Come along
              with as we tour Los Angeles letting the World see our story come
              into pictue. Come taste the love at Doobie Burgers.
            </p>
            <div className='mt-10 flex items-center gap-x-6'>
              <a
                href='#'
                className='rounded-md bg-green-600 px-3.5 py-2.5 w-24 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 transition ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Menu
              </a>
              <a
                href='/contact'
                className='text-sm font-semibold leading-6 hover:opacity-75 transition ease-out '>
                Contact us <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
          <div className='mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow flex justify-center'>
            <Image src='/doobieLogo3.png' width={300} height={300} />
          </div>
        </div>
      </div>
    </main>
  )
}
