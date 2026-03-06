import { INCREMENT, DECREMENT } from "./actionType"

const initialState = {
    count: 70
}

export function Reducer(state = initialState, { type, payload }) {

    switch (type) {

        case INCREMENT :
            return { count: state.count + payload }

        case DECREMENT :
            return { count: state.count - payload }

        default:
            return state
    }
}