import React,{ Component } from "react";

export default class inventoryHome2 extends Component{

 render(){
     return(
        <div class="container px-4">
        <div class="row gx-8">

          <div class="col">
            <a href="/exportItem/additem" style={{textDecoration:'none' ,color:'white'}}> 
                <div class="p-5 border bg-dark">Add Export Items</div>
            </a>
          </div>

          <div class="col">
            <a href="/exportItem" style={{textDecoration:'none' ,color:'white'}}> 
                <div class="p-5 border bg-dark">View Export Items</div>
            </a>
          </div>

          <div class="col">
            <a href="/exportItem" style={{textDecoration:'none' ,color:'white'}}> 
                <div class="p-5 border bg-dark">Update and Delete Export Items</div>
            </a>
          </div>

          <div class="col">
            <a href="/exportItem/retreive" style={{textDecoration:'none' ,color:'white'}}> 
                <div class="p-5 border bg-dark">Search Export Items</div>
            </a>
          </div>

        </div>
      </div>
     )
 }
 


 }