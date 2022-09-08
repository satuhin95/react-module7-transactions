import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {getTransctions,addTrensction,editTransction,deleteTransction}  from './transctionApi'
const initialState ={
   transactions:[],
    isLoading:false,
    isError:false,
    error:'',
    editing:{},
}
export const fetchTransactions = createAsyncThunk('transaction/fetchTransactions', async({limit,type,search,page})=>{
    const transactions = await getTransctions(limit,type,search,page);
    return transactions;
})

export const createTransction = createAsyncThunk('transaction/createTransction',async(data)=>{
    const transaction = await addTrensction(data);
    return transaction;
})
export const changeTransction = createAsyncThunk('transaction/changeTransction',async({id,data})=>{
    const transaction = await editTransction(id,data);
    return transaction;
})
export const removeTransction = createAsyncThunk('transaction/removeTransction',async(id)=>{
    const transaction = await deleteTransction(id);
    return transaction;
})

// create slice 
const transctionSlice = createSlice({
    name:"transaction",
    initialState,
    reducers:{
      editActive:(state,action)=>{
         state.editing = action.payload;
      },
      editInActive:(state)=>{
         state.editing = {};
      },

    },
    extraReducers:(builder)=>{
        builder
         .addCase(fetchTransactions.pending,(state)=>{
            state.isError = false;
            state.isLoading = true;
         })
         .addCase(fetchTransactions.fulfilled,(state,action)=>{
            state.isError = false;
            state.isLoading = false;
            state.transactions= action.payload;
         })
         .addCase(fetchTransactions.rejected,(state,action)=>{
            state.isError = true;
            state.isLoading = false;
            state.transactions = [];
            state.error = action.error?.message;
         })
         .addCase(createTransction.pending,(state)=>{
            state.isError = false;
            state.isLoading = true;
         })
         .addCase(createTransction.fulfilled,(state,action)=>{
            state.isError = false;
            state.isLoading = false;
            state.transactions.push(action.payload);
         })
         .addCase(createTransction.rejected,(state,action)=>{
            state.isError = true;
            state.isLoading = false;
            state.error = action.error?.message;
         })
         .addCase(changeTransction.pending,(state)=>{
            state.isError = false;
            state.isLoading = true;
         })
         .addCase(changeTransction.fulfilled,(state,action)=>{
            state.isError = false;
            state.isLoading = false;
            const index = state.transactions.findIndex(t=>t.id === action.payload.id)
            state.transactions[index] = action.payload;
         })
         .addCase(changeTransction.rejected,(state,action)=>{
            state.isError = true;
            state.isLoading = false;
            state.error = action.error?.message;
         })
         .addCase(removeTransction.pending,(state)=>{
            state.isError = false;
            state.isLoading = true;
         })
         .addCase(removeTransction.fulfilled,(state,action)=>{
            state.isError = false;
            state.isLoading = false;
            state.transactions = state.transactions.filter(t=>t.id !== action.meta.arg)
         })
         .addCase(removeTransction.rejected,(state,action)=>{
            state.isError = true;
            state.isLoading = false;
            state.error = action.error?.message;
         })
    }
})
export default transctionSlice.reducer;
export const {editActive, editInActive} = transctionSlice.actions;