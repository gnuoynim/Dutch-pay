import {createSlice} from "@reduxjs/toolkit"


const groupNameReducer = createSlice({
    name:"groupName",
    initialState:{
        groupName: ""
    },
    reducers:{
        setGroupName(state, action){
            state.groupName = action.payload;
        }
    }
})
export const{setGroupName}=groupNameReducer.actions;
export default groupNameReducer.reducer;
