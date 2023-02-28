import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';

interface Props {
  parentCallback: (val: string[]) => String[];
}
export const ISPProviders = (props: Props) => {
  const [provider, setProvider] = useState<string[]>([]);
  const [selectedProvider, setSelectedProvider] = useState<string[]>(["Totali"]);

  const handleProviderChange = (event: SelectChangeEvent<typeof selectedProvider>) => {
    const {
      target: { value },
    } = event;
    setSelectedProvider(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
    let op_list = typeof value === 'string' ? value.split(',') : value;
    props.parentCallback(op_list);
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/investimet-isp/api/investimet/get_operators')
      .then((response) => {
        setProvider(response.data);
      });
  }, []);

  return (
    <div style={{display: 'flex', alignItems: 'center', marginTop: 30, marginLeft: 18}}>
      <div style={{ width: '33%' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Ofruesit e shërbimit</InputLabel>
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
            <MenuItem key={'Totali'} value={'Totali'}>
              Totali
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
};
