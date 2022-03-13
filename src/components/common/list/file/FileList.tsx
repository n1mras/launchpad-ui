import React, {useEffect, useState} from 'react'
import {
    Box,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText, Pagination,
    TextField
} from "@mui/material";
import {Folder as FolderIcon} from '@mui/icons-material';
import {MediaFile} from "../../../../types/app/types";


export function FileList({files, onOpenFile, onOpenFileLocation, onSearchChange, page, pageTotal, onPageChange}: FileListProps) {
    const [selectedId, setSelectedId] = useState(-1)
    const [searchText, setSearchText] = useState("");

    const paginationEnabled = !!(page && pageTotal && onPageChange)
    return (
        <Box sx={{minWidth: '350px', maxWidth: '1024px', overflow: 'hidden'}}>
            {onSearchChange &&
                <TextField
                    id="video-search-field"
                    label="Search"
                    variant="standard"
                    sx={{
                        width: '100%',
                        margin: '10px 20px'
                    }}
                    onChange={e => {
                        let value = e?.target?.value;
                        onSearchChange?.(value);
                        setSearchText(value);
                    }}
                />
            }
            <List dense>
                {mapRows(files, selectedId, setSelectedId, onOpenFile, onOpenFileLocation)}
            </List>
            { paginationEnabled &&
                <Pagination
                    count={pageTotal}
                    page={page}
                    onChange={(e, pageSelect) => onPageChange(pageSelect, searchText)}
                    sx={{
                        minWidth: '350px'
                    }}

                />
            }
        </Box>
    )
}


function mapRows(files: MediaFile[], selectedId: Number, setSelectedId: Function, onOpenFile: Function, onOpenFileLocation: Function): JSX.Element[] {
    return files.map(file => {
        const isSelected = file.id === selectedId;
        return (
            <ListItemButton
                key={file.id.toString()}
                className={"fileListRow"}
                onClick={() => {
                    setSelectedId(file.id);
                    onOpenFile(file)
                }}
                selected={isSelected}
            >

                <ListItemIcon onClick={(e) => {
                    e.stopPropagation();
                    setSelectedId(file.id)
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

type FileListProps = {
    files: MediaFile[],
    onOpenFile: (file: MediaFile) => void,
    onOpenFileLocation: (file: MediaFile) => void,
    onSearchChange?: (text: String) => void,
    page?: number,
    pageTotal?: number,
    onPageChange?: (page: number, filter?: String) => void

}