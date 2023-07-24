// import {createStore} from 'redux';

// const initialState = {counter:0,showCounter:true};
// const counterReducder = (state =initialState, action) =>{

//     if(action.type === 'increment'){
//         return{
//             counter:state.counter +1,
//             showCounter:state.showCounter
//         }
//     }
//      if(action.type === 'decrement'){
//         return{
//             counter:state.counter -1,
//             showCounter:state.showCounter
//         }
//     }
//     if(action.type === 'increase'){
//         return{
//             counter:state.counter +action.value,
//             showCounter:state.showCounter
//         }
//     }

//       if(action.type === 'toggle'){
//         return{
//             showCounter:!state.showCounter,
//             counter:state.counter
//         };
//     }


//     return state;
// }

// const store = createStore(counterReducder);

// export default store;

//................................................This is the same  code writing using the redux toolkit...........................
import {createSlice,configureStore} from '@reduxjs/toolkit';

//=================silece refering to the counter component============================
const initialState = { counter:0, showCounter:true };
const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state){
           // state.counter = state.counter+action.payload;
           state.counter++;
        },
        decrement(state){
            //state.counter = state.counter-action.payload;
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter+action.payload;
        },
        toggleCounter(state){
            
            state.showCounter = !state.showCounter;
        }

    }
});

//======================================slice refering to auth==================================
const initialAuthState = {isAuthenticated:false}
const authSlice = createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }

})



// const store = configureStore({
//     reducer: counterSlice.reducer
// });
const store = configureStore({ reducer: {  counter:counterSlice.reducer,
                                           auth:authSlice.reducer
                                        }
                            });

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;