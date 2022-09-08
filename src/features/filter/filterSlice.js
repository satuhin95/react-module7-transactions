import { createSlice, } from "@reduxjs/toolkit";


const initialState ={
    search:'',
    type:'',
    pagination:{
      currentPage:1,
      limit:5,
      totalCount:1,
    },
};

const filterSlice = createSlice({
    name:"filter",
    initialState,
    reducers:{
        searched:(state,action)=>{
            state.search = action.payload;
        },
        typeFilter:(state,action)=>{
         state.type = action.payload;
        },
        resetFilter:(state)=>{
            state.type = '';
            state.search = '';
        }
    }

});
export default filterSlice.reducer;
export const {searched,resetFilter ,typeFilter} = filterSlice.actions;