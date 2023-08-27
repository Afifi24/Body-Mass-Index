import React from 'react'
import image from '../assets/images/image-man-eating.webp'
const About = () => {
  return (
    <div>
          <div className='min-h-screen   mt-10  w-[91%] flex flex-col  md:flex-row gap-12 items-center m-auto '>
              <div className='flex-1'><img src={image} alt="" /></div>
               <div className='flex-1 flex flex-col gap-5 lg:pl-10'>
                   <h1 className='text-[2rem] xl:text-l leading-heading tracking-tight font-semibold text-gunmetal xl:tracking-l'>What your BMI result means</h1>
                   <p className='text-gray-500'>A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
               </div>
          </div>
     </div>
  )
}

export default About