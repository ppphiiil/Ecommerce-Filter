import React from 'react';
import { Collapse } from 'antd';


const { Panel } = Collapse;


function callback(key) {
  console.log(key);
}



export default function Filter2(props) {
    return (
        <div>
             <Collapse defaultActiveKey={['1']} onChange={callback}>
    <Panel header={props.filterTitle} key="1">
      {props.filterInput}

    </Panel>

  </Collapse>
        </div>
    )
}





