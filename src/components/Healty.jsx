import React from 'react'
import Healtyimg from '../assets/images/icon-eating.svg'
import exerciceimg from '../assets/images/icon-exercise.svg'
import sleepimg from '../assets/images/icon-sleep.svg'
const Healty = () => {
  return (
    <div>
        <div className='w-[91%] mt-10 bg-gradient-cards rounded-3xl py-20 grid grid-cols-1  lg:grid-cols-3 gap-9  m-auto'>
              <div className='flex flex-col sm:flex-row lg:flex-col gap-8'>
                   <img className='w-16' src={Healtyimg} alt="" />
                   <div className='flex  flex-col gap-5'>
                        <h2 className='text-m tracking-m text-gunmetal leading-heading font-semibold'>Healty eating</h2>
                         <p className='text-gray-500'>Healty eating promotes weight control,desease prevention, better digestion, immunity, mental clarity, and mood </p>
                     </div>
              </div>
              <div className='flex flex-col sm:flex-row lg:flex-col gap-8'>
                   <img className='w-16' src={exerciceimg} alt="" />
                   <div className='flex flex-col gap-5'>
                        <h2 className='text-m tracking-m text-gunmetal leading-heading font-semibold'>Regular exercise</h2>
                         <p className='text-gray-500'>Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity. </p>
                     </div>
              </div>
              <div className='flex flex-col sm:flex-row lg:flex-col gap-8'>
                   <img className='w-16' src={sleepimg} alt="" />
                   <div className='flex flex-col gap-5'>
                        <h2 className='text-m tracking-m text-gunmetal leading-heading font-semibold'>Adequate sleep</h2>
                         <p className='text-gray-500'>Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation. </p>
                     </div>
              </div>
              
        </div>
    </div>
  )
}

export default Healty