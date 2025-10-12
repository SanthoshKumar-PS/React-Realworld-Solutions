import React, { useEffect, useState } from 'react'

const BACKEND_URL='https://dummyjson.com/products'
interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string; // ISO date string
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

const LoadMore = () => {
    const [pageNo,setPageNo]=useState<number>(1)
        const [datas,setDatas]=useState<Product[]>([])
        const [isLoading,setIsLoading]=useState<boolean>(false)
        const limit=20

        const fetchData = async ()=>{
            const skip=(pageNo-1)*limit
            try{
                setIsLoading(true)
                const response=await fetch(`${BACKEND_URL}?skip=${skip}&limit=${limit}`)
                const data=await response.json()
                setDatas((prev)=>[...prev,...data.products])
                setIsLoading(false)

            }
        catch(error){
            console.log("Error while calling the db")
            setIsLoading(false)
        }
        finally{
            setIsLoading(false)
        }

    }
    useEffect(()=>{
        fetchData()
    },[pageNo])

    if(datas.length===0 && isLoading) {
        return <div className='text-center'>Loading</div>
    }
    


  return (
    <div className='bg-zinc-300'>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 '>
            {datas.length>0 && (
                datas.map((data,index)=>(
                    <div key={index} className='bg-zinc-600 m-4 rounded-lg p-4'>
                        <div>
                            <div className='text-center'>{data.title}</div>
                            <img src={data.images[0]} alt="" className='h-60 w-60 object-contain'/>
                        </div>
                    </div>
                ))
            )}
        </div>

        {pageNo<=5 && (
            <div onClick={()=>{
                setPageNo(prev=>prev+1)
                fetchData()
                }} className=' flex justify-center p-4' >
                <button disabled={pageNo===5} className='text-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'>Load More Data</button>
            </div>
        )}
        {pageNo>5 && (
            <p>No more data from database</p>
        )}
    </div>

  )
}

export default LoadMore