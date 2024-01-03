import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';
import { rows } from './data/Rows';
import { fields } from './data/Fields';
import { Stack, IconButton, Tooltip } from '@mui/material';
import { PencilSimple, Trash, Eye } from '@phosphor-icons/react';

const AllAgents = () => {

    const [data, setRows] = useState(rows);
    const [columns, setColumns] = useState(fields);
    const theme = useTheme();

    const actionColumn = [
        {field: "action", headerName: "Action", width: 230,
            renderCell: (params)=> {
                return (
                    <>
                        <Stack
                            direction={"row"}
                            p={2}
                            spacing={2}
                        >
                            <Tooltip title="View">
                                <IconButton>
                                    <Eye size={32} color={theme.palette.primary.main} />                                   
                                </IconButton>
                            </Tooltip>
                           <Tooltip title="Edit">
                                <IconButton>
                                    <PencilSimple size={32} color={theme.palette.success.main}/>                                
                                </IconButton>
                           </Tooltip>
                            <Tooltip title="Delete">
                                <IconButton>
                                    <Trash size={32} color={theme.palette.error.main} />
                                </IconButton>
                            </Tooltip>                            
                        </Stack>                    
                    </>                    
                );
            }        
        }
    ] 

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid 
      autoHeight {...data}
        rows={data}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]} 
        sx={{
            p: "16px",
            backgroundColor: theme.palette.background.paper,
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
            "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                outline: "none !important",
             },
        }}       
      />
    </div>
  );
}

export default AllAgents;