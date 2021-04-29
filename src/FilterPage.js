import React, { useState } from 'react'



//Images
import banner from './pages/images/image1.jpg';

//Filter
import Filter from './Filter.js';

//SearchResult
import SearchResult from './SearchResult.js'
import ActiveFilter from './ActiveFilter';


//Layout
import { Layout } from 'antd';
const { Sider, Content } = Layout;




const multiPropsFilter = (products, filters) => {
    const filterKeys = Object.keys(filters);
    // console.log(filterKeys);
    return products.filter(product => {

        return filterKeys.every(key => {
            // console.log(key);
            if (!filters[key].length) return true;
            // Loops again if product[key] is an array (for material attribute).
            if (Array.isArray(product[key])) {
                return product[key].some(keyEle => filters[key].includes(keyEle));
            }
            return filters[key].includes(product[key]);
        });
    });
};




export default function FilterPage(props) {


    let filters = [];

    //get Data from a File in App.js
    let products = props.data;
    // console.log("products",products);

    const [dataFilterSize, setDataFilterSize] = useState([]);
    const [dataFilterColor, setDataFilterColor] = useState([]);

    const [checked,setChecked]=useState(false);
    
   
    const TestCheckboxName="available";
    const onChangeTestCheckbox = e => {
   
        console.log('checked = ', checked);
        setChecked(e.target.checked);

//         setChecked((status)=>{
//             
//                if(!status) {
//                 return "";
//                }
//                return status;
// 
//             
//         });
//         
      };

     

    

    
    // console.log('dataFilter1 ',dataFilter1);
    // console.log('dataFilter2 ',dataFilter2);
   
    //if you change size filter
    const onChangeFilterSize = (obj) => {
        console.log('Filter Size:: ', obj);
        setDataFilterSize(obj);
    };

     //if you change color filter
    const onChangeFilterColor = (all) => {
        console.log('Filter Color: ', all);
        setDataFilterColor(all);
    };

    let extra={};
    if(checked)
    {
        extra={available:[checked]};
    }else
    {
        extra={};
    }
   console.log("extra",extra);

    //bring filter together in one object
    filters = { ...dataFilterSize, ...dataFilterColor,...extra };
    console.log('allFilterData: ', filters);

    //get the filtered Data
    let filteredData = multiPropsFilter(products, filters)
    console.log(filteredData);
  

    return (

        <div> 
        {/* <img src={banner}/> */}
        {/* <Image src={banner} style={{height:"400px", width:"100%"}} fluid /> */}
         {/* <img src={banner}  style={{height:"400px", width:"100%"}} ratio="16:9" /> */}
        <div style={{background:`url(${banner})`,backgroundSize:"cover",width:"100%", height:"200px"}}>
       
        </div>


            <Layout style={{ padding: "20px", backgroundColor: "#F2F2F8" }}>

                <Sider theme="light" style={{ marginRight: "30px", backgroundColor: "#EFEFF6" }}>
                    <Filter  
                    onChangeFilterSize={onChangeFilterSize} 
                    onChangeFilterColor={onChangeFilterColor}             
                    onChangeTestCheckbox={onChangeTestCheckbox}
                    checked={checked} />
                </Sider>

                <Content>
                    <ActiveFilter setChecked={setChecked} TestCheckboxName={TestCheckboxName} checked={checked} dataFilterSize={dataFilterSize} setDataFilterSize={setDataFilterSize}/>
                    <SearchResult filteredData={filteredData} />
                </Content>

            </Layout>
        </div>
    )
}
