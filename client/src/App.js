
import React,{Component} from "react";
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';


import addbill from "./components/addbill";
import AllBills from "./components/AllBills";

import Announcement from "./components/announcement";
import Createmonth from "./components/Createmonth";
import Editebill from "./components/Editebill";
import Editmonth from "./components/Editmonth";

import month from "./components/month";


import Qualitydetails from "./components/Qualitydetails";
import Allmonths from "./components/Allmonths";


import firstwater from "./components/firstwater";
import AdminSideBar from "./components/Adminsidebar";

//Telecommunications

import search from './components/search';
import addTelephone from './components/addTelephone';
import deletePhone from './components/deletePhone';
import editTelephone from './components/editTelephone';
import TelephoneDetails from './components/TelephoneDetails';
import list from './components/list';
import page from './components/page';
import NavBar from './components/NavBar';
import report from "./components/report";
import sendMessage from "./components/sendMessage";

//Inventory
import AddExportItems from './components/AddExportItems';
import AddImportItems from './components/AddImportItems';
import EditIExportItems from './components/EditExportItems';
import EditImportItems from './components/EditImportItems';
import ExportHome from './components/ExportHome';
import ExportItemsDetails from './components/ExportItemsDetails';
import ImportHome from './components/ImportHome';
import ImportItemsDetails from './components/ImportItemsDetails';
import inventoryHome from './components/inventoryHome';
import inventoryHome2 from './components/inventoryHome2';
import mainHome from './components/mainHome';
import monthPrint from "./components/month";

//Transport Management

import CreateDriver from './components/CreateDriver';
import DriverDetails from './components/DriverDetails';
import EditDriver from './components/EditDriver';
import AddTaxiBooking from "./components/AddTaxiBooking";
import AllDrivers from './components/AllDrivers';
import TransportHome from './components/TransportHome';
import TransportChart from "./components/TransportChart";


export default class App extends Component{
render(){
return(
 <BrowserRouter> 
 

 <AdminSideBar/>
  

  
   <div class="content">
    
  
<Route path="/waterResourse" exact component={firstwater}></Route>
<Route path="/monthUsers" exact component={monthPrint}></Route>
 <Route path="/editbill/:id" exact component={Editebill}></Route>
 <Route path="/bill" exact component={AllBills}></Route>
 <Route path="/billcreate" exact component={addbill}></Route>
 <Route path="/Allmonth" exact component={Allmonths}></Route>
 <Route path="/addmonthsdetails" component={Createmonth}></Route>
 <Route path="/editmonth/:id" component={Editmonth}></Route>
 <Route path="/month/:id" component={Qualitydetails}></Route>
 <Route path="/announcement" component={Announcement}></Route>
 <Route path="/report" component={report}></Route>
 




 
          


         <Route path ="/telecommunication" exact component={page}></Route>
         <Route path ="/list" exact component={list}></Route>
         <Route path="/add" component ={addTelephone}></Route>
         <Route path ="/delete" component={deletePhone}></Route>
         <Route path = "/edit/:id" component={editTelephone}></Route>
         <Route path = "/phone/:id" component={TelephoneDetails}></Route>
         <Route path = "/search" component={search}></Route>
         <Route path = "/report" component={report}></Route>
         <Route path = "/sendMessage" component={sendMessage}></Route>
        
        

        
        <Route path="/inventory" exact component={mainHome}></Route>

        <Route path="/importItem/home" exact component={inventoryHome}></Route>
        <Route path="/importItem" exact component={ImportHome}></Route>
        <Route path="/importItem/additem" component={AddImportItems}></Route>
        <Route path="/importItem/edit/:id" component={EditImportItems}></Route>
        <Route path="/importItem/retreive/:id" component={ImportItemsDetails}></Route>

        <Route path="/exportItem/home" exact component={inventoryHome2}></Route>
        <Route path="/exportItem" exact component={ExportHome}></Route>
        <Route path="/exportItem/additem" component={AddExportItems}></Route>
        <Route path="/exportItem/edit/:id" component={EditIExportItems}></Route>
        <Route path="/exportItem/retreive/:id" component={ExportItemsDetails}></Route>



<Route path="/allDrivers" exact component={AllDrivers}></Route>
<Route path="/addDriver" component={CreateDriver}></Route>
<Route path="/editDriver/:id" component={EditDriver}></Route>
<Route path="/driver/:id" component={DriverDetails}></Route>
<Route path="/addTaxiBooking" component={AddTaxiBooking}></Route>
<Route path="/transporthome" exact component={TransportHome} />
<Route path="/transportChart" exact component={TransportChart} />
       
  
         </div>
      </BrowserRouter>


    )




}


}

