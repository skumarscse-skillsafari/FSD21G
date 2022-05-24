// import { createStore } from 'redux';

// const reducerFun = (state = { counter: 0}, action) => { // action = { type:..., payload:...}
//     console.log(action);
//     // Should not mutate the original state
//     switch (action.type) {
//         case 'INC':
//             return { counter: state.counter + 1};
           
//         case 'DEC':
//             return { counter: state.counter - 1};
        
//         case 'ADD':
//             return { counter: state.counter + action.payload};
            
//         default:
//             return state;
//     }
// }

// const store = createStore(reducerFun);

// export default store;

/* ****************************** Redux ToolKit ************************** */
import {configureStore, createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        increment(state, action) {
          state.counter++;  
        },
        decrement(state, action) {
          state.counter--;
        },
        addBy(state, action) {
          state.counter += action.payload;
        }
    }
});

export const actions = counterSlice.actions;
const store = configureStore({
    reducer: counterSlice.reducer,
});
export default store; 

