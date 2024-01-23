import { useState, forwardRef } from "react"; 
import { Box, IconButton, Stack, Typography, Divider, Avatar, Button, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, Slide} from "@mui/material";
import { useDispatch } from "react-redux";
import Header from './Header';
import { faker } from "@faker-js/faker";
import { VideoCamera, Phone, CaretRight, Star, Bell, Flag, Trash} from '@phosphor-icons/react';
import AntSwitch from '../AntSwitch';
import { UpdateSidebarType } from "../../redux/slices/app";
import { useTheme } from '@mui/material/styles';



const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const BlockDialog = ({open, handleClose}) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>Block this contact</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Are you sure you want to block this Contact?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Yes</Button>
                </DialogActions>
        </Dialog>
    );
};

const DeleteDialog = ({open, handleClose}) => {
    
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>Delete this contact</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Are you sure you want to delete this Contact?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Yes</Button>
            </DialogActions>
        </Dialog>     
    );
};


const Contact = () => {

    const [openBlock, setOpenBlock] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const theme = useTheme();
    
    const dispatch = useDispatch();

    const handleCloseBlock = () => {
        setOpenBlock(false);    }

    const handleDeleteBlock = () => {
        setOpenDelete(false);
    }

  return (
    <Box
        sx={{
            position: "relative", 
            height: "100%",              
            width: 320,
            backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.paper,               
        }}
    >

        <Header />

        <Stack
            p={1}
            direction={"column"}
            width={"100%"}             
            spacing={2}  
            sx={{
                height: "calc(100% - 64px)",
                overflowY: "scroll",
                overflowX: "hidden",
                scrollbarWidth: "thin",
                scrollbarColor: theme.palette.primary.dark,
            }}  
        >
            <Stack
                direction={"row"}
                p={3}
                spacing={3}
            >
                <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} sx={{height: 64, width: 64}} />

                <Stack
                    direction={"column"}               
                    spacing={2}
                >
                    <Typography variant="article">{faker.name.fullName()}</Typography>
                    <Typography variant="body2">{faker.phone.number()}</Typography>
                </Stack>
            </Stack>
            <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-evenly"}
            >
                <Stack
                    direction={"column"}    
                    p={1}
                    alignItems={"center"}   
                >
                    <IconButton>
                        <VideoCamera size={32} />
                    </IconButton>
                    <Typography variant="overline">Audio</Typography>
                </Stack>
                <Stack
                    direction={"column"}   
                    p={1}  
                    alignItems={"center"}           
                >
                    <IconButton>
                        <Phone size={32} />
                    </IconButton>
                    <Typography variant="overline">Phone</Typography>
                </Stack>               
            </Stack>
            <Divider />
            <Stack
                direction={"column"}
                p={2}
                spacing={1}
            >
                <Typography variant="article">About</Typography>
                <Typography variant="body2">Hi, this is Joe.</Typography>
            </Stack>
            <Divider />
            <Stack
                direction={"column"}
                spacing={3}
                p={2}
            >
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Typography variant="subtitle1">Media, Links and Docs</Typography>
                    <Button 
                        endIcon={<CaretRight />} 
                        onClick={() => {
                            dispatch(UpdateSidebarType("SHARED"));
                        }}
                    >
                        201
                    </Button>                    
                </Stack>
                <Stack
                        direction={"row"}
                        spacing={2}
                        alignItems={"center"}
                        justifyContent={"space-evenly"}
                    >
                        {[1,2,3].map((el) => (
                            <Box>
                                <img src={faker.image.food()} alt={faker.name.fullName()} />
                            </Box>
                        ))}
                </Stack>
            </Stack>
            <Divider />
            <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}                                               
            >
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    p={2}
                >
                    <Star size={24} color="grey"/>
                        <Typography variant="subtitle2">
                            Starred Messages
                        </Typography>  
                    </Stack>                          
                        <IconButton
                            onClick={() => {
                                dispatch(UpdateSidebarType("STARRED"))
                            }}
                        >
                            <CaretRight size={18}/>
                        </IconButton>
                </Stack>
                <Divider />
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={1}
                        p={2}
                    >
                        <Bell size={24} color="grey"/>
                        <Typography variant="subtitle2">
                            Mute Notifications
                        </Typography>  
                    </Stack>                          
                    <IconButton>
                        <AntSwitch />
                    </IconButton>
                </Stack>
                <Divider />
                <Stack
                    direction={"row"}
                    spacing={2}
                    alignItems={"center"}
                    p={3}                    
                >
                    <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
                    <Stack 
                        direction={"column"}     
                        spacing={0.5}                           
                    >
                        <Typography variant="article">
                            Camel's Gang
                        </Typography>
                        <Typography variant="caption">
                            Owl, Parrot, Rabbit, You
                        </Typography>
                    </Stack>
                </Stack>
                <Stack 
                        direction={"row"}
                        spacing={2}
                        alignItems={"center"}
                    >
                        <Button 
                            startIcon={<Flag  />}
                            variant="outlined"
                            fullWidth
                            onClick={() => {
                                setOpenBlock(true);                                
                            }}
                        >
                            Block
                        </Button>
                        <Button 
                            startIcon={<Trash />}
                            variant="outlined"
                            fullWidth
                            onClick={() => {
                                setOpenDelete(true);
                            }}
                        >
                            Delete
                        </Button>
                    </Stack>                                   
        </Stack>
        {openBlock && <BlockDialog open={openBlock} handleClose={handleCloseBlock} />}
        {openDelete && <DeleteDialog open={openDelete} handleClose={handleDeleteBlock} />}
    </Box>
  )
}

export default Contact;