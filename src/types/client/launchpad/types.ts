export interface VideoResponse extends Page {
    content: VideoFile[],
}

export interface VideoFile {
    id: number,
    name: String
}

export interface Page {
    page: number,
    total: number,
    isEmpty: Boolean
}