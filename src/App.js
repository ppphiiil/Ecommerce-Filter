
import React from 'react';
import { HashRouter, Link, Route, Switch } from "react-router-dom"
//data
import products from './data.js'

import Footer from './Footer'




//Pages
import FilterPage from './FilterPage'
import Home from './pages/Home'
import About from './pages/About'


//Layout
import { Layout, Menu } from 'antd';
const { Header} = Layout;


//button
// import {Button} from 'antd';




function App() {
  return (
    <div className="App">

      <Layout>
        <HashRouter>
          <Header style={{ backgroundColor: "white", display: "flex", justifyContent: "space-between" }}>

            <div className="logo" ><h1>eCommerceFILTER</h1></div>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="2"> <Link to="/shop">Shop</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
            </Menu>


          </Header>
          
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/shop">
              <FilterPage data={products} />
            </Route>

          </Switch>

          <Footer/>
          
    
        </HashRouter>
      </Layout>
    </div>
  );
}


export default App;