import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

interface Props {
    parentCallback : (val : string) => void 
}
export const ChooseGraph = (props : Props) => {
    
    const [graph, setGraph] = useState<string>("Lakore");

    const handleGraphChange = (event: SelectChangeEvent<string>) => {
        const {
          target: { value },
        } = event;

        setGraph(value);
       
        props.parentCallback(value);
      };

    return (
        <div style={{display: 'flex', alignItems: 'center', marginTop: 30, marginLeft: 18}}>
        <div style={{width : "33%"}}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label7">Zgjedh Grafin</InputLabel>
            <Select
                // multiple
                labelId="demo-simple-select-label7"
                id="demo-simple-select7"
                value={graph}
                // renderValue={ (selected) => {
                //     if(selected.length == 0)
                //     return <em>Zgjedh Grafin</em>
                // }}
               
                label="ISP Provider"
                onChange={handleGraphChange}
            >

                <MenuItem disabled value="">
                <em>Zgjedh grafin</em>
                </MenuItem>
                <MenuItem 
                    key={"Lakore"}
                    value={"Lakore"}
                >
                    Lakore   
                </MenuItem>
                <MenuItem 
                    key={"Pie Chart"}
                    value={"Pie Chart"}
                >
                    Pie Chart   
                </MenuItem> 
            </Select>
            </FormControl>
        </div>
      </div>  
    );
}