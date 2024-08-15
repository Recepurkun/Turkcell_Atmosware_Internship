import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0
}

const app = createSlice({
    name: "app",
    initialState,
    reducers: {
        _increament: (state) => {
            state.count += 1
        },
        _decreament: (state) => {
            state.count -= 1
        },
        _setCount: (state, action) => {
            state.count = action.payload
        }
    }
})

export const { _increament, _decreament, _setCount } = app.actions
export default app.reducer