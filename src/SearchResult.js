import React from 'react'
import { List} from 'antd';

//Icons
import { CheckCircleTwoTone, ShoppingOutlined } from '@ant-design/icons'
//Rating
import { Rate } from 'antd'

// const IconText = ({ icon, text }) => (
//   <Space>
//     {React.createElement(icon)}
//     {text}
//   </Space>
// );


export default function SearchResult(props) {
 

  return (
    <div>
      <p>{props.filteredData.length} Products</p>
      <List style={{ margin: "0px" }}
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {

          },
          pageSize: 3,
        }}
        dataSource={props.filteredData}
        footer={
          <div>

          </div>
        }
        renderItem={item => (
          <List.Item style={{ padding: "10px", marginBottom: "10px", backgroundColor: "#FFFFFF", border: "1px solid rgba(39,40,58,.15)", borderRadius: "3px" }}
            extra={
              <img
                width={270}
                alt="logo"
                src={item.image}
              />
            }
            key={item.id}
            

          >
          <div style={{display: "flex", flexDirection:"column",height:"100%",justifyContent:"space-between"}}>
            {/* Title */}
            <div>
            <h1>{item.title}</h1>

            <div className="infos" style={{padding:"15px"}}>

            {/* Icon Infos */}
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "15px" }}>
                {(item.available === true)
                  ? <CheckCircleTwoTone style={{ fontSize: '18px' }} twoToneColor="#52c41a" />
                  : <CheckCircleTwoTone style={{ fontSize: '18px' }} twoToneColor="#91909E" />}
              </div>
              <div >
                <p style={{ margin: "0px" }}>Available in Shop</p>
              </div>
            </div>

            {/* Icon Infos */}
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "15px" }}>
                {(item.available === true)
                  ? <ShoppingOutlined style={{ fontSize: '18px' }} twoToneColor="#52c41a" /> : <ShoppingOutlined style={{ fontSize: '18px' }} twoToneColor="#91909E" />}
              </div>
              <div >
                <p style={{ margin: "0px" }}>Shopping Points</p>
              </div>
            </div>
            </div>

</div>
            <div>
              <Rate disabled defaultValue={item.rating} />
            </div>


         

            </div>
          </List.Item>
        )}
      />
    </div>
  )
}






