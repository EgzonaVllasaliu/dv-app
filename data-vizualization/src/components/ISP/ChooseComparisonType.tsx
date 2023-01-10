import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { FC, ReactComponentElement, useEffect, useState } from 'react';
import { isConstructorDeclaration } from 'typescript';
interface Props {
    parentCallback : (val : string ) => void
}
export const ChooseComparisonType = (props : Props) => {
    
    
    const [selectedComparison, setSelectedComparison] = useState<string>("");
    const comparisons = ["income","investments","indiviual_users","business_users","total_users"]

    const handleComparisonChange = (event: SelectChangeEvent<typeof selectedComparison>) => {
        const {
          target: { value },
        } = event;
        // setSelectedComparison(
        //   // On autofill we get a stringified value.
        //   typeof value === 'string' ? value.split(',') : value
        // );

        setSelectedComparison(value);
        // let op_list = typeof value === 'string' ? value.split(',') : value;
        props.parentCallback(value);
      };


    return (
      <div style={{ display : "flex", alignItems : 'center', justifyContent : 'center', flexDirection : 'column',marginTop:"30px"}}>
        {/* <h1>{props.name}</h1> */}
        <div style={{width : "33%"}}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label1">Comparison</InputLabel>
            <Select
                // multiple
                labelId="demo-simple-select-label1"
                id="demo-simple-select"
                value={selectedComparison}
                // renderValue={(selected) => {
                // if (selected.length === 0) {
                //     return <em>Comparison Type</em>;
                // }

                // return selected.join(', ');
                // }}
                label="Comparison Type"
                onChange={handleComparisonChange}
            >

                <MenuItem disabled value="">
                <em>Placeholder</em>
                </MenuItem>
                {comparisons.map((name) => (
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