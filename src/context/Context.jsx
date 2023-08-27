import { createContext,useState } from "react";
export const ContextAPI = createContext()


const ContextWrapper = ({children}) => {
   const [isimperial, setIsimperial] = useState(false)
   const [height, setHeight] = useState('')
   const [weight, setWeight] = useState('')
   const [status, setStatus] = useState('metric')
   const LowerBmiLimit = 18.5
   const UpperBmiLimit = 24.9
  //  !metric
   const heightSqured = (height/100)**2
   let bmi
   let lowerBMI
   let upperBMI 
   let healthResult
   
  

  // !imperial
  const [heightft,setHeightft] = useState('')
  const [heightin,setHeightin] = useState('')
  const [Weightst,setWeightst] = useState('')
  const [Weightlbs,setWeightlbs] = useState('')
  const TotalHeight = Number(heightft * 12) + Number(heightin)
  const TotalWeight = Number(Weightst * 14) + Number(Weightlbs)
  const lowerbmi = ((TotalHeight ** 2 * LowerBmiLimit) / 703).toFixed(1)
  const upperbmi = ((TotalHeight ** 2 * UpperBmiLimit) / 703).toFixed(1)
  switch (status) {
    case 'metric':
      {
        if(heightft && heightin && Weightst && Weightlbs){
          setHeightft('')
          setHeightin('')
          setWeightlbs('')
          setWeightst('')
        }
        bmi = (weight / heightSqured).toFixed(1)
       lowerBMI = `${(heightSqured * LowerBmiLimit).toFixed(1)}kg`
       upperBMI = `${(heightSqured * UpperBmiLimit).toFixed(1)}kg`
       if (bmi < 18.5) {
        healthResult = 'an underweight'
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        healthResult = 'a healthy weight'
      } else if (bmi >= 25 && bmi <= 29.9) {
        healthResult = 'an overweight'
      } else {
        healthResult = 'an obese'
      }
      
    }
      break; 
    case 'imperial':
      {
        if(weight && height){
          setHeight('')
          setWeight('')
        }
      bmi = ((TotalWeight / TotalHeight ** 2) * 703).toFixed(1);
      lowerBMI = `${Math.floor(lowerbmi / 14)}st ${Math.floor(lowerbmi % 14)}lbs `
      upperBMI = `${Math.floor(upperbmi / 14)}st ${Math.floor(upperbmi % 14)}lbs `
      if (bmi < 18.5) {
        healthResult = 'an underweight'
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        healthResult = 'a healthy weight'
      } else if (bmi >= 25 && bmi <= 29.9) {
        healthResult = 'an overweight'
      } else {
        healthResult = 'an obese'
      }
    }
       
      break; 
    default:
      bmi = 'not working';
  }
 
  return (
    <ContextAPI.Provider value={{isimperial,setIsimperial,height,weight,setHeight,setWeight,bmi,lowerBMI,upperBMI,healthResult,heightft,setHeightft,heightin,setHeightin,Weightst,setWeightst,Weightlbs,setWeightlbs,setStatus}}>
        {children}
    </ContextAPI.Provider>
  )
}

export default ContextWrapper