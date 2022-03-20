import axios from "axios";
import {VideoFileResponse, VideoPlayerExtensionsResponse, VideoPlayerStateResponse} from "./types";

export function openVideo(id: Number): Promise<VideoFileResponse> {
    return axios.post('/api/v1/video/player/open/' + id)
        .then(response => response.data)
}

export function closeVideoPlayer(): Promise<VideoPlayerStateResponse> {
    return axios.post('/api/v1/video/player/close')
        .then(response => response.data);
}

export function openVideoShuffle(filter?: String): Promise<VideoFileResponse> {
    return axios.post('/api/v1/video/player/open/random',
        {},
        {
            params: {
                filter
            }
        }).then(response => response.data);
}

export function fetchVideoPlayerExtensions(): Promise<VideoPlayerExtensionsResponse> {
    return axios.get('/api/v1/video/player/extension')
        .then(response => response.data)
}

export function toggleSubtitle(): Promise<VideoPlayerStateResponse> {
    return axios.post('/api/v1/video/player/extension/toggle-subtitle')
        .then(response => response.data)
}

export function skipForward(): Promise<VideoPlayerStateResponse> {
    return axios.post('/api/v1/video/player/extension/skip-forward')
        .then(response => response.data)
}

export function skipBackward(): Promise<VideoPlayerStateResponse> {
    return axios.post('/api/v1/video/player/extension/skip-backward')
        .then(response => response.data)
}

export function pauseResume(): Promise<VideoPlayerStateResponse> {
    return axios.post('/api/v1/video/player/extension/pause-resume')
        .then(response => response.data)
}

export function cycleSubtitles(): Promise<VideoPlayerStateResponse> {
    return axios.post('/api/v1/video/player/extension/cycle-subtitles')
        .then(response => response.data)
}

export function cycleAudioTrack(): Promise<VideoPlayerStateResponse> {
    return axios.post('/api/v1/video/player/extension/cycle-audio-track')
        .then(response => response.data)
}