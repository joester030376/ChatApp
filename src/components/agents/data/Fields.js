import { Stack, Typography, Avatar } from '@mui/material';
import { faker } from '@faker-js/faker';

const fields = [
    { field: "id", headerName: "AgentId", width: 70 },
    { field: 'username', headerName: 'Username', width: 230,
        renderCell: (params) => {
            return (
                <>    
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        p={2}
                        spacing={2}
                    >
                        <Avatar src={faker.image.avatar()} alt={faker.name.fullName} />
                        <Stack 
                            direction={"column"}
                        >
                            <Typography variant="article">
                                {params.row.username}
                            </Typography>
                            <Typography variant='caption'>
                                {params.row.firstName}
                            </Typography>
                        </Stack>
                    </Stack>
                </>
            );
        }
    },
    { field: 'firstName', headerName: 'First name', width: 230 },
    { field: 'lastName', headerName: 'Last name', width: 230 },
    { field: 'role', headerName: 'Role', width: 100,
        renderCell: (params) => {
            return (
                <Typography variant='overline'>
                    {params.row.role}
                </Typography>
            );
        }
    },
    { field: "password", headerName: "Password Reset", width: 230 }
    
]

export { fields };