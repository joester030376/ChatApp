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
            
        </>
    );
}

export default AdminDashboardHeader;