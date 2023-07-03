import ContactInfo from '@/components/contactInfo'
import LandingCTA from '@/components/cta'
import Testimonial from '@/components/testimonial'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className=''>
      {/* Header CTA */}
      <div className=' '>
        <div className='mx-auto max-w-7xl px-6 py-12 sm:py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto'>
            <div className='flex '>
              <div className='flex flex-col w-full'>
                <div className=' lg:mt-0 mb-6 lg:flex-shrink-0 lg:flex-grow flex justify-center md:flex-none md:justify-start'>
                  <Image
                    src='/mainLogo.png'
                    width={300}
                    height={300}
                    alt='logo'
                  />
                </div>
                <div className='relative flex items-center justify-start gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                  <span className='font-semibold text-green-700 w-full'>
                    A burger joint.
                  </span>
                  <span
                    className='h-4 w-px bg-gray-900/10'
                    aria-hidden='true'
                  />
                </div>
              </div>
            </div>
            <h1 className='mt-10 text-4xl font-bold tracking-tight sm:text-6xl'>
              Doobie Burgers
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-500'>
              Burgers are unique and always have a story to tell. Come along
              with as we tour Los Angeles letting the World see our story come
              into pictue.
            </p>
            <div className='mt-10 '>
              <div className='flex  items-center gap-x-6'>
                <a
                  href='/menu'
                  className='rounded-md bg-green-600 px-3.5 py-2.5 w-24 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 transition ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '>
                  Menu
                </a>
                <a
                  href='/contact'
                  className='text-sm font-semibold leading-6 hover:opacity-75 transition ease-out '>
                  Contact us <span aria-hidden='true'>→</span>
                </a>
              </div>
              <p className='flex justify-start items-start gap-x-1 w-full mt-12 italic text-sm text-gray-400'>
                Est. Hollywood 2021
              </p>
            </div>
          </div>
          <div className='mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow flex justify-center'>
            <Image src='/burgerLogo.png' width={300} height={300} alt='logo' />
          </div>
        </div>
        <Testimonial />
        <LandingCTA />
        <ContactInfo />
      </div>
    </main>
  )
}
