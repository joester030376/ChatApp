import { PropTypes } from 'prop-types';
// form
import {useFormContext, Controller} from 'react-hook-form';
// @mui 
import { TextField, Autocomplete } from "@mui/material";
import {useState} from 'React';

RHFAutocomplete.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    helperText: PropTypes.node,
};

export default function RHFAutocomplete({name, label, helperText, ...other}) {
    
    const [name, setValue] = useState();
    
    
    const { control } = useFormContext();

    return (
        <Controller 
            name={name} 
            control={control}
            render={({field, fieldState: {error}}) => {
                return (
                    <Autocomplete 
                        {...field} 
                        fullWidth 
                        value={
                            typeof field.value === "number" && field.value === 0 
                                ? ""
                                : field.value
                        }
                        onChange={(event, newValue) => setValue(name, newValue, {shouldValidate: true})}
                        error={!!error} 
                        {...other}
                        renderInput={({params}) => (
                            <Textfield 
                                label={label} error={!!error}  
                                helperText={error ? error.message : helperText} {...params}/>
                        )}
                           
                    />                
                )
            }}  
        />
    )
}