import { Button, ButtonGroup, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
interface Props {
    parentCallback : (val : string ) => void
}
export const ChooseComparisonType = (props : Props) => {
    const [selectedComparison, setSelectedComparison] = useState<string>("");
    const eng_comparisons = ["income","investments","individual_users","business_users","total_users"]
    const comparisons = ["të hyrat", "investimet","përdoruesit individual","përdoruesit biznesor", "totali i përdouesve"]
    
    let default_style = {
      color:'white',
      border:'1px solid white',
      margin:"auto",
      borderRadius:"4px",
      backgroundColor:"#007BFF"      
    }
    
    let temp_style = {
      color:'#007BFF',
      border:'1px solid #007BFF',
      margin:"auto",
      borderRadius:"4px",
      backgroundColor:"white"
    }
    
    const [buttonStyle, setButtonStyle] = useState<any[]>([default_style, temp_style, temp_style, temp_style, temp_style])
    
    const handleComparisonChange = (event: SelectChangeEvent<typeof selectedComparison>) => {
        const {
          target: { value },
        } = event;
        
        setSelectedComparison(value);
        props.parentCallback(value);
      };

      const handleButtonClick =   (event : React.MouseEvent<HTMLButtonElement>) => {
        let button : HTMLButtonElement  = event.currentTarget;

        let isClicked = button.dataset.isclicked;
        
        let all_buttons = document.getElementsByClassName('comparison_button');
        
        for(let i = 0; i < all_buttons.length; i++){
          all_buttons.item(i)?.setAttribute('data-isclicked','false')
          all_buttons.item(i)?.setAttribute("style", 'color:#007BFF;background-color:white;border:1px solid #007BFF;margin:auto;border-radius:4px;')
        }

        if(isClicked == "false"){
          button.setAttribute("data-isclicked","true")
          button.setAttribute("style",'color:white; background-color:#007BFF;border:1px solid white;margin:auto;border-radius:4px;')
        }
        else {
          button.setAttribute("data-isclicked","false")
          button.setAttribute("style",'color:#007BFF; background-color:white;border:1px solid #007BFF;margin:auto;border-radius:4px;')
        }
        let alb_value = button.innerText.trim();
        let index = comparisons.indexOf(alb_value.toLowerCase());
        props.parentCallback(eng_comparisons[index]);
        
      } 

    return (
      <div style={{width:"78%", display: 'flex', alignItems: 'center', marginTop: 30, marginLeft: 10 }}>
          {comparisons.map((comparison, index) => (
            <Button className="comparison_button" data-isclicked={"false"} style={buttonStyle[index]} onClick={handleButtonClick}>
              {comparison}
            </Button>  
          ))}          
        </div>
    );
}