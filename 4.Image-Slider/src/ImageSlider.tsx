import React, { useEffect, useState } from 'react'
import { FaRegCircle,FaCircle  } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";



type ImageSliderProps ={
    url:string;
    page?:number;
    limit?:number
}
const ImageSlider:React.FC<ImageSliderProps> = ({url,page=1,limit   =10}) => {
const [datas,setDatas]=useState<any[]>([])
const [isLoading,setIsLoading]=useState<boolean>(false)
const [error,setError]=useState<string>('')
const [selectedIndex,setSelectedIndex]=useState<number>(0)


const fetchImagesData =async()=>{
    try{
        setIsLoading(true)
        const response=await fetch(`${url}?page=${page}&limit=${limit}`)
        setDatas(await response.json())
        setIsLoading(false)
    }
    catch(err){
        setError('Failed to load data')
    }
    finally{
        setIsLoading(false)
    }

}
useEffect(()=>{
    fetchImagesData()
    console.log(datas)

},[url,page,limit])

    const handlePrevious=()=>{
        setSelectedIndex((selectedIndex-1+limit)%limit)
        console.log("selected Index ",selectedIndex )
    }
    const handleNext=()=>{
        setSelectedIndex((selectedIndex+1)%limit)
        console.log("selected Index ",selectedIndex )

    }
    return (
    <div className='bg-zinc-600 min-h-screen flex justify-center items-center text-black'>
        {isLoading && (
            <div>Loading...</div>
        )}

        {error && (
            <div>Error has occured</div>
        )}

        {!isLoading && !error &&  datas.length>0 &&(

            <div className='rounded-lg overflow-hidden h-60 w-80 relative'>
                <img src={datas[selectedIndex].download_url} alt="first image" className='h-full w-full object-cover' />
                <div className='absolute bottom-3 left-1/2 -translate-x-1/2 text-center flex space-x-1'>
                    {[...Array(limit)].map((_,index)=>{
                        
                        return(
                            <div key={index} onClick={()=>setSelectedIndex(index)}>
                                {selectedIndex===index? <FaCircle className='text-white' size={15}/>:<FaRegCircle size={15}/>}
                            </div>
                        )
                    })}
                </div>
                <div onClick={()=>{handleNext()}} className='absolute top-1/2 -translate-y-1/2 right-2 bg-white rounded-lg p=2     '>
                    <FaChevronRight size={15} className='m-2'/>
                </div>
                <div onClick={()=>{handlePrevious()}} className='absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-lg '>
                    <FaChevronLeft size={15} className='m-2'/>
                </div>
            </div>





        )}


    </div>
  )
}

export default ImageSlider