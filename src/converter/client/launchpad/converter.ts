import {MediaFile} from "../../../types/app/media/types";
import {VideoFileResponse, VideoPlayerExtensionsResponse} from "../../../clients/launchpad/types";
import {VideoPlayerExtensions} from "../../../redux/videoReducer";

export function toMediaFile(videoFile: VideoFileResponse): MediaFile {
    return {
        id: videoFile.id,
        name: videoFile.name
    }
}

export function toVideoPlayerExtensions(extensions: VideoPlayerExtensionsResponse): VideoPlayerExtensions {
    return {
        cycleAudioTrack: extensions.cycleAudioTrack,
        cycleSubtitles: extensions.cycleSubtitles,
        pauseResume: extensions.pauseResume,
        skipBackward: extensions.skipBackward,
        skipForward: extensions.skipForward,
        toggleSubtitles: extensions.toggleSubtitles
    }
}