import axios from "axios";

export function fetchVideos(page: Number, size: Number, filter?: String): Promise<VideoPageResponse> {
    return axios.get('/api/v1/media/video',
        {
            params: {
                page,
                size,
                filter
            }
        })
        .then(response => response.data)
}

export function refreshDatabase(): Promise<void> {
    return axios.post('/api/v1/media/video');
}

export function openVideo(id: Number): Promise<any> {
    return axios.post('/api/v1/launcher/video/' + id)
        .then(response => response.data)
}

export function openVideoLocation(id: Number): Promise<any> {
    return axios.post('/api/v1/launcher/video/' + id + '/location')
        .then(response => response.data)
}

export function killVidePlayer(): Promise<any> {
    return axios.post('/api/v1/launcher/video/kill')
        .then(response => response.data);
}

export function openVideoShuffle(filter?: String): Promise<VideoFileResponse> {
    return axios.post('/api/v1/launcher/video/shuffle',
        {},
        {
            params: {
                filter
            }
        }).then(response => response.data);
}


export interface VideoPageResponse extends PageResponse {
    content: VideoFileResponse[],
}

export interface VideoFileResponse {
    id: number,
    name: String
}

export interface PageResponse {
    page: number,
    total: number,
    isEmpty: Boolean
}