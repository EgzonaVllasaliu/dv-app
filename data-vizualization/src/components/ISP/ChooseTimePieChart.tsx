import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { FC, ReactComponentElement, useEffect, useState } from 'react';
import { isConstructorDeclaration } from 'typescript';

interface Props {
  parentCallback: (val: string) => void;
}
export const ChooseTimePieChart = (props: Props) => {
  const [fromQuarter, setFromQuarter] = useState<string>('TM1');
  const [fromYear, setFromYear] = useState<string>('2017');

  const [timeline, setTimeline] = useState<string[]>([]);
  const quarters = ['TM1', 'TM2', 'TM3', 'TM4'];
  const [years, setYears] = useState<string[]>([]);

  const handleFromQuarterChange = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;

    if (timeline.includes(value + ' ' + fromYear)) {
      setFromQuarter(value);
      props.parentCallback(value + ' ' + fromYear);
    }
  };

  const handleFromYearChange = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;

    if (timeline.includes(fromQuarter + ' ' + value)) {
      setFromYear(value);
      props.parentCallback(fromQuarter + ' ' + value);
    }
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/investimet-isp/api/investimet/get_time')
      .then((response) => {
        setTimeline(response.data);
      });

    axios
      .get('http://localhost:5000/investimet-isp/api/investimet/get_years')
      .then((response) => {
        setYears(response.data);
      });
  }, []);

  return (
    <div style={{display: 'flex', alignItems: 'center', marginTop: 18, marginLeft: 18}}>
      <div>
      <h6 style={{ marginLeft: 7 }}>PERIUDHA: </h6>
        <FormControl style={{ minWidth: 175, marginTop: 8 }}>
          <InputLabel id="demo-simple-select-label2">Zgjedh tre-mujorin</InputLabel>
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
        </FormControl>

        <FormControl style={{ minWidth: 130, marginLeft: 18, marginTop: 8}}>
          <InputLabel id="demo-simple-select-label3">Zgjedh vitin</InputLabel>
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
    </div>
  );
};
