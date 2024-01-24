import { forwardRef } from 'react';
import {Box, Dialog, DialogContent, DialogTitle, Typography, Stack, Slide, IconButton } from '@mui/material';
import { XCircle } from '@phosphor-icons/react';
import { Search, SearchIconWrapper, StyledInputBase} from '../../components/Search';
import { CallElement } from '../../components/CallElement';
import { MembersList } from '../../data';
import SearchIcon from '@mui/icons-material/Search';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });  

const StartCall = ({open, handleClose}) => {
  return (
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
            width={380}
        >
            <DialogTitle>
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                
                >
                    <Typography
                        p={2}
                        variant="h4"
                    >
                        Start Call
                    </Typography>                        
                </Stack>
            </DialogTitle>
            <DialogContent> 
            <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={2}
                    sx={{
                        mb: "20px"
                    }}
                >
                    <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search'                                
                            }}              
                            />
                        </Search> 
                    <IconButton
                        onClick={handleClose}
                    >
                        <XCircle size={24} />
                    </IconButton>                
                </Stack>   
                {/* Call List */}                
               <Box                    
                    width={"100%"}                    
                    sx={{
                        maxHeight: "500px",
                        overflowY: "scroll"
                    }}
               >
                   
                    { MembersList.map((el) => <CallElement {...el} key={el.id} />) }
                    
               </Box>
            </DialogContent>  
        </Box>
    </Dialog>
  )
}

export default StartCall;