// import React from 'react'
import genderimg from '../assets/images/icon-gender.svg'
import ageimg from '../assets/images/icon-age.svg'
import muscleimg from '../assets/images/icon-muscle.svg'
import pregnancyimg from '../assets/images/icon-pregnancy.svg'
import raceimg from '../assets/images/icon-race.svg'
import rightcurve from '../assets/images/pattern-curved-line-right.svg'
const Limatation = () => {
  return (
    <div>
           <div className='mt-20 w-[91%] py-20 m-auto'>
               <div className='flex items-center gap-10 '>
                       <div className='flex flex-col max-w-xl gap-8'>
                           <h2 className='text-[2rem] font-semibold leading-heading text-gunmetal xl:text-l'>Limitations of BMI</h2>
                           <p className='text-gray-500'>Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
                       </div>
                      <div className=' items-start hidden w-[350px] md:flex  justify-start'>
                      <div className='p-6 rounded-xl flex flex-col gap-4 shadow-default max-w-4xl bg-white'>
                           <div className='flex items-center gap-3'>
                            <img src={genderimg} alt="" />
                            <h1 className=' text-s tracking-s leading-heading text-gunmetal font-semibold'>Gender</h1>
                           </div>
                           <p className='text-gray-500'>The development and body fat composition of girls and boys vary with age. Consequently, a childs age and gender are considered when evaluating their BMI.</p>
                       </div>
                      </div>
                       
               </div>
               <div className='grid mt-10 grid-cols-1 md:grid-cols-2  lg:grid-cols-3   gap-6'>
                        <div className='p-6 rounded-xl hidden lg:flex justify-start  items-center  flex-col gap-4    max-w-4xl '>
                             <img className='w-24 -mt-10' src={rightcurve} alt="" />
                       </div>
                      <div className='p-6 rounded-xl lg:hidden flex flex-col gap-4 shadow-default max-w-4xl bg-white'>
                           <div className='flex items-center gap-3'>
                                  <img src={genderimg} alt="" />
                                  <h1 className=' text-s tracking-s leading-heading text-gunmetal font-semibold'>Gender</h1>
                           </div>
                           <p className='text-gray-500'>The development and body fat composition of girls and boys vary with age. Consequently, a childs age and gender are considered when evaluating their BMI.</p>
                       </div>
                      <div className='p-6 rounded-xl flex flex-col gap-4 shadow-default max-w-4xl bg-white'>
                           <div className='flex items-center gap-3'>
                            <img src={ageimg} alt="" />
                            <h1 className=' text-s tracking-s leading-heading text-gunmetal font-semibold'>Age</h1>
                           </div>
                           <p className='text-gray-500'>In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.</p>
                       </div>
                      <div className='p-6 rounded-xl flex flex-col gap-4 shadow-default max-w-4xl bg-white'>
                           <div className='flex items-center gap-3'>
                            <img src={muscleimg} alt="" />
                            <h1 className=' text-s tracking-s leading-heading text-gunmetal font-semibold'>Muscle</h1>
                           </div>
                           <p className='text-gray-500'>BMI may misclassify muscular individuals as overweight or obese, as it doesnt differentiate muscle from fat.</p>
                       </div>
                      <div className='p-6 lg:hidden rounded-xl flex flex-col gap-4 shadow-default max-w-4xl bg-white'>
                           <div className='flex items-center gap-3'>
                            <img src={pregnancyimg} alt="" />
                            <h1 className=' text-s tracking-s leading-heading text-gunmetal font-semibold'>Pregnancy</h1>
                           </div>
                           <p className='text-gray-500'>Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.</p>
                       </div>
                      
               </div>
                 <div className='flex flex-col sm:flex-row items-center justify-center gap-6 mt-4'>
                      <div className='p-6 rounded-xl hidden lg:flex flex-col gap-4 sm:max-w-sm shadow-default bg-white'>
                           <div className='flex items-center gap-3'>
                            <img src={pregnancyimg} alt="" />
                            <h1 className=' text-s tracking-s leading-heading text-gunmetal font-semibold'>Pregnancy</h1>
                           </div>
                           <p className='text-gray-500'>Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.</p>
                       </div>
                        <div className='p-6 rounded-xl flex flex-col gap-4 md:max-w-sm shadow-default bg-white'>
                           <div className='flex items-center gap-3'>
                            <img src={raceimg} alt="" />
                            <h1 className=' text-s tracking-s leading-heading text-gunmetal font-semibold'>Race</h1>
                           </div>
                           <p className='text-gray-500'>Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.</p>
                       </div>
                        
                    
                 </div>
           </div>
    </div>
  )
}

export default Limatation