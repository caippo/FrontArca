import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const imbarca = createAsyncThunk(
    'animali/imbarca',
    async (formData, thunkAPI) => {
        const response = await axios.post('http://localhost:8080/arca/rest/animale/imbarca', formData);
        return response.data;
    }
);

const animaliSlice = createSlice({
    name: 'animali',
    initialState: { entities: [], loading: 'idle', error: null },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(imbarca.pending, (state, action) => {
                state.loading = 'loading';
            })
            .addCase(imbarca.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.entities = action.payload;
            })
            .addCase(imbarca.rejected, (state, action) => {
                state.loading = 'idle';
                state.error = action.error.message;
            });
    },
});

export default animaliSlice.reducer;