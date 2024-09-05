import React, {Component} from 'react';
import axios from 'axios';
import jspdf from 'jspdf'
import "jspdf-autotable"


export default class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      drivers:[]
    };
  }

  componentDidMount(){
    this.retrieveDrivers();
  }

  retrieveDrivers(){
    axios.get("/drivers").then(res => {
      if(res.data.success){
        this.setState({
          drivers:res.data.existingDrivers
        });

        console.log(this.state.drivers)
      }

    });
  }

  onDelete = (id) => {

    axios.delete(`/driver/delete/${id}`).then((res) => {
      alert("Driver Deleted Successfully");
      this.retrieveDrivers();
    });

  }

  filterData(drivers,searchKey) {

      const result = drivers.filter((driver) =>
        driver.name.toLowerCase().includes(searchKey) ||
        driver.vehicle_number.toLowerCase().includes(searchKey) ||
        driver.lisence_number.toLowerCase().includes(searchKey)
      )

      this.setState({drivers:result})

  }

  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/drivers").then(res => {
      if(res.data.success){
        
        this.filterData(res.data.existingDrivers,searchKey)
      }

    });

  }

  render() {

    //generate pdf code

    const generatePDF = drivers => {

      const doc = new jspdf();
      const tableColumn = ["Name", "Age", "Vehicle Number", "License Number"];
      const tableRows = [];
      const date = Date().split(" ");
      const dateStr = date[1] + "-" + date[2] + "-" + date[3];
  
      drivers.map(drivers => {
          const driversData = [
              drivers.name,
              drivers.age,
              drivers.vehicle_number,
              drivers.lisence_number
             ];
          tableRows.push(driversData);
      })
      doc.text("Cyberpunk Smart City", 70, 8).setFontSize(13);
      doc.text("All Drivers Registered to the System.", 14, 16).setFontSize(13);
      doc.text(`Report Genarated Date - ${dateStr}`, 14, 23);
  
      //right down width height
      //doc.addImage(img, 'JPEG', 170, 8, 25, 25);
      doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:35});
      doc.save("Cyberpunk-Transport-Management-Drivers.pdf");
   
    };
 

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
              </li>
               */}
            </ul>
           
          </div>
        </div>
      </nav>

        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h1>ALL DRIVERS</h1>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={this.handleSearchArea}>
            </input>
          </div>
        </div>
         <table className="table table-hover" style={{marginTop:'40px'}}>
           <thead>
              <tr>
                 <th scope="col">#</th>
                 <th scope="col">Name</th>
                 <th scope="col">Age</th>
                 <th scope="col">Vehicle Number</th>
                 <th scope="col">License Number</th>
                 <th scope="col">Actions</th>
              </tr>
           </thead>
           <tbody>
             {this.state.drivers.map((drivers, index) =>(
               <tr key={index}>
                 <th scope="row">{index+1}</th>
                 <td>
                     <a href={`/driver/${drivers._id}`} style={{textDecoration:'none',color:'black'}}>
                     {drivers.name}
                     </a>
                     
                </td>
                 <td>{drivers.age}</td>
                 <td>{drivers.vehicle_number}</td>
                 <td>{drivers.lisence_number}</td>
                 <td>
                   <a className="btn btn-warning" href={`/editDriver/${drivers._id}`}>
                     <i className="fas fa-edit"></i>&nbsp;Edit
                   </a>
                   &nbsp;
                   <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(drivers._id)}>
                     <i className="far fa-trash-alt"></i>&nbsp;Delete
                   </a>
                </td>
              </tr>
             ))}
           </tbody>
         </table>

         <button className="btn btn-success"><a href="/addDriver" style={{textDecoration:'none',color:'white'}}>Register as a Driver</a></button>
         &nbsp;
         &nbsp;
         <button type="Print" class="btn btn-secondary" onClick={() => generatePDF(this.state.drivers)}>Generate Report</button>



      </div>
    )
  }
}