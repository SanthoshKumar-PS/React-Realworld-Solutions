import React, { useState } from 'react'

const MatchingPairs = () => {
    const [gridSize, setGridSize] = useState<number>(4)


    const handleGridSizeChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const size = parseInt(e.target.value)
        if(size>=2 && size<=10){
            setGridSize(size)
        } 
    }
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
        {/* Title */}
        <h2 className='text-2xl lg:text-3xl font-bold '>Memory Game</h2>
        {/* Label - Grid Size */}
        <div className='flex items-center gap-3'>
            <label htmlFor="GridSize" className='font-medium'>Grid Size(max:10)</label>
            <input 
            id='GridSize'
            type="number" 
            min={2}
            max={10}
            value={gridSize}
            onChange={handleGridSizeChange}
            className='p-2 border border-gray-300 rounded-sm w-max max-w-20'
            />
        </div>

        

    </div>
  )
}

export default MatchingPairs