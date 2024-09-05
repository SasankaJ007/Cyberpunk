import React, { Component } from 'react'
import axios from 'axios';

export default class AddTaxiBooking extends Component {

    constructor(props){
        super(props);
        this.state={
            booking_type:"",
            name:"",
            mobile_number:"",
            time:"",
            pickup_location:"",
            destination_location:"",
            no_of_passangers:""

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

        const {booking_type, name, mobile_number, time, pickup_location, destination_location, no_of_passangers} = this.state;

        const data = {
            booking_type:booking_type,
            name:name,
            mobile_number:mobile_number,
            time:time,
            pickup_location:pickup_location,
            destination_location:destination_location,
            no_of_passangers:no_of_passangers
        }

        console.log(data)
       
        axios.post("/taxi/save", data).then((res)=> {
            if(res.data.success){
                alert("Booking added successfully!")
                this.setState(
                    {   
                        booking_type:"",
                        name:"",
                        mobile_number:"",
                        time:"",
                        pickup_location:"",
                        destination_location:"",
                        no_of_passangers:""
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
      <h1>Plan a <b>Journey</b> With Us</h1>
      {/* <h4><b>Cyberpunk</b> Transport service is a great way to travel arount the city.</h4> */}
      </div>
  
  <div className="col-md-8 mt-4 mx-auto">
      
      <form onSubmit={this.onSubmit}>
      <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Enter the booking type</label>
              <input type="text"
              className="form-control"
              name="booking_type"
              placeholder="Type TAXI/ BUS/ TRAIN/ AIR"
              value={this.state.booking_type}
              required
              maxlength="5" 
              minlength="3"
              onChange={this.handleInputChange}/>
          </div>
      
          {/* <div className="form-group" style={{marginBottom:'15px'}}>
          <select className="form-select" aria-label="Default select example">
          <option selected className="form-control" name="booking_type" value={this.state.booking_type} onChange={this.handleInputChange}>Select Booking Type</option>
          <option >Taxi Booking</option>
          <option >Bus Booking</option>
          <option >Train Booking</option>
          <option >Air Booking</option>
          </select>
          </div> */}

          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Name of the Passanger</label>
              <input type="text"
              className="form-control"
              name="name"
              placeholder="Enter Passanger Name"
              value={this.state.name}
              minlength="3" 
              required
              onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Mobile Number</label>
              <input type="text"
              className="form-control"
              name="mobile_number"
              placeholder="Enter Mobile Number"
              maxlength="10" 
              minlength="10" 
              pattern="[0-9]{10}"
              required
              value={this.state.mobile_number}
              onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>PickUp Time</label>
              <input type="text"
              className="form-control"
              name="time"
              placeholder="Enter PickUp Time in 24 hour format"
              pattern="[0-2]{1}[0-3]{1}.[0-5]{1}[0-9]{1}" 
              required
              value={this.state.time}
              onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>PickUp Location</label>
              <input type="text"
              className="form-control"
              name="pickup_location"
              placeholder="Enter Pickup Location"
              value={this.state.pickup_location}
              required
              onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Destination</label>
              <input type="text"
              className="form-control"
              name="destination_location"
              placeholder="Enter Destination Location"
              value={this.state.destination_location}
              required
              onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Number of passangers</label>
              <input type="text"
              className="form-control"
              name="no_of_passangers"
              placeholder="Enter No Of Passangers"
              value={this.state.no_of_passangers}
              onChange={this.handleInputChange}/>
          </div>

          <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} >
              <i className="far fa-check-square"></i>
              &nbsp; BOOK the JOURNEY!
          </button>
      </form>
  
        </div>
        </div>
        )
    }
}