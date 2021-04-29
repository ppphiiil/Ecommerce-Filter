import React from 'react'
import './ActiveFilter.css'
import { Tag } from 'antd';



export default function ActiveFilter(props) {
    console.log("props.dataFilterSize",props.dataFilterSize);

  
//     let allFilterKeys =Object.keys(props.dataFilterSize);
//     console.log(allFilterKeys);
    let activeFilter=[];
    activeFilter=props.checked;
    console.log("props.checked",activeFilter);
//     console.log("activeFilter",activeFilter);
//     allFilterKeys.map(key=>{
//       console.log(`${key}: ${props.dataFilterSize[key]}`); 
//       activeFilter.push(`${key}: ${props.dataFilterSize[key]}`) ;
//   
//     });
//   

function log(e) {
    console.log(e);
    props.setChecked(!props.checked);
  }

  
    return (
        <div>
            {activeFilter===true?<Tag color="blue" closable onClose={log}>
            {props.TestCheckboxName}
    </Tag>:""}
        </div>
    )
}
