import SeatArrangement from './SeatArrangement';
export type seatingConfigType = {
    type: string,
    rows: number,
    seatsPerRow: number,
    price: number    
}
const seatingConfig : seatingConfigType[] = [
  { type: "Regular", rows: 4, seatsPerRow: 12, price: 150 },
  { type: "Premium", rows: 3, seatsPerRow: 8, price: 250 },
  {type: "VIP", rows: 2, seatsPerRow: 6, price: 500 }
];
const ScreenComponents = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4 md:p-6 lg:p-8 w-full'>
        <div className='space-y-4 w-full'>
            {/* Title */}
            <div className='flex flex-col items-center justify-center gap-2'>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-medium '>Cinema Hall Booking</h1>
                <p className='text-gray-600 text-bade lg:text-lg'>Select your prefered seats</p>
            </div>
            
            {/* Screen */}
            <div className='h-3 w-full max-w-lg mx-auto bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-lg'/>
            <p className='w-full text-center font-medium text-gray-500'>SCREEN 1</p>

            {/* New Seats */}
            <SeatArrangement seatingConfig = {seatingConfig}/>


        </div>

    </div>
  )
}

export default ScreenComponents