import { Box, Stack, Grid} from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Header from './Header';
import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { SHARED_DOCUMENTS, SHARED_LINKS } from '../../data';
import { DocMsg, LinkMsg } from '../Conversation/MsgTypes';



const SharedMessages = () => {    

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: 320, height: "100vh"}}>
            <Stack
                sx={{
                    height: "100%"
                }}
            >   
                {/* Header */}
                <Header />

                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Media" />
                    <Tab label="Links" />
                    <Tab label="Docs" />
                </Tabs>
           
                {/* Body */}
                <Stack
                alignItems={"center"}
                    p={3}
                    spacing={value === 1 ? 1 : 3}                    
                    sx={{
                        height: "100%",
                        position: "relative",
                        flexGrow: 1,
                        overflowY: "scroll",
                        overflowX: "hidden"                        
                    }}
                >

        
{(() => {

    switch (value) {
        case 0:
            return (
                <Grid container spacing={2}>
                    {
                        [1,2,3,4,5,6].map((el) => {
                            return <Grid item xs={4}>
                                        <img 
                                            src={faker.image.avatar()}
                                            alt={faker.name.fullName()}
                                        />
                                   </Grid>

                        })
                    }
                </Grid>
            );           

        case 1: 
            return SHARED_LINKS.map((el) => <LinkMsg el={el} />);            

        case 2: 
            return SHARED_DOCUMENTS.map((el) => <DocMsg el={el} />); 
        
        default: 
            break;
    }




})()}
                   

                    
                    
                </Stack>
        </Stack>        
    </Box>
      )
}

export default SharedMessages;