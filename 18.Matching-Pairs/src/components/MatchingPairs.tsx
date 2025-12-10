import React, { useEffect, useState } from 'react'
import generateNxNMatrix from './generateNxNMatrix';
import { stylerGrid } from './stylers';
type Card = {
    id:number,
    num:number
}
const MatchingPairs = () => {
    const [gridSize, setGridSize] = useState<number>(4);
    const [cards,setCard] = useState<Card[]>([])
    const [solved,setSolved] = useState<number[]>([]);
    const [flipped,setFlipped] = useState<number[]>([])
    const [disabled,setDisabled] = useState<boolean>(false);
    const [won, setwon] = useState<boolean>(false);

    const initializeGame = () => {
        const randomCards = generateNxNMatrix(gridSize)
        setCard(randomCards.map((num,index)=>({
            id:index,
            num:num
        })))
        setSolved([])
        setFlipped([])
        setDisabled(false)
        setwon(false)

    }

    useEffect(()=>{
        initializeGame();
    },[gridSize])

    const checkMatches = (secondId:number) => {
        const [firstId] = flipped
        if(cards[firstId].num===cards[secondId].num){
            setSolved([...solved,firstId,secondId])
            setFlipped([])
            setDisabled(false)

        } else{
            setTimeout(()=>{
                setFlipped([])
                setDisabled(false)

            },1000)
        }
    }

    const handleClick = (id:number) => {
        if(disabled||won) return
        if(solved.includes(id)) return


        if(flipped.length===0){
            setFlipped([id])
            return
        } 
        if(flipped.length===1 && flipped[0]===id) {
            setFlipped([])
            return
        }
        if(flipped.length===1){
            setFlipped([...flipped,id])
            setDisabled(true)
            checkMatches(id)
        }
        
    }


    const handleGridSizeChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const size = parseInt(e.target.value)
        if(size>=2 && size<=10){
            setGridSize(size)
        } 
    }

    useEffect(()=>{
        if(solved.length===cards.length && cards.length>0){
            setwon(true)
        }

    },[solved,flipped])

    const isFlipped = (id:number) => flipped.includes(id) || solved.includes(id)
    const isSolved = (id:number) => solved.includes(id)

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

        {/* Boxes */}
        <div className={`grid ${stylerGrid[gridSize]} justify-center items-center gap-2`}>
            {cards.map((card,index)=>(
                <div key={index} className={`px-6 py-4 rounded-sm font-medium
                    ${isFlipped(card.id)
                        ?isSolved(card.id) ? "bg-green-500 text-white":"bg-pink-500 text-white"
                        :"bg-gray-200 text-gray-500"
                    }`}
                onClick={()=>{
                    handleClick(card.id)
                }}
                >
                    {isFlipped(card.id)?card.num:'?'}
                </div>
            ))}

        </div>

        {/* Won */}
        {won && (
            <div className='text-xl font-medium my-3 animate-bounce'>
                Congratulation!!! You won
                
            </div>
        )}
        {/* Reset */}
        <button onClick={initializeGame} className='bg-green-500 px-4 py-2 rounded-sm text-white font-medium'>
            {won?"Play Again":"Reset"}

        </button>

    </div>
  )
}

export default MatchingPairs