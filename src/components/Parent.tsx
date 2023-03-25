import React, { memo, useState } from 'react'
//P94 useMemo how to 


type Fizzprops = {
    isFizz: boolean
}



const Fizz = (props: Fizzprops) => {
    const {isFizz} = props
    console.log(`Fizzが再描写されました, isFizz=${isFizz}`)
    return <span>{isFizz ? 'Fizz' : ''}</span>
}

type BuzzProps = {
    isBuzz: boolean
}


const Buzz = memo<BuzzProps>((props)=>{
    const {isBuzz} = props
    console.log(`Buzzが再描写されました, isBuzz=${isBuzz}`)
    return (
        <span>
            {isBuzz ? 'Buzz' : ''}
        </span>
    )
    })



export const Parent = () => {
    const [count, setCount] = useState(1)
    const isFizz = count % 3 === 0
    const isBuzz = count % 5 === 0

    console.log(`Parentが再描写されました, count=${count}`)

    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>+1</button>
            <p>
                <Fizz isFizz = {isFizz} />
                <Buzz isBuzz={isBuzz} />
            </p>
        </div>
    )
}
