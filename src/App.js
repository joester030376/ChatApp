import { forwardRef }  from "react";
// routes
import Router from "./routes";
// theme
import ThemeProvider from './theme';
// components
import ThemeSettings from './components/settings';
import { Snackbar } from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import { useSelector, useDispatch } from "react-redux";
import { closeSnackbar } from "./redux/slices/app";

const vertical = "bottom";
const horizontal = "center";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {

  const dispatch = useDispatch();
  const {open, message, severity} = useSelector((state) => state.app.snackbar);

  return (
    <>
      <ThemeProvider>
        <ThemeSettings>
          {" "}
          <Router />{" "}
        </ThemeSettings>
      </ThemeProvider>

{message && open ? (

  <Snackbar 
    anchorOrigin={{vertical, horizontal}} 
    open={open}
    autoHideDuration={4000}
    key={vertical + horizontal}
    onClose={() => {
      dispatch(closeSnackbar());
    }}  
  >
    <Alert onClose={() => {
      dispatch(closeSnackbar());
    }}
      severity={severity}
      sx={{
        width: "100%"
      }}
    >
      {message}

    </Alert>
  </Snackbar>
)   
: <></>} 
    </>
  );
}

export default App;
