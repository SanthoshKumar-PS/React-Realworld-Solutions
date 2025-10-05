import {useState} from 'react'
import datas from './data.json'
function App() {
  const [selectedIds,setSelectedIds]=useState<number[]>([])

  const handleClick=(newId:number)=>{
    setSelectedIds(prev=> prev.includes(newId)? prev.filter(id=>id!==newId): [...prev,newId]) 
  }

  return (

  <div className="bg-gray-500 flex items-center justify-center min-w-full min-h-screen p-4">
    <div className="space-y-6">
      {datas.map(data=>(
      <div key={data.id} 
            onClick={()=>{
              handleClick(data.id)
            }} 
            className="bg-white text-black p-6 rounded-xl shadow-xl w-100 hover:cursor-pointer">
        <div className="flex justify-between items-center px-2 w-full ">
          <h2 className="text-lg font-semibold mb-2 max-w-70">{data.question}</h2>
          <h2 className="text-2xl font-semibold mb-2">{selectedIds.includes(data.id)?'-':'+'}</h2>
        </div>
        <div className={`transition-all ease-in-out duration-500 overflow-hidden font-medium px-2 border-t-2 border-gray-700 
            ${selectedIds.includes(data.id)?'opacity-100 max-h-100':'opacity-0 max-h-0'}`}>{data.answer}</div>


      </div>
      ))}

      
      
    </div>
  </div>


    
  )
}

export default App
