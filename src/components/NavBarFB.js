import React, {Component} from "react";
import axios from 'axios';


export default class NavBar extends Component {

  filterData(feedback,searchKey){

    const result = feedback.filter((feedback)=>
    feedback.email.includes(searchKey)
    
    )
  
    this.setState({feedback:result})
  }

  handleSearchArea =(e) =>{

    const searchKey = e.currentTarget.value;
  
    axios.get(`http://localhost:8000/feedback`).then(res =>{
      if(res.data.success){
       
        this.filterData(res.data.existingFeedback,searchKey)
  
       }
    });
  
  }

  render(){
    return(
        
        <nav class="navbar navbar-expand-lg " style={{position:'sticky',top:'0',zIndex:'999',backgroundColor:'rgb(6, 70, 98)'}}>
        <a class="navbar-brand" href="#"><h1  style={{color:'rgb(241, 222, 187)',fontWeight:'bold',marginLeft:'20px'}}>Techno Online</h1></a>
        

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="/" style={{color:'white'}}> All  <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#" style={{color:'rgb(241, 222, 187)'}}>FeedBack</a>
            
          </div>

          <div className="row">
            <div className="col-lg-12 mt-2 mb-2" style={{marginLeft:'60px'}} >
              <input 
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}>
                
              </input>
            </div>
          </div>

        </div>

        
          
        
      </nav>
     
    )
  }
}