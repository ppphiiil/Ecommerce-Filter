import { Checkbox} from 'antd';
import React   from 'react'





export  default function App  (props){


    return (
      <>
        <p style={{ marginBottom: '20px' }}>
          <Checkbox 
           checked={props.checked}
            onChange={props.onChangeTestCheckbox}
          >
          available
          </Checkbox>
        </p>
        {/* <p>
          <Button type="primary" size="small" onClick={this.toggleChecked}>
            {!this.state.checked ? 'Check' : 'Uncheck'}
          </Button>
          <Button
            style={{ margin: '0 10px' }}
            type="primary"
            size="small"
            onClick={this.toggleDisable}
          >
            {!this.state.disabled ? 'Disable' : 'Enable'}
          </Button>
        </p> */}
      </>
    );
  
}