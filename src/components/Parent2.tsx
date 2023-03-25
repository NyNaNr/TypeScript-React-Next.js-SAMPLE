import React, { memo, useState } from 'react'


//P96 useMemo ダメな例

type Fizzprops = {
    isFizz: boolean
}



const Fizz = (props: Fizzprops) => {
    const {isFizz} = props
    console.log(`Fizz2が再描写されました, isFizz=${isFizz}`)
    return <span>{isFizz ? 'Fizz' : ''}</span>
}

type BuzzProps = {
    isBuzz: boolean
    onClick: () => void
}


const Buzz = memo<BuzzProps>((props)=>{
    const {isBuzz, onClick} = props
    console.log(`Buzz2が再描写されました, isBuzz=${isBuzz}`)
    return (
        <span onClick={onClick}>
            {isBuzz ? 'Buzz' : ''}
        </span>
    )
    })



export const Parent2 = () => {
    const [count, setCount] = useState(1)
    const isFizz = count % 3 === 0
    const isBuzz = count % 5 === 0

    const onBuzzClick = () => {
        console.log(`Buzz2がクリックされました isBuzz=${isBuzz}`)
    }
    console.log(`Parent2が再描写されました, count=${count}`)

    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>+1</button>
            <p>{`現在のカウント: ${count}`}</p>
            <p>
                <Fizz isFizz = {isFizz} />
                <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
            </p>
        </div>
    )
}
