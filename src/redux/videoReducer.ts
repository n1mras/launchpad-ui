import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import * as libraryClient from "../clients/launchpad/libraryClient";
import * as videoPlayerClient from "../clients/launchpad/videoPlayerClient";
import {MediaFile} from "../types/app/media/types";
import {toMediaFile, toVideoPlayerExtensions} from "../converter/client/launchpad/converter";


const initialState: VideoState = {
    files: [],
    currentPage: 0,
    totalPages: 0,
    searchFilter: undefined,
    currentVideo: undefined,
    playerExtensions: {
        cycleAudioTrack: false,
        cycleSubtitles: false,
        pauseResume: false,
        skipBackward: false,
        skipForward: false,
        toggleSubtitles: false
    }
}


export const fetchVideos = createAsyncThunk(
    'video/fetchVideos',
    async (params: { page: Number, size: Number, filter?: String }, thunkAPI) => {
        const {page, size, filter} = params;
        return await libraryClient.fetchVideos(page, size, filter)
    }
)

export const openVideoFile = createAsyncThunk(
    'video/openVideoFile',
    async (id: Number, thunkAPI) => {
        return await videoPlayerClient.openVideo(id);
    }
)

export const openVideoFileLocation = createAsyncThunk(
    'video/openVideoFileLocation',
    async (id: Number, thunkAPI) => {
        return await libraryClient.openVideoLocation(id);
    }
)

export const openRandomVideoFile = createAsyncThunk(
    'video/openRandomVideoFile',
    async (filter: String|undefined, thunkAPI) => {
        return await videoPlayerClient.openVideoShuffle(filter);
    }
)

export const closeVideoPlayer = createAsyncThunk(
    'video/closeVideoPlayer',
    async (thunkAPI) => {
        return await videoPlayerClient.closeVideoPlayer();
    }
)

export const fetchVideoPlayerExtensions = createAsyncThunk(
    'vide/fetchVideoPlayerExtensions',
    async (thunkAPI) => {
        return await videoPlayerClient.fetchVideoPlayerExtensions();
    }
)


export const cycleAudioTrack = createAsyncThunk(
    'vide/cycleAudioTrack',
    async (thunkAPI) => {
        return await videoPlayerClient.cycleAudioTrack();
    }
)
export const skipBackward = createAsyncThunk(
    'vide/skipBackward',
    async (thunkAPI) => {
        return await videoPlayerClient.skipBackward();
    }
)
export const skipForward = createAsyncThunk(
    'vide/skipForward',
    async (thunkAPI) => {
        return await videoPlayerClient.skipForward();
    }
)
export const pauseResume = createAsyncThunk(
    'vide/pauseResume',
    async (thunkAPI) => {
        return await videoPlayerClient.pauseResume();
    }
)
export const cycleSubtitles = createAsyncThunk(
    'vide/cycleSubtitles',
    async (thunkAPI) => {
        return await videoPlayerClient.cycleSubtitles();
    }
)
export const toggleSubtitles = createAsyncThunk(
    'vide/toggleSubtitles',
    async (thunkAPI) => {
        return await videoPlayerClient.toggleSubtitle();
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
            builder
                .addCase(fetchVideos.fulfilled, (state, action) => {
                    state.files = action.payload.content.map(toMediaFile)
                    state.currentPage = action.payload.page
                    state.totalPages = action.payload.total
                })
                .addCase(openVideoFile.fulfilled, (state, action) => {
                    state.currentVideo = toMediaFile(action.payload)
                })
                .addCase(openRandomVideoFile.fulfilled, (state, action) => {
                    state.currentVideo = toMediaFile(action.payload)
                })
                .addCase(fetchVideoPlayerExtensions.fulfilled, (state, action) => {
                    state.playerExtensions = toVideoPlayerExtensions(action.payload)
                })
                .addCase(cycleAudioTrack.fulfilled, (state, action) => {
                })
                .addCase(skipBackward.fulfilled, (state, action) => {
                })
                .addCase(skipForward.fulfilled, (state, action) => {
                })
                .addCase(pauseResume.fulfilled, (state, action) => {
                })
                .addCase(cycleSubtitles.fulfilled, (state, action) => {
                })
                .addCase(closeVideoPlayer.fulfilled, (state, action) => {
                })
        })
    }
)

export interface VideoState {
    files: MediaFile[],
    currentPage: number,
    totalPages: number,
    searchFilter?: String
    currentVideo?: MediaFile
    playerExtensions: VideoPlayerExtensions
}

export interface VideoPlayerExtensions {
    pauseResume: boolean
    skipForward: boolean
    skipBackward: boolean
    cycleAudioTrack: boolean
    cycleSubtitles: boolean
    toggleSubtitles: boolean
}

export const {reset, setSearchFilter} = videoSlice.actions

export default videoSlice.reducer