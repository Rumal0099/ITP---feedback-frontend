import React, {Component} from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import CreateFB from "./components/CreateFB";
import HomeFB from "./components/HomeFB";
import NavBar from "./components/NavBarFB";
import Sidebar from "./components/Sidebar";
import './App.css';

export default class App extends Component {


  render(){
    return(
        
      <BrowserRouter>
      <div >
        <NavBar></NavBar>
        <div className="sidebar">
          <Sidebar></Sidebar>
        <div className="others">  
        <Routes>
        <Route exact path="/"element={<HomeFB/>}/>
        <Route exact path="/add" element={<CreateFB/>}/>
        </Routes>
        </div>
        </div>

      </div>
    </BrowserRouter>
     
    )
  }
}