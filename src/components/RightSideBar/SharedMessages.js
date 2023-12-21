import { Box, Stack, Typography, IconButton, } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import Header from './Header';
import { useState } from 'react';


const SharedMessages = () => {

    const theme = useTheme();
    const dispatch = useDispatch(); 

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <Box 
            sx={{
                width: 320,
                height: "100vh"
            }}
        >
           <Header SidebarHeaderTitle={"Shared"}/>

           <Stack
            p={2}
           >
                <Stack 
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    spacing={2}            
                >
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{} }>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Item One" value="1" />
                                    <Tab label="Item Two" value="2" />
                                    <Tab label="Item Three" value="3" />
                                </TabList>
                            </Box>
                            <TabPanel value="1"></TabPanel>
                            <TabPanel value="2">Item Two</TabPanel>
                            <TabPanel value="3">Item Three</TabPanel>
                        </TabContext>
                    </Box>              
                </Stack>
           </Stack>
        </Box>
      )
}

export default SharedMessages;