import React, { useMemo, useState } from 'react'

type SelectedSeatType = {
    seatNo:string,
    category:string,
    price:number
}

type seatingConfigType = {
    type: string,
    rows: number,
    seatsPerRow: number,
    price: number    
}
const seatingConfig : seatingConfigType[] = [
  { type: "Regular", rows: 4, seatsPerRow: 12, price: 150 },
  { type: "Premium", rows: 3, seatsPerRow: 12, price: 250 },
  {type: "VIP", rows: 2, seatsPerRow: 6, price: 500 }
];
const seatsLabel = [
    {label:'Selected',color:'bg-green-500'},
    {label:'Regular (₹150)',color:'bg-blue-200'},
    {label:'Premium (₹250)',color:'bg-pink-200'},
    {label:'VIP (₹500)',color:'bg-yellow-200'},
    {label:'Not Available',color:'bg-gray-500'},
]

const SeatArrangement = () => {
    const [selectedSeats, setSelectedSeats] = useState<SelectedSeatType[]>([])
    const [bookedSeats,setBookedSeats] = useState<string[]>(['A1','B2','A6','E4','E5','E6'])
    let rowStartCode = 65

    const getColor = (seatId:string,category:string,isBooked:boolean)=>{
        if(isBooked) return "bg-gray-400"
        const isSelected = selectedSeats.some(seat=>seat.seatNo===seatId)
        if(isSelected) return "bg-green-400"

        if(category==='Regular') return "bg-blue-200"
        if(category==='Premium') return "bg-pink-200"
        if(category==='VIP') return "bg-yellow-200"
        return "bg-indigo-300"
    }

    const handleToggleSeat = (seatId: string, category:string,price:number) => {
        setSelectedSeats(prev=>(
            prev.some(seat=>seat.seatNo===seatId)
                ?prev.filter(seat=>seat.seatNo!==seatId)
                : [...prev,{seatNo:seatId,category:category,price:price}]
        ))
    };

    const handleBookSeats = ()=>{
        const seatsNumbers = selectedSeats.map(seat=>seat.seatNo)
        setBookedSeats(prev=>[...prev,...seatsNumbers])
        setSelectedSeats([])
        alert("Booking Success")

    }
    

    const totalPayableAmount = useMemo(()=>{
        return selectedSeats.reduce((sum,seat)=>sum+seat.price,0);
    },[selectedSeats])


  return (
    <div className='flex flex-col items-center justify-center'>
        {/* Seating */}
        <div className='flex flex-col items-center justify-center max-w-screen p-4 overflow-x-auto'>
            {seatingConfig.map((seating,seatIndex)=>{
                const category = seating.type //Regular, Premium, Vip
                const startingCode = rowStartCode
                rowStartCode+=seating.rows
                return (
                    <div key={seating.type} className=''>
                    {Array.from({length:seating.rows}).map((_,index)=>{
                        const rowLetter = String.fromCharCode(startingCode+index)
                        const centerSeat = Math.floor(seating.seatsPerRow/2)
                        return (
                        <div key={rowLetter} className='flex items-center gap-4 mb-3 '>
                            <p className='w-8 h-8 text-sm md:w-12 md:h-12 md:text-base lg:w-16 lg:h-16 text-lg font-bold   flex items-center justify-center'>{rowLetter}</p>
                            <div className='flex items-center gap-2'>
                                {Array.from({length:seating.seatsPerRow}).map((seat,seatIndex)=>{
                                    const seatNumber = seatIndex+1
                                    const seatId = `${rowLetter}${seatNumber}`
                                    const isBooked = bookedSeats.includes(seatId)
                                    return (
                                        <button key={seatId} 
                                        className={`w-8 h-8 text-sm md:w-12 md:h-12 md:text-base lg:w-16 lg:h-16 text-lg ${getColor(seatId,category,isBooked)}  rounded-t-sm flex items-center justify-center ${centerSeat===seatIndex+1?"mr-10":""}`}
                                        onClick={()=>{
                                            handleToggleSeat(seatId,category,seating.price)
                                        }}
                                        >
                                            {seatNumber}
                                        </button>
                                    )
                                })}
                            </div>

                        </div>
                    )})}
                    </div>
                )
            })}
        </div>

        {/* Labels  */}
        <div className='flex flex-wrap justify-center items-center gap-6 mt-4'>
            {seatsLabel.map(seatLabel=>(
                <div key={seatLabel.label} className='flex flex-col items-center justify-center space-y-1'>
                    <div className={`w-8 h-8 text-sm md:w-12 md:h-12 md:text-base lg:w-16 lg:h-16 text-lg rounded-t-md ${seatLabel.color}`}/>
                    <p className='font-medium text-sm md:text-base lg:text-lg'>{seatLabel.label}</p>
                </div>
            ))}
        </div>


        {/* Selected Seats */}
        <div className='p-4 max-w-lg flex flex-col justify-center items-center mt-4 '>
            <h2 className='text-base lg:text-lg font-medium '>Selected Seats</h2>
            {selectedSeats.length>0?(
                <div className='text-base text-center'>{selectedSeats.map(seat=>seat.seatNo).join(", ")}</div>
            ):(
                <div>No Seats Selected</div>
            )}
        </div>


        {/* Total Payable Amount */}
        {selectedSeats.length>0 && (
            <div className='flex flex-col justify-center items-center mb-4 '>
                <h1 className='text-xl font-medium'>Total Payable Amount</h1>
                <h1 className='text-2xl font-medium'>₹{totalPayableAmount}</h1>
            </div>
        )}

        {/* Book Button */}
        <button 
        disabled={selectedSeats.length===0}
        className='bg-green-500 w-full p-3 text-lg text-white font-medium max-w-lg rounded-sm disabled:opacity-50'
        onClick={()=>{
            handleBookSeats()
        }}
        >
            Book
        </button>


    </div>
  )
}

export default SeatArrangement