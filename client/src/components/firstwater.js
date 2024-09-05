import React,{ Component } from "react";






 export default class firstwater extends Component{

 render(){
   
     return(
       <div>

  

        <div class="container px-4">

      
       <center>
      <h1>Water Resousres Management Unit</h1>
       </center>

       <hr/>
         

        <div class="row" id="tmFeatures">

        
          <div class="col-lg-4">
          <a href="/bill" style={{textDecoration:'none' ,color:'black'}}>
            <div class="tm-bg-white-transparent tm-feature-box">
            <h3 class="tm-feature-name">Water Bill Management</h3>
            
            <div class="tm-feature-icon-container">
            
                <i class="fas fa-3x fa fa-file-text"></i>
            </div>

            <p class="text-center">Each building useded number of water units </p>
            </div>
          </a>
          </div>
        
          <div class="col-lg-4">
          <a href="/Allmonth" style={{textDecoration:'none' ,color:'black'}}> 
            <div class="tm-bg-white-transparent tm-feature-box">
                <h3 class="tm-feature-name">Water Qualitydetails </h3>

                <div class="tm-feature-icon-container">
                    <i class="fas fa-3x fa fa-certificate"></i>
                </div>
                <p class="text-center">Each month drinking water qulity parameeters values
                </p>
            </div>
            </a>
          </div>

          <div class="col-lg-4">
          <a href="/announcement" style={{textDecoration:'none' ,color:'black'}}> 
            <div class="tm-bg-white-transparent tm-feature-box">
              
                <h3 class="tm-feature-name"> water inttruption announcements</h3>

                <div class="tm-feature-icon-container">
                    <i class="fas fa-3x fa fa-bullhorn"></i>
                </div>
                <p class="text-center">Make emails to the people before there supporse to be a water innteruption
                </p>
            </div>
            </a>
          </div>
        
        </div>     




      </div>
      </div>
     )
 }
 


 }