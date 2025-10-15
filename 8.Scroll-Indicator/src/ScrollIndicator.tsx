import React, { useEffect, useState } from 'react'

const ScrollIndicator = ({url}:{url:string}) => {
    const [data,setData]=useState<any[]>([])
    const [loading,setLoading]=useState<boolean>(false)
    const [error,setError]=useState<string|null>(null)
    const [progress,setProgress]=useState<number>(0)

    const handleScroll= ()=>{
        const scrollTop=window.scrollY
        const documentHeight=document.documentElement.scrollHeight - window.innerHeight
        if (documentHeight===0){
            return
        }
        const scrolled=Math.round((scrollTop/documentHeight)*100)
        setProgress(scrolled)
    }

    useEffect(()=>{
        handleScroll()

        window.addEventListener('scroll',handleScroll)
        return ()=>window.removeEventListener('scroll',handleScroll)

    },[])
  
    const fetchData=async ()=>{
        try{
            setLoading(true)
            const response=await fetch(url)
            const jsondata=await response.json()
            setData(jsondata.products)
            setLoading(false)

        }
        catch(error ){
            setError("Error has occured")
        }

    }

    useEffect(()=>{
        fetchData()
    },[url])

    if(error){
        return <div>Error has occured {error}</div>
    }

    if(loading){
        return <div>Loading</div>
    }
    

    return (
    <div className='w-full min-h-screen bg-zinc-600 flex flex-col items-center justify-start'>
        <div className='fixed bg-gray-100 w-full flex flex-col justify-between h-16 '>
            <div className='text-center text-xl font-medium'>Custom Scroll Indicator {progress}%</div>
            <div className='transition-all duration-20 rounded-r-lg bg-blue-500 h-6' style={{width:`${progress}%`}}></div>
        </div>
        <div className='mt-20 space-y-4 text-center'>
            {data && data.length>0 &&(
                data.map(dat=>(
                    <div key={dat.id} className='bg-zinc-300 p-3 rounded-md font-medium'>{dat.title}</div>
                ))
            )}
        </div>

    </div>
  )
}

export default ScrollIndicator