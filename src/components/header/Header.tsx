import React from 'react'
import {AppBar, Box, Button, IconButton, Toolbar} from "@mui/material";
import {Cached as CachedIcon} from '@mui/icons-material';
import {refreshDatabase} from "../../clients/launchpad/libraryClient";
import './header.scss';
import VideoPlayerRemote from "../common/video/VideoPlayerRemote";

// placeholder header menu
export function Header() {
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