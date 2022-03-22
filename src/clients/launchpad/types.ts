export interface VideoPlayerExtensionsResponse {
    pauseResume: boolean
    skipForward: boolean
    skipBackward: boolean
    cycleAudioTrack: boolean
    cycleSubtitles: boolean
    toggleSubtitles: boolean
}

export interface VideoPlayerStateResponse {
    name: String
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