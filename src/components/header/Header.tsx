import React from 'react'
import {AppBar, Box, Button, Container, Grid, IconButton, Toolbar} from "@mui/material";
import {Cached as CachedIcon} from '@mui/icons-material';
import {openVideoShuffle, refreshDatabase} from "../../clients/launchpad/launchpadClient";
import {killVideoPlayer, reset} from "../../redux/videoReducer";
import CancelIcon from "@mui/icons-material/Cancel";
import {useDispatch, useSelector} from "react-redux";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import './header.scss';
import {RootState} from "../../redux/store";

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
                            <IconButton
                                onClick={() => dispatch(openVideoShuffle(searchFilter))}
                            >
                                <ShuffleIcon/>
                            </IconButton>
                            <IconButton
                                onClick={() => dispatch(killVideoPlayer())}
                            >
                                <CancelIcon/>
                            </IconButton>
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