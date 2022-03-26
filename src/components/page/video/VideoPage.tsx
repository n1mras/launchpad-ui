/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import {FileList} from "../../common/list/file/FileList";
import {Box} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchVideoPlayerExtensions,
    fetchVideos,
    openVideoFile,
    openVideoFileLocation,
    reset,
    setSearchFilter,
} from "../../../redux/videoReducer";
import {RootState} from "../../../redux/store";
import "./videoPage.scss";

export function VideoPage() {
    const pageSize: number = 100;
    const state = useSelector((state: RootState) => state.video);
    const dispatch = useDispatch()

    useEffect(() => onMountHandler(dispatch), [])
    useEffect(() => {
        dispatch(fetchVideos({page: 0, size: pageSize, filter: state.searchFilter}));
    }, [state.searchFilter])

    return (
        <Box className={"video-page"}>
            {
                state.currentVideo?.name &&
                    <p id={"current-video-title"}>{state.currentVideo?.name}</p>
            }
            <FileList
                files={state.files}
                onOpenFile={(file) => dispatch(openVideoFile(file.id))}
                onOpenFileLocation={(file) => dispatch(openVideoFileLocation(file.id))}
                onSearchChange={(filter) => dispatch(setSearchFilter(filter))}
                onPageChange={(page) => dispatch(fetchVideos({
                    page: page - 1,
                    size: pageSize,
                    filter: state.searchFilter
                }))}
                page={state.currentPage + 1}
                pageTotal={state.totalPages}
            />
        </Box>
    )
}

function onMountHandler(dispatch: Function): VoidFunction {
    dispatch(fetchVideoPlayerExtensions())
    return () => onDismountHandler(dispatch)
}

function onDismountHandler(dispatch: Function) {
    dispatch(reset());
}