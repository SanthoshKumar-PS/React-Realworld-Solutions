import SeatArrangement from './SeatArrangement';

const ScreenComponents = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4 md:p-6 lg:p-8 w-full'>
        <div className='space-y-4 w-full'>
            {/* Title */}
            <div className='flex flex-col items-center justify-center gap-2'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium '>Cinema Hall Booking</h1>
                <p className='text-gray-600 text-lg'>Select your prefered seats</p>
            </div>
            
            {/* Screen */}
            <div className='h-3 w-full max-w-lg mx-auto bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-lg'/>
            <p className='w-full text-center font-medium text-gray-500'>SCREEN 1</p>

            {/* New Seats */}
                <SeatArrangement/>


            {/* Labels and proces */}
            {/* Booking Summary */}

        </div>

    </div>
  )
}

export default ScreenComponents