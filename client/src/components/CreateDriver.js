import React, { Component } from 'react'
import axios from 'axios';

export default class CreateDriver extends Component {

    constructor(props){
        super(props);
        this.state={
            name:"",
            age:"",
            vehicle_number:"",
            lisence_number:""

        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    
    }

    onSubmit = (e) => {

        e.preventDefault();

        const {name, age, vehicle_number, lisence_number} = this.state;

        const data = {
            name:name,
            age:age,
            vehicle_number:vehicle_number,
            lisence_number:lisence_number
        }

        console.log(data)
       
        axios.post("/driver/save", data).then((res)=> {
            if(res.data.success){
                alert("Driver added successfully!")
                this.setState(
                    {
                        name:"",
                        age:"",
                        vehicle_number:"",
                        lisence_number:""
                    }
                )
            }
        })
    }

    render() {
        return (
            <div className="container">

<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/transporthome">TransportHome</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/allDrivers">All Drivers</a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="/allVehicles">All vehicles</a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/addDriver">Register Driver</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/transportChart">Report</a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/addVehicle">New Vehicle</a>
              </li> */}
              
            </ul>
           
          </div>
        </div>
      </nav>
     

  <div className="headings">
      
      <h1>Sign up to <b>DRIVE</b></h1>
      </div>
  
  <div className="col-md-8 mt-4 mx-auto">

  <div className="headings">     
      <h4>Cyberpunk transport is a great way to be your own boss.</h4><br></br>
      </div>

      <h1 className="h3 mb-3 font-weight-normal"><b>Register as a Driver</b></h1>
      <form onSubmit={this.onSubmit}>
          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Name</label>
              <input type="text"
              className="form-control"
              name="name"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={this.handleInputChange}
              minlength="3"
              required/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Age</label>
              <input type="text"
              className="form-control"
              name="age"
              placeholder="Enter Age"
              value={this.state.age}
              onChange={this.handleInputChange}
              pattern="[0-9]{1,2}"
              required/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Vehicle Number</label>
              <input type="text"
              className="form-control"
              name="vehicle_number"
              placeholder="Enter Vehicle Number"
              value={this.state.vehicle_number}
              onChange={this.handleInputChange}
              required/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>License Number</label>
              <input type="text"
              className="form-control"
              name="lisence_number"
              placeholder="Enter License Number"
              value={this.state.lisence_number}
              onChange={this.handleInputChange}
              required/>
          </div>

          <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} >
              <i className="far fa-check-square"></i>
              &nbsp; Save
          </button>
      </form>
  
        </div>
        </div>
        )
    }
}