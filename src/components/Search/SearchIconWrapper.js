import { styled, alpha } from "@mui/material/styles";

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  color: theme.palette.mode === 'light' ? "#000" : "#fff",
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

  export default SearchIconWrapper;