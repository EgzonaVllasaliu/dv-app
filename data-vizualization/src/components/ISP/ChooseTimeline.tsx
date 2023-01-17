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

    const [fromQuarter,setFromQuarter] = useState<string>("TM1")
    const [fromYear, setFromYear] = useState<string>("2017")
    
    const [toQuarter,setToQuarter] = useState<string>("TM2")
    const [toYear, setToYear] = useState<string>("2022")    

    const [timeline,setTimeline] = useState<string[]>([]);
    const quarters = ["TM1","TM2","TM3","TM4"]
    const [years, setYears] = useState<string[]>([])

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

    const handleFromQuarterChange = (event: SelectChangeEvent<typeof fromTime>) => {
        const {
          target: { value },
        } = event;
        
        setFromQuarter(value);
        props.parentCallback1(value+' '+fromYear);
    };

    const handleFromYearChange = (event: SelectChangeEvent<typeof fromTime>) => {
        const {
          target: { value },
        } = event;
        
        setFromYear(value);
        props.parentCallback1(fromQuarter+' '+value);
    };

    const handleToQuarterChange = (event: SelectChangeEvent<typeof fromTime>) => {
        const {
          target: { value },
        } = event;
        
        setToQuarter(value);
        props.parentCallback2(value+' '+toYear);
    };

    const handleToYearChange = (event: SelectChangeEvent<typeof fromTime>) => {
        const {
          target: { value },
        } = event;
        
        setToYear(value);
        props.parentCallback2(toQuarter+' '+value);
    };

    useEffect(() => {
        axios.get("http://localhost:5000/investimet-isp/api/investimet/get_time")
        .then(response => {
            setTimeline(response.data)
            // console.log("GET Timeline", response)
        });

        axios.get("http://localhost:5000/investimet-isp/api/investimet/get_years")
        .then(response => {
            setYears(response.data)
            // console.log("GET Timeline", response)
        })
    },[])


    return (
      <div style={{ display : "flex", alignItems : 'center', justifyContent : 'center', flexDirection : 'row',marginTop:"30px"}}>
        {/* <h1>{props.name}</h1> */}
        <div style={{width : "33%",marginRight:"15%"}}>
            <FormControl style={{width : "45%", marginRight:"10%"} }>
            <InputLabel id="demo-simple-select-label2">Tre Mujori:</InputLabel>
            <Select
                labelId="demo-simple-select-label2"
                id="demo-simple-select"
                value={fromQuarter}
                
                label="Comparison Type"
                onChange={handleFromQuarterChange}
            >

                <MenuItem disabled value="">
                <em>Placeholder</em>
                </MenuItem>
                {quarters.map((name) => (
                <MenuItem
                    key={name}
                    value={name}
                    // style={getStyles(name, personName, theme)}
                >
                    {name}
                </MenuItem>
                ))}  
            </Select>
            
            </FormControl >
            <FormControl style={{width : "45%"}}>
            <InputLabel id="demo-simple-select-label3">Viti: </InputLabel>
            <Select
                labelId="demo-simple-select-label3"
                id="demo-simple-select"
                value={fromYear}
                
                label="Comparison Type"
                onChange={handleFromYearChange}
            >

                <MenuItem disabled value="">
                <em>Placeholder</em>
                </MenuItem>
                {years.map((name) => (
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
            <FormControl style={{width : "45%", marginRight: "10%"}}>
            <InputLabel id="demo-simple-select-label4">Tre Mujori: </InputLabel>
            <Select
                labelId="demo-simple-select-label4"
                id="demo-simple-select"
                value={toQuarter}
                
                label="Comparison Type"
                onChange={handleToQuarterChange}
            >

                <MenuItem disabled value="">
                <em>Placeholder</em>
                </MenuItem>
                {quarters.map((name) => (
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
            <FormControl style={{width : "45%"}}>
            <InputLabel id="demo-simple-select-label5">Viti: </InputLabel>
            <Select
                labelId="demo-simple-select-label5"
                id="demo-simple-select"
                value={toYear}
                
                label="Comparison Type"
                onChange={handleToYearChange}
            >

                <MenuItem disabled value="">
                <em>Placeholder</em>
                </MenuItem>
                {years.map((name) => (
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