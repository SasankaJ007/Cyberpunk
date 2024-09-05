import React,{ Component } from "react";
 export default class UserSideBar extends Component{

 render(){
     return(
  <div>

  
    <header>
      <label for="check">
        <i class="fas fa-bars" id="sidebar_btn"></i>
      </label>
      <div class="left_area">
        <h3>Cyberpunk <span>SmartCity</span></h3>
      </div>
      <div class="right_area">
        <a href="#" class="logout_btn">Logout</a>
      </div>
    </header>
   
    <div class="mobile_nav">
      <div class="nav_bar">
        <img src="Home/1.png" class="mobile_profile_image" alt=""/>
        <i class="fa fa-bars nav_btn"></i>
      </div>
      <div class="mobile_nav_items">
      
        <a href="#"><i  class="fa fa-taxi"></i><span>Transportation</span></a> 
    
        <a href="#"><i class="fa fa-building" ></i><span>Building Management</span></a>
        <a href="/waterResourse"><i class="fa fa-tint"></i><span>Water Resourse</span></a>
        <a href="/telecommunication"><i class="fa fa-tint"></i><span>Water Resourse</span></a>
     
      
      </div>
    </div>
 
    <div class="sidebar">
     
      <a href="#"><i class="fa fa-taxi"></i><span>Transportation</span></a> 
      
      <a href="#"><i class="fa fa-building" ></i><span>Building Management</span></a>
      <a href="/telecommunication"><i class="fa fa-tint"></i><span>water Resourse</span></a>
    
    </div>
    

  
    


           
  </div>
     )
 }
 


 }