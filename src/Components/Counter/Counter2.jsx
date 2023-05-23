import { useState } from "react";
export const Counter2 = ({ name }) => {
    const [count, setCount] = useState(0)

    const inDecrease = () => {
        setCount(count - 1)
    }
    const onDecrease = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={() => onDecrease()}>-</button>
            <span>{count}</span>
            <button onClick={() => inDecrease()}>+</button>
        </div>
    )
}