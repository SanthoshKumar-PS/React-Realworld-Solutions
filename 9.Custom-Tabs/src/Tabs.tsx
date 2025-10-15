import React, { useState } from 'react'

type Tab={
    id:number;
    label:string;
    message:string;
    count:number
}



const Tabs = ({tabs}:{tabs:Tab[]}) => {
    const [selectedId,setSelectedId]=useState<number>(0);
    function handleClick(index:number){
        setSelectedId(index)
        tabs[index].count+=1

    }
  return (
    <div className='min-h-screen flex flex-col justify-center items-center space-y-4 bg-zinc-200'>
        {
            <div className='flex justify-center items-center space-x-2'>
                {tabs.map((tab,index)=>(
                    <div key={tab.id} className='cursor-pointer p-3 bg-red-300 font-bold rounded-md' onClick={()=>handleClick(index)}> 
                            {tab.label}
                    </div>
                ))}
            </div>           
        }
        <div className='font-medium text-xl '>{tabs[selectedId].message}</div>
        <div className='font-medium text-xl '>{tabs[selectedId].count}</div>
    </div>
  )
}

export default Tabs