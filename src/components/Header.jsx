import React, {useContext} from 'react'
import logo from '../assets/images/logo.svg'
import { ContextAPI } from '../context/Context'
const Header = () => {
  const {isimperial,setIsimperial,height,weight,setHeight,setWeight,bmi,upperBMI,lowerBMI,healthResult,heightft,setHeightft,heightin,setHeightin,Weightst,setWeightst,Weightlbs,setWeightlbs,setStatus} = useContext(ContextAPI)
  const handlerImperial = ()=>{
    setIsimperial(true)
    setStatus('imperial')
  }
  const handlerMetric = ()=>{
    setIsimperial(false)
    setStatus('metric')
  }
  return (
    <div className=' '>
         <div className=' relative flex flex-col '>
                  <div className=' w-full lg:w-2/3 lg:ml-4 flex items-center flex-col text-center justify-start  lg:items-start lg:justify-start  lg:text-left  px-10 pt-16 rounded-b-3xl min-h-[80vh]  md:min-h-[60vh]  sm:min-h-[70vh] lg:min-h-screen headrbg '> 
                         <img className='w-10 sm:w-14 md:w-16 lg:w-20' src={logo} alt="" />
                         <div className='lg:mt-20 mt-6 flex flex-col gap-5'>
                             <h1 className=' text-l xl:text-xl font-[500] text-gunmetal leading-heading tracking-l xl:tracking-xl '>Body Mass <br /> Index Calculator</h1>
                             <p className='lg:max-w-lg text-gray-500'>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole derteminant of healty weight, it offers a valuable starting point to evaluate your overall health and well being.</p>
                         </div>
                  </div>
                  <div className=' -mt-14 md:mt-0  lg:absolute w-[90%] m-auto   lg:w-[45%] px-8 py-10 lg:left-auto lg:right-10 shadow-default rounded-xl bg-white lg:top-24 min-h-[40vh]'>
                            <h1 className='text-m text-gunmetal tracking-m leading-heading -tracking-wide font-semibold'>Enter your details below</h1>
                            <div className='mt-6 flex text-gunmetal font-[500] items-center justify-between'>
                                   <label className='flex  items-center gap-3'>
                                        <input  onClick={handlerMetric} className='h-0 opacity-0 w-0' type="radio" name="" id="" />
                                        <span className='relative flex items-center justify-center  cursor-pointer top-0 left-0 h-[32px] w-[32px] rounded-full border-[1px] border-borders peer-checked:bg-[#e1e7fe] peer-checked:before:opacity-100 before:opacity-0 before:w-[15px] before:h-[15px] before:absolute before:top-[8px] before:left-[8px] before:bg-blue before:rounded-full hover:border-blue transition-colors before:transition-opacity'>
                                          <span className={`h-[16px] rounded-full relative w-[16px] top-0 left-0 ${isimperial ? '':'bg-blue '}`}></span>
                                        </span>
                                        <span>Metric</span>
                                   </label>
                                   <label className='flex  items-center gap-3'>
                                       <input  onClick={handlerImperial} type="radio" className='h-0 w-0 opacity-0 ' name="" id="" />
                                       <span className='relative flex items-center justify-center cursor-pointer top-0 left-0 h-[32px] w-[32px] rounded-full border-[1px] border-borders peer-checked:bg-[#e1e7fe] peer-checked:before:opacity-100 before:opacity-0 before:w-[15px] before:h-[15px] before:absolute before:top-[8px] before:left-[8px] before:bg-blue before:rounded-full hover:border-blue transition-colors before:transition-opacity'>
                                       <span className={`h-[16px] rounded-full relative w-[16px] top-0 left-0 ${isimperial ? 'bg-blue ':''}`}></span>
                                       </span>
                                       <span>Imperial</span>
                                   </label>
                            </div>
                            { !isimperial ?
                            // !metric
                              <div className='mt-6 flex flex-col md:flex-row items-center gap-4'>
                                    <div className='flex flex-col gap-2'>
                                      <p className='text-gray-500 text-body-s'>Height</p>
                                       <div className='relative'>
                                       <input value={height} onChange={(e)=>setHeight(e.target.value)} className='w-full   border text-m border-borders py-3 pl-3 pr-14 rounded-lg' type="text"  placeholder='0'/>
                                       <span className='text-blue absolute font-bold text-m  right-4 top-1/2 -translate-y-1/2'>cm</span>
                                       </div>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                      <p className='text-gray-500 text-body-s'>Weight</p>
                                       <div className='relative'>
                                       <input value={weight} onChange={(e)=>setWeight(e.target.value)} className='w-full  text-m border border-borders py-3 pl-3 pr-14 rounded-lg' type="text"  placeholder='0'/>
                                       <span className='text-blue font-bold text-m absolute right-4 top-1/2 -translate-y-1/2'>kg</span>
                                       </div>
                                    </div>
                                    
                            </div>
                            :
                            // !imperial
                            <div>
                              <div className='mt-6 flex flex-col md:flex-row items-end gap-4'>
                                    <div className='flex flex-col gap-2'>
                                      <p className='text-gray-500 text-body-s'>Height</p>
                                       <div className='relative'>
                                       <input value={heightft} onChange={(e)=>setHeightft(e.target.value)} className='w-full border text-m border-borders py-3 pl-3 pr-14 rounded-lg' type="text"  placeholder='0'/>
                                       <span className='text-blue absolute font-bold text-m  right-4 top-1/2 -translate-y-1/2'>ft</span>
                                       </div>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                       <div className='relative'>
                                       <input value={heightin} onChange={(e)=>setHeightin(e.target.value)} className='w-full text-m border border-borders py-3 pl-3 pr-14 rounded-lg' type="text"  placeholder='0'/>
                                       <span className='text-blue font-bold text-m absolute right-4 top-1/2 -translate-y-1/2'>in</span>
                                       </div>
                                    </div>
                                    
                            </div>
                            <div className='mt-6 flex flex-col md:flex-row items-end gap-4'>
                                    <div className='flex flex-col gap-2'>
                                      <p className='text-gray-500 text-body-s'>Weight</p>
                                       <div className='relative'>
                                       <input value={Weightst} onChange={(e)=>setWeightst(e.target.value)} className='w-full border text-m border-borders py-3 pl-3 pr-14 rounded-lg' type="text"  placeholder='0'/>
                                       <span className='text-blue absolute font-bold text-m  right-4 top-1/2 -translate-y-1/2'>st</span>
                                       </div>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                       <div className='relative'>
                                       <input value={Weightlbs} onChange={(e)=>setWeightlbs(e.target.value)} className='w-full text-m border border-borders py-3 pl-3 pr-14 rounded-lg' type="text"  placeholder='0'/>
                                       <span className='text-blue font-bold text-m absolute right-4 top-1/2 -translate-y-1/2'>lbs</span>
                                       </div>
                                    </div>
                                    
                            </div>
                            </div>}
                            
                            {  ((weight && height) || (heightft && Weightst && heightin && Weightlbs) )  ?
                               <div className='mt-8 bg-result-gradient text-white gap-3 flex flex-col  md:flex-row justify-between  items-start rounded-default md:rounded-result p-8'>
                                  
                               <div className='flex flex-1 flex-col'>
                                  <p>Your BMI is: </p>
                                  <h1 className='text-l xl:text-xl font-semibold'>{bmi?bmi:''}</h1>
                               </div>
                               <div className='flex-1'>
                                 <p className='text-body-m'>Your BMI suggests you’re a <strong> {healthResult}</strong> weight. Your ideal weight is between <strong className=''>{lowerBMI}</strong> - <strong className=''>{upperBMI}</strong>.</p>
                               </div>
                         </div>
                         :
                              <div className='mt-8 bg-result-gradient text-white gap-3 flex flex-col    justify-between  items-start rounded-default md:rounded-result p-8'>
                                  <h1 className='text-m font-semibold'>Welcome!</h1>
                                  <p className='text-body-s'>Enter your height and weight and you will see your BMI result here</p>
                                 
                            </div>
                            
                            }

                         {/* here it is */}
                          {/* {  ( (heightft && Weightst && heightin && Weightlbs) )  ?
                               <div className='mt-8 bg-result-gradient text-white gap-3 flex flex-col  md:flex-row justify-between  items-start rounded-default md:rounded-result p-8'>
                                  
                               <div className='flex flex-1 flex-col'>
                                  <p>Your BMI is: </p>
                                  <h1 className='text-l xl:text-xl font-semibold'>{bmi?bmi:''}</h1>
                               </div>
                               <div className='flex-1'>
                                 <p className='text-body-m'>Your BMI suggests you’re a <strong> {healthResult}</strong> weight. Your ideal weight is between <strong className=''>{lowerBMI}</strong> - <strong className=''>{upperBMI}</strong>.</p>
                               </div>
                         </div>
                         :
                              <div className='mt-8 bg-result-gradient text-white gap-3 flex flex-col    justify-between  items-start rounded-default md:rounded-result p-8'>
                                  <h1 className='text-m font-semibold'>Welcome!</h1>
                                  <p className='text-body-s'>Enter your height and weight and you will see your BMI result here</p>
                                 
                            </div>
                            
                            } */}

                    </div>
             </div>
         
    </div>
  )
}

export default Header