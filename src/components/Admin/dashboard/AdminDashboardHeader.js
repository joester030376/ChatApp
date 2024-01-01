import {
Box,
Stack,
Typography,
Avatar,
FormControl,
InputLabel,
Select,
MenuItem
} from '@mui/material';
import {useState} from 'react';
import {useTheme} from '@mui/material/styles';


const AdminDashboardHeader = () => {

    const theme = useTheme();

    const [team, setTeam] = useState('');

    const handleChange = (event) => {
        setTeam(event.target.value);
    };

    return (
        <>
            <Box
                p={2}
                sx={{
                    height: 150,
                    width: "100%",
                    backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
                    boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)"
                }} 
            >
                <FormControl sx={{ m: 1, minWidth: 300}}>
                            <InputLabel id="demo-simple-select-helper-label">Select Team</InputLabel>
                                <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={team}
                                label="Select Team"
                                onChange={handleChange}
                                >
                            <MenuItem value={"Team A"}>Team A</MenuItem>
                            <MenuItem value={"Team B"}>Team B</MenuItem>
                            <MenuItem value={"Team C"}>Team C</MenuItem>
                            </Select>
                        </FormControl>
                
                
                
                <Stack
                    direction="column"                    
                >
                    
                        
                        <Stack
                            direction="row"
                            alignItems="center"
                            
                        >
                            <Typography>
                                Agent
                            </Typography>
                            <Typography>
                                Live Calls
                            </Typography>
                            <Typography>
                                IM Tasks
                            </Typography>
                        </Stack>
                </Stack>
            </Box>
        </>
    );
}

export default AdminDashboardHeader;