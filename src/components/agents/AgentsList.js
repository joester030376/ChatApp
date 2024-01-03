import { useState } from 'react';
import PropTypes from 'prop-types';
import { MagnifyingGlass, UploadSimple, Plus } from '@phosphor-icons/react';
import { Box, Stack, Typography, Tab, Tabs, TextField, InputAdornment, Button} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AllAgents from './AllAgents';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} >
        <Box
            sx={{
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)"
            }}
        >
        <Box
            height={"125px"}
            p={2}
            sx={{
                backgroundColor: theme.palette.background.paper,
                
            }}
        >
            <Stack
                direction={"column"}
            >
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    mb={2}
                >
                    <Typography variant='article' fontSize={24}>Agents</Typography>
                </Stack>
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                >
                    <Typography variant='caption' fontSize={18} fontWeight={400} fontStyle={"italic"}>An agent is a person who provides support services and with the admin role, they can also supervise and configure the system.</Typography>
                </Stack>

            </Stack>
        </Box>
        <Box 
            sx={{ 
                borderBottom: 1, 
                borderColor: 'divider' ,
                backgroundColor: theme.palette.background.paper
            }} >
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab sx={{fontSize: "16px"}} label="All" {...a11yProps(0)} />
            <Tab sx={{fontSize: "16px"}} label="Admin" {...a11yProps(1)} />
            <Tab sx={{fontSize: "16px"}} label="Agents" {...a11yProps(2)} />
            </Tabs>
        </Box>
        </Box>
        <Box
            width={"100%"}            
        >
            <Stack
                direction={"row"}
                alignItems={'center'}
                justifyContent={"end"}  
                mt={1}
                p={1.5}
                        
            >
                <Stack
                    mr={2}
                >
                    <TextField 
                        id="outlined-search" 
                        label="Search field" 
                        type="search"
                        sx={{
                            width: "300px"
                        }} 
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MagnifyingGlass size={24} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Stack>
                <Stack
                    mr={2}
                >
                    <Button variant='contained' size='large' startIcon={<Plus size={24} />}>Create Agent</Button>
                </Stack>
                <Stack
                    mr={2}
                >
                    <Button variant='outlined' size='large' startIcon={<UploadSimple size={24} />}>Export as CSV</Button>
                </Stack>
            </Stack>
        </Box>




        <CustomTabPanel value={value} index={0}>
           <AllAgents />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
            Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
            Item Three
        </CustomTabPanel>
    </Box>
  );
}