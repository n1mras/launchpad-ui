import React from 'react'
import {AppBar, Box, Button, Container, Grid, IconButton, Toolbar} from "@mui/material";
import {Cached as CachedIcon} from '@mui/icons-material';
import {refreshDatabase} from "../../clients/launchpad/libraryClient";
import {closeVideoPlayer, openRandomVideoFile, reset} from "../../redux/videoReducer";
import CancelIcon from "@mui/icons-material/Cancel";
import {useDispatch, useSelector} from "react-redux";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import './header.scss';
import {RootState} from "../../redux/store";
import {deNullify} from "../../utils/misc";
import VideoPlayerRemote from "../common/video/VideoPlayerRemote";

// placeholder header menu
export function Header() {
    let dispatch = useDispatch()
    let searchFilter = useSelector((state: RootState) => state.video.searchFilter)

    return (
        <Box className={"header"} sx={{flexGrow: 1}}>
            <AppBar
                position={"static"}
                sx={{
                    backgroundColor: "#7c91ad",
                    color: "#000000"
                }}
            >
                <Toolbar>
                    <div className={"menu-container"}>
                        <div className={"left"}>
                            <Button>
                                VIDEO
                            </Button>
                        </div>
                        <div className={"center"}>
                            <VideoPlayerRemote />
                        </div>
                        <div className={"right"}>
                            <IconButton
                                onClick={() => refreshDatabase()}
                            >
                                <CachedIcon/>
                            </IconButton>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}