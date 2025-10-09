import {useState} from 'react'
import { FaRegStar, FaStar } from "react-icons/fa";

function App() {
  const count=10
  const [hover,setHover]=useState<number>(0)
  const [clicked,setClicked]=useState<number>(0)

  const handleMouseMove=(index:number)=>{
    setHover(index)
  }
  const handleMouseLeave=()=>{
    setHover(clicked)
  }
  const handleMosueClick=(index:number)=>{
    setClicked(index)
  }



  return (
    <div className='flex space-x-2 text-center'>
      <div className='flex space-x-2'>
        {
        [...Array(count)].map((_,index)=>{
          index=index+1

          return (<div 
            className='hover:cursor-pointer' 
            onClick={()=>handleMosueClick(index)}
            onMouseMove={()=>handleMouseMove(index)}
            onMouseLeave={()=>handleMouseLeave()}
          >
            {index<=(hover || clicked) ? 
                  <FaStar size={40} className='text-black'/>
                    : 
                  
                  <FaRegStar size={40} className='text-black'/> }
            
          </div>)
          })
        }

      </div>
    </div>
  )
}

export default App
