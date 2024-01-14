import {useState, forwardRef, useEffect} from 'react';
import {
    Slide,
    Tab,   
    Dialog,
    Stack,
    Tabs,   
    DialogContent,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { FetchFriendRequests, FetchFriends, FetchUsers } from '../../redux/slices/app';
import { FriendComponent, FriendRequestComponent, UserComponent } from '../../components/Friends';

const UsersList = () => {   

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchUsers());
    }, []);

    const {users} = useSelector((state) => state.app);

    return (
        <>
            {users.map((el, idx) => {
                return <UserComponent key={el._id} {...el}/>
            })};
        
        </>
    )    
}

const FriendsList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchFriends());
    }, []);

    const {friends} = useSelector((state) => state.app);

    return (
        <>
            {friends.map((el, idx) => {
                return <FriendComponent key={el._id} {...el} />
            })};
        
        </>
    )    
}

const FriendsRequestList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchFriendRequests());
    }, []);

    const {friendRequests} = useSelector((state) => state.app);   

    return (
        <>
            {friendRequests.map((el, idx) => {
                return <FriendRequestComponent key={el._id} {...el.sender} id={el._id} />
            })};        
        </>
    )    
}

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });  


const Friends = ({open, handleClose}) => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

  return (
    <Dialog
            maxWidth="lg" 
            open={open} 
            onClose={handleClose}
            keepMounted
            TransitionComponent={Transition}            
            sx={{
                p: 4,               
            }}  
        >
           <Stack
                p={2}
                sx={{
                    width: "400px"
                }}
           >
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Explore" />
                    <Tab label="Friends" />
                    <Tab label="Requests" />
                </Tabs>
           </Stack>
           <DialogContent
                sx={{height: "100%"}}
           >
                <Stack 
                    spacing={2.5}
                >
                    {(() => {
                        switch (value) {
                            case 0: // Display all users
                                return <UsersList />;
                            case 1: // Display all friends
                                return <FriendsList />;
                            case 2: // Display all friends requests
                                return <FriendsRequestList />;
                            default:
                                break;
                        }
                    })()}

                </Stack>
           </DialogContent>
        </Dialog>
  )
}

export default Friends;