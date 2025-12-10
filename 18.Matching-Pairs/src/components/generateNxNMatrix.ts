export default function generateNxNMatrix(gridSize:number){
    const total = gridSize*gridSize
    const totalNumbers = Math.floor(total/2)

    const values:number[] = []
    for(let i=1;i<=totalNumbers;i++){
        values.push(i,i)
    }

  for (let i = values.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [values[i], values[j]] = [values[j], values[i]];
  }
  
  return values

}
