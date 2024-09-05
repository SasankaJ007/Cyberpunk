import React,{ Component } from "react";
 export default class AdminSideBar extends Component{

 render(){
     return(
  <div>


<input type="checkbox" id="check"/>
  
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
      
        <a href="/transporthome"><i  class="fa fa-taxi"></i><span>Transportation</span></a> 
    
        <a href="#"><i class="fa fa-building" ></i><span>Building Management</span></a>
        <a href="/waterResourse"><i class="fa fa-tint"></i><span>Water Resourse</span></a>
        <a href="/telecommunication"><i class="fa fa-volume-control-phone"></i><span>Telecommunication</span></a>
        <a href="#"><i class="fa fa-money"></i><span>financial management</span></a>
        <a href="/inventory"><i class="fa fa-truck"></i><span>Inventory management</span></a>
        <a href="#"><i class="fa fa-user"></i><span>Customer Management</span></a>
        <a href="#"><i class="fa fa-briefcase"></i><span>Employee Management</span></a>
      
      </div>
    </div>
 
    <div class="sidebar">
     
      <a href="/transporthome"><i class="fa fa-taxi"></i><span>Transportation</span></a> 
      
      <a href="#"><i class="fa fa-building" ></i><span>Building Management</span></a>
      <a href="/waterResourse"><i class="fa fa-tint"></i><span>water Resourse</span></a>
      <a href="/telecommunication"><i class="fa fa-volume-control-phone"></i><span> Telecommunication</span></a>
      <a href="#"><i class="fa fa-money"></i><span>financial management</span></a>
      <a href="/inventory"><i class="fa fa-truck"></i><span>Inventory management</span></a>
      <a href="#"><i class="fa fa-user"></i><span>Customer Management</span></a>
      <a href="#"><i class="fa fa-briefcase"></i><span>Employee Management</span></a>
    </div>
    

  
    


           
  </div>
     )
 }
 


 }