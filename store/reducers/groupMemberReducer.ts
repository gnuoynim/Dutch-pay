import {createSlice} from "@reduxjs/toolkit"

const groupMemberReducer =createSlice({
    name:"groupMember",
    initialState:{
        groupMember: ""
    },
    reducers:{
        setGroupMember(state, action){
            state = action.payload;
        }
    }
})

export const{setGroupMember}=groupMemberReducer.actions;
export default groupMemberReducer.reducer;
