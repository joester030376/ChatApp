import { Box, Stack, Grid} from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Header from './Header';
import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { SHARED_DOCUMENTS, SHARED_LINKS } from '../../data';
import { DocMsg, LinkMsg } from '../Conversation/MsgTypes';
import { useTheme } from '@mui/material/styles';



const SharedMessages = () => {    

    const [value, setValue] = useState(0);
    const theme = useTheme();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Media" />
                <Tab label="Links" />
                <Tab label="Docs" />
            </Tabs>

            <Stack
                alignItems={"center"}
                    p={3}
                    spacing={value === 1 ? 1 : 3}                    
                    sx={{
                        height: "100%",                                             
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