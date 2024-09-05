import React, { Component } from 'react'
import axios from 'axios';

export default class DriverDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            driver:{}
        };

    }

    componentDidMount(){

       const id = this.props.match.params.id;

       axios.get(`/driver/${id}`).then((res) => {
           if(res.data.success){
               this.setState({
                   driver:res.data.driver
               });

               console.log(this.state.driver);
           }
       });

    }

    render() {
        

        const {name, age, vehicle_number, lisence_number} = this.state.driver;

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
          <br></br>
          <h1>Driver Profile</h1>
            <br></br>
            

          <div style={{marginTop:'20px'}}>
              <h4>WELCOME!</h4>
              <h4><b>{name}</b></h4>
              <hr/><br></br>
          <div className="profile_contents">
              
              <dl className="row">
                  <dt className="col-sm-3">Name</dt>
                  <dd className="col-sm-9">{name}</dd>
                  
                  <dt className="col-sm-3">Age</dt>
                  <dd className="col-sm-9">{age}</dd>

                  <dt className="col-sm-3">Vehicle Number</dt>
                  <dd className="col-sm-9">{vehicle_number}</dd>

                  <dt className="col-sm-3">License Number</dt>
                  <dd className="col-sm-9">{lisence_number}</dd>

              </dl>

              <div className="profile_taxi_img">
              <img src="https://newyork.cbslocal.com/wp-content/uploads/sites/14578484/2021/05/tesla-yellow-taxi-cab-new-york-city-e1620081750835.jpg?w=1161" className="card-img-top" alt="..."></img>
              </div>
            </div>
          </div>

          </div>
        )
    }
}