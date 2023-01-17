import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button, ButtonGroup, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { FC, MouseEventHandler, ReactComponentElement, useEffect, useState } from 'react';
import { isConstructorDeclaration } from 'typescript';
interface Props {
    parentCallback : (val : string ) => void
}
export const ChooseComparisonType = (props : Props) => {
    
    
    const [selectedComparison, setSelectedComparison] = useState<string>("");
    const eng_comparisons = ["income","investments","indiviual_users","business_users","total_users"]
    const comparisons = ["të hyrat", "investimet","përdoruesit individual","përdoruesit biznesor", "totali i përdouesve"]
    let temp_style = {
      color:"blue",
      border:'1px solid blue',
      margin:"auto",
      borderRadius:"20px",
      backgroundColor:"white"
    }
    const [buttonStyle, setButtonStyle] = useState<any[]>([temp_style, temp_style, temp_style, temp_style, temp_style])
    
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

      const handleButtonClick =   (event : React.MouseEvent<HTMLButtonElement>) => {
        // const {
        //   target: { value }, 
        // } = event;


        let button : HTMLButtonElement  = event.currentTarget;

        let isClicked = button.dataset.isclicked;
        
        let all_buttons = document.getElementsByClassName('comparison_button');
        
        for(let i = 0; i < all_buttons.length; i++){
          all_buttons.item(i)?.setAttribute('data-isclicked','false')
          all_buttons.item(i)?.setAttribute("style", 'color:blue;background-color:white;border:1px solid blue;margin:auto;border-radius:20px')
        }

        if(isClicked == "false"){
          button.setAttribute("data-isclicked","true")
          button.setAttribute("style", 'color:white;background-color:blue;border:1px solid white;margin:auto;border-radius:20px')
        }
        else {
          button.setAttribute("data-isclicked","false")
          button.setAttribute("style", 'color:blue;background-color:white;border:1px solid blue;margin:auto;border-radius:20px')
        }
        let alb_value = button.innerText.trim();
        let index = comparisons.indexOf(alb_value.toLowerCase());
        props.parentCallback(eng_comparisons[index]);
        
      } 

    return (
      // <div style={{ display : "flex", alignItems : 'center', justifyContent : 'center', flexDirection : 'column',marginTop:"30px"}}>
        <div style={{width:"85%",display: "flex", flexDirection : "row",marginTop:"30px"}}>
          {comparisons.map((comparison, index) => (
            <Button  className="comparison_button" data-isclicked={"false"} style={buttonStyle[index]} onClick={handleButtonClick}>
              {comparison}
            </Button>  
          ))}          
          {/* <Button variant='outlined' style={{margin:"auto"}}>1</Button>
          <Button variant='outlined' style={{margin:"auto"}}>2</Button>
          <Button variant='outlined' style={{margin:"auto"}}>3</Button> */}
        </div>
        
      // </div>  
    );
}
{/* <div style={{width : "33%"}}>
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
        </div> */}