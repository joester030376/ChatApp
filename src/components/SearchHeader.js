
import { Stack, Typography, IconButton, InputBase, Button, Divider } from "@mui/material";
import { CircleDashed, MagnifyingGlass, ArchiveBox } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';
import Search from "./Search/Search";
import SearchIconWrapper from "./Search/SearchIconWrapper";
import StyledInputBase from "./Search/StyledInputBase";

const SearchHeader = ({header, }) => {

    const theme = useTheme();

  return (
    <>
        <Stack 
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                <Typography 
                    variant="h5"
                    letterSpacing={1}
                >
                    {header}
                </Typography>
                <IconButton>
                    <CircleDashed size={32} />
                </IconButton>
            </Stack>
            <Stack
                sx={{
                    width: "100%"
                }}
            >
                <Search>
                    <SearchIconWrapper>
                        <MagnifyingGlass color="#709CE6" size={32}/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Stack>       
    </>
  )
}

export default SearchHeader;