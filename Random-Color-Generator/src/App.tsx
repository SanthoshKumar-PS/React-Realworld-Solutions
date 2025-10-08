import {useState} from 'react'


function App() {
  const generate=()=>{
    const r=("0"+ Math.floor(Math.random()*256).toString(16)).slice(-2)
    const g=("0"+ Math.floor(Math.random()*256).toString(16)).slice(-2)
    const b=("0"+ Math.floor(Math.random()*256).toString(16)).slice(-2)
    return `#${r}${g}${b}`
    return r
  }
  const [color,setColor]=useState(generate)
  return (
    <div style={{backgroundColor:generate()}} className='flex justify-center items-center min-w-full min-h-screen space-y-0 text-center'>
      <div>
        <button onClick={()=>setColor(generate)}  className="mb-4 px-4 py-2 rounded-lg bg-[#05ac5f] text-white 
             transition-all ease-in-out duration-500 hover:scale-103
             outline-none focus:outline-none focus:ring-0 focus:border-none active:outline-none">
          Generate Random Color
        </button>

        <h5 className='text-xl'>{color}</h5>
      </div>
    </div>
  )
}

export default App
