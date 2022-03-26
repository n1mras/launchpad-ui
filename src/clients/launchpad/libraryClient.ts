import axios from "axios";
import {VideoFileResponse, VideoPageResponse} from "./types";

export function fetchVideos(page: Number, size: Number, filter?: String): Promise<VideoPageResponse> {
    return axios.get('/api/v1/library/video',
        {
            params: {
                page,
                size,
                filter
            }
        })
        .then(response => response.data)
}

export function openVideoLocation(id: Number): Promise<VideoFileResponse> {
    return axios.post('/api/v1/library/video/' + id + '/location')
        .then(response => response.data)
}

export function refreshDatabase(): Promise<void> {
    return axios.post('/api/v1/library/video/refresh');
}




