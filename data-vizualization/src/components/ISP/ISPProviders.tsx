import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { FC, useEffect, useState } from 'react';

export const ISPProviders : FC = () => {
    const [provider, setProvider] = useState<string[]>([]);
    const [selectedProvider, setSelectedProvider] = useState<string[]>([]);

    const handleProviderChange = (event: SelectChangeEvent<typeof selectedProvider>) => {
        const {
          target: { value },
        } = event;
        setSelectedProvider(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

    useEffect(() => {
        axios.get('http://localhost:5000/investimet-isp/api/investimet/get_operators')
        .then(response => {
            setProvider(response.data);
        })
    }
    ,[])

    return (
      <div style={{ display : "flex", alignItems : 'center', justifyContent : 'center', flexDirection : 'column'}}>
        <div style={{width : "33%"}}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Provider</InputLabel>
            <Select
                multiple
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedProvider}
                renderValue={(selected) => {
                if (selected.length === 0) {
                    return <em>ISP Provider</em>;
                }

                return selected.join(', ');
                }}
                label="ISP Provider"
                onChange={handleProviderChange}
            >

                <MenuItem disabled value="">
                <em>Placeholder</em>
                </MenuItem>
                {provider.map((name) => (
                <MenuItem
                    key={name}
                    value={name}
                    // style={getStyles(name, personName, theme)}
                >
                    {name}
                </MenuItem>
                ))}  
            </Select>
            </FormControl>
        </div>
      </div>  
    );
}