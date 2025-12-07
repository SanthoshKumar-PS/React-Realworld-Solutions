import React, { useState } from 'react'


type seatingConfigType = {
    type: string,
    rows: number,
    seatsPerRow: number,
    price: number    
}
const seatingConfig : seatingConfigType[] = [
  { type: "Regular", rows: 4, seatsPerRow: 12, price: 150 },
  { type: "Premium", rows: 3, seatsPerRow: 12, price: 250 },
  {type: "VIP", rows: 2, seatsPerRow: 12, price: 350 }
];

const SeatArrangement = () => {
    const [selectedSeats, setSelectedSeats] = useState<string[]>([])
    const bookedSeats = ['A1','B2','A6','E4','E5','E6']
    let rowStartCode = 65

    const getColor = (seatId:string,category:string,isBooked:boolean)=>{
        if(isBooked) return "bg-gray-400"
        if(selectedSeats.includes(seatId)) return "bg-green-400"

        if(category==='Regular') return "bg-blue-200"
        if(category==='Premium') return "bg-pink-200"
        if(category==='VIP') return "bg-yellow-200"
        return "bg-indigo-300"

    }

  return (
    <div className='flex flex-col items-center justify-center'>
        {seatingConfig.map((seating,seatIndex)=>{
            const category = seating.type //Regular, Premium, Vip
            const startingCode = rowStartCode
            rowStartCode+=seating.rows
            return (
                <div key={seating.type} className=''>
                {Array.from({length:seating.rows}).map((_,index)=>{
                    const rowLetter = String.fromCharCode(startingCode+index)
                    return (
                    <div key={rowLetter} className='flex items-center gap-8 mb-3'>
                        <p className='w-16 h-16 font-bold text-lg p-2  flex items-center justify-center'>{rowLetter}</p>
                        <div className='flex items-center gap-2'>
                            {Array.from({length:seating.seatsPerRow}).map((seat,seatIndex)=>{
                                const seatNumber = seatIndex+1
                                const seatId = `${rowLetter}${seatNumber}`
                                const isBooked = bookedSeats.includes(seatId)
                                return (
                                    <button key={seatId} 
                                    className={`w-16 h-16 ${getColor(seatId,category,isBooked)}  p-2 rounded-t-sm flex items-center justify-center`}
                                    onClick={()=>{
                                        setSelectedSeats(prev=>([...prev,seatId]))
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

        {/* Selected Seats */}
        <div className='p-4 max-w-lg flex flex-col justify-center items-center mt-4 md:mt-8'>
            <h2>Selected Seats</h2>
            {selectedSeats.length>0?(
                <div>{selectedSeats.join(", ")}</div>
            ):(
                <div>No Seats Selected</div>
            )}
        </div>


    </div>
  )
}

export default SeatArrangement