import {MediaFile} from "../../../types/app/media/types";
import {VideoFileResponse} from "../../../clients/launchpad/launchpadClient";

export function toMediaFile(videoFile: VideoFileResponse): MediaFile {
    return {
        id: videoFile.id,
        name: videoFile.name
    }
}