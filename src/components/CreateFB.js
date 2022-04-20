import React, {Component} from "react"
import axios from "axios";
import "./CreateFB.css"


export default class CreateFB extends Component {

  constructor(props){
    super(props);
    this.state={
      
      email:"",
      comment:""
    }
  }

  handleInputChange = (e)=>{

    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit = (e)=>{

    e.preventDefault();

    const {email,comment} = this.state;

    const data = {

      email:email,
      comment:comment
    }

    console.log(data)

    axios.post("http://localhost:8000/feedback/save",data).then((res)=>{
      if(res.data.success){
        this.setState(
          {
            email:"",
            comment:""
          }
        )
      }
    })

  }

  render(){
    return(
     <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">FeedBack</h1>
        
          <form className="needs-validation" noValidate>
          

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>E-mail</label>
              <input type="text"
              className="form-control"
              name="email"
              placeholder="Enter Company E-mail"
              value={this.state.email}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Comment</label>
              <input type="text"
              className="form-control"
              name="comment"
              placeholder="Enter Your FeedBack"
              value={this.state.comment}
              onChange={this.handleInputChange}/>
            </div>

            <button className="btn btn-warning" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Submit
            </button>

          </form>
     </div>
     
    );
  }
}