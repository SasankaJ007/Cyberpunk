import React,{ Component } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default class Createmonth extends Component{
constructor(props){
super(props);
this.state={
  
    month:"",
    PH_vale:"",
    Temperature:"",
    Turbidity_level:"",
    BOD_value:"",
    Hardness:"",
    Chloride:"",
    DissolvedOxygen:"",
    Ammonium:"",
    publicsheddate:"",
    errors:{}

}

}



handleInputChange = (e) =>{

    const {name,value}=e.target;

    this.setState({
   ...this.state,
   [name]:value


    })

}

formValidation=()=>{
  const{month,PH_vale,Temperature,Turbidity_level,BOD_value,Hardness,Chloride,DissolvedOxygen,Ammonium,publicsheddate}=this.state;
  let isValid=true;
  const errors={};

  if(PH_vale.trim().length>1){
    errors.PHvaluedlength="ph value  must smaller than 14";
    isValid=false;
  }
  if(Temperature.trim().length>2){
    errors.PHvaluedlength="water tempreature cannot be exseed 100c`";
    isValid=false;
  }

  if(PH_vale.trim().length==0||month.trim().length==0||Turbidity_level.trim().length==0||Temperature.trim().length==0||BOD_value.trim().length==0||Hardness.trim().length==0||Chloride.trim().length==0||DissolvedOxygen.trim().length==0||Ammonium.trim().length==0||publicsheddate.trim().length==0){
    //errors.PHvaluedlength="All fields must fill";
    Swal.fire({
      
      icon: 'error',
      title: 'Oops...',
      text: 'A required feild is missing .Please fill out all required fields and try again',
  
    })
    isValid=false;
  }


 this.setState({errors});
 return isValid;
}



  onSubmit=(e)=>{
  e.preventDefault();
  const{month,PH_vale,Temperature,Turbidity_level,BOD_value,Hardness,Chloride,DissolvedOxygen,Ammonium,publicsheddate}=this.state;
  
  const isValid=this.formValidation();

  if(isValid)
  {
  const data={
    month:month,
    PH_vale:PH_vale,
    Temperature:Temperature,
    Turbidity_level:Turbidity_level,
    BOD_value:BOD_value,
    Hardness:Hardness,
    Chloride:Chloride,
    DissolvedOxygen:DissolvedOxygen,
    Ammonium:Ammonium,
    publicsheddate:publicsheddate
  }

console.log(data);
axios.post(`/month/save`,data).then((res)=>{
  if(res.data.success){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'new Month details has been saved',
      showConfirmButton: false,
      timer: 1500
    })



    //alert("month's details added successfully")
      this.setState(
      {
        month:"",
        PH_vale:"",
        Temperature:"",
        Turbidity_level:"",
        BOD_value:"",
        Hardness:"",
        Chloride:"",
        DissolvedOxygen:"",
        Ammonium:"",
        publicsheddate:""
        
      }

      )
  }

})

  }
}


 render(){


  const{month,PH_vale,Temperature,Turbidity_level,BOD_value,Hardness,Chloride,DissolvedOxygen,Ammonium,publicsheddate,errors}=this.state
     return(
    
<div>
     

<h1>Add new Month's details</h1>
      
        
       
            
       <form className="need-validation" noValidate>
       <div class="container contact">
	<div class="row">
		<div class="col-md-3">
			<div class="contact-info">
      <h2>Water Quality Parameeters</h2>
				<img src="Home/wquality1.png"  width="200" height="200"alt="image"/>
			
			</div>
		</div>


       <div class="col-md-9">
       <div class="contact-form">


       <div class="row">
       <div class="col-md-4 ">

  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>Month</label>
    <input type="month" 
    className="form-control" 
    name="month"
    placeholder="Enter the month"
    value={this.state.month}
    onChange={this.handleInputChange}/>
   
  </div>
  
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}> PH value</label>
    <input type="text" 
    className="form-control" 
    name="PH_vale"
    placeholder="Enter the PH value"
    value={this.state.PH_vale}
    onChange={this.handleInputChange}/>
   
  </div>
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>Temperature</label>
    <input type="text" 
    className="form-control" 
    name="Temperature"
    placeholder="Enter the Temperature"
    value={this.state.Temperature}
    onChange={this.handleInputChange}/>
   
  </div>
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>Turbidity_level</label>
    <input type="text" 
    className="form-control" 
    name="Turbidity_level"
    placeholder="Enter the month"
    value={this.state.Turbidity_level}
    onChange={this.handleInputChange}/>
   
  </div>

  
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>BOD value</label>
    <input type="text" 
    className="form-control" 
    name="BOD_value"
    placeholder="Enter the BOD value"
    value={this.state.BOD_value}
    onChange={this.handleInputChange}/>
   
  </div>
</div>
<div class="col-md-4 ">

  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>Hardness (as CaCO3) </label>
    <input type="text" 
    className="form-control" 
    name="Hardness"
    placeholder="Enter the Hardness"
    value={this.state.Hardness}
    onChange={this.handleInputChange}/>
   
  </div>

  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>Chloride</label>
    <input type="text" 
    className="form-control" 
    name="Chloride"
    placeholder="Enter the Chloride"
    value={this.state.Chloride}
    onChange={this.handleInputChange}/>
   
  </div>
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>DissolvedOxygen level </label>
    <input type="text" 
    className="form-control" 
    name="DissolvedOxygen"
    placeholder="Enter the DissolvedOxygen"
    value={this.state.DissolvedOxygen}
    onChange={this.handleInputChange}/>
   
  </div>
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>Ammonium</label>
    <input type="text" 
    className="form-control" 
    name="Ammonium"
    placeholder="Enter the Ammonium"
    value={this.state.Ammonium}
    onChange={this.handleInputChange}/>
   
  </div>
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>publicsheddate</label>
    <input type="date" 
    className="form-control" 
    name="publicsheddate"
    placeholder="Enter the publicsheddate"
    value={this.state.publicsheddate}
    onChange={this.handleInputChange}/>
   
  </div>

 </div>


  

 </div>

  <button type="submit" class="btn btn-success" style={{marginBottom:'15px'}} onClick={this.onSubmit}>
      <i className="far fa-check-square"></i>
      &nbsp;
      Save</button>
  
      {Object.keys(errors).map((key)=>{

return <div style={{color: "white"}} key={key}><h2>{errors[key]}</h2></div>
})}

</div>
  </div>
 
  </div>
</div>
</form>
</div>

        
        
     )
 }
 


 }