import { useState} from 'react'



//useState


type CounterProps = {
    initialValue: number
}

const Counter = (props: CounterProps) => {
    const { initialValue } = props
    const [count, setCount] = useState(initialValue)


    return <div>
        <h1>useState</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount((prevCount) => prevCount +1)}>+</button>
        <button onClick={() => setCount((prevCount) => prevCount -1)}>-</button>


    </div>
}






export default Counter