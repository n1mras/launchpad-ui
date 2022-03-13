import React from 'react'
import {AppBar, Box, Button, Container, Grid, IconButton, Toolbar} from "@mui/material";
import {Cached as CachedIcon} from '@mui/icons-material';
import {refreshDatabase} from "../../clients/launchpad/launchpadClient";
export function Header() {
    return (
        <Box className={"header"} sx={{flexGrow: 1}}>
            <AppBar
                position={"static"}
                sx={{
                    backgroundColor: "#7c91ad",
                }}
            >
                <Toolbar>
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="center">
                        <Button>
                            VIDEO
                        </Button>
                        <IconButton
                            onClick={() => refreshDatabase()}
                        >
                            <CachedIcon />
                        </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}