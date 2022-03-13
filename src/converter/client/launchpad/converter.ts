import {VideoFile} from "../../../types/client/launchpad/types";
import {MediaFile} from "../../../types/app/types";

export function toMediaFile(videoFile: VideoFile): MediaFile {
    return {
        id: videoFile.id,
        name: videoFile.name
    }
}