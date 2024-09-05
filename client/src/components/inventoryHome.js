import React,{ Component } from "react";

export default class inventoryHome extends Component{

 render(){
     return(
        <div class="container px-4">
        <div class="row gx-8">

          <div class="col">
            <a href="/importItem/additem" style={{textDecoration:'none' ,color:'white'}}> 
                <div class="p-5 border bg-dark">Add Import Items</div>
            </a>
          </div>

          <div class="col">
            <a href="/importItem" style={{textDecoration:'none' ,color:'white'}}> 
                <div class="p-5 border bg-dark">View Import Items</div>
            </a>
          </div>

          <div class="col">
            <a href="/importItem" style={{textDecoration:'none' ,color:'white'}}> 
                <div class="p-5 border bg-dark">Update and Delete Import Items</div>
            </a>
          </div>

          <div class="col">
            <a href="/importItem/retreive" style={{textDecoration:'none' ,color:'white'}}> 
                <div class="p-5 border bg-dark">Search Import Items</div>
            </a>
          </div>

        </div>
      </div>
     )
 }
 


 }

 /*import React,{ Component } from "react";




 export default class inventoryHome extends Component{

 render(){
     return(

      
        <div class="container px-4">
        <div class="row gx-8">
          <div class="col">
          <a href="/importItem/additem" style={{textDecoration:'none' ,color:'white'}}> 
           <div class="p-5 border bg-dark">Add Import Items</div>
           </a>
          </div>
          <div class="col">
          <a href="/importItem/additem" style={{textDecoration:'none' ,color:'white'}}> 
            <div class="p-5 border bg-dark">water Qualitydetails</div>
            </a>
          </div>
          <div class="col">


          <a href="/importItem/retreive" style={{textDecoration:'none' ,color:'white'}}> 
            <div class="p-5 border bg-dark">Search Import Items</div>
         
           </a>

          </div>

        </div>
      </div>
     )
 }
 


 }*/