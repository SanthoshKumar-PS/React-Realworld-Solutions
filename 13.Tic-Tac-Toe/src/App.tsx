import { useState } from "react"

function App() {

  type PlayerMark = "X" | "O" | null;  
  const [squares,setSquares]=useState(Array(9).fill(null))
  const [isX,setIsX]=useState(true)
  const [winner,setWinner]=useState<'X'|'O'|null>(null)

 const checkWinning=(squares: PlayerMark[])=>{
  const winningPlaces=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]]
  for (let[a,b,c] of winningPlaces){
    if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
      setWinner(squares[a])
      console.log("Winner is ",squares[a])
      return 
    }

  }
}

  const handleOnClick=(squareNumber:number)=>{
    if(winner!==null){
      return
    }
    if(squares[squareNumber]===null){
      setSquares(prevSquare=>{
        const newSquare=[...prevSquare]
        newSquare[squareNumber]=isX?"X":"O"
        setIsX(!isX)
        checkWinning(newSquare)
        return newSquare
      })
      
    }
    else{
      return
    }
  }

  const Square=({squareNumber}:{squareNumber:number})=>(
        <div onClick={()=>handleOnClick(squareNumber)} className="hover:cursor-pointer w-16 h-16 border-1 border-zinc-700 bg-gray-200 font-medium flex justify-center items-center">
          {squares[squareNumber]}
        </div>
  )
  return(
    <div className="min-h-screen bg-zinc-300 flex flex-col space-y-4 justify-center items-center">

    <div>
      <div className="flex justify-center items-center">
        <Square squareNumber={0}/>
        <Square squareNumber={1}/>
        <Square squareNumber={2}/>
      </div>
      <div className="flex justify-center items-center">
        <Square squareNumber={3}/>
        <Square squareNumber={4}/>
        <Square squareNumber={5}/>

      </div>
      <div className="flex justify-center items-center">
        <Square squareNumber={6}/>
        <Square squareNumber={7}/>
        <Square squareNumber={8}/>

      </div>
    </div>
    <div>
      {winner?`Winner is ${winner}. Reset to play again.`:isX?"Next X Turn":"Next O Turn"}
    </div>
    <button className='hover:cursor-pointer bg-zinc-700 px-4 py-2 rounded-lg text-white font-medium' onClick={(e)=>{
      e.preventDefault()
      setWinner(null)
      setSquares(Array(9).fill(null))
    }}>
      Reset Board
    </button>



    </div>
)
}

export default App
