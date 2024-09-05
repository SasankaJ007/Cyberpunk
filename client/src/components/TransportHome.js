import React, { Component } from 'react'


export default class TransportHome extends Component {


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

            
            <h1>Transport Home</h1>
            <br></br><br></br><br></br>
            <div className="cards">
      <div className="card" style={{width: "18rem"}}>
      <img src="https://a-static.besthdwallpaper.com/taxi-wallpaper-2048x1536-33547_26.jpg" className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">TAXI Booking</h5>
        <p className="card-text">CyberPunk Transport - the fastest, safest and smartest way to book cabs and taxis in CyberPunk City. To Book your trip Click Here!.</p>
        <a href="/addTaxiBooking" className="btn btn-primary">Book a TAXI</a>
      </div>
    </div>
    
    <div className="card" style={{width: "18rem"}}>
    <img src="https://www.baywalktours.com/wp-content/uploads/2019/06/IMG-20190106-WA0002.jpg" className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Bus Seat</h5>
      <p className="card-text">CyberPunk Transport - Plan all of your Bus journeys early. Click Here to book bus tickets and reserve your seat in advance.</p>
      <a href="/addTaxiBooking" className="btn btn-primary">Book a Bus Seat</a>
    </div>
  </div>

  <div className="card" style={{width: "18rem"}}>
    <img src="https://www.santabanta.com/images/wallpapers/vehicles/mesmerising-view-of-the-jacobite-steam-train_1024-768.jpg" className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Train Ticket</h5>
      <p className="card-text">CyberPunk Transport - Plan all of your Train journeys early. Click Here to book train tickets and reserve your seat in advance.</p>
      <a href="/addTaxiBooking" className="btn btn-primary">Book a Train</a>
    </div>
  </div>

  <div className="card" style={{width: "18rem"}}>
    <img src="https://i.guim.co.uk/img/media/460bbd297975ba741cc56eaa290bbf2e9f7ecbf3/0_770_1925_1155/master/1925.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=98188cda6e13070bc08337e5fde38fbf" className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Air Ticket</h5>
      <p className="card-text">CyberPunk Transport - Plan all of your Air journeys early. <br></br>Click Here to book Air tickets and reserve your seat in advance.</p>
      <a href="/addTaxiBooking" className="btn btn-primary">Book an Air Ticket</a>
    </div>
  </div>

  </div>

        </div>
        )
    }
}