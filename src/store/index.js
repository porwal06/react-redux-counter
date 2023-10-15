import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, show: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        toggle(state){
            state.show = !state.show;
        },
        counter(state, action){
            state.counter = (action.payload.op == 'increase') ? state.counter + action.payload.value : state.counter - action.payload.value;
        }
    },
}
);
const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;