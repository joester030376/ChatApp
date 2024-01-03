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
            <Stack
                direction={"row"}
                width={200}
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
            </Stack>
            <Stack>
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                    p={1}
                    m={1}
                    sx={{
                        borderBottom: "1px solid lightGrey"
                    }}         
            >
                    <Box
                        width={"25%"}                    
                    >
                        <Typography variant='overline'>
                            Agent
                        </Typography>
                    </Box>
                    <Box
                        width={"25%"}
                    >
                        <Typography variant='overline'>
                        Live Call
                        </Typography>
                    </Box>
                    <Box
                        width={"50%"}
                    >
                        <Typography variant='overline'>
                            IM Tasks
                        </Typography>
                    </Box>
                </Stack>                      
            </Stack> 
        </>
    );
}

export default AdminDashboardHeader;