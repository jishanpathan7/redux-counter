import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from "../redux/slices/counterSlice"

const Counter = () => {
    const counter = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();
    const incrementHandler = () => {
        dispatch(counterActions.increment())
    }
    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }
    return (
        <div>
            <h1>{counter}</h1>
            <div style={{
                display: "flex",
                gap: " 10px"
            }}>
                <button onClick={decrementHandler}>
                    Decrement
                </button>
                <button onClick={incrementHandler}>
                    Increment
                </button>
            </div>
        </div>
    )
}

export default Counter