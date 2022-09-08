import { configureStore } from "@reduxjs/toolkit";
import transctionReducer from "../features/transction/transctionSlice";
import filterReducer from "../features/filter/filterSlice";
export const store = configureStore({
    reducer: {
        transaction:transctionReducer,
        filter:filterReducer,
    },
});
