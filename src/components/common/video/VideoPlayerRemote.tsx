import React from 'react'
import {Box, IconButton} from "@mui/material";
import NotStartedOutlinedIcon from '@mui/icons-material/NotStartedOutlined';
import Forward10OutlinedIcon from '@mui/icons-material/Forward10Outlined';
import ClosedCaptionOffOutlinedIcon from '@mui/icons-material/ClosedCaptionOffOutlined';
import AudiotrackOutlinedIcon from '@mui/icons-material/AudiotrackOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {
    closeVideoPlayer,
    cycleAudioTrack,
    cycleSubtitles,
    openRandomVideoFile,
    pauseResume,
    skipBackward,
    skipForward,
    VideoPlayerExtensions
} from "../../../redux/videoReducer";

export default function VideoPlayerRemote(props: VideoPlayerRemoteProps) {
    const extensions = useSelector(((state: RootState) => state.video.playerExtensions));
    const searchFilter = useSelector((state: RootState) => state.video.searchFilter);
    const dispatch = useDispatch();

    return (
        <Box className={"video-player-remote"}>
            {renderShuffleButton(searchFilter, dispatch)}
            {renderCycleAudioTrackBtn(extensions, dispatch)}
            {renderSkipBackBtn(extensions, dispatch)}
            {renderPauseResumeBtn(extensions, dispatch)}
            {renderSkipForwardBtn(extensions, dispatch)}
            {renderClosedCaptionBtn(extensions, dispatch)}
            {renderClosePlayerBtn(dispatch)}
        </Box>
    )
}

function renderShuffleButton(searchFilter: String|undefined, dispatch: Function): JSX.Element {
    return (
        <IconButton onClick={() => dispatch(openRandomVideoFile(searchFilter))}>
            <ShuffleOutlinedIcon/>
        </IconButton>
    )
}

function renderCycleAudioTrackBtn(extensions: VideoPlayerExtensions, dispatch: Function) {
    return extensions.cycleAudioTrack &&
        <IconButton onClick={() => dispatch(cycleAudioTrack())}>
            <AudiotrackOutlinedIcon/>
        </IconButton>
}

function renderSkipBackBtn(extensions: VideoPlayerExtensions, dispatch: Function) {
    return extensions.skipBackward &&
        <IconButton onClick={() => dispatch(skipBackward())}>
            <Forward10OutlinedIcon sx={{transform: "scaleX(-1)"}}/>
        </IconButton>
}

function renderPauseResumeBtn(extensions: VideoPlayerExtensions, dispatch: Function) {
    return extensions.pauseResume &&
        <IconButton onClick={() => dispatch(pauseResume())}>
            <NotStartedOutlinedIcon />
        </IconButton>
}

function renderSkipForwardBtn(extensions: VideoPlayerExtensions, dispatch: Function) {
    return extensions.skipForward &&
        <IconButton onClick={() => dispatch(skipForward())}>
            <Forward10OutlinedIcon/>
        </IconButton>
}

function renderClosedCaptionBtn(extensions: VideoPlayerExtensions, dispatch: Function) {
    return extensions.cycleSubtitles &&
        <IconButton onClick={() => dispatch(cycleSubtitles())}>
            <ClosedCaptionOffOutlinedIcon/>
        </IconButton>
}

function renderClosePlayerBtn(dispatch: Function) {
    return (
        <IconButton onClick={() => dispatch(closeVideoPlayer())}>
            <CloseOutlinedIcon/>
        </IconButton>
    )
}


interface VideoPlayerRemoteProps {

}