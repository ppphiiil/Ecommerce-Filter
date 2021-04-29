import React from 'react'
import Collapse from './Collapse.js'
// import { Input } from 'antd';
import { Checkbox } from 'antd';

import {  Form, } from 'antd';
import TestCheckbox from './TestCheckbox'




export default function Filter(props) {




   
    const checkboxStyle = { padding: "5px", marginLeft: "0px",display:"flex" };

     /** Filter: 
    *   
    */
    let filterSize =

<Form
name="xxx"
onValuesChange={props.onChangeFilterSize}>
<Form.Item name="size" >
<Checkbox.Group >
<Checkbox style={checkboxStyle} value="0" >0</Checkbox>
<Checkbox style={checkboxStyle} value="35" >35</Checkbox>
<Checkbox style={checkboxStyle} value="36" >36</Checkbox>
<Checkbox style={checkboxStyle} value="40" >40</Checkbox>
</Checkbox.Group>
</Form.Item>
</Form >

      


    let filterColor = 
    <Form
name="yyy"
onValuesChange={props.onChangeFilterColor}>
<Form.Item name="color" >
        <Checkbox.Group>
            <Checkbox style={checkboxStyle}value="white" >white</Checkbox>
            <Checkbox style={checkboxStyle}value="black" >black</Checkbox>
            <Checkbox style={checkboxStyle}value="red" >red</Checkbox>
        </Checkbox.Group>
    </Form.Item>
    </Form>;

let testActive = <TestCheckbox 
                    checked={props.checked}
                    onChangeTestCheckbox={props.onChangeTestCheckbox}

                    />



    return (
        <div>

            
            <Collapse
                filterTitle={"Size"}
                filterInput={filterSize} />
            <Collapse
                filterTitle={"Color"}
                filterInput={filterColor} />
                   <Collapse
                filterTitle={"(test) active"}
                filterInput={testActive} />


        </div>
    )
}


