import React,{ Component } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


 export default class addbill extends Component{




constructor(props){
super(props);
this.state={
    BuildingId:"",
    NoOfUnit:"",
    Amount:"",
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
  const{BuildingId,NoOfUnit,Amount}=this.state;
  let isValid=true;
  const errors={};
  if(BuildingId.trim().length==0||NoOfUnit.trim().length==0||Amount.trim().length==0){
   
    Swal.fire({
      
      icon: 'error',
      title: 'Oops...',
      text: 'A required feild is missing .Please fill out all required fields and try again',
  
    })

    //alert("Hello! I am an alert box!!");
    isValid=false;
    
  }

    

  if(!BuildingId.includes("B") && BuildingId.trim().length>0 ){
    errors.BuildingIdB="Building id must include B";
    isValid=false;
  }

 this.setState({errors});
 return isValid;
}




  onSubmit=(e)=>{
  e.preventDefault();
  const isValid=this.formValidation();
 
  if(isValid){

  const{BuildingId,NoOfUnit,Amount}=this.state;
  const data={
    BuildingId:BuildingId,
    NoOfUnit:NoOfUnit,
    Amount:Amount,
 

  }




console.log(data);
axios.post(`/waterbill/save`,data).then((res)=>{
  

if(res.data.success){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'new bill details has been saved',
    showConfirmButton: false,
    timer: 1500
  })


      this.setState(
      {
        BuildingId:"",
        NoOfUnit:"",
        Amount:""


      }

      )
  }
 
})
  }





  }


 render(){

  const{BuildingId,NoOfUnit,Amount,errors}=this.state
     return(


    
       <div>
         <div className="col-md-8 mt-4 mx-auto">
             <h1 >Add New bill </h1>
             </div>
       <form onSubmit={this.onSubmit}>
      
    <div class="container contact">
	<div class="row">
		<div class="col-md-3">
			<div class="contact-info">
      <h2>Water Consumption</h2>
				<img src="Home/waterbillicon.png"  width="200" height="200"alt="image"/>
			
			</div>
		</div>


       <div class="col-md-9">
       <div class="contact-form">



  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>BuildingId *</label>
    <input type="text" 
    className="form-control" 
    name="BuildingId"
    placeholder="Enter the buildingid"
    value={this.state.BuildingId}
    onChange={this.handleInputChange}/>
   
  </div>
  
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}> No of unites used *</label>
    <input type="text" 
    className="form-control" 
    name="NoOfUnit"
    placeholder="Enter the NoOfUnit"
    value={this.state.NoOfUnit}
    onChange={this.handleInputChange}/>
   
  </div>
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>Amount *</label>
    <input type="text" 
    className="form-control" 
    name="Amount"
    placeholder="Enter the Amount"
    value={this.state.Amount}
    onChange={this.handleInputChange}/>
   
  </div>
  
</div>

  <button type="submit" class="btn btn-success" style={{marginBottom:'15px'}} onClick={this.onSubmit}>
      <i className="far fa-check-square"></i>
      &nbsp;
      Save</button>


    {Object.keys(errors).map((key)=>{

      return <div style={{color: "white"}} key={key}>{errors[key]}</div>
    })}

  </div>
  </div>
 
  </div>
</form>
</div>


     )
 }
 


 }