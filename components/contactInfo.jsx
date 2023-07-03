export default function ContactInfo() {
  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none'>
          <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 items-center'>
            <div className='flex flex-col gap-4'>
              <h2 className='text-3xl font-bold tracking-tight text-white'>
                Get in touch
              </h2>
              <p className='text-gray-400'>
                Available at select breweries or catered events.{' '}
              </p>
            </div>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8'>
              <div className='rounded-2xl bg-gray-50 p-10'>
                <h3 className='text-base font-semibold leading-7 text-black'>
                  Contact Info
                </h3>
                <dl className='mt-3 space-y-1 text-sm leading-6 text-gray-600'>
                  <div>
                    <dt className='sr-only'>Email</dt>
                    <dd>
                      <a
                        className='font-semibold text-green-600'
                        href='mailto:pablo@doobieburgers.com'>
                        pablo@doobieburgers.com
                      </a>
                    </dd>
                  </div>
                  <div className='mt-1'>
                    <dt className='sr-only'>Phone number</dt>
                    <dd>+1 (213) 316-6767</dd>
                  </div>
                </dl>
              </div>
              <div className='rounded-2xl bg-gray-50 p-10'>
                <h3 className='text-base font-semibold leading-7 text-black'>
                  Location
                </h3>
                <dl className='mt-3 space-y-1 text-sm leading-6 text-gray-600'>
                  <div>
                    <dt className='sr-only'>Email</dt>
                    <dd>
                      <p className='font-semibold text-green-600'>
                        Hollywood, CA
                      </p>
                    </dd>
                  </div>
                  <div className='mt-1'>
                    <dt className='sr-only'></dt>
                    <dd>Open Monday - Friday</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
