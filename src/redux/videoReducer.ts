import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as launchpadClient from "../clients/launchpad/launchpadClient";
import {MediaFile} from "../types/app/types";
import {toMediaFile} from "../converter/client/launchpad/converter";


const initialState: VideoState = {
    files: [],
    currentPage: 0,
    totalPages: 0
}


export const fetchVideos = createAsyncThunk(
    'video/fetchVideos',
    async (params: { page: Number, size: Number, filter?: String }, thunkAPI) => {
        const {page, size, filter} = params;
        return await launchpadClient.fetchVideos(page, size, filter)
    }
)

export const openVideoFile = createAsyncThunk(
    'video/openVideoFile',
    async (id: Number, thunkAPI) => {
        return await launchpadClient.openVideo(id);
    }
)

export const openVideoFileLocation = createAsyncThunk(
    'video/openVideoFileLocation',
    async (id: Number, thunkAPI) => {
        return await launchpadClient.openVideoLocation(id);
    }
)

export const videoSlice = createSlice(
    {
        name: "video",
        initialState,
        reducers: {
            reset: () => initialState
        },
        extraReducers: (builder => {
            builder.addCase(fetchVideos.fulfilled, (state, action) => {
                state.files = action.payload.content.map(toMediaFile)
                state.currentPage = action.payload.page
                state.totalPages = action.payload.total
            })
        })
    }
)

export interface VideoState {
    files: MediaFile[],
    currentPage: number,
    totalPages: number,
}

export const {reset} = videoSlice.actions

export default videoSlice.reducer