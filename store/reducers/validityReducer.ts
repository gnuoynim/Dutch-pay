import {createSlice} from "@reduxjs/toolkit"


const validityReducer = createSlice({
    name:"validity",
    initialState:{
        validity: false
    },
    reducers:{
        setValidity(state, action){
            state.validity = action.payload;
        }
    }
})
export const{setValidity}=validityReducer.actions;
export default validityReducer.reducer;
