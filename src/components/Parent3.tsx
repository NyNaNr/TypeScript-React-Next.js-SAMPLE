import React, { useState, useCallback } from 'react'



//useCallback lesson



type ButtonProps = {
    onClick: ()=> void
}
//　DecrementButtonは通常の関数コンポーネントでボタンを表示する
const DecrementButton = (props: ButtonProps) => {
    const { onClick } = props

    console.log('DecrementButtonが再描写されました')

    return <button onClick={onClick}>Decrement</button>
}

// IncrementButton はメモ化した関数コンポーネントでボタンを表示する。

const IncrementButton = React.memo((props: ButtonProps) => {
    const { onClick } = props
    console.log('IncrementButtonが再描写されました。')

    return <button onClick={onClick}>Increment</button>
})


//DoubleButtonはメモ化した関数コンポーネントでボタンを表示する。

const DoubleButton = React.memo((props: ButtonProps) => {
    const { onClick } = props
    console.log('DoubleButtonが再描写されました。')

    return <button onClick={onClick}>Double</button>


})








export const Parent3 = () => {

    const [count, setCount] = useState(0)
    const decrement = () => {
        setCount((c) => c-1 )
    }

    // const increment =() => {
    //     setCount((c) => c + 1)
    // }


    const increment =useCallback(() => {
        setCount((c) => c + 1)
    },[])


    //useCallbackを使ってメモ化する。useCallbackの第一引数は関数、第二引数は依存配列
    const double = useCallback(() => {
        setCount((c) => c*2)
    },[])


return (
    <div>
        <p>Count: {count}</p>
        {/* コンポーネントに関数を渡す　*/}
        <DecrementButton onClick={decrement} />

        {/* メモ化コンポーネントに関数を渡す　*/}
        <IncrementButton onClick={increment} />


        {/* メモ化コンポーネントにメモ化した関数を渡す*/}
        <DoubleButton onClick={double} />

    </div>
)
}
