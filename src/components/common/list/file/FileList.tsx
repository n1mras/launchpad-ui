import React, {useState} from 'react'
import {Box, List, ListItemButton, ListItemIcon, ListItemText, Pagination, TextField} from "@mui/material";
import {Folder as FolderIcon} from '@mui/icons-material';
import {MediaFile} from "../../../../types/app/media/types";


export function FileList({
                             files,
                             onOpenFile,
                             onOpenFileLocation,
                             onSearchChange,
                             page,
                             pageTotal,
                             onPageChange
                         }: FileListProps) {
    const [selectedId, setSelectedId] = useState(-1)
    const paginationEnabled = !!(page && pageTotal && onPageChange)

    const mapRows = () => {
        return files.map(file => {
            const isSelected = file.id === selectedId;
            return (
                <ListItemButton
                    key={file.id.toString()}
                    className={"fileListRow"}
                    onClick={() => {
                        setSelectedId(file.id)
                        onOpenFile(file)
                    }}
                    selected={isSelected}
                >

                    <ListItemIcon onClick={(e) => {
                        e.stopPropagation();
                        onOpenFileLocation(file)
                    }}>
                        <FolderIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary={file.name}
                        sx={{padding: "0px 5px"}}
                    />

                </ListItemButton>
            )
        })
    }

    const renderSearchInput = () => {
        return (
            onSearchChange &&
            <TextField
                id="video-search-field"
                label="Search"
                variant="standard"
                sx={{
                    width: '100%',
                    margin: '10px 20px'
                }}
                onChange={e => {
                    onSearchChange?.(e?.target?.value);
                }}
            />
        )
    }

    const renderPagination = () => {
        return (
            paginationEnabled &&
            <Pagination
                count={pageTotal}
                page={page}
                onChange={(e, pageSelect) => {
                    onPageChange(pageSelect);
                    window.scrollTo(0, 0);
                }}
                sx={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyItems: 'center',
                    minWidth: '350px',
                    padding: '10px 0px 30px 0px'
                }}
            />
        )
    }


    return (
        <Box sx={{minWidth: '350px', maxWidth: '1024px', overflow: 'hidden'}}>
            {renderSearchInput()}
            <List dense>
                {mapRows()}
            </List>
            {renderPagination()}
        </Box>
    )
}


type FileListProps = {
    files: MediaFile[],
    onOpenFile: (file: MediaFile) => void,
    onOpenFileLocation: (file: MediaFile) => void,
    onSearchChange?: (text: String) => void,
    page?: number,
    pageTotal?: number,
    onPageChange?: (page: number) => void,

}