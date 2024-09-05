import React,{ Component } from 'react';
import axios from 'axios';




export default class report extends Component{
	render(){
		return(
   
   
		 <div class="content">
			<div className="col-md-8 mt-4 mx-auto">
				<h1 className="h3 mb-3 font-weight-normal">REPORT GENERATIONS</h1>
		  <form className="need-validation" noValidate>
	   
   
	 <div className="form-group" style={{marginBottom:'15px'}}>
	   <label style={{marginBottom:'5px'}}>Enter Month in Numeric</label>
	   <input type="Number" 
	   className="form-control" 
	   name="BuildingId"
	   placeholder="DD"
	   min="1" max="12"/>

	  
	 </div>
	 
	 <div className="form-group" style={{marginBottom:'15px'}}>
	   <label style={{marginBottom:'5px'}}> Enter the Date</label>
	   <input type="number" 
	   className="form-control" 
	   name="NoOfUnit"
	   placeholder="Enter the NoOfUnit"
	   min="1" max="31"/>
	
	  
	 </div>
   
   
	 <button type="submit" class="btn btn-success" style={{marginBottom:'15px'}} onClick={this.onSubmit}>
		 
		 &nbsp;
		Generate A Report </button>
   </form>
   
			</div>
   
			</div>
		)
	}
	
   
   
	}
   