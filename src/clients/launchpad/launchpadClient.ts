import axios, {AxiosResponse} from "axios";
import {VideoResponse} from "../../types/client/launchpad/types";

export function fetchVideos(page: Number, size: Number, filter?: String): Promise<VideoResponse> {
    return axios.get('/api/media/video',
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
    return axios.post('/api/media/video');
}

export function openVideo(id: Number): Promise<any> {
    return axios.post('/api/launcher/video/' + id)
        .then(response => response.data)
}

export function openVideoLocation(id: Number): Promise<any> {
    return axios.post('/api/launcher/video/' + id + '/directory')
        .then(response => response.data)
}