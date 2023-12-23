import { forwardRef } from 'react'; 
import { Dialog, Slide, DialogTitle, DialogContent, Grid, Stack, Typography, Button, DialogActions } from '@mui/material';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });  

const ThemeDialog = ({open, handleClose}) => {
  return (
    <>
        <Dialog
            fullWidth 
            maxWidth="md" 
            open={open} 
            onClose={handleClose}
            keepMounted
            TransitionComponent={Transition}
            tran
            sx={{
                p: 4,
            }}  
        >
            <DialogTitle>
                Choose Theme
            </DialogTitle>
            <DialogContent>
                <Stack 
                    alignItems={"center"}
                    direction={"row"}
                >


                </Stack>

            </DialogContent>
            <DialogActions>

            </DialogActions>
        </Dialog> 
    
    
    </>
  )
}

export default ThemeDialog