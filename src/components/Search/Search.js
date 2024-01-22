import { styled, alpha } from "@mui/material/styles";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 0,
    border: theme.palette.mode === 'light' ? "1px solid #000" : null,
    backgroundColor: theme.palette.mode === 'light' ? "rgba(219,219,219, 0.5)" : "rgba(0, 0, 0, 0.5)",
    '&:hover': {
      backgroundColor: theme.palette.mode === 'light' ? "rgba(219,219,219, 0.25)" : "rgba(0, 0, 0, 0.25)",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
      width: 'auto',
    },
  }));
export default Search;