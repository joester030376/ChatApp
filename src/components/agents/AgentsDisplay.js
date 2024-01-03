import { Stack, Box } from '@mui/material';
import {useTheme} from '@mui/material/styles';
import AgentsList from './AgentsList';


const AgentsDisplay = () => {

    const theme = useTheme();

  return (
    <Stack
        direction="column"
        height={"100%"}
        maxHeight={"100vh"}
        width={"auto"}
    >     
        <Box
            width={"100%"}
            sx={{
                flexGrow: 1,
                height: "100%", 
                overflowY: "scroll",
            }}
        >

            <AgentsList />

        </Box>
        
    </Stack>
  );
}

export default AgentsDisplay;