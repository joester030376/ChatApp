import { forwardRef, useState } from 'react'; 
import { 
    Box,
    Dialog, 
    Slide, 
    DialogTitle, 
    DialogContent,    
    Button, 
    DialogActions, 
    Radio, 
    FormControl,    
    RadioGroup, 
    FormControlLabel   
} from '@mui/material';
import { themeoptions } from '../../data/themeoptions';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });  

const ThemeDialog = ({open, handleClose}) => {

    const [radioValue, setRadioValue] = useState();

    const setRadioButton = ({selection}) => {
        setRadioValue(selection);
        console.log(radioValue)
    }; 

    return (
    <>
        <Dialog
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
            <Box 
                width={420}
            >
                <DialogTitle>
                    Choose Theme
                </DialogTitle>
                <DialogContent>                    
                <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="light"
                                name="radio-buttons-group"
                            >
                                {
                                    themeoptions.map((el) => {

                                        return (
                                            <FormControlLabel 
                                                key={el.key} 
                                                value={el.selection} 
                                                control={<Radio onClick={() => {}} />} 
                                                label={el.title} 
                                            />
                                        );
                                    })
                                }        
                            </RadioGroup>
                        </FormControl>
                        <DialogActions>
                            <Button variant="text" onClick={handleClose}>Cancel</Button>
                            <Button variant='contained' onClick={handleClose}>Apply</Button>
                        </DialogActions>                    
                </DialogContent>                
            </Box>
        </Dialog> 
    
    
    </>
  )
}

export default ThemeDialog