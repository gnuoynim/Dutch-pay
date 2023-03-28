import {createSlice} from "@reduxjs/toolkit"

const groupMemberReducer =createSlice({
    name:"groupMember",
    initialState:{
        groupMember: ["강남"]
    },
    reducers:{
        setGroupMember(state, action){
            state.groupMember = action.payload;
        }
    }
})

export const{setGroupMember}=groupMemberReducer.actions;
export default groupMemberReducer.reducer;
