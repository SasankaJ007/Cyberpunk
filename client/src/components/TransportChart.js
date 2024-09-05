import axios from 'axios';
import React, { Component, useState } from 'react'
import { Bar } from 'react-chartjs-2'

export default class TransportHome extends Component {

//   TransportChart = () => {
//     const [chartData, setChartData] = useState({});
//     const [numberOfPassangers, setNumberOfPassangers] = useState([]);

//     const chart = () => {
//         let numPass = [];

//         axios
//           .get("/taxis")
//           .then(res => {
//               console.log(res);
//               for (const dataObj of res.data.data) {
//                 numPass.push(parseInt(dataObj.no_of_passangers));
//               }
//           })
//           .catch(err => {
//               console.log(err);
//           });
//           console.log(numPass);
//     }
//  }

    render(){
        return(
   
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
              </li>
               */}
            </ul>
           
          </div>
        </div>
        
      </nav>

      <div className="col-lg-9 mt-2 mb-2">
            <h1>Public Transport Usage Inside the City</h1>
          </div>
          <br></br><br></br><br></br>

           <div>

           
              <Bar
                 data={{
                     labels: ['TAXI', 'BUS', 'TRAIN', 'AIR'],
                     datasets: [
                        {
                            label: '# Daily Usage',
                            data: [12, 15, 5, 20],
                            backgroundColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)'
                            ],
                            borderWidth: 1,
                        },
                     ],
                 }}
                 height={400}
                 width={600}
                 options={{
                     maintainAspectRatio: false,
                 }}
               />  
          </div>
          </div>

    )

  }
}
