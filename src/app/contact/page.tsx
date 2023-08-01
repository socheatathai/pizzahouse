import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
          <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]  lg:flex-row bg-fuchsia-50 '>
              {/* TEXT CONTAINER */}
              <div className='h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold lg:h-full lg-w-1/2'>
                  <h1 className='text-5xl text-center uppercase py-4 md:text-6xl xl:text-7xl'>
                      please contact us by telegram if you have a problem or anything else...?
                  </h1>
                  <Link href='https://t.me/socheata_thai' className='bg-blue-400 rounded-md text-white py-4 px-8'>Telegram</Link>
              </div>
              {/* IMAGE CONTAINER */}
              <div className='w-full h-1/2 relative lg:h-full lg:w-1/2'>
                  <Image src="/mypic.jpg" alt='' fill className='object-contain ' />
              </div>
          </div>
    </div>
  )
}

export default ContactPage