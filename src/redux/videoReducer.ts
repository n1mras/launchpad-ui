import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import * as launchpadClient from "../clients/launchpad/launchpadClient";
import {MediaFile} from "../types/app/media/types";
import {toMediaFile} from "../converter/client/launchpad/converter";


const initialState: VideoState = {
    files: [],
    currentPage: 0,
    totalPages: 0,
    searchFilter: ""
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

export const openVideoFileShuffle = createAsyncThunk(
    'video/openVideoFileShuffle',
    async (filter: String, thunkAPI) => {
        return await launchpadClient.openVideoShuffle(filter);
    }
)

export const killVideoPlayer = createAsyncThunk(
    'video/killVideoPlayer',
    async (thunkAPI) => {
        return await launchpadClient.killVidePlayer();
    }
)


export const videoSlice = createSlice(
    {
        name: "video",
        initialState,
        reducers: {
            reset: () => initialState,
            setSearchFilter: (state, action: PayloadAction<String>) => {
                state.searchFilter = action.payload
            }
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
    searchFilter: String
}

export const {reset, setSearchFilter} = videoSlice.actions

export default videoSlice.reducer