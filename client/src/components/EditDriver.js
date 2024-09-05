import React, { Component } from 'react'
import axios from 'axios';

export default class EditDriver extends Component {

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

        const id = this.props.match.params.id;

        const {name, age, vehicle_number, lisence_number} = this.state;

        const data = {
            name:name,
            age:age,
            vehicle_number:vehicle_number,
            lisence_number:lisence_number
        }

        console.log(data)
       
        axios.put(`/driver/update/${id}`, data).then((res)=> {
            if(res.data.success){
                alert("Driver Updated Successfully!")
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


    componentDidMount(){

        const id = this.props.match.params.id;
 
        axios.get(`/driver/${id}`).then((res) => {
            if(res.data.success){
                this.setState({
                    name:res.data.driver.name,
                    age:res.data.driver.age,
                    vehicle_number:res.data.driver.vehicle_number,
                    lisence_number:res.data.driver.lisence_number
                });
 
                console.log(this.state.driver);
            }
        });
 
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
              {/* <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/addVehicle">New Vehicle</a>
              </li> */}
              
            </ul>
           
          </div>
        </div>
      </nav>
  {/* <div className="headings">
      <h1>Sign up to <b>DRIVE</b></h1>
      <h4>cyberpunk transport is a great way to be your own boss and earn great money. From a commercial license to a car, Uber can help you every step of the way.</h4>
      </div> */}
  <br></br>
  <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal"><b>Update Driver</b></h1><br></br>
      <form>
          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Name</label>
              <input type="text"
              className="form-control"
              name="name"
              placeholder="Enter new Name"
              readOnly
              value={this.state.name}
              onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Age</label>
              <input type="text"
              className="form-control"
              name="age"
              placeholder="Enter new Age"
              value={this.state.age}
              required
              onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Vehicle Number</label>
              <input type="text"
              className="form-control"
              name="vehicle_number"
              placeholder="Enter new Vehicle Number"
              value={this.state.vehicle_number}
              required
              onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>License Number</label>
              <input type="text"
              className="form-control"
              name="lisence_number"
              placeholder="Enter new License Number"
              value={this.state.lisence_number}
              readOnly
              onChange={this.handleInputChange}/>
          </div>

          <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Update and Save
          </button>
      </form>
  
        </div>
        </div>
        )
    }
}