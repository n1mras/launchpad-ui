import React, {useEffect} from 'react'
import {FileList} from "../../common/list/file/FileList";
import {Box, Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fetchVideos, openVideoFile, openVideoFileLocation, reset} from "../../../redux/videoReducer";
import {RootState} from "../../../redux/store";

export function VideoPage() {
    const dispatch = useDispatch()
    useEffect(() => onMountHandler(dispatch), [])

    const state = useSelector((state: RootState) => state.video);

    return (
        <Box className={"video-page"} sx={{flexGrow: 1}}>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                flexDirection={"column"}
            >
                <FileList
                    files={state.files}
                    onOpenFile={(file) => dispatch(openVideoFile(file.id))}
                    onOpenFileLocation={(file) => dispatch(openVideoFileLocation(file.id))}
                    onSearchChange={(filter) => dispatch(fetchVideos({page: 0, size: 25, filter}))}
                    onPageChange={(page, filter) => dispatch(fetchVideos({page: page -1, size: 25, filter}))}
                    page={state.currentPage + 1}
                    pageTotal={state.totalPages}
                />
            </Grid>
        </Box>
    )
}

function onMountHandler(dispatch: Function): VoidFunction {
    dispatch(fetchVideos({page: 0, size: 25}))
    return () => onDismountHandler(dispatch)
}

function onDismountHandler(dispatch: Function) {
    dispatch(reset());
}