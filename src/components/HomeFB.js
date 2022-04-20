import React, { Component } from 'react'
import axios from 'axios';
import "./HomeFB.css"

export default class HomeFB extends Component {
constructor(props){
  super(props)

  this.state={
    feedback:[]
  };

}

componentDidMount(){
  this.retrievefeedback();
}

retrievefeedback(){
  axios.get("http://localhost:8000/feedback").then(res =>{
    if(res.data.success){
      this.setState({
        feedback:res.data.existingFeedback
      });

      console.log(this.state.feedback)

     }
  });
}

render(){
    return (
      <div className='container-fluid'>
        <h2 style={{color:'rgb(6, 70, 98)',fontWeight:'bold',height:'40px',textAlign:'center',marginTop:'15px',backgroundColor:'rgb(241, 222, 187)'}}>STUDENT FEEDBACK</h2>

        <div className="col-md-4 mt-4 mx-auto" style={{float:'left',position:'relative',paddingRight:'40px',paddingBottom:'20px',paddingTop:'0px', paddingLeft:'40px'}}>
        <h1 className="h3 mb-2" style={{fontWeight:'bold'}}>Course</h1>
          <form className="needs-validation" noValidate>
          

          <img class="card-img-top" src="https://png.pngtree.com/png-clipart/20210308/original/pngtree-college-entrance-examination-countdown-race-against-time-learning-vector-elements-png-image_5758237.jpg" alt="Card image cap"></img>
  <div class="card-body">
    
    <p class="card-text" style={{color:'white'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>

            <button className='btn btn-warning'><a href='/add' style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>Enter My Comments</a></button>

          </form>
     </div>
     




     <div className="col-md-4 mt-4 mx-auto" style={{float:'left',position:'relative',paddingRight:'40px',paddingBottom:'20px',paddingTop:'0px', paddingLeft:'40px'}}>
        <h1 className="h3 mb-2" style={{fontWeight:'bold'}}>Module</h1>
          <form className="needs-validation" noValidate>
          

          <img class="card-img-top" src="https://png.pngtree.com/png-clipart/20210308/original/pngtree-college-entrance-examination-countdown-race-against-time-learning-vector-elements-png-image_5758237.jpg" alt="Card image cap"></img>
  <div class="card-body">
    
    <p class="card-text" style={{color:'white'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>

            <button className='btn btn-warning'><a href='/add' style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>Enter My Comments</a></button>

          </form>
     </div>




     <div className="col-md-4 mt-4 mx-auto" style={{float:'left',position:'relative',paddingRight:'40px',paddingBottom:'20px',paddingTop:'0px', paddingLeft:'40px'}}>
        <h1 className="h3 mb-2" style={{fontWeight:'bold'}}>Institute</h1>
          <form className="needs-validation" noValidate>
          

          <img class="card-img-top" src="https://png.pngtree.com/png-clipart/20210308/original/pngtree-college-entrance-examination-countdown-race-against-time-learning-vector-elements-png-image_5758237.jpg" alt="Card image cap"></img>
  <div class="card-body">
    
    <p class="card-text" style={{color:'white'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>

            <button className='btn btn-warning'><a href='/add' style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>Enter My Comments</a></button>

          </form>
     </div>



        <h2 className='reacent' style={{color:'red',marginBottom:'20px',textAlign:'left'}}>Reacent Comments</h2>

        <table class="table table-hover">
           <thead>
             <tr>
               <th scope="col">No</th>
               <th scope="col">Email</th>
               <th scope="col">Feedback</th>
               <th scope="col">Rating</th>
             </tr>
           </thead>

           <tbody>
           {this.state.feedback.map((feedback,index) =>(
             <tr className='tr'>
               <th scope="row">{index+1}</th>
               <td style={{fontWeight:'bold'}}>{feedback.email}</td>
               <td style={{fontWeight:'bold'}}>{feedback.comment}</td>
               <td>
               {feedback.rating}
               </td>
             </tr>
      ))}
           </tbody>

         </table>
      </div>
    )
 }
}