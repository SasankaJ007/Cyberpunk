import React,{ Component } from "react";

export default class mainHome extends Component{

 render(){
     return(
        <div class="container px-4">
        <div class="row gx-8">

          <div class="col">
            <a href="/importItem/home" style={{textDecoration:'none' ,color:'white'}}> 
                <div class="p-5 border bg-dark">Import Items</div>
            </a>
          </div>

          <div class="col">
            <a href="/exportItem/home" style={{textDecoration:'none' ,color:'white'}}> 
                <div class="p-5 border bg-dark">Export Items</div>
            </a>
          </div>

        
        </div>
      </div>
     )
 }
 


 }

 