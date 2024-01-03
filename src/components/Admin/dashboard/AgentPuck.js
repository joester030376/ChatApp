import { Stack, Typography, Avatar} from '@mui/material';
import { faker } from '@faker-js/faker';
import StyledBadge from '../../StyledBadge';

const AgentPuck = () => {
  return (
    <>
        <Stack
            direction={"row"}  
            spacing={2}
            p={2} 
            m={1}                    
        >
            <Stack>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}  
                        variant={"dot"}                          
                >
                    <Avatar src={faker.image.avatar()}    />   
                        </StyledBadge>      
            </Stack>  
            <Stack
                spacing={0.3}
                direction={"column"}
            >
                <Typography variant='subtitle2'>
                    {faker.name.fullName()}
                </Typography>
                <Typography variant='caption'>
                     Online | 6hr
                </Typography>    
                </Stack>
        </Stack>
    </>
  )
}

export default AgentPuck;