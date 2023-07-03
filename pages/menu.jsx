import Image from 'next/image'
import React from 'react'

const Menu = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center mt-12 px-4  '>
      <div className='flex flex-col w-full md:max-w-7xl justify-center items-center'>
        <h1 className='text-4xl mb-4'>Menu</h1>
        <section className='flex flex-col gap-8 mt-4'>
          <h2 className='text-3xl text-center'>Burgers</h2>
          {menuItems.map((item) => (
            <>
              <article
                key={item.id}
                className='flex flex-col gap-8 justify-center items-center p-4 py-6 rounded-md bg-[#e1dfdb] bg-opacity-10'>
                <div className='flex flex-col md:flex-row justify-between w-full gap-8'>
                  <div className='flex flex-col w-full md:pr-12 gap-4'>
                    <div className='flex flex-row items-center gap-2 '>
                      <h2 className='text-xl'>{item.name}</h2>
                      {item.isMeatlessAvailable && (
                        <p className='text-sm'>(available meatless)</p>
                      )}
                    </div>
                    {item.name !== 'Paraphernalia' && (
                      <div className='flex flex-col gap-6'>
                        <p className=' leading-9 text-md text-gray-300'>
                          {item.description}
                        </p>
                        {item?.cheeseOptions && (
                          <ul className='flex flex-col md:flex-row gap-x-6'>
                            {item?.cheeseOptions?.map((cheese, idx) => (
                              <li
                                key={idx}
                                className='flex justify-between gap-2'>
                                {cheese}
                              </li>
                            ))}
                          </ul>
                        )}
                        {item?.sauce && (
                          <p className='  leading-9 text-md'>{item.sauce}</p>
                        )}
                        <ul className='flex flex-col md:flex-row gap-x-6'>
                          {item?.options?.map((option, idx) => (
                            <li
                              className='flex justify-between gap-2'
                              key={idx}>
                              <span>{option.name}</span>
                              <span>{option.price}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className='flex w-full pr-8 '>
                      {item.items && (
                        <ul
                          key={item.id + 'items'}
                          className='w-full justify-start flex flex-col gap-8 gap-x-6'>
                          {item?.items?.map((item) => (
                            <li className='flex justify-between gap-2'>
                              <span>{item.name}</span>
                              <span>{item.price}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className='w-56 h-56'>
                    <Image
                      src='/burger.png'
                      className='rounded-md'
                      width={400}
                      height={400}
                      alt='burger'
                    />
                  </div>
                </div>
              </article>
            </>
          ))}
        </section>
        {/* image */}
        <div className='mt-8'>
          <Image src='/doobieLogo3.png' width={400} height={400} alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default Menu

const menuItems = [
  {
    id: 1,
    name: 'I Got Five on It',
    description:
      "Classics don't have to say much. This is our hamburger with five ingredients. Our Prime burger with ketchup, mustard, & pickle.",
    options: [
      { name: 'Single', price: '$7' },
      { name: 'Double', price: '$11' },
      { name: 'Triple', price: '$15' },
    ],
  },
  {
    id: 2,
    name: 'Cheech Burger',
    description:
      'Prime Beef Patty with Cheese Ketchup Mustard & Dill Pickles served on a Wonder Bread Bun.',
    options: [
      { name: 'Single', price: '$8' },
      { name: 'Double', price: '$12' },
      { name: 'Triple', price: '$16' },
    ],
    cheeseOptions: ['American', 'Monterey Jack', 'Pepper Jack', 'Swiss'],
  },
  {
    id: 3,
    name: 'MeltDown',
    description:
      'You’ve either had one or seen one. This one is photo worth as well. Its our Patty Melt on a Bun. Our prime burger with melted swiss, our buttery onions, & MeltDown Sauce',
    options: [
      { name: 'Single', price: '$9' },
      { name: 'Double', price: '$13' },
      { name: 'Triple', price: '$17' },
      { name: 'Veg', price: '$6' },
    ],
    sauce: 'MeltDown Sauce is housemade Tangy & Creamy Jalapeno Mustard',
    isMeatlessAvailable: true,
  },
  {
    id: 4,
    name: 'El Problano',
    description:
      'You ever had something so good you knew it would be a problem. This burger is that problem. Our prime burger topped with fire roasted Poblano Peppers, our buttery onions, jack cheese, & our smoke sauce.',
    options: [
      { name: 'Single', price: '$9' },
      { name: 'Double', price: '$13' },
      { name: 'Triple', price: '$17' },
      { name: 'Veg', price: '$6' },
    ],
    isMeatlessAvailable: true,
  },
  {
    id: 5,
    name: 'Paraphernalia',
    items: [
      { name: 'Crinkle Fries (cooked in Corn Oil)', price: '$6' },
      {
        name: 'TrainWreck Fries (loaded with Buttery Onions Cheese & Secret Sauce)',
        price: '$8',
      },
      {
        name: 'Mamma’s Baked Brownies (made by my Mamma herself TO DIE FOR)',
        price: '$5',
      },
      { name: 'Beer Battered Onion Rings', price: '$8' },
      { name: 'Doobie Snack for Dog (single plain patty)', price: '$4' },
    ],
  },
]
