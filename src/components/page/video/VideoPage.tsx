import React, {useEffect} from 'react'
import {FileList} from "../../common/list/file/FileList";
import {Box, Grid, IconButton} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchVideos,
    openVideoFile,
    openVideoFileLocation,
    reset, setSearchFilter,
} from "../../../redux/videoReducer";
import {RootState} from "../../../redux/store";

export function VideoPage() {
    const pageSize: number = 100;
    const state = useSelector((state: RootState) => state.video);
    const dispatch = useDispatch()

    useEffect(() => onMountHandler(dispatch), [])
    useEffect(() => {
        dispatch(fetchVideos({page: 0, size: pageSize, filter: state.searchFilter}));
    }, [state.searchFilter])

    return (
        <Box className={"video-page"} sx={{flexGrow: 1}}>
            <Grid
                margin={"auto"}
                alignItems="center"
                justifyContent="center"
                flexDirection={"column"}
                minWidth={"350px"}
                maxWidth={"1024px"}
                width={"100%"}
            >
                <FileList
                    files={state.files}
                    onOpenFile={(file) => dispatch(openVideoFile(file.id))}
                    onOpenFileLocation={(file) => dispatch(openVideoFileLocation(file.id))}
                    onSearchChange={(filter) => dispatch(setSearchFilter(filter))}
                    onPageChange={(page) => dispatch(fetchVideos({page: page -1, size: pageSize, filter: state.searchFilter}))}
                    page={state.currentPage + 1}
                    pageTotal={state.totalPages}
                />
            </Grid>
        </Box>
    )
}

function onMountHandler(dispatch: Function): VoidFunction {
    return () => onDismountHandler(dispatch)
}

function onDismountHandler(dispatch: Function) {
    dispatch(reset());
}