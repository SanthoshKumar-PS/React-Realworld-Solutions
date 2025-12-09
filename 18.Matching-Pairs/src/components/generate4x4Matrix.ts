export default function generate4x4Matrix():number[][] {
    const values:number[] = []
    for(let i=1;i<=8;i++){
        values.push(i,i)
    }

  for (let i = values.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [values[i], values[j]] = [values[j], values[i]];
  }

    const matrix :number[][]=[]
    let index=0
    for(let r=0;r<4;r++){
        const row:number[] = []
        for(let c=0;c<4;c++){
            row.push(values[index++])
        }
        matrix.push(row);

    }
    return matrix

}
