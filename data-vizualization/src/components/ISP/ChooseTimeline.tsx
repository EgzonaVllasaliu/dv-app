import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { FC, ReactComponentElement, useEffect, useState } from 'react';
import { isConstructorDeclaration } from 'typescript';
interface Props {
    parentCallback1 : (val : string ) => void,
    parentCallback2 : (val : string ) => void
}
export const ChooseTimeline = (props : Props) => {
    
    
    // const [selectedComparison, setSelectedComparison] = useState<string>("");
    // const comparisons = ["income","investments","indiviual_users","business_users","total_users"]
    const [fromTime, setFromTime] = useState<string>("TM1 2017");
    const [toTime, setToTime] = useState<string>("TM2 2022");
    const [timeline,setTimeline] = useState<string[]>([]);

    const handleFromChange = (event: SelectChangeEvent<typeof fromTime>) => {
        const {
          target: { value },
        } = event;
        
        setFromTime(value);
        props.parentCallback1(value);
    };

    const handleToChange = (event: SelectChangeEvent<typeof toTime>) => {
        const {
          target: { value },
        } = event;
        
        setToTime(value);
        props.parentCallback2(value);
    };

    useEffect(() => {
        axios.get("http://localhost:5000/investimet-isp/api/investimet/get_time")
        .then(response => {
            setTimeline(response.data)
            // console.log("GET Timeline", response)
        })
    },[])


    return (
      <div style={{ display : "flex", alignItems : 'center', justifyContent : 'center', flexDirection : 'row',marginTop:"30px"}}>
        {/* <h1>{props.name}</h1> */}
        <div style={{width : "33%",marginRight:"20px"}}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label2">From : </InputLabel>
            <Select
                labelId="demo-simple-select-label2"
                id="demo-simple-select"
                value={fromTime}
                
                label="Comparison Type"
                onChange={handleFromChange}
            >

                <MenuItem disabled value="">
                <em>Placeholder</em>
                </MenuItem>
                {timeline.map((name) => (
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
        <div style={{width : "33%"}}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label3">To : </InputLabel>
            <Select
                labelId="demo-simple-select-label3"
                id="demo-simple-select"
                value={toTime}
                
                label="Comparison Type"
                onChange={handleToChange}
            >

                <MenuItem disabled value="">
                <em>Placeholder</em>
                </MenuItem>
                {timeline.map((name) => (
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