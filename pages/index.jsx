import ContactInfo from '@/components/contactInfo'
import LandingCTA from '@/components/cta'
import Testimonial from '@/components/testimonial'
import Image from 'next/image'
import Link from 'next/link'
import { motion as m, AnimatePresence } from 'framer-motion'

export default function Home() {
  return (
    <main className='pt-12'>
      <AnimatePresence>
        {/* Header CTA */}
        <div className=' '>
          <div className='mx-auto max-w-7xl px-6 py-12 sm:py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8'>
            <m.div initial='hidden' animate='visible'>
              <m.div
                variants={cardVariants}
                className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto'>
                <div className='flex w-full'>
                  <div className='flex flex-col w-full'></div>
                </div>

                <h1 className='mt-10 text-4xl font-bold tracking-tight sm:text-6xl'>
                  Doobie Burgers
                </h1>
                <div className='flex items-center justify-center w-full gap-x-4 rounded-full px-4 py-1 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                  <span className='mt-4 w-full font-semibold text-center'>
                    A burger joint.
                  </span>
                  <span
                    className='h-4 w-px bg-gray-900/10'
                    aria-hidden='true'
                  />
                </div>
                <p className='mt-6 text-lg leading-8 text-gray-400'>
                  Burgers are unique and always have a story to tell. Come along
                  with as we tour Los Angeles letting the World see our story
                  come into pictue.
                </p>
                <div className='mt-10 '>
                  <p className='flex justify-start items-start gap-x-1 w-full mt-12 italic text-sm text-gray-400'>
                    Est. Hollywood 2021
                  </p>
                </div>
              </m.div>
            </m.div>
            <m.div
              transition={{ delay: 0.5 }}
              initial='hidden'
              animate='visible'
              className='mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow flex justify-center'>
              <m.div variants={cardVariantsHorizontal}>
                <Image
                  src='/burgerLogo.png'
                  width={300}
                  height={300}
                  alt='logo'
                />
              </m.div>
            </m.div>
          </div>
          <Testimonial />
          <LandingCTA />
          {/* <ContactInfo /> */}
        </div>
      </AnimatePresence>
    </main>
  )
}

const cardVariants = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}
const cardVariantsHorizontal = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}
