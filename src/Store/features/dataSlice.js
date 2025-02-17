import {createSlice} from '@reduxjs/toolkit';
import * as data from '../../data/CustomerData.json';

// console.log(data.default)

export const dataSlice = createSlice({
    name: 'data',
    initialState: data.default.customerInfo,
    reducers: {
        addData: (state, action) => {
            state.push(action.payload)
        }
    }
})

export default dataSlice.reducer;