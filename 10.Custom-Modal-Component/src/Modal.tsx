import React, { useState } from 'react'

const Modal = () => {
    const [isDailogOpen,setIsDialogOpen]=useState<boolean>(false)
    function handleClick(){
        setIsDialogOpen(!isDailogOpen)
        return
    }
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-400'>
        <div onClick={()=>handleClick()} className='p-5 bg-gray-100 rounded-xl text-xl font-semibold text-gray-500 hover:shadow-xl cursor-pointer'>
            Click to Open Dialog
        </div>

        {isDailogOpen && (
        <div className={`${isDailogOpen?"scale-100 opacity-100":"scale-50  opacity-0"} transform transition-all ease-in-out duration-2000 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 flex flex-col justify-around items-center  h-1/2 bg-zinc-800 rounded-xl text-white`}>
                <div className='text-xl'>
                    Custom Modal Component
                </div>
                <button onClick={()=>{handleClick()}} className='cursor-pointer bg-gray-800 px-5 py-2 shadow-lg rounded-xl text-white'>Close modal</button>
                <div onClick={()=>{handleClick()}} className='absolute top-0 right-0 p-4 text-2xl hover:scale-105 cursor-pointer'>
                    &times;
                </div>
        </div>
        )}

    </div>
  )
}

export default Modal